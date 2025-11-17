import React from "react";
import FramedCard from "@/components/FramedCard";
import CardFan from "@/components/CardFan";
import LongCard from "@/components/longCard";

export default function CommitteesPage() {


  // Exec
  const execBoard = [
    {
      title: "Operations president",
      imageUrl: "Calvin.JPG",
      bgColor: "#E9F2FA",
      bottomText: "Calvin Kang (he/him)",
    },
    {
      title: "Internal President",
      imageUrl: "Jennie.JPG",
      bgColor: "#E9F2FA",
      bottomText: "Jennie Son (she/her)",
    },
    {
      title: "External President",
      imageUrl: "/Javan.jpg",
      bgColor: "#E9F2FA",
      bottomText: "Javan leong (he/him)",
    },
    {
      title: "Outreach President",
      imageUrl: "/Raveen.jpg",
      bgColor: "#E9F2FA",
      bottomText: "Raveen Noory (they/them)",
    },
    {
      title: "Community President",
      imageUrl: "/Prongha.png",
      bgColor: "#E9F2FA",
      bottomText: "Prongha Taluker (he/him)",
    },
  ];

  // long card intro
  const committeesIntro = [
    {
      id: 1,
      imageUrl: "/Core.png",
      description:
        "Each semester, Berkeley Project Day is organized by our six core committees: external affairs, finance, marketing, site planning, volunteer, and web. Together, we make sure BP Day runs smoothly and successfully. Our committee members are dedicated, service-oriented individuals who each play a critical role in BP.",
    },
  ];

  // committees
  const committees = [
    {
      id: 1,
      title: "External Affairs",
      description:
        "External Affairs organizes the logistics of Berkeley Project Day, helps fundraise, plans the BP Day before/after event, reaches out to campus organizations, and helps strategize the BP Day theme all while getting to interact a little with every other team. Our goal is to help coordinate the logistics of BP Day to bring together students and the community through volunteering.",
      color: "#F3E8C8",
      members: [
        { name: "Anna Cheng (she/her)", image: "/anna.png" },
        { name: "Jimmy Zhong (he/him)", image: "/jimmy.jpeg" },
      ],
    },
    {
      id: 2,
      title: "Finance",
      description:
        "Finance team feeds and provides supplies for volunteers by fundraising, applying to grants, and reaching out to local corporations and other on-campus organizations. The team manages reimbursements and allocates funding to other committees to ensure all cash flows are accounted for. Our work ensures that volunteers are engaged and supported in the days leading up to and including Berkeley Project Day.",
      color: "#EDF8E2",
      members: [
        { name: "Abhinav Vanteru Reddy (he/him)", image: "/abhinav.png" },
        { name: "Cole Yap (he/him)", image: "/Cole.jpeg" },
        { name: "Amber Cui (she/her)", image: "/amber.JPG" },
      ],
    },
    {
      id: 3,
      title: "Marketing",
      description:
        "Marketing is in charge of all the promotional content and the branding for Berkeley Project. Marketing co-directors and committee members create all the flyers, bookmarks, social media events and promotional posts, to attract as many volunteers as possible. On BP Day, we run around to all the different sites to take cute, candid pictures of our volunteers and site leaders hard at work to capture the memories and impact they have on the Berkeley community.",
      color: "#E9F2FA",
      members: [
        { name: "Evelyn Kim (she/her)", image: "/evelyn.jpg" },
        { name: "Kelly Cheng (she/her)", image: "/kelly.JPG" },
        { name: "Victoria Hong (she/her)", image: "/victoria.JPG" },
      ],
    },
    {
      id: 4,
      title: "Site Planning",
      description:
        "Site Planning is in charge of acquiring the site logistics for all BP Days. Using lists of past sites compiled from previous years and new sites from individual research and network, Site Planning co-directors and committee members have the task of contacting community organizers and city workers regarding projects for BP Days. We gather this information via phone calls and e-mails, and neatly record it in a Google document that is shared with all BP Core Members.",
      color: "#ECECEC",
      members: [
        { name: "Jordan Cheng (she/her)", image: "/Jordan.png" },
        { name: "Sophia Bazini-Barakat (she/her)", image: "/sophia.png" },
      ],
    },
    {
      id: 5,
      title: "Volunteer",
      description:
        "Volunteer is responsible for creating the Site Leader/Volunteer application and selecting Site Leaders. From here, we plan and train Site Leaders to be effective points of contact and organizers of their respective volunteers. Ultimately, we are responsible for every Site Leader and Volunteer on BP Day (roughly 2,000 people) to ensure the event runs smoothly! :)",
      color: "#FFF7DA",
      members: [
        { name: "Arshul Garg (he/him)", image: "/arshul.jpg" },
        { name: "Catalina Quach (she/her)", image: "/cat.jpg" },
      ],
    },
    {
      id: 6,
      title: "Web",
      description:
        "Web is responsible for updating and maintaining the berkeleyproject.org website and sorting volunteer/site leader applications. We communicate with other committees to provide important updates to the Berkeley Project community! This committee is a creative and diverse space open for students to take on individual projects (i.e. bot for tabling sign-ups) or expansion projects (i.e. redesign graphics, new subpages).",
      color: "#E9E6FA",
      members: [
        { name: "Mindy Phan (she/her)", image: "/mindy.png" },
        { name: "Devika Sharma (they/them)", image: "/devika.png" },
      ],
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E3F9FF] to-white text-gray-900">
      <main className="mx-auto max-w-5xl px-6 pt-40 pb-16 space-y-24">
        {/*OUR EXEC BOARD*/}
        <section className="text-center space-y-10">
          <h1 className="text-3xl font-bold text-[#0875DF]">Our Exec Board</h1>
          <div className="flex flex-wrap justify-center gap-8">
            {execBoard.map((member, i) => (
              <FramedCard
                key={i}
                frameUrl="/Frame1.png"
                imageUrl={member.imageUrl}
                bgColor={member.bgColor}
                title={member.title}
                bottomText={member.bottomText}
                width="240px"
                height="340px"
              />
            ))}
          </div>
        </section>

        {/* COMMITTEES  */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold text-[#0875DF] text-center">
            Organizing Committees
          </h2>
          {committeesIntro.map((card) => (
            <LongCard key={card.id} card={card} />
          ))}

          <div className="flex flex-col space-y-12">
            {committees.map((committee) => {
              const memberCount = committee.members.length;
              const fanCount = Math.min(memberCount, 3) as 1 | 2 | 3;
              const roleTitle = memberCount > 1 ? "Co-Director" : "Director";
              const cards = committee.members.slice(0, fanCount).map((member) => ({
                frameUrl: "/Frame1.png",
                imageUrl: member.image,
                bgColor: committee.color,
                title: `${committee.title} ${roleTitle}`,
                bottomText: member.name,
                width: "220px",
                height: "320px",
              }));

              return (
                <div
                  key={committee.id}
                  className="space-y-6 md:grid md:grid-cols-[minmax(0,45%)_minmax(0,55%)] md:items-center md:gap-10 md:space-y-0"
                >
                  {/* Left Text Area */}
                  <div className="space-y-3 text-left md:space-y-4">
                    <h3 className="text-xl font-bold text-[#0875DF]">
                      {committee.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-gray-700">
                      {committee.description}
                    </p>
                  </div>

                  {/* Right Cards Area */}
                  <div className="md:hidden">
                    <div className="flex flex-col items-center gap-4">
                      {committee.members.map((member) => (
                        <FramedCard
                          key={member.name}
                          frameUrl="/Frame1.png"
                          imageUrl={member.image}
                          bgColor={committee.color}
                          title={`${committee.title} ${roleTitle}`}
                          bottomText={member.name}
                          width="230px"
                          height="320px"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="hidden w-full justify-center md:flex md:justify-end">
                    <CardFan
                      count={fanCount}
                      cards={cards}
                      className="w-full max-w-[420px] md:max-w-[460px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>

  );
}
