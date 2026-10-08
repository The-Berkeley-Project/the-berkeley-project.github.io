"use client";

import "leaflet/dist/leaflet.css";
import { Tape } from "@/components/Scrapbook";
import { meetingPoint, siteCategories, sites, type SiteCategory } from "@/config/sites";
import type { Map as LeafletMap, Marker } from "leaflet";
import { useEffect, useRef, useState } from "react";

type Filter = SiteCategory | "All";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export function SiteMap() {
  const mapEl = useRef<HTMLDivElement>(null);
  const listEl = useRef<HTMLUListElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Map<string, Marker>>(new Map());
  const [active, setActive] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("All");

  const visible = filter === "All" ? sites : sites.filter((s) => s.category === filter);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !mapEl.current) return;

      const map = L.map(mapEl.current, { scrollWheelZoom: false, maxZoom: 16 });
      mapRef.current = map;

      const esri = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas";
      L.tileLayer(`${esri}/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}`, {
        attribution: "Tiles &copy; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",
        maxZoom: 16,
      }).addTo(map);
      L.tileLayer(`${esri}/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}`, {
        maxZoom: 16,
      }).addTo(map);

      const pin = L.divIcon({
        className: "",
        html: '<span class="bp-pin"></span>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        popupAnchor: [0, -10],
      });

      for (const site of sites) {
        const marker = L.marker([site.lat, site.lng], { icon: pin, title: site.name, riseOnHover: true })
          .bindPopup(
            `<strong>${escapeHtml(site.name)}</strong><br/><span>${escapeHtml(site.category)}</span>`,
          )
          .on("click", () => setActive(site.name))
          .addTo(map);
        markersRef.current.set(site.name, marker);
      }

      L.marker([meetingPoint.lat, meetingPoint.lng], {
        icon: L.divIcon({
          className: "",
          html: '<span class="bp-pin bp-pin--meet"></span>',
          iconSize: [22, 22],
          iconAnchor: [11, 11],
          popupAnchor: [0, -12],
        }),
        title: `${meetingPoint.name}, where every team meets`,
        zIndexOffset: 1000,
      })
        .bindPopup(`<strong>${meetingPoint.name}</strong><br/><span>Where every team meets at 8 AM</span>`)
        .addTo(map);

      map.fitBounds(
        L.latLngBounds(sites.map((s) => [s.lat, s.lng] as [number, number])),
        { padding: [24, 24] },
      );
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const shown: [number, number][] = [];
    for (const site of sites) {
      const marker = markersRef.current.get(site.name);
      if (!marker) continue;
      const show = filter === "All" || site.category === filter;
      if (show) shown.push([site.lat, site.lng]);
      if (show && !map.hasLayer(marker)) marker.addTo(map);
      if (!show && map.hasLayer(marker)) marker.remove();
    }
    map.closePopup();
    if (shown.length) map.flyToBounds(shown, { padding: [32, 32], duration: 0.6 });
  }, [filter]);

  useEffect(() => {
    markersRef.current.forEach((marker, name) => {
      marker.getElement()?.querySelector(".bp-pin")?.toggleAttribute("data-active", name === active);
      marker.setZIndexOffset(name === active ? 500 : 0);
    });

    const list = listEl.current;
    const item = active ? list?.querySelector<HTMLElement>(`[data-site="${CSS.escape(active)}"]`) : null;
    if (!list || !item) return;
    const horizontal = list.scrollWidth > list.clientWidth;
    list.scrollTo({
      left: horizontal ? item.offsetLeft : list.scrollLeft,
      top: horizontal ? list.scrollTop : item.offsetTop - 8,
      behavior: "smooth",
    });
  }, [active]);

  const focusSite = (name: string) => {
    setActive(name);
    const marker = markersRef.current.get(name);
    const map = mapRef.current;
    if (!marker || !map) return;
    map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 15), { duration: 0.6 });
    marker.openPopup();
  };

  const filters: Filter[] = ["All", ...siteCategories];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter sites by type">
        {filters.map((f) => {
          const count = f === "All" ? sites.length : sites.filter((s) => s.category === f).length;
          const selected = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setFilter(f);
                setActive(null);
              }}
              className={`min-h-11 rounded-full px-4 text-sm font-semibold transition-colors duration-300 ease-bp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy focus-visible:ring-offset-2 ${
                selected ? "bg-bp-navy text-white" : "bg-bp-cream text-bp-ink hover:bg-bp-line"
              }`}
            >
              {f} <span className={selected ? "text-white/70" : "text-bp-muted"}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[minmax(0,1fr)_340px] md:gap-6">
        <div className="relative">
          <Tape className="-top-3 left-1/2 -ml-12 -rotate-2" />
          <div
            ref={mapEl}
            role="region"
            aria-label="Map of Berkeley Project volunteer sites"
            className="isolate h-[360px] overflow-hidden rounded-2xl bg-[#e5e5e3] photo-frame md:h-[560px]"
          />
        </div>

        <ul
          ref={listEl}
          className="relative flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:h-[560px] md:snap-none md:flex-col md:overflow-y-auto md:overflow-x-visible md:pb-0 md:pr-2"
        >
          {visible.map((site) => {
            const isActive = site.name === active;
            return (
              <li key={site.name} data-site={site.name} className="w-72 shrink-0 snap-start md:w-auto">
                <button
                  type="button"
                  onClick={() => focusSite(site.name)}
                  aria-pressed={isActive}
                  className={`h-full w-full rounded-2xl border p-4 text-left transition-colors duration-300 ease-bp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy ${
                    isActive ? "border-bp-navy bg-bp-cream" : "border-bp-line bg-bp-paper hover:bg-bp-cream"
                  }`}
                >
                  <span className="block text-base font-semibold text-bp-ink">{site.name}</span>
                  <span className="mt-1 block text-xs font-semibold text-bp-navy">{site.category}</span>
                  <span className="mt-2 line-clamp-2 block text-sm text-bp-muted">{site.description}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-4 flex items-center gap-2 text-sm text-bp-muted">
        <span className="bp-pin bp-pin--meet bp-pin--legend" aria-hidden />
        Every team meets at {meetingPoint.name} before heading to its site.
      </p>
    </div>
  );
}
