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
  username: "Sahil Tiwatne",
  title: "Hi all, I'm Sahil",
  subTitle: emoji(
    "A passionate and versatile Software Developer 🚀 having an experties in Web application, Mobile applications , Databases , SQL and Business Intelligence tools with Reactjs / Flutter / Oracle SQL / PL-SQL / Python / Power BI and some other cool libraries and frameworks."
  ),
  resumeLink: "https://drive.google.com/uc?export=download&id=1PKkGFJxtycKv2-yLDWB3aN6auHAHEH2h",
 // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sahiltiwatne",
  linkedin: "https://www.linkedin.com/in/sahil-tiwatne",
  gmail: "sahiltiwatne@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
subTitle: "Versatile full-stack developer with a passion for building apps, analyzing data, and solving real-world problems with code.",
skills: [
  emoji("⚡ Build responsive and scalable web & mobile applications using modern tech stacks"),
  emoji("⚡ Develop backend systems and work with relational and Oracle SQL databases"),
  emoji("⚡ Perform data analysis and build dashboards using Power BI"),
  emoji("⚡ Integrate APIs and third-party services like Firebase, AWS, and others"),
  emoji("⚡ Blend development with business insights to drive smarter decision-making")
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
  skillName: "React",
  fontAwesomeClassname: "fab fa-react"
},
{
  skillName: "Flutter",
  fontAwesomeClassname: "fas fa-mobile-alt" // generic mobile dev icon
},
{
  skillName: "Dart",
  fontAwesomeClassname: "fas fa-code" // generic coding icon
},
{
  skillName: "Power BI",
  fontAwesomeClassname: "fas fa-chart-bar" // bar chart icon for BI tools
}

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
  schoolName: "Amity University",
  logo: require("./assets/images/amitylogo2.jpg"),
  subHeader: "Bachelor of Technology in Computer Science & Engineering",
  duration: "July 2022 - May 2026",
  desc: "Gained a strong foundation in full-stack development and data-driven problem solving through academic projects, internships, and real-world applications.",
  descBullets: [
  "CGPA: 8.59/10, with strong academic performance across core computer science subjects",
  "Studied subjects including Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks, Artificial Intelligence, and Software Engineering",
  "Built projects using Flutter, React.js, Flask, and machine learning",
  "Engaged in continuous learning through online certifications in Web Development and Business Analysis",
  "Served as Class Coordinator for all 4 years, acting as the bridge between faculty and students",
  "Led multiple technical and cultural teams in university-level fests such as Technicia and Aminova"
]

}  
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/App Development (Flutter, React.js, HTML/CSS)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend & APIs (Flask, Firebase, SQL)",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming & ML (Python, Scikit-learn, Pandas)",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Analysis & Visualization (Power BI, Excel)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
  {
    role: "Application Development Intern",
    company: "Reliance Jio-bp",
    companylogo: require("./assets/images/jiobplogo.png"),
    date: "June 2025 – July 2025",
    desc: "Developed 'My Jio-bp', a cross-platform mobile app for locating and managing fuel station bookings.",
    descBullets: [
      "Built real-time location tracking using Google Maps API and Firebase Firestore",
      "Implemented features such as Refill Slot Booking, push notifications, favorites, and feedback system",
      "Worked on custom UI design, smooth navigation, and Firebase Authentication"
    ]
  },
  {
    role: "Front-End Developer Intern",
    company: "Dexkor",
    companylogo: require("./assets/images/dexkorlogo.png"),
    date: "April 2025",
    desc: "Worked on the internal product 'Dexy', contributing to frontend development using React.js and Tailwind CSS.",
    descBullets: [
      "Translated Figma designs into responsive and reusable components",
      "Ensured pixel-perfect layouts with mobile-first responsiveness and cross-device compatibility",
      "Collaborated in a fast-paced startup environment, delivering UI iterations rapidly"
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
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/myjiobplogo.png"),
      projectName: "My Jio-Bp Customer Application",
      projectDesc: "A cross platform mobile application which locates near by Jio-Bp pumps , manage bookings , books fuel for slots , sned notifications and handles many more features",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/sahiltiwatne"
        }
        //  you can add extra buttons here.
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
      title: "PowerBI Certification - OfficeMaster",
      subtitle:
        "Able to create AI powered , interactive and insightfull dashboards in PowerBI in less than 30 minutes.",
      image: require("./assets/images/officemasterlogo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1TPucLYNLA8MsNJWuAdhcwGhvXOpyoeq-/view?usp=sharing"
        },
      ]
    },
    {
      title: "Diploma in Human Resource management - Udemy",
      subtitle:
        "Covered fundamentals of communication, team management, recruitment, organizational behavior, conflict management, payroll management and interpersonal skills. ",
      image: require("./assets/images/udemylogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1UMoS6UJeXg2oy5H0u5eT4CEww0QrvMDv/view?usp=sharing"
        }
      ]
    },

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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  number: "+91-8237703637",
  email_address: "sahiltiwatne@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
