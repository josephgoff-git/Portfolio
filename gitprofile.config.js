// gitprofile.config.js

const config = {
  github: {
    username: 'josephgoff-git', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ["Rush-Culture","empty-react","socialAppLive","ReactApp-Blank","ReactApp-BlankSlate","components",
      "ExpertsOnCall",
      "React-Viewing-Platform",
      "social-platform",
      "ReactApp",
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'joseph-goff-a40b3522b',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'joeygoff13@gmail.com',
  },
  resume: {
    fileUrl:
      'https://aws1-bucket1-jg.s3.amazonaws.com/resume/RESUME.pdf'
      // 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'React',
    'Angular',
    'JavaScript',
    'Python',
    'Java',
    'C',
    'MySQL',
    'MongoDB',
    'Spring Boot',
    'AWS',
    'Azure',
    'Node.js',
    'Express.js',
    'Flask',
    'TypeScript',
    'SCSS',
    'Git',
  ],
  experiences: [
    {
      company: "Jesse's Steakhouse | Hanover, NH",
      position: '2022 | Server',
      from: '',
      to: '',
    },
    {
      company: "BF BBQ | White River, VT",
      position: '2019-2020 | Server',
      from: '',
      to: '',
    },
    {
      company: "Upper Valley Aquatic Center | White River, VT",
      position: '2017-2018 | Swim Instructor',
      from: '',
      to: '',
    },
    {
      company: "Storrs Pond | Hanover, NH",
      position: '2015-2017 | Swim Instructor & Lifeguard',
      from: '',
      to: '',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Skidmore College',
      degree: 'Computer Science',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Hanover High School',
      degree: '',
      from: '2015',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'React AI Playground',
      description:
      "Use AI to build out complex web apps",
      imageUrl: "https://socialwebappblobs.blob.core.windows.net/blobs/rpg.png",
      link: 'https://reactaiplayground.online',
    },
    {
      title: 'Inspire Connect',
      description:
      "Create a profile and start connecting",
      imageUrl: 'https://socialwebappblobs.blob.core.windows.net/blobs/ico.png',
      link: 'https://inspireconnect.online',
    },
    {
      title: 'Sea Breeze Kitchen',
      description:
      "Check out the latest specials on our menu",
      imageUrl: 'https://socialwebappblobs.blob.core.windows.net/blobs/sbk2.png',
      link: 'https://seabreezekitchen.online',
    },
    {
      title: 'Coup Online',
      description:
      "Play your favorite table top game online",
      imageUrl: 'https://socialwebappblobs.blob.core.windows.net/blobs/pco.png',
      link: 'https://playcoup.online',
    },
    {
      title: 'LTS Real Estate',
      description:
      "Browse property listings all over the country",
      imageUrl: 'https://socialwebappblobs.blob.core.windows.net/blobs/lts.png',
      link: 'https://opendreamdesigns.com',
    },
    {
      title: 'Experts On Call',
      description:
      "Find assistance for your greatest challenges",
      imageUrl: 'https://socialwebappblobs.blob.core.windows.net/blobs/eoc.png',
      link: 'https://expertsoncall.online',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 1, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'custom',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: 'red',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
