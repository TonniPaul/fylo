interface TestimonyData {
  id: string;
  testimony: string;
  profilePhoto: string;
  username: string;
  profession: string;
}

export const testimonyData: TestimonyData[] = [
  {
    id: crypto.randomUUID(),
    testimony:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    profilePhoto: "/assets/profile-1.jpg",
    username: "Satish Patel",
    profession: "Founder & CEO, Huddle",
  },
  {
    id: crypto.randomUUID(),
    testimony:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    profilePhoto: "/assets/profile-2.jpg",
    username: "Bruce McKenzie",
    profession: "Founder & CEO, Huddle",
  },
  {
    id: crypto.randomUUID(),
    testimony:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    profilePhoto: "/assets/profile-3.jpg",
    username: "Iva Boyd",
    profession: "Founder & CEO, Huddle",
  },
];
