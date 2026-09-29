/* ==========================================================================
   YOUR CONTENT LIVES HERE  -  edit this file, not the HTML.

   HOW TO EDIT
   - certificates : one object per certificate. Put the image in assets/certs/
                    and set  image: "assets/certs/your-file.jpg".
                    Optional: badge (a digital badge image), credentialId,
                    verifyUrl (adds a "Verify" button).
                    If the image is missing, a placeholder card is shown.
                    Add  sample: true  to any entry to show a SAMPLE tag.
   - seminars     : one object per webinar / seminar. Screenshots go in
                    assets/seminars/ and are listed in  screenshots: [...]
                    Use certId to link a seminar to a certificate above.
                    takeaways is optional - add your own notes and a
                    "key takeaways" dropdown appears.
   - journey      : the milestones in "journey.md".
   - contact      : links in "contact.sh".

   HOW TO ADD A NEW SECTION LATER
   1. In index.html, copy any <section data-nav="..."> block inside <main>,
      give it a new id and a data-nav label (the file-name shown in the sidebar).
   2. That's it - the sidebar link and scroll highlighting are built automatically.
   ========================================================================== */

window.SITE = {
  owner: {
    name: "Ken Joseph Penero",
    handle: "ken",
    program: "BSIT",
    section: "4D",
    school: "Your University",          // <- replace
    location: "City, Philippines",      // <- replace
    tagline: "Learning beyond the classroom, and keeping receipts.",
    roles: ["IT student", "web builder", "lifelong learner", "problem solver"],
    about: [
      "I'm a BSIT student who treats every seminar, webinar and short course as a small upgrade to how I build and think.",
      "This site is my learning log: the certificates I've earned, the sessions I've attended, and what I actually took away from them."
    ],
    skills: ["HTML", "CSS", "JavaScript", "AI security basics", "Digital forensics basics", "Cybersecurity awareness"]
  },

  certificates: [
    {
      id: "securing-ai-101",
      title: "Securing AI 101",
      type: "Certificate of Attendance",
      issuer: "BlackStride Cyber",
      date: "2026-08-28",
      topic: "AI",
      credentialId: "7cfaa289-d4de-4a97-a9a6-e82ff5eb4611",
      image: "assets/certs/securing-ai-101.jpg",
      badge: "assets/certs/securing-ai-101-badge.png",
      verifyUrl: ""                     // paste the link the QR code opens
    },
    {
      id: "digital-forensics",
      title: "Digital Forensics: Digital Artifacts and Cyber Evidence",
      type: "Certificate of Completion",
      issuer: "Investigation and Intelligence Training",
      date: "2026-08-30",
      topic: "Cybersecurity",
      credentialId: "DF-DATCYSEC0830202666",
      image: "assets/certs/digital-forensics.jpg",
      verifyUrl: ""                     // paste the link the QR code opens
    },
    {
      id: "web-dev-html-css-js",
      title: "Hands-On Web Development (HTML, CSS, JavaScript)",
      type: "Certificate of Participation",
      issuer: "Ethel Programming Computer Programming Services",
      date: "2026-08-20",
      topic: "Web",
      image: "assets/certs/hands-on-web-development.jpg",
      verifyUrl: ""
    },
    {
      id: "database-101",
      title: "Database 101: Data Storage, SQL and Query Optimization",
      type: "Certificate of Participation",
      issuer: "UpskillTechPH Training Services",
      date: "2026-08-21",
      topic: "Data",
      credentialId: "5152dba8b408dfa7b3f3cd0cedf5ab81",
      image: "assets/certs/database-101.jpg",
      badge: "assets/certs/database-101-badge.png",
      verifyUrl: ""                     // paste the link the QR code opens
    },
    {
      id: "emerging-it-innovations",
      title: "Learning Advocate 2026 Series: Emerging IT Innovations",
      type: "Certificate of Participation",
      issuer: "UpskillTechPH Training Services",
      date: "2026-08-22",
      topic: "AI",
      credentialId: "33f05791a37cc627cb5cd6b488c25e2f",
      image: "assets/certs/emerging-it-innovations.jpg",
      badge: "assets/certs/emerging-it-innovations-badge.png",
      verifyUrl: ""                     // paste the link the QR code opens
    }
  ],

  seminars: [
    {
      title: "Securing AI 101",
      date: "2026-08-28",
      organizer: "BlackStride Cyber",
      duration: "1.5 hrs",
      hours: 1.5,
      topic: "AI",
      summary: "A 1.5-hour BlackStride Cyber webinar on foundational AI concepts and how to think about securing AI systems.",
      takeaways: [
        "AI tools introduce their own attack surface - securing them isn't the same problem as securing a normal app.",
        "A lot of AI risk comes down to what the model can be tricked into doing with the wrong input, not just how it's hosted.",
        "Treating AI output as something to verify, not trust outright, is a habit worth building early."
      ],
      certId: "securing-ai-101",
      screenshots: [],                  // e.g. ["assets/seminars/securing-ai-1.png"]
      link: ""
    },
    {
      title: "Hands-On Web Development (HTML, CSS, JavaScript)",
      date: "2026-08-20",
      organizer: "Ethel Programming Computer Programming Services",
      duration: "2 hrs (via Google Meet)",
      hours: 2,
      topic: "Web",
      summary: "A 2-hour live-coding webinar that walked through building a simple page from a blank HTML file: setting up the document structure, styling it with CSS, and wiring up basic JavaScript behavior.",
      takeaways: [
        "Starting from a bare HTML boilerplate makes it easier to see what each tag is actually doing.",
        "Structure first, then style, then behavior - building in that order keeps a page from turning into a mess.",
        "Watching a page get built live made concepts like the DOM and CSS layout click faster than reading about them alone."
      ],
      certId: "web-dev-html-css-js",
      screenshots: [
        "assets/seminars/webdev-call-1.jpg",
        "assets/seminars/webdev-call-2.jpg",
        "assets/seminars/webdev-form-confirmation.jpg"
      ],
      link: ""
    },
    {
      title: "Digital Forensics: Digital Artifacts and Cyber Evidence",
      date: "2026-08-30",
      organizer: "Investigation and Intelligence Training",
      duration: "3.5 hrs (via Zoom)",
      hours: 3.5,
      topic: "Cybersecurity",
      summary: "A Zoom program on the principles and practice of digital forensics: identifying, preserving, examining and interpreting digital evidence across desktops, mobile devices, networks and the cloud, then using digital traces to reconstruct incidents and find root causes.",
      takeaways: [
        "Digital forensics is less about 'finding the file' and more about preserving a clean chain of evidence so the findings actually hold up.",
        "Evidence isn't just on one device - desktops, phones, networks and cloud accounts all leave their own trail.",
        "Spotting that something malicious happened is only step one; tracing it back to a root cause is where the real work is."
      ],
      certId: "digital-forensics",
      screenshots: [],
      link: ""
    },
    {
      title: "Database 101: Data Storage, SQL and Query Optimization",
      date: "2026-08-21",
      organizer: "UpskillTechPH Training Services",
      duration: "2 hrs (via Google Meet)",
      hours: 2,
      topic: "Data",
      summary: "A 2-hour webinar covering why spreadsheets break down as data grows, core database architecture, tables and primary keys, SQL vs. NoSQL, and speeding up queries with indexes.",
      takeaways: [
        "A spreadsheet and a database solve different problems - one is for looking at data, the other is for keeping it correct as more people touch it.",
        "Primary keys and relationships are what let a database enforce rules a spreadsheet just has to trust you to follow.",
        "Choosing SQL vs. NoSQL is really a question about the shape of the data and how it'll be queried, not which one is 'better'.",
        "Indexes are the difference between a query that scans everything and one that goes straight to the answer."
      ],
      certId: "database-101",
      screenshots: [
        "assets/seminars/db101-call-1.jpg",
        "assets/seminars/db101-call-2.jpg",
        "assets/seminars/db101-form-confirmation.jpg"
      ],
      link: ""
    },
    {
      title: "Learning Advocate 2026 Series: Emerging IT Innovations",
      date: "2026-08-22",
      organizer: "UpskillTechPH Training Services",
      duration: "1 hr (via Google Meet)",
      hours: 1,
      topic: "AI",
      summary: "A 1-hour survey of emerging tech trends for beginners - from IoT devices that act on their own, to the Web1-to-Web3 shift, blockchain basics, and smart contracts.",
      takeaways: [
        "IoT isn't just 'smart gadgets' - it's devices quietly making small decisions for each other, like a thermostat reacting to you leaving the house.",
        "The Web1 to Web3 framing (read, then read-and-write, then read-write-and-own) is a simple way to explain why blockchain matters to someone who's never touched it.",
        "A smart contract is really just code that runs automatically once its conditions are met - the 'smart' part is the automation, not intelligence."
      ],
      certId: "emerging-it-innovations",
      screenshots: [
        "assets/seminars/it-innovations-call-1.jpg",
        "assets/seminars/it-innovations-call-2.jpg",
        "assets/seminars/it-innovations-call-3.jpg"
      ],
      link: ""
    }
  ],

  journey: [
    {
      phase: "01",
      title: "Curiosity",
      text: "Where it started: figuring out how software, networks and the web actually work.",
      tag: "Foundations"
    },
    {
      phase: "02",
      title: "Building",
      text: "Turning lessons into small projects, breaking things, and fixing them again.",
      tag: "Practice"
    },
    {
      phase: "03",
      title: "Capstone & beyond",
      text: "Putting it all together in a capstone project, and planning what to learn next.",
      tag: "Now"
    }
  ],

  contact: [
    { label: "email",    value: "you@example.com",          href: "mailto:you@example.com" },
    { label: "github",   value: "github.com/KenPenero",     href: "https://github.com/KenPenero" },
    { label: "linkedin", value: "linkedin.com/in/your-name", href: "https://www.linkedin.com/" }
  ]
};
