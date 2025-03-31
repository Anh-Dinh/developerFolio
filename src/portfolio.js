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
  username: "Anh Dinh",
  title: "Hi all, I'm Anh Dinh",
  subTitle: emoji(
    "Hi, I’m Anh Dinh — a data-driven problem solver with a keen interest in AI and Machine Learning. I enjoy bridging rigorous research with practical solutions, whether I’m designing novel algorithms or translating data into actionable insights. My goal is to advance intelligent technologies that push boundaries and make a positive impact on society."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1V2-dU2cbGj4DK3iDcSXbI-UUvy0uIfFH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Anh-Dinh",
  linkedin: "https://www.linkedin.com/in/anh-dinh-952347196/",
  gmail: "anhphuongdinh2003@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
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
  subTitle: "Enthusiastic AI/ML Developer Exploring Cutting-Edge Technologies",
  skills: [
    emoji(
      "⚡ Building ML/DL/AI models using Python, TensorFlow, Keras, and PyTorch"
    ),
    emoji("⚡ Analyzing data using SQL, Python, and Power BI"),
    emoji(
      "⚡ Integration of third party services such as Azure, AWS, and Open Sourcs for end-to-end solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
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
      schoolName: "SP Jain School of Global Management",
      logo: require("./assets/images/SpjainLogo.jpeg"),
      subHeader: "Bachelor of Data Science",
      duration: "September 2021 - June 2024",
      //desc: "",
      descBullets: [
        "Python Programming, R, Deep Learning, Machine Learning, Neural Networks",
        "Data Structure and Algorithm, Database Systems, Data Warehouse, Big Data, NoSQL, Cloud Computing",
        "Calculus, Probability and Statistics, Discrete Mathematics, Linear Algebra"
      ]
       }
    ,
    {
      schoolName: "High School for Gifted Students, Hanoi National University of Education ",
      logo: require("./assets/images/cspLogo.png"),
      subHeader: "GPA: 9/10",
      duration: "August 2018 - June 2021",
      desc: "Ranked top 10% in the program. Specialized in Mathematics and Informatics"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "GenAI",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Science and Analytics",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
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
      role: "AI Research Fellow",
      company: "Boston Global Forum",
      companylogo: require("./assets/images/bostonLogo.png"),
      date: "April 2024 – Oct 2024",
      desc: "",
      descBullets: [
        "Developed AI to educate global leaders, researchers, and citizens about politics, and ethical AI applications (social for good).",
        "Extracted, processed, cleaned, and verified large-scale text data from legal and political sources ",
        "Conducted rigorous model evaluation, fine-tuning, and prompt engineering to ensure factual accuracy and legal compliance."
      ]
    },
    {
      role: "Research Assistant Intern ",
      company: "National Tsing Hua University",
      companylogo: require("./assets/images/tsinghuaLogo.png"),
      date: "June 2023 – Sep 2023",
      desc: "TEEP Program - Fully Funded Research Internship",
      descBullets: [
        "Integrated Azure Digital Twin technology for smart city infrastructure optimization.",
        "Utilizing Azure Services, including IoT Hub, Machine Learning, Stream Analytics, etc., for real-time data insights & predictive analytics from smart city",
        "Designing and deploying data pipelines for efficient data flow."
      ]
    }
    ,
    {
      role: "Data Scientist",
      company: "Ingrity",
      companylogo: require("./assets/images/ingrityLogo.png"),
      date: "Aug 2023 – Now",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
      "Integrated Azure Digital Twin technology for smart city infrastructure optimization.",
      "Utilizing Azure Services, including IoT Hub, Machine Learning, Stream Analytics, etc., for real-time data insights & predictive analytics from smart city",
      "Designing and deploying data pipelines for efficient data flow."
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
  subtitle: "One of my biggest projects that I have contributed to",
  projects: [
    {
      image: require("./assets/images/mentalappLogo.png"),
      projectName: "Calmy",
      projectDesc: "Mental Health Prediction and AI therapist chatbot",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://my-mental-health-app-af8769922eba.herokuapp.com/?fbclid=IwZXh0bgNhZW0CMTAAAR0Pfxhvn-OD_83lYD1kkUBPywi-cMEXucKOl9gQOqbJ_NBEB6GeBXOTAB8_aem_fkfnw1__gmduBcjgjGT6Dg"
        }
        //  you can add extra buttons here.
      ]
    }
    // ,
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "VP Bank Technology Hackathon 2024 ",
      subtitle:
        "Final Round - Top 3/46 Challenge 5 -- Top 18/136 Teams",  
      image: require("./assets/images/vpbankLogo.jpeg"),
      imageAlt: "VP Bank Hackathon Logo"
    ,  footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1wEGVi6QB9t4rIJIO772m-5E2W0vY6kKf/view?usp=sharing"
        }
      ]
     },
    {
      title: "Major Leage Hacking (MLH) - Global Hack Week Data",
      subtitle:
        "Top 3% Worldwide",
      image: require("./assets/images/MLHLogo.jpg"),
      imageAlt: "MLH Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ZuWcI7fj_nN25ydbktQI4gkvvsi0TVPa/view?usp=sharing"
        }
      ]
    }
    ,

    {
      title: "Google Hash Code",
      subtitle: "Gained 33 points for solving problems in Competitive Programming",
      image: require("./assets/images/gghcLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""}
      ]
      },
      {
        title: "Ingrity - Best Employee of the Year",
        subtitle: "OWN UP value - to take ownership of one's actions and decisions and embrace associated outcomes",
        image: require("./assets/images/companyawardLogo.png"),
        imageAlt: "PWA Logo",
        footerLink: [
          {name: "Certification", url: ""}
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

//Podcast Section

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
  number: "anhphuongdinh2003@gmail.com",
  email_address: "anhphuongdinh2003@gmail.com"
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
// export default 