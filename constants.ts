type Department = {
  id: number;
  title: string;
  description: string;
  imgSrc?: string;
};

type Departments = Department[];

export const departmentList: Departments = [
  {
    id: 1,
    title: "Academic and Unity Exco",
    description:
      "Focuses on academic support programs and initiatives that foster unity among students.",
    imgSrc: "/image/team/exco/Exco_Akademik&Perpaduan.png",
  },
  {
    id: 2,
    title: "Finance and Welfare Exco",
    description:
      "Manages financial resources, fundraising, and welfare programs to support students in need.",
    imgSrc: "/image/team/exco/Exco_Dana&Kebajikan.png",
  },
  {
    id: 3,
    title: "Media and Publicity Exco",
    description:
      "Handles the promotion of the club’s activities through social media, newsletters, and other communication channels.",
    imgSrc: "/image/team/exco/Exco_Media&Publisiti.png",
  },
  {
    id: 4,
    title: "Sports and Recreation Exco",
    description:
      "Promotes an active lifestyle by organizing sports tournaments, fitness programs, and recreational activities.",
    imgSrc: "/image/team/exco/Exco_Sukan&Rekreasi.png",
  },
  {
    id: 5,
    title: "Art and Culture Exco",
    description:
      "Organizes cultural and artistic events to promote creativity and preserve traditional heritage.",
    imgSrc: "/image/team/exco/Exco_Kesenian&Kebudayaan.png",
  },
  {
    id: 6,
    title: "External Relations Exco",
    description:
      "Strengthens connections with external organizations, industries, and other institutions through networking and collaborations.",
    imgSrc: "/image/team/exco/Exco_Perhubungan_Luar.png",
  },
];

type BioAutography = {
  id: number;
  imgSrc: string;
  name: string;
  position: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  autobiography: string;
};

type BioAutographies = BioAutography[];

export const BioAutographyList: BioAutographies = [
  {
    id: 1,
    imgSrc: "/image/team/mt/MT_YDP.png",
    name: "Alma' Aizat",
    position: "President",
    // facebook:"#",
    instagram: "https://www.instagram.com/almaizt?igsh=MXh3b3dweXJhbng3NQ==",
    // twitter: "#",
    // linkedin:
    //   "#",
    autobiography:
      "As a proud Sarawakian, serving my nation will be one of my greatest honors. Hi, I'm Awangku Alma'Aizat bin Awgku Mohamad Zainie, a second-year student in the Faculty of Built Environment. Taking on the role of president in the current tenure is both a privilege and a significant responsibility. My duty extends beyond representing Sarawakians on the main campus in KL—I am also committed to advocating for and uniting Sarawakians across other campuses. Through this role, I aim to strengthen our community, foster collaboration, and ensure that our voices are heard.",
  },
  {
    id: 2,
    imgSrc: "/image/team/mt/MT_TYDP.png",
    name: "Ilman",
    position: "Vice President",
    // facebook:"#",
    // instagram:
    //   "https://www.instagram.com/mmikeohmm?igsh=MXVrYm94NHB0b2V6eA%3D%3D&utm_source=qr",
    // twitter:
    //   "https://x.com/mikearyan28/status/1635126129496563714?s=46&t=KK876OyBean8zVewoHDWYg",
    // linkedin:
    //   "https://www.linkedin.com/in/mike-aryan-808b30232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    autobiography: "-",
  },
  {
    id: 3,
    imgSrc: "/image/team/mt/MT_Setiausaha.png",
    name: "Ailenna Thipong",
    position: "Secretary",
    // facebook: "#",
    // instagram: "#",
    // twitter: "#",
    linkedin: "https://my.linkedin.com/in/ailenna-thipong-anak-laga-927485260",
    autobiography:
      "I am Ailenna Thipong anak Laga, a Year 2 student majoring in Bachelor of Sport Management at Universiti Malaya. I served  as the Secretary of PMSUM for 2024/2025.",
  },
  {
    id: 4,
    imgSrc: "/image/team/mt/MT_TS_Chairul.png",
    name: "Chairul Azlan",
    position: "Vice Secretary",
    // facebook:"#",
    // instagram:
    //   "https://www.instagram.com/elleyssa_03?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    // twitter: "#",
    // linkedin: "#",
    autobiography: "-",
  },
  {
    id: 5,
    imgSrc: "/image/team/mt/MT_Bendahari_Josh.png",
    name: "Josh Tiong Yong Yu",
    position: "Treasurer",
    // facebook:"#",
    instagram: "https://www.instagram.com/itsjoshtiong/",
    // twitter: "#",
    // linkedin: "#",
    autobiography: "-",
  },
  {
    id: 6,
    imgSrc: "/image/team/mt/MT_TB_Nur_Fatin.png",
    name: "Nur Fatin Fatihah",
    position: "Vice Treasurer",
    // facebook:"#",
    instagram: "https://www.instagram.com/fxtynf_?igsh=cmppZHdyY2ZuZGY4",
    // twitter: "#",
    // linkedin: "#",
    autobiography:
      "Hii everyone! I’m Nur Fatin Fatihah binti Halik, a first-year student at the Academy of Malay Studies. I’m currently serving as the Vice Treasurer of PMSUM 24/25. Excited to contribute and grow in this journey—let’s make an impact together.",
  },
];

export const OBJECTIVES = [
  {
    title: "To Foster Unity and Friendship",
    elaboration:
      "To cultivate a strong sense of unity, belonging, and mutual support among Sarawakian students through various social, cultural, and academic activities.",
    icon_path: "/icon/icon_teamwork.svg",
    icon_alt: "Teamwork",
  },
  {
    title: "To Promote Sarawakian Culture",
    elaboration:
      "To preserve and celebrate the unique cultural heritage of Sarawak by organizing events, exhibitions, and collaborations that showcase the state's traditions, customs, and languages. ",
    icon_path: "/icon/icon_loudspeaker.svg",
    icon_alt: "Loudspeaker",
  },
  {
    title: "To Provide Student Support and Welfare",
    elaboration:
      "To offer comprehensive support in areas such as academics, emotional well-being, and social integration, ensuring the holistic development and success of Sarawakian students at Universiti Malaya.",
    icon_path: "/icon/icon_student.svg",
    icon_alt: "Student",
  },
  {
    title: "To Strengthen Ties with Sarawak",
    elaboration:
      "To maintain strong connections with Sarawak’s state authorities, educational bodies, and local communities, creating networking and professional opportunities for students.",
    icon_path: "/icon/icon_politics.svg",
    icon_alt: "Government",
  },
  {
    title: "To Encourage Leadership and Personal Growth",
    elaboration:
      "To nurture leadership skills and encourage personal development among members by providing platforms for active participation in events, leadership roles, and community service initiatives",
    icon_path: "/icon/icon_leadership.svg",
    icon_alt: "Leader",
  },
];

export const OBJECTIVES_TEXT =
  "Persatuan Mahasiswa Sarawak is an association of students from Sarawak in Universiti Malaya.";

export const LEARN_MORE_SECTION = [
  {
    name: "Main Page",
    link: "/",
  },
  {
    name: "Our Activities",
    link: "/activities",
  },
  {
    name: "Current Team",
    link: "/team",
  },
  {
    name: "Website Special Acknowledgements",
    link: "/acknowledgements",
  },
];
