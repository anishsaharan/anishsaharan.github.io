/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anish Saharan",
  title: "Hi all, I'm Anish",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 skilled in JavaScript, React.js, and Node.js, with experience in data analysis using Power BI. I also enjoy working with the Lua programming language"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anishsaharan",
  linkedin: "https://www.linkedin.com/in/anishsaharan/",

  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build scalable Full Stack web applications using JavaScript, React.js, and Node.js"
    ),
    emoji("⚡ Analyze and visualize data using Power BI to generate meaningful business insights"),
    emoji(
      "⚡ Exploring Generative AI and the Lua programming language to build innovative ideas"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chandigarh University",
      logo: require("./assets/images/culogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "July 2021 - April 2025",
      desc: "Graduated with a CGPA of 8.0, building strong foundations in programming, problem-solving, and modern software development.",
      descBullets: ["Maintained 8.0 CGPA throughout the program", "Participated in technical workshops and coding activities ", "Worked on web development and programming projects" ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack (React.js, Node.js, FastAPI...)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming (Python / SQL / C++)",
      progressPercentage: "80%"
    },
    {
      Stack: "Generative AI & ML (LLMs / Tensorflow)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Decision Scientist at Mu Sigma",
      company: "Mu Sigma",
      companylogo: require("./assets/images/musigma.jpg"),
      date: "July 2025 – Present",
      desc: "Full-Time Trainee Decision Scientist at Mu Sigma, where I transform raw data into meaningful insights to support data-driven decision-making and business growth.",
      descBullets: [
        "Analyzed business datasets to extract actionable insights for decision-making",
        "Built interactive Power BI dashboards to visualize KPIs and business metrics."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A SHOWCASE OF THE PROJECTS WHERE IDEAS MEET CODE AND CREATIVITY TURN INTO REAL SOLUTIONS.",
  projects: [
    {
      image: require("./assets/images/healthcareeco.jpg"),
      projectName: "HealthCare Ecosystem",
      projectDesc: "A portal designed for doctors and patients to manage appointments, consultations, and basic healthcare services.",
    },

        {
      image: require("./assets/images/trustmart.png"),
      projectName: "Trust Mart",
      projectDesc: "An eCommerce platform that evaluates customer reliability, product quality, and vendor trust scores.",
    },

        {
      image: require("./assets/images/epms.jpg"),
      projectName: "Employee Performance Management System",
      projectDesc: "A web tool that helps managers and employees track performance, goals, and progress within an organization.",
    },

        {
      image: require("./assets/images/magicpage.png"),
      projectName: "The Magic Book - A Website to resell used books",
      projectDesc: "A website that allows users to buy and sell used books in a simple and affordable way.",
    },

    {
      image: require("./assets/images/taco.webp"),
      projectName: "Taco Jobs - FiveM Job Script",
      projectDesc: "A custom FiveM QBCore job script designed to add interactive taco-selling gameplay and roleplay features to a server.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
            {
      image: require("./assets/images/loading.jpg"),
      projectName: "Github Account Under Maintiance",
      projectDesc: "Links to these projects will be available soon. Currently some repositories are private — meanwhile, you can explore my other work on my GitHub profile.",
            footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/anishsaharan"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Power BI Data Analyst Associate (PL-300)",
      subtitle:
        "Learned to analyze data, build interactive dashboards, and create data-driven insights using Microsoft Power BI.",
      image: require("./assets/images/pl300.png"),
      imageAlt: "PL 300 Logo",
      footerLink: [
        {
          name: "Power BI",
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Data Modelling",
          url: " "
        },
        {
          name: "Visualization Graphs",
          url: " "
        },
        {
          name: "Advance DAX",
          url: " "
        }
      ]
    },
    {
      title: "SQL for Data Science – Coursera",
      subtitle:
        "Learned how to query, analyze, and manipulate datasets using SQL for real-world data analysis tasks.",
      image: require("./assets/images/sql.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "SQL",
          url: " "
        }, 
        {
          name: "PostgreSQL",
          url: " "
        },
        {
          name: "SQLServer",
          url: " "
        }
      ]
    },

    {
      title: "Responsive Web Design Certification - freeCodeCamp",
      subtitle: "Learned to build responsive and accessible websites using HTML, CSS, ReactJS and modern web design principles.",
      image: require("./assets/images/freecodecamp.png"),
      imageAlt: "WEB Logo",
      footerLink: [
        {name: "HTML", url: ""},
        {
          name: "CSS",
          url: " "
        },
        {
          name: "JavaScript",
          url: " "
        },
        {
          name: "React JS",
          url: " "
        },
        {
          name: "NodeJS",
          url: " "
        },
        {
          name: "Fast API",
          url: " "
        },
        {
          name: "MUI",
          url: " "
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9306342622",
  email_address: "anishsaharan08@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
