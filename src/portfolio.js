/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Martin Urubek's Portfolio",
  description:
    "Full-stack software developer specializing in React, TypeScript, Node.js, 3D configurators, ASP.NET, and Azure. Experienced in AI orchestration, team leadership, and building products from scratch.",
  og: {
    title: "Martin Urubek Portfolio",
    type: "website",
    url: "https://m-urubek.github.io/", // Your actual deployment URL
  },
};

//Home Page
const greeting = {
  title: "Martin Urubek",
  logo_name: "MartinUrubek", // Can be changed
  nickname: "", // Optional: using GitHub handle
  bulletPoints: [
    {
      bold: "Software developer",
      text: "- ~11 years of experience across many projects, strong in software development principles",
    },
    {
      bold: "AI builder",
      text: "- designing AI orchestrations, AI products and utilizing agentic coding",
    },
    {
      bold: "Full stack",
      text: "- backend (ASP.NET) background, now working in TypeScript, React and Node.js",
    },
    {
      bold: "People person",
      text: "- leading teams, coordinating work and consulting customers",
    },
    {
      bold: "Product-Minded",
      text: "- moving beyond the backlog to proactively spot and solve problems before they even happen",
    },
    {
      bold: "Efficiency Focused",
      text: "- prioritizing solid tooling and environment setup for a frictionless development",
    },
    {
      bold: "Reliable",
      text: "- strong sense of ownership and drive for empowerment",
    },
    {
      bold: "Fast learner",
      text: "- proactively seeking new ways to widen my horizons and expertise",
    },
    {
      bold: "Friendly extrovert",
      text: "with softer vibe, easy to work with",
    },
  ],
  resumeLink: "https://drive.google.com/file/d/1s4wOsyn00c_L8uFr5X4Lf8rVV4pG1wE6/",
  portfolio_repository: "https://github.com/m-urubek",
  githubProfile: "https://github.com/m-urubek",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/m-urubek",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/murubek/", // Add your specific profile URL
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mar.urubek@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full-Stack & 3D",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building web apps end-to-end with React, TypeScript and Node.js",
        "⚡ Designing and coding interactive 3D configurators from sketch to launch",
        "⚡ Hand-crafting 3D models of real-world products",
        "⚡ Backend development with Node.js, ASP.NET and SQL",
        "⚡ Architecting brand-new projects from the ground up",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ASP.NET",
          fontAwesomeClassname: "simple-icons:blazor",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
      ],
    },
    {
      title: "AI & Automation",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building AI orchestration workflows — Claude Code, Cursor, MCP and more",
        "⚡ Creating internal infrastructure for AI-driven programming",
        "⚡ Scripting and automation with PowerShell, Bash, Python and CLI tooling",
        "⚡ Building AI-powered chatbots and conversational interfaces",
        "⚡ Training teams to adopt agentic coding practices",
      ],
      softwareSkills: [
        {
          skillName: "Claude",
          fontAwesomeClassname: "simple-icons:anthropic",
          style: {
            color: "#D4A574",
          },
        },
        {
          skillName: "Cursor",
          fontAwesomeClassname: "simple-icons:cursor",
          style: {
            color: "#00A3FF",
          },
        },
        {
          skillName: "PowerShell",
          fontAwesomeClassname: "simple-icons:powershell",
          style: {
            color: "#5391FE",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#4EAA25",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Leadership & DevTools",
      fileName: "CloudServer",
      skills: [
        "⚡ Leading development teams and coordinating cross-functional work",
        "⚡ Meeting customers to gather feedback, analyze requirements and present solutions",
        "⚡ Mentoring developers and onboarding new team members",
        "⚡ Git workflows, code review and CI/CD with GitHub, Azure DevOps and Jira",
        "⚡ Cloud deployments and resource management in Azure",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05033",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "JetBrains",
          fontAwesomeClassname: "simple-icons:jetbrains",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            color: "#0078D7",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // Remove or comment out if you don't have profiles on these sites
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "MENDEL UNIVERSITY IN BRNO",
      subtitle: "Bachelor's degree, Engineering Informatics",
      logo_path: "mendel_logo.png", // Replace with actual logo file name
      alt_name: "Mendel University",
      duration: "Completed Feb 2022", // Adjusted format slightly
      descriptions: [
        "⚡ Graduated with a Bachelor's degree in Engineering Informatics",
        // Add more points if desired
      ],
      website_link: "https://mendelu.cz/en/", // Link to university website
    },
    {
      title: "SECONDARY TECHNICAL SCHOOL Třebíč",
      subtitle: "Electronic and computer systems",
      logo_path: "sps_trebic_logo.png", // Replace with actual logo file name
      alt_name: "SPS Třebíč",
      duration: "Completed 2016", // Adjusted format slightly
      descriptions: [
        "⚡ Electronic and Computer Systems field",
        // Add more points if desired
      ],
      website_link: "https://www.spst.cz/", // Link to school website if available
    },
  ],
};

const certifications = {
  certifications: [
    // Remove or comment out this section if no certifications
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   ...
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience", // Adjusted subtitle
  description:
    "Experienced in developing full-stack solutions with React, TypeScript, and Node.js, including interactive 3D configurators. Strong background in ASP.NET and Azure. Proven ability to lead development teams, mentor junior developers, and manage complex projects. Skilled in AI orchestration and agentic programming.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Lead & Full Stack",
          company: "Salsita, s.r.o.",
          company_url: "https://www.salsitasoft.com/",
          logo_path: "salsita_logo.png",
          duration: "Jun 2025 - Mar 2026",
          location: "Prague",
          description: `⚡ Led a team in bringing an interactive 3D configurator to life
⚡ Designed and coded a configurator from a sketch to a launch
⚡ Met with customers to listen to their feedback and represent our team's work
⚡ Built infrastructure for agentic programming
⚡ Hand-crafted 3D models of the customer's products`,
          color: "#0066CC",
        },
        {
          title: "Software Lead & Full Stack",
          company: "Allium s.r.o.",
          company_url: "https://www.allium.cz/", // Add company URL if available
          logo_path: "allium_logo.svg", // Replace with actual logo file name
          duration: "Nov 2019 – Jun 2025",
          location: "Remote, Czech Republic - Brno",
          description: `⚡ Lead a team in rewriting an enterprise project
⚡ Create various libraries together with integration into the company's robust systems
⚡ Built infrastructure for AI assisted programming and trained colleges in it
⚡ Translated business requirements into technical solutions for the enterprise SharePoint DMS`,
          color: "#FF5733", // Example color, can be adjusted
        },
        {
          title: "Esports Team Manager & Coach",
          company: "Independent", // Assuming independent or needs specification
          company_url: "", // Add URL if applicable
          logo_path: "esports_logo.png", // Placeholder logo
          duration: "May 2018 – Sep 2021",
          location: "Remote", // Adjust location if needed
          description: `⚡ Dedicated leadership of competitive teams - management and coordination of large tournaments, mentoring beginner managers and coaches
⚡ Strategic planning, management of human resources, social analysis, internal group communication, formal communication with external parties and other team dynamics`,
          color: "#9B59B6", // Example purple color
        },
        {
          title: "Software Developer",
          company: "SPSoft s.r.o.",
          company_url: "https://www.spsoft.cz/", // Add company URL if available
          logo_path: "spsoft_logo.webp", // Replace with actual logo file name
          duration: "June 2018 – Nov 2019",
          location: "Remote, Czech Republic - Brno, Velké Meziříčí",
          description: `⚡ Translated business requirements into technical solutions for the complex multipurpose (mainly MES) system while coordinating with other developers
⚡ Contributed to quality assurance through manual and unit testing`,
          color: "#33CFFF", // Example color, can be adjusted
        },

        {
          title: "Independent Software Developer",
          company: "Freelance", // Changed company name for clarity
          company_url: "",
          logo_path: "freelance_logo.png", // Use a generic freelance/code logo
          duration: "2015 - 2018",
          location: "Remote",
          description: `⚡ Selected as one of only two high school students for a company collaboration program — developed a module for NUVIA a.s. automating report generation in LibreOffice formats
⚡ The early start led to consulting representatives of companies and developing two small-scale desktop applications — all while still in high school`,
          color: "#F1C40F", // Example color, can be adjusted
        },
      ],
    },
    // Remove Internships and Volunteerships sections if not applicable
    // {
    //   title: "Internships",
    //   experiences: [ ... ]
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [ ... ]
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

// Remove Publications section if not applicable
const publicationsHeader = {
  title: "Publications",
  description: "No publications yet.", // Or remove section entirely
  avatar_image_path: "projects_image.svg", // Keep or change image
};

const publications = {
  data: [
    // Remove or comment out if no publications
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   ...
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "freelance_logo.png",
    description:
      "Feel free to reach out! I'm available via email or LinkedIn. Open to discussing opportunities related to full-stack development, AI orchestration, 3D configurators, and cloud solutions.",
  },
  // Remove blogSection if you don't have a blog
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences...",
  //   link: "", // Add blog link if you have one
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Location",
    subtitle: "Prague, Czech Republic / Remote", // Updated location
    locality: "Prague",
    country: "Czech Republic",
    region: "", // Optional
    postalCode: "", // Optional
    streetAddress: "", // Optional
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Prague/", // Link to Prague map
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+420 733 122 393",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
