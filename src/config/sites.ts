export const siteCategories = [
  "Parks and gardens",
  "Creeks and open space",
  "Schools and youth",
  "Community and housing",
] as const;

export type SiteCategory = (typeof siteCategories)[number];

export type Site = {
  name: string;
  category: SiteCategory;
  description: string;
  lat: number;
  lng: number;
};

export const meetingPoint = { name: "Lower Sproul Plaza", lat: 37.8692363, lng: -122.2587453 };

export const sites: Site[] = [
  { name: "Ohlone Park", category: "Parks and gardens", description: "A linear greenway that promotes recreation, community gathering, and access to nature along Berkeley’s historic Ohlone Greenway.", lat: 37.8730307, lng: -122.2798289 },
  { name: "Aquatic Park", category: "Parks and gardens", description: "A waterfront park dedicated to outdoor recreation, environmental education, and habitat conservation.", lat: 37.8648305, lng: -122.3018799 },
  { name: "Aquatic Park Planting", category: "Parks and gardens", description: "A volunteer effort restoring native vegetation and improving habitat within Aquatic Park.", lat: 37.8648305, lng: -122.3018799 },
  { name: "Ohlone Community Garden", category: "Parks and gardens", description: "A shared gardening space that promotes sustainable food growing and community engagement.", lat: 37.8727277, lng: -122.2777356 },
  { name: "Karl Linn Community Garden", category: "Parks and gardens", description: "A community built garden emphasizing ecological design, education, and collective stewardship.", lat: 37.8782546, lng: -122.2885954 },
  { name: "Ohlone Dog Park", category: "Parks and gardens", description: "A recreational space for safe, off leash exercise and community among dog owners.", lat: 37.8734252, lng: -122.2742443 },
  { name: "South Spinnaker Native Garden", category: "Parks and gardens", description: "A community driven native plant garden supporting pollinators and local biodiversity.", lat: 37.8688146, lng: -122.3189612 },
  { name: "Anchor Planter", category: "Parks and gardens", description: "A neighborhood greening project enhancing streetscapes through community maintained plantings.", lat: 37.8654002, lng: -122.3111435 },
  { name: "George Florence Park", category: "Parks and gardens", description: "A local park promoting neighborhood recreation, green space access, and community well being.", lat: 37.8667977, lng: -122.2924218 },
  { name: "Cesar Chavez Park Pollinator Gardens", category: "Parks and gardens", description: "Gardens dedicated to supporting pollinators and increasing urban biodiversity.", lat: 37.8720756, lng: -122.3189663 },
  { name: "Northside Community Garden", category: "Parks and gardens", description: "A community space promoting urban agriculture, sustainability, and local food access.", lat: 37.8793329, lng: -122.28926 },

  { name: "Strawberry Creek", category: "Creeks and open space", description: "An urban creek ecosystem supporting biodiversity and environmental education in Berkeley.", lat: 37.8661463, lng: -122.2860076 },
  { name: "Codornices Creek at University Village", category: "Creeks and open space", description: "Creek restoration along Codornices Creek at University Village.", lat: 37.8821837, lng: -122.3026462 },
  { name: "Claremont Conservancy", category: "Creeks and open space", description: "An organization focused on wildfire prevention, ecological restoration, and land stewardship.", lat: 37.8708223, lng: -122.2248102 },
  { name: "Derby Canyon", category: "Creeks and open space", description: "A natural area focused on conservation, habitat restoration, and outdoor education.", lat: 37.8664739, lng: -122.2465538 },
  { name: "Hillside Natural Area", category: "Creeks and open space", description: "A protected open space preserving native habitats and offering outdoor recreation.", lat: 37.927444, lng: -122.3088521 },
  { name: "Tremont and Woolsey St. Bioswale", category: "Creeks and open space", description: "A stormwater management project improving water quality and urban sustainability.", lat: 37.8519069, lng: -122.268315 },
  { name: "Rose and Hopkins St. Bioswale", category: "Creeks and open space", description: "A green infrastructure site designed to reduce runoff and support ecological health.", lat: 37.876808, lng: -122.2914521 },
  { name: "Gateway Emergency Preparedness Exhibit Center", category: "Creeks and open space", description: "A site showcasing resilient landscaping and community disaster preparedness.", lat: 37.8500527, lng: -122.2261261 },

  { name: "Child Education Center", category: "Schools and youth", description: "A program supporting early childhood development through play based, community focused learning.", lat: 37.8682642, lng: -122.2885473 },
  { name: "Malcolm X Elementary School Garden", category: "Schools and youth", description: "An educational garden integrating hands on learning, nutrition, and environmental awareness.", lat: 37.8525342, lng: -122.2736189 },
  { name: "Edible Schoolyard", category: "Schools and youth", description: "A nationally recognized program using gardens and kitchens to teach sustainability and nutrition.", lat: 37.8820087, lng: -122.2764588 },
  { name: "The Model School", category: "Schools and youth", description: "An alternative education program emphasizing experiential, student centered learning.", lat: 37.8534397, lng: -122.2606419 },
  { name: "St. Johns Childcare", category: "Schools and youth", description: "A childcare program focused on early learning, safety, and support for families.", lat: 37.8608534, lng: -122.2524409 },
  { name: "Youth Spirit Artworks", category: "Schools and youth", description: "A nonprofit providing housing, job training, and art based support for youth experiencing homelessness.", lat: 37.8484327, lng: -122.2723229 },
  { name: "Berkeley Adult School", category: "Schools and youth", description: "Lifelong learning, workforce development, and education access for adults.", lat: 37.8592735, lng: -122.2698229 },

  { name: "Chaparral House", category: "Community and housing", description: "A senior living community providing residential care and support services.", lat: 37.8675498, lng: -122.2856804 },
  { name: "BORP Adaptive Sports and Recreation", category: "Community and housing", description: "A program expanding access to outdoor recreation for people with disabilities.", lat: 37.8648305, lng: -122.3018799 },
  { name: "Ursula Sherman Village", category: "Community and housing", description: "Affordable housing supporting low income seniors and community stability.", lat: 37.8810382, lng: -122.3049358 },
  { name: "Waterside Workshops", category: "Community and housing", description: "A nonprofit teaching hands on skills in boating, woodworking, and environmental stewardship.", lat: 37.8641668, lng: -122.3014858 },
  { name: "Dorothy Day House", category: "Community and housing", description: "Shelter and support for people experiencing homelessness.", lat: 37.8701435, lng: -122.2718577 },
  { name: "Schoolhouse Creek Common", category: "Community and housing", description: "A cooperative housing community centered on sustainability and shared resources.", lat: 37.8739087, lng: -122.2900505 },
  { name: "La Peña Cultural Center", category: "Community and housing", description: "A community arts organization promoting social justice, cultural expression, and Latin American arts.", lat: 37.8528337, lng: -122.2658798 },
  { name: "YWCA Berkeley/Oakland", category: "Community and housing", description: "An organization advancing racial justice and empowering women through services and advocacy.", lat: 37.8688964, lng: -122.2567367 },
  { name: "Halcyon Commons", category: "Community and housing", description: "A cooperative living community centered on shared resources.", lat: 37.8540734, lng: -122.261002 },
  { name: "Berkeley Design Center", category: "Community and housing", description: "A creative hub supporting architecture, design, and interdisciplinary collaboration.", lat: 37.8509633, lng: -122.2699525 },
  { name: "St. Mark’s Episcopal Church", category: "Community and housing", description: "A church focused on worship, community outreach, and social justice.", lat: 37.8679588, lng: -122.2632085 },
  { name: "The Wheelhouse", category: "Community and housing", description: "A resource center promoting independence, accessibility, and advocacy for people with disabilities.", lat: 37.813295, lng: -122.2762439 },
  { name: "Berkeley Chinese Community Church", category: "Community and housing", description: "A faith based organization providing spiritual support and community services.", lat: 37.8686759, lng: -122.2833901 },
  { name: "Berkeley NEED", category: "Community and housing", description: "A volunteer run organization providing emergency food and support to low income Berkeley residents.", lat: 37.8526179, lng: -122.26643 },
  { name: "Berkeley Masjid", category: "Community and housing", description: "A mosque serving as a center for worship, community gathering, and cultural connection.", lat: 37.8619326, lng: -122.2527327 },
  { name: "Elmwood Merchant Association", category: "Community and housing", description: "A business association supporting local shops and neighborhood economic vitality.", lat: 37.8587427, lng: -122.2533562 },
];
