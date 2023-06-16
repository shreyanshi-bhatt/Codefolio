import {
    mobile,
    backend,
    creator,
    web,
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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    c_icon,
    python,
    java,
    ecommerce,
    movie,
    journal,
    school,
    college,
    gdsc,
    girl
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Wizard",
      icon: web,
    },
    {
      title: "Crafty Coder",
      icon: mobile,
    },
    {
      title: "Backend Builder",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
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
      name: "C",
      icon: c_icon,
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
      name: "Python",
      icon: python,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "SSC",
      company_name: "Nelson's Internationl School",
      icon: school,
      iconBg: "#383E56",
      date: "March 2006 - March 2019",
      points: [
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
        "Nursery - Class 10th"
        
      ],
    },
    {
      title: "HSC",
      company_name: "Vedant International School",
      icon: girl,
      iconBg: "#E6DEDD",
      date: "June 2019 - August 2021",
      points: [
        "Class 11th & 12th"
      ],
    },
    {
      title: "B.E Computer Engineering",
      company_name: "Government Engineering College - Gandhinagar",
      icon: college,
      iconBg: "#383E56",
      date: "October 2021 - August 2025",
      points: [
        "2021 - Present"
      ],
    },
    {
      title: "Google Developer Students Club",
      company_name: "Core Team Member",
      icon: gdsc,
      iconBg: "#E6DEDD",
      date: "October 2022 - April 2023",
      points: [
        "Solution Challenge 2023",
        "Hack-The-League 2023",
        "Hosted events like Web3.0 etc."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-Commerce Store",
      description:
        // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs."
        "This is an e-commerce website for electronic gadgets. I have used Sanity as my Content Management System and Stripe to create the payment checkout page.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/paradoxical-bin0/ecommerce-app",
    },
    {
      name: "Movie List App",
      description:
        "Web application that enables users to create a list of the movies that they have watched. The aim of this project was to learn Firebase integration in React.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "authentication",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/paradoxical-bin0/FirebaseWithReact",
    },
    {
      name: "Daily Journal",
      description:
        "A comprehensive journal logging platform that allows users to save the logs of their day. Go to the route /compose to create an entry. This was my very first project.",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: journal,
      source_code_link: "https://github.com/paradoxical-bin0/ChatRoomApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };