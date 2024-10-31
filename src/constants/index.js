import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  skilledcheck,
  smartteller,
  payzita,
  lasric,
  Runner,
  enyata_1,
  enyata_2,
  ingessive_4_good,
  ingressive,
  Nse,
  WinForSch,
} from "../assets";



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },


];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Payzita Inc",
    link:'https://payzitaweb.vercel.app/',
    icon: payzita,
    iconBg: "#000",
    date: "November 2023 - July 2024",
    task:"Led the development of a mobile app MVP and landing page using React Native , Nextjs 14 , and Tailwindcss which was pivotal for securing early-stage funding",
    Outcome: "The MVP contributed to Payzita's selection as a finalist at the Lagos Startup Expo 2024, helping position the company for future investment",
  },
  {
    title: "Frontend Developer",
    company_name: "Smartteller Tech",
    link:'https://smartteller.net',
    icon: smartteller,
    iconBg: "#000",
    date: "February 2023 - November 2023",
    task:"Converted Figma designs into fully functional, responsive web components within tight deadlines, integrating ReactJS with Smartteller's backend APIs.",
    Outcome: "Delivered a seamless user experience for cooperative owners, meeting crucial project timelines for a successful launch",
  },
  {
    title: "Frontend Engineer",
    company_name: "SkilledCheck Ltd",
    icon: skilledcheck,
    link:'https://smartteller.net',
    iconBg: "#000",
    date: "February 2021 - October 2022",
    task:"Developed a highly performant web application using Reactjs and Redux Toolkit, optimizing load times to under 5 seconds and ensuring smooth interactions.",
    Outcome:"The platform achieved excellent performance metrics and enhanced user engagement, supporting Skilledcheck’s goal of providing an intuitive marketplace for artisans.",
    
    
  },
  
  
];

const projects = [
  
  {
    name: "Smartteller",
    description:"Smartteller is a digital banking solution and technology support services to cooperatives and mini-banks.smartteller offers online banking, mobile banking and offline banking , cooperative owners now have a digital way of keeping transaction records thanks to smartteller.",
    tags: [ "Reactjs", "bootstrap"],
    image: 'https://smartteller.net/',
    source_code_link: "https://github.com/codinnovate/kidscantech",
  },
  {
    name: "TradeStack",
    description:
    "Tradestack is a payment gateway plus ecommerce solutions for businesses across africa, providing escrow features forcustomers to prevent them from getting scammed, and businesses from chargeback frauds",
    tags: [ "Nextjs", "expressjs","mongodb","Nodejs", "gsap", "tailwindcss"],
    image: 'https://tradestack.passpadi.com/',
    source_code_link: "https://github.com/codinnovate",
  },
  {
    name: "Kidscantech",
    description:
      "An innovative and educational online platform that empowers young minds to explore the exciting world of technology and coding. our mission is to inspire and nurture the next generation of digital creators, problem solvers, and tech-savvy individuals.",
    tags: [ "Reactjs", "expressjs","mongodb","Nodejs", "framer", "tailwindcss"],
    image: 'https://kidscantech.com/',
    source_code_link: "https://github.com/codinnovate/kidscantech",
  },
  {
    name: "Grouby",
    description:"Grouby  is an online grocery/foodstuff store in Nigeria, beyond buying and selling Grouby provides smart group buying of stuffs in bulk. ",
    tags: [ "Nextjs", "Django","Postgresql", "tailwindcss"],
    image: 'https://grouby.com.ng/',
    source_code_link: "https://github.com/codinnovate/kidscantech",
  },
  {
    name: "Entflix",
    description:
      "This a movie streaming website similar to netflix, contents where fetched from imbd Api, tailwind-scrollbar was used to remove the traditional scrollbar, and ofcourse tailwindcss for styling",
    tags: [ "Nextjs", "expressjs","mongodb","Nodejs", "framer", "tailwindcss"],
    image: 'https://entflixtv.vercel.app/',
    source_code_link: "https://github.com/",
  },
  {
    name: "Whatsapp Web Clone",
    description:
      "This a webapp that looks exactly like the whatsapp  web, icons where taken from material-ui icons, tailwindcss for styling and, ofcourse the mighty reactjs .",
    tags: [ "Reactjs", "framer", "tailwindcss"],
    image: 'https://whatsappp.vercel.app/',
    source_code_link: "https://github.com/codinnovate/Whatsapp",
  },
  
];


const awards = [
  {title:'Finalists at Enyata Build-a-thon 2024',
    images:[
      enyata_1,
      enyata_2, 
    ]
   },
  {title:'Finalist at Fcmb and Ingressive For Good HackFest Hackerthon',
    images:[
      ingessive_4_good,
      ingressive,
 
    ]
   },
   {title:'Got A Fully Funded Scholarship to Study at  Any Nigeria University at No Cost From Nigeria Society of Engineers',
    images:[
      Nse,
      WinForSch,
      
    ]
   },
   
  {title:'4th Runner Up at Lagos State Innovation and Ideas Competitions',
   images:[
     lasric,
     Runner,

   ]
  },


]

export {  technologies, experiences,  projects , awards};
