/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Martin Urubek's Portfolio",
  description:
    "Full-stack software developer specializing in React, TypeScript, Node.js, 3D configurators, ASP.NET, SharePoint (PnP Core SDK, SPFx), and Azure. Passionate about creating clean, efficient, and scalable solutions.",
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
  nickname: "m-urubek", // Optional: using GitHub handle
  subTitle:
    "Full-stack software developer specializing in React, TypeScript, Node.js, 3D configurators, ASP.NET, SharePoint (PnP Core SDK, SPFx), and Azure. Passionate about creating clean, efficient, and scalable solutions. Experienced in team leadership and agentic programming.",
  resumeLink:
    "https://drive.google.com/file/d/1s4wOsyn00c_L8uFr5X4Lf8rVV4pG1wE6/",
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
      title: "Software Development",
      fileName: "DataScienceImg", // Can be changed to a more relevant image name
      skills: [
        "⚡ Developing full-stack applications using React, TypeScript, and Node.js",
        "⚡ Creating interactive 3D experiences and configurators using Three.js and WebGL",
        "⚡ Developing backend systems using .NET and ASP.NET",
        "⚡ Designing and implementing both robust and brand new projects incl. their software architecture",
        "⚡ Creating functional, efficient, readable, and scalable code with strong foundational knowledge spanning computer architecture, electrotechnical principles, low-level programming, and OS/firmware interaction",
        "⚡ Utilizing AI assisted and AI-driven techniques to enhance development efficiency and outcomes",
        "⚡ Designing practical solutions based on advanced theoretical concepts like graph theory, state machines, and dynamic programming",
        "⚡ Leading development teams and mentoring junior developers",
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
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "ASP.NET",
          // No direct icon found, using .NET as fallback or find a custom one
          fontAwesomeClassname: "simple-icons:blazor",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver", // or specific DB icon e.g., postgresql, mysql
          style: {
            color: "#CC2927",
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
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },
      ],
    },
    {
      title: "SharePoint & Cloud",
      fileName: "CloudServer", // Use the new component name
      skills: [
        "⚡ Developing records management systems for SharePoint Online",
        "⚡ Extensive experience with PnP Core SDK",
        "⚡ Building SharePoint Framework (SPFx) components",
        "⚡ Managing Azure resources and services",
      ],
      softwareSkills: [
        {
          skillName: "SharePoint",
          fontAwesomeClassname: "mdi:microsoft-sharepoint",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "PnP Core SDK",
          // No direct icon, maybe generic code icon or custom
          fontAwesomeClassname: "arcticons:sdk-monitor",
          style: {
            color: "#2C3E50", // Generic color
          },
        },
        {
          skillName: "SPFx",
          // No direct icon, maybe generic code icon or custom
          fontAwesomeClassname: "fa-cogs", // Gear icon as alternative
          style: {
            color: "#F1C40F", // Generic color
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PowerShell",
          fontAwesomeClassname: "simple-icons:powershell",
          style: {
            color: "#5391FE",
          },
        },
      ],
    },
    {
      title: "Tools & Workflow",
      fileName: "FullStackImg", // Can be changed to a more relevant image like 'ToolsImg'
      skills: [
        "⚡ Using Git for version control (including Azure DevOps)",
        "⚡ Developing in Visual Studio, Visual Studio Code, Cursor and JetBrains IDEs",
        "⚡ Interested in learning React and Scrum Master methodologies",
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
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            color: "#0078D7",
          },
        },
        {
          skillName: "Visual Studio",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "JetBrains",
          fontAwesomeClassname: "simple-icons:jetbrains",
          style: {
            color: "#000000",
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
    "Experienced in developing full-stack solutions with React, TypeScript, and Node.js, including interactive 3D configurators. Strong background in ASP.NET, SharePoint ecosystem (PnP Core SDK), and Azure. Proven ability to lead development teams, mentor junior developers, and manage complex projects through Azure DevOps. Skilled in agentic programming and AI-assisted development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Salsita, s.r.o.",
          company_url: "https://www.salsitasoft.com/",
          logo_path: "salsita_logo.png",
          duration: "Jul 2025 - Present",
          location: "Prague",
          description: `⚡ Led a team in bringing an interactive 3D configurator to life
⚡ Designed and coded a configurator from a sketch to a launch
⚡ Met with customers to listen to their feedback and represent our team's work
⚡ Built infrastructure for agentic programming
⚡ Hand-crafted 3D models of the customer's products`,
          color: "#0066CC",
        },
        {
          title: "Software Developer",
          company: "Allium s.r.o.",
          company_url: "https://www.allium.cz/", // Add company URL if available
          logo_path: "allium_logo.svg", // Replace with actual logo file name
          duration: "Nov 2019 – Present",
          location: "Remote, Czech Republic - Brno",
          description: `⚡ Designed architecture and programmed the foundation of a brand-new large-scale project
⚡ Independently found and utilized 3rd party libraries to create various tools together with integration into the company’s robust systems
⚡ Mentored juniors, organized and integrated their work
⚡ Trained colleagues in AI assisted programming
⚡ Translated business requirements into technical solutions for the enterprise SharePoint DMS system while coordinating with other developers`,
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
          description: `⚡ Consulted representatives of companies to analyze their business requirements and then subsequently developed two small-scale desktop applications
⚡ Developed a module for NUVIA a.s. automating report generation in LibreOffice formats`,
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
      "Feel free to reach out! I'm available via email or LinkedIn. Open to discussing opportunities related to software development, particularly in ASP.NET, SharePoint and Azure environments. Always eager to learn new technologies like React.",
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
