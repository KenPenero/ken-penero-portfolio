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
      verifyUrl: "https://upskilltechph.com/verify?id=5152dba8b408dfa7b3f3cd0cedf5ab81"
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
      verifyUrl: "https://upskilltechph.com/verify?id=33f05791a37cc627cb5cd6b488c25e2f"
    },
    {
      id: "ai-tools-101-gemini",
      title: "AI Tools 101: How to Use Google Gemini Like a Pro",
      type: "Certificate of Participation",
      issuer: "UpskillTechPH Training Services",
      date: "2026-08-22",
      topic: "AI",
      credentialId: "d3c9b9d513acdbaa85f05e650ba9116d",
      image: "assets/certs/ai-tools-101-gemini.jpg",
      badge: "assets/certs/ai-tools-101-gemini-badge.png",
      verifyUrl: "https://upskilltechph.com/verify?id=d3c9b9d513acdbaa85f05e650ba9116d"
    },
    {
      id: "intro-to-cybersecurity",
      title: "Introduction to Cybersecurity",
      type: "Digital Badge",
      issuer: "Cisco Networking Academy",
      date: "2026-09-14",
      topic: "Cybersecurity",
      credentialId: "fd3f6353-49fe-4065-bf24-7c129cd3b569",
      image: "assets/certs/intro-to-cybersecurity.png",
      verifyUrl: "https://www.credly.com/badges/fd3f6353-49fe-4065-bf24-7c129cd3b569"
    },
    {
      id: "intro-to-modern-ai",
      title: "Introduction to Modern AI",
      type: "Digital Badge",
      issuer: "Cisco Networking Academy",
      date: "2026-09-20",
      topic: "AI",
      credentialId: "a1fe5bc9-47b5-44ee-8c23-cb4080c39572",
      image: "assets/certs/intro-to-modern-ai.png",
      verifyUrl: "https://www.credly.com/badges/a1fe5bc9-47b5-44ee-8c23-cb4080c39572"
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
      reflection: "Going in, I thought 'securing AI' basically meant securing a server with extra steps. What stuck with me instead was how much of the actual risk lives in the prompt layer - what the model is told to trust, and what it's allowed to act on. The segment on prompt injection reframed how I think about any system that takes in outside content: treat it as untrusted by default, keep instructions and data separate, and never let a model's output trigger something important without a human or a hard check in between. I came away less interested in 'is the AI smart' and more interested in 'what happens if someone feeds it something it shouldn't trust' - a much more useful question.",
      certId: "securing-ai-101",
      screenshots: [
        "assets/seminars/securing-ai-call-1.jpg",
        "assets/seminars/securing-ai-call-2.jpg",
        "assets/seminars/securing-ai-call-3.jpg",
        "assets/seminars/securing-ai-call-4.jpg",
        "assets/seminars/securing-ai-call-5.jpg"
      ],
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
      reflection: "I'd written HTML and CSS before, but mostly by copying patterns I didn't fully understand. Watching the page get built live, tag by tag, was what finally made the structure-style-behavior split click - seeing exactly which problem each layer was solving instead of guessing. There's a specific moment I keep coming back to: when the instructor built the layout with plain CSS before touching JavaScript, which made it obvious how much of a 'broken' page is actually a styling problem, not a logic one. It's a small lesson, but it changed the order I debug things in now - style first, then behavior, instead of jumping straight to scripts when something looks wrong.",
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
      reflection: "This one slowed me down in a good way. I went in expecting a session about tools - recovering files, cracking passwords - and most of it turned out to be about discipline: how you preserve, document and move evidence so that what you found still means something later. The idea of a clean chain of custody is simple to state and apparently very easy to break in practice, which is probably why it got so much attention. It also reset how I think about 'an incident' - it's rarely one device. A phone, a laptop and a cloud account can each tell a different part of the same story, and forensics is the slow work of lining those stories up rather than finding one smoking-gun file.",
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
      reflection: "The spreadsheet-versus-database comparison sounds obvious once you hear it, but I hadn't actually thought about why a spreadsheet starts to fall apart once more than one person touches it - it's not a size problem, it's a rules problem. Primary keys and relationships are the rules a database enforces automatically that a spreadsheet just hopes you remember. The part that'll actually change how I build things is indexing: I'd been treating 'the query is slow' as something to fix by rewriting the query, when a lot of the time the real fix is deciding in advance what you'll be searching by. SQL versus NoSQL also stopped being an abstract debate once it was framed as a question about the shape of the data rather than which one is objectively better.",
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
      reflection: "This session was more of a map than a deep dive, and I think that's exactly what made it useful - it gave me a way to place a handful of terms I'd heard separately (IoT, Web3, blockchain, smart contracts) into one timeline instead of treating them as unrelated buzzwords. The Web1-to-Web3 framing - read, then read-and-write, then read-write-and-own - is the kind of simple structure I can actually explain to someone else, which is usually my test for whether I've understood something or just recognized it. The smart contract explanation also quietly corrected something I'd been assuming: the 'smart' part isn't some hidden intelligence, it's just code that runs automatically once its conditions are met. Less magic than I expected, which made it easier to take seriously.",
      certId: "emerging-it-innovations",
      screenshots: [
        "assets/seminars/it-innovations-call-1.jpg",
        "assets/seminars/it-innovations-call-2.jpg",
        "assets/seminars/it-innovations-call-3.jpg"
      ],
      link: ""
    },
    {
      title: "AI Tools 101: How to Use Google Gemini Like a Pro",
      date: "2026-08-22",
      organizer: "UpskillTechPH Training Services",
      duration: "1 hr (via Google Meet)",
      hours: 1,
      topic: "AI",
      summary: "A 1-hour, hands-on session on using Google Gemini well: a Goal-Context-Constraints-Format-Review framework for prompting, practical use cases like research and brainstorming, and a personal workflow for testing and refining prompts afterward.",
      takeaways: [
        "A prompt is stronger once it states the goal, the context, any constraints, and the format you want back - not just the question itself.",
        "Gemini is as useful for narrowing down and comparing ideas as it is for generating new ones from scratch.",
        "Treating a first prompt as a draft - checking the output, then refining and trying again - gets better results than expecting the first try to be right."
      ],
      reflection: "I'd used Gemini before this, but mostly the way I'd use a search bar - type a short question, take whatever came back. The Goal-Context-Constraints-Format-Review framework is a small thing to remember but it's already changed how I write prompts: stating the goal and the format I want up front gets me a usable answer on the first or second try instead of the fifth. The bigger shift was the use-case section - seeing Gemini used to narrow down and compare options rather than just generate new ones reframed it as something closer to a thinking partner than an answer machine. I left treating 'the first response wasn't great' as a reason to refine the prompt, not a reason to give up on the tool.",
      certId: "ai-tools-101-gemini",
      screenshots: [
        "assets/seminars/gemini-call-1.jpg",
        "assets/seminars/gemini-call-2.jpg",
        "assets/seminars/gemini-call-3.jpg"
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
    { label: "email",    value: "kenpenero0515@gmail.com", href: "mailto:kenpenero0515@gmail.com" },
    { label: "github",   value: "github.com/KenPenero",     href: "https://github.com/KenPenero" },
    { label: "linkedin", value: "linkedin.com/in/ken-joseph-peñero", href: "https://www.linkedin.com/in/ken-joseph-pe%C3%B1ero-256797410" }
  ]
};
