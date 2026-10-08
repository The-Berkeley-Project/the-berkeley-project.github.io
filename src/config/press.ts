/**
 * Press coverage and partner quotes. Quotes must be copied word for word from the
 * linked source. Newest articles first.
 */
export type PressItem = {
  outlet: string;
  title: string;
  date: string;
  url: string;
  excerpt: string;
};

export const press: PressItem[] = [
  {
    outlet: "The Daily Californian",
    title: "2025 welcome from UC Berkeley Chancellor Rich Lyons and Berkeley Mayor Adena Ishii",
    date: "2025",
    url: "https://www.dailycal.org/opinion/op-eds/2025-welcome-from-uc-berkeley-chancellor-rich-lyons-berkeley-mayor-adena-ishii/article_fce4397c-ede8-4c7f-88a9-3c7d31cef9d8.html",
    excerpt:
      "The student-run Berkeley Project Day sends more than 2,000 volunteers to work alongside community members in beautifying Berkeley.",
  },
  {
    outlet: "Berkeley News",
    title: "Going out, doing good: Berkeley Project Day 2014 in photos",
    date: "November 2014",
    url: "https://news.berkeley.edu/2014/11/14/going-out-doing-good-berkeley-project-day-2014-in-photos/",
    excerpt:
      "Berkeley Project Day 2014 sent more than 1,400 UC Berkeley students out into the community to get things done…",
  },
  {
    outlet: "Berkeley News",
    title: "‘Berkeley Project Day’ brings out volunteer spirit",
    date: "October 2013",
    url: "https://news.berkeley.edu/2013/10/28/berkeley-project/",
    excerpt:
      "Trowels and sponges, rakes, trash bags and goodwill were in abundance Saturday as some 1,600 volunteers fanned out across Berkeley and beyond.",
  },
  {
    outlet: "Berkeleyside",
    title: "UC Berkeley students take part in community work day",
    date: "November 2012",
    url: "https://www.berkeleyside.org/2012/11/05/hundreds-of-cal-students-roll-up-sleeves-work-in-community",
    excerpt:
      "…an estimated 1,800 students took part, painting and decorating, weeding, planting, cleaning and prettifying, at about 80 different indoor and outdoor sites across the city.",
  },
  {
    outlet: "Berkeley News",
    title: "Berkeley Project Day volunteer army to hit streets Saturday",
    date: "October 2011",
    url: "https://news.berkeley.edu/2011/10/13/volunteer-army-to-hit-streets-for-berkeley-project-day/",
    excerpt:
      "…participants can get their hands dirty, forget the textbooks for a few hours and give back to the community.",
  },
];

export const partnerQuotes = [
  {
    quote:
      "Another very successful day, clearing out overgrown and crowded plants around the olive trees. We collected 39 bags of green debris!",
    org: "North Hills Community Association",
    context: "Gateway Garden, November 2024",
    url: "https://northhillscommunity.org/successful-uc-berkeley-project-day-gateway-garden-nov-22024/",
  },
  {
    quote:
      "…the Ursula Sherman Village (USV) shelter came alive with laughter, sunshine, and the hum of teamwork.",
    org: "Building Opportunities for Self-Sufficiency (BOSS)",
    context: "Gardening Day at Ursula Sherman Village, April 2025",
    url: "https://www.self-sufficiency.org/post/gardening-day-at-ursula-sherman-village-more-than-just-planting",
  },
] as const;

/** Public source for the volunteer, hours, and labor saved figures. */
export const impactSource = {
  label: "2025 welcome letter from Chancellor Rich Lyons and Mayor Adena Ishii",
  outlet: "The Daily Californian",
  url: press[0].url,
};
