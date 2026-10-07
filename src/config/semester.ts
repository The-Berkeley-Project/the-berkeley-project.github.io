/**
 * Semester config. Swap this file each term.
 *
 * Core BP identity (navy, gold, type, voice) lives in `brand.ts` and globals.css.
 * The theme only appears in three places: the hero mascot, the BP Day date and
 * countdown, and the "how it works" step numbers.
 */
const weekday = "Saturday";
const shortDate = "November 14";

export const semester = {
  id: "fa26",
  label: "Fall 2026",

  theme: {
    name: "Kung Fu Panda",
    /** Must pass 3:1 contrast on navy and on white; it is used for large text only. */
    accent: "#F26B3A",
    mascot: "/KungFuPanda.png",
    mascotAlt: "Kung Fu Panda, the Fall 2026 Berkeley Project Day theme",
  },

  event: {
    name: "Berkeley Project Day",
    dateISO: "2026-11-14T08:00:00-08:00",
    weekday,
    shortDate,
    weekdayDate: `${weekday}, ${shortDate}`,
    deadline: "Friday, October 9",
    shortDeadline: "October 9",
    meetingPlace: "Lower Sproul Plaza",
    meetingTime: "8 AM",
    endTime: "4 PM",
  },

  links: {
    volunteerApply:
      "https://docs.google.com/forms/d/e/1FAIpQLSc2wcMlG-AFWcFTg2hshBfXUDiRKN1-2DqFvr_hNN5e-kiNFw/viewform",
    contact: "https://3smvlc5hjy8.typeform.com/to/LHxG3Orl",
    donate: "http://www.asuc.org/donate",
    impact: "/impact",
  },

  committeeApplications: {
    open: false,
    link: "",
  },
  impact: {
    volunteersPerDay: "2,000",
    hoursPerYear: "12,000+",
    laborSaved: "$400,000",
    organizations: "100+",
    semesters: "36",
  },

  heroPhoto: "/photos/fa25/img1.jpeg",
  heroBackPhoto: "/photos/sp25/sp25_2.jpg",
  aboutPhoto: "/bpwheelbarrow.JPEG",

  photos: [
    { src: "/photos/fa25/img11.JPEG", alt: "The Cal band and cheer team performing on the Sproul Hall steps at the opening ceremony" },
    { src: "/photos/sp25/sp25_2.jpg", alt: "A volunteer team in matching shirts holding orange trash bags and litter grabbers" },
    { src: "/photos/fa24/fa24_10.jpeg", alt: "Two volunteers smiling and holding up cups of noodles at morning check in" },
    { src: "/photos/sp24/sp24_12.jpg", alt: "A site leader holding up a balloon sign that says need help in a crowd at check in" },
    { src: "/photos/fa25/img12.JPEG", alt: "Two volunteers posing in an I love BP Berkeley Project Day photo frame" },
  ],

  schedule: [
    { time: "8:00 AM", description: "Meet your site leader at Lower Sproul Plaza" },
    { time: "8:00 to 8:30 AM", description: "Check in and breakfast" },
    { time: "8:30 to 9:00 AM", description: "Opening ceremony" },
    { time: "9:00 AM", description: "Head to your work site" },
    { time: "9:30 to 10:00 AM", description: "Site orientation and icebreakers" },
    { time: "10:00 AM", description: "Volunteering begins" },
    { time: "By 4:00 PM", description: "Work wraps up" },
  ],
} as const;

export type SemesterConfig = typeof semester;
