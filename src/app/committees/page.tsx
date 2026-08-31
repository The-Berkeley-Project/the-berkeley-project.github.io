import React from "react";
import FramedCard from "@/components/FramedCard";
import LongCard from "@/components/longCard";

const getBorderColor = (bgColor: string): string => {
  const colorMap: Record<string, string> = {
    "#F3E8C8": "#D4B896",
    "#EDF8E2": "#B8D4A0",
    "#E9F2FA": "#A8C5E0",
    "#ECECEC": "#C0C0C0",
    "#FFF7DA": "#E6D4A0",
    "#E9E6FA": "#C4B8E0",
  };
  return colorMap[bgColor] || "#FFB6C1";
};

export default function CommitteesPage() {
  const execBoard = [
    { name: "Sophia Bazini-Barakat", role: "External President", image: "/core/sophia.jpg" },
    { name: "Jordan Cheng", role: "Internal President", image: "/core/jordan.jpg" },
    { name: "Kelly Cheng", role: "Outreach President", image: "/core/kelly.jpg" },
    { name: "Amber Cui", role: "Operations President", image: "/core/amber.jpg" },
    { name: "Arshul Garg", role: "Community President", image: "/core/arshul.jpg" },
  ];

  const committeesIntro = [
    {
      id: 1,
      imageUrl: "/core/Core.png",
      description:
        "Each semester, Berkeley Project Day is organized by our six core committees: external affairs, finance, marketing, site planning, volunteer, and web. Together, we make sure BP Day runs smoothly and successfully. Our committee members are dedicated, service-oriented individuals who each play a critical role in BP.",
    },
  ];

  const committees = [
    {
      id: 1,
      title: "External Affairs",
      description:
        "External Affairs organizes the logistics of Berkeley Project Day, helps fundraise, plans the BP Day before/after event, reaches out to campus organizations, and helps strategize the BP Day theme all while getting to interact a little with every other team. Our goal is to help coordinate the logistics of BP Day to bring together students and the community through volunteering.",
      color: "#F3E8C8",
      members: [
        { name: "Joon Chang", image: "/core/joon.jpg" },
        { name: "Vivianna Tang", image: "/core/vivianna.jpg" },
      ],
    },
    {
      id: 2,
      title: "Finance",
      description:
        "Finance team feeds and provides supplies for volunteers by fundraising, applying to grants, and reaching out to local corporations and other on-campus organizations. The team manages reimbursements and allocates funding to other committees to ensure all cash flows are accounted for. Our work ensures that volunteers are engaged and supported in the days leading up to and including Berkeley Project Day.",
      color: "#EDF8E2",
      members: [
        { name: "Chenfei Wang", image: "/core/chenfei.jpg" },
        { name: "Clarisse Nikaido", image: "/core/clarisse.jpg" },
      ],
    },
    {
      id: 3,
      title: "Marketing",
      description:
        "Marketing is in charge of all the promotional content and the branding for Berkeley Project. Marketing co-directors and committee members create all the flyers, bookmarks, social media events and promotional posts, to attract as many volunteers as possible. On BP Day, we run around to all the different sites to take cute, candid pictures of our volunteers and site leaders hard at work to capture the memories and impact they have on the Berkeley community.",
      color: "#E9F2FA",
      members: [
        { name: "Evie Nguyen", image: "/core/evie.jpg" },
        { name: "Caitlyn Lee", image: "/core/caitlyn.jpg" },
      ],
    },
    {
      id: 4,
      title: "Site Planning",
      description:
        "Site Planning is in charge of acquiring the site logistics for all BP Days. Using lists of past sites compiled from previous years and new sites from individual research and network, Site Planning co-directors and committee members have the task of contacting community organizers and city workers regarding projects for BP Days. We gather this information via phone calls and e-mails, and neatly record it in a Google document that is shared with all BP Core Members.",
      color: "#ECECEC",
      members: [
        { name: "Christina Lu", image: "/core/christina.jpg" },
        { name: "Rohan Sinha", image: "/core/rohan.jpg" },
      ],
    },
    {
      id: 5,
      title: "Volunteer",
      description:
        "Volunteer is responsible for creating the Site Leader/Volunteer application and selecting Site Leaders. From here, we plan and train Site Leaders to be effective points of contact and organizers of their respective volunteers. Ultimately, we are responsible for every Site Leader and Volunteer on BP Day (roughly 2,000 people) to ensure the event runs smoothly! :)",
      color: "#FFF7DA",
      members: [
        { name: "Nicole Li", image: "/core/nicole.jpg" },
        { name: "Marrissa Kwok", image: "/core/marrissa.jpg" },
      ],
    },
    {
      id: 6,
      title: "Web",
      description:
        "Web is responsible for updating and maintaining the berkeleyproject.org website. We communicate with other committees to provide important updates to the Berkeley Project community and help automate their tasks! This committee is a creative and diverse space open for students to take on individual projects (i.e. bot for tabling sign-ups) or expansion projects (i.e. redesign graphics, new subpages).",
      color: "#E9E6FA",
      members: [
        { name: "Tiger Shi", image: "/core/tiger.jpg" },
        { name: "Nick Choy", image: "/core/nick.jpg" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E3F9FF] to-white text-gray-900">
      <main className="mx-auto max-w-5xl px-6 pt-40 pb-16 ">

        {/* OUR EXEC BOARD */}
        <section className="text-center space-y-10 mb-16">
          <h1 className="text-3xl font-bold text-[#0875DF]">Our Exec Board</h1>
          <div className="flex flex-wrap justify-center gap-5">
            {execBoard.map((member) => (
              <div key={member.name} className="flex flex-col items-center gap-2">
                <FramedCard
                  frameUrl={undefined}
                  imageUrl={member.image}
                  bgColor="#E9F2FA"
                  borderColor={getBorderColor("#E9F2FA")}
                  title={member.role}
                  bottomText={member.name}
                  width="210px"
                  height="300px"
                />
              </div>
            ))}
          </div>
        </section>

        {/* COMMITTEES */}
        <section className="space-y-20 mt-16">
          <h2 className="text-3xl font-bold text-[#0875DF] text-center mb-10">
            Organizing Committees 
          </h2>
          {committeesIntro.map((card) => (
            <LongCard key={card.id} card={card} />
          ))}

          <div className="flex flex-col space-y-12">
            {committees.map((committee) => (
              <div
                key={committee.id}
                className="space-y-6 md:grid md:grid-cols-[minmax(0,45%)_minmax(0,55%)] md:items-center md:gap-10 md:space-y-0"
              >
                <div className="space-y-3 text-left md:space-y-4">
                  <h3 className="text-xl font-bold text-[#0875DF]">
                    {committee.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    {committee.description}
                  </p>
                </div>

                <div className="w-full">
                  <div className="flex flex-row items-center justify-start gap-5 max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center">
                    {committee.members.map((member) => (
                      <FramedCard
                        key={member.name}
                        frameUrl={undefined}
                        imageUrl={member.image}
                        bgColor={committee.color}
                        borderColor={getBorderColor(committee.color)}
                        bottomText={member.name}
                        width="220px"
                        height="320px"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
