const APP_DATA = {
  companies: [
    { id:"amazon", name:"Amazon", logo:"🛒", difficulty:"Hard", focus:["DSA","System Design","OOP"], color:"#FF9900", package:"25-45 LPA",
      rounds:[{name:"Online Assessment",desc:"2 DSA problems + debugging (90 mins)"},{name:"Technical Round 1",desc:"Data Structures & Algorithms"},{name:"Technical Round 2",desc:"System Design & OOP"},{name:"Bar Raiser",desc:"Leadership principles"},{name:"HR Round",desc:"Culture fit"}],
      skills:["Arrays","Trees","Graphs","Dynamic Programming","System Design","Java/Python"],
      faqs:[{q:"What is Amazon's leadership principle focus?",a:"Customer Obsession, Ownership, and Bias for Action are most commonly assessed across 16 principles."},{q:"What languages are preferred?",a:"Java, Python, or C++. Strong knowledge of one is sufficient."},{q:"How hard is the DSA round?",a:"Medium to Hard LeetCode difficulty. Focus on Trees, DP, and Graphs."}],
      roadmap:[{week:"Week 1-2",task:"Master Arrays, Strings, HashMaps"},{week:"Week 3-4",task:"Trees, Binary Search, Recursion"},{week:"Week 5-6",task:"Graphs, DP, Greedy"},{week:"Week 7",task:"System Design basics"},{week:"Week 8",task:"Mock interviews + Leadership principles"}]
    },
    { id:"microsoft", name:"Microsoft", logo:"🪟", difficulty:"Hard", focus:["DSA","System Design","Aptitude"], color:"#00A4EF", package:"20-40 LPA",
      rounds:[{name:"Online Assessment",desc:"Aptitude + 2-3 coding problems (60 mins)"},{name:"Technical Round 1",desc:"DSA problems + code walkthrough"},{name:"Technical Round 2",desc:"System design / more DSA"},{name:"As-Appropriate Round",desc:"Problem solving & culture fit"},{name:"HR Round",desc:"Final selection"}],
      skills:["C++","Java","Python","OS","DBMS","Networking","System Design"],
      faqs:[{q:"Does Microsoft ask puzzles?",a:"Occasionally. Focus on practical problem-solving and DSA."},{q:"What topics are in tech rounds?",a:"Primarily DSA and system design for senior roles."},{q:"Is CGPA important?",a:"Minimum 7.0 CGPA is typically required for campus hiring."}],
      roadmap:[{week:"Week 1-2",task:"Arrays, Linked Lists, Stacks"},{week:"Week 3-4",task:"Trees, Heaps, Tries"},{week:"Week 5-6",task:"Graph algorithms, DP"},{week:"Week 7",task:"OS, DBMS, CN basics"},{week:"Week 8",task:"Mock tests & behavioral prep"}]
    },
    { id:"tcs", name:"TCS", logo:"🔷", difficulty:"Easy", focus:["Aptitude","Core CS","Communication"], color:"#003399", package:"3.6-7 LPA",
      rounds:[{name:"TCS NQT",desc:"Numerical, Verbal, Reasoning, Programming Logic (180 mins)"},{name:"Technical Interview",desc:"Projects, CS basics, DBMS, OS"},{name:"Managerial Round",desc:"Situational questions"},{name:"HR Round",desc:"Background check, offer"}],
      skills:["Aptitude","Verbal Ability","C/C++/Java","DBMS","OS","Basic DSA"],
      faqs:[{q:"What is TCS NQT?",a:"National Qualifier Test covering Numerical, Verbal, Reasoning and Programming Logic."},{q:"Can beginners crack TCS?",a:"Yes! Beginner-friendly. Strong aptitude and basic CS knowledge is sufficient."},{q:"Is coding mandatory?",a:"Basic programming logic for entry-level. Advanced coding for higher bands."}],
      roadmap:[{week:"Week 1",task:"Quantitative Aptitude fundamentals"},{week:"Week 2",task:"Verbal ability & logical reasoning"},{week:"Week 3",task:"C/Java programming basics"},{week:"Week 4",task:"DBMS + OS + CN concepts"},{week:"Week 5",task:"Full mock NQT tests"}]
    },
    { id:"infosys", name:"Infosys", logo:"🌿", difficulty:"Easy", focus:["Aptitude","Verbal","Puzzle"], color:"#007CC3", package:"3.6-9 LPA",
      rounds:[{name:"Online Test",desc:"Quantitative, Verbal, Puzzle solving (95 mins)"},{name:"Technical Interview",desc:"Core CS, projects, coding basics"},{name:"HR Interview",desc:"Communication, adaptability"}],
      skills:["Aptitude","Puzzles","SQL","Java/Python","Communication"],
      faqs:[{q:"How tough is the Infosys test?",a:"Moderate. Focus on number series, data interpretation, puzzles."},{q:"What to prepare for interview?",a:"Your projects, basic CS concepts and be conversational."},{q:"Is there a group discussion?",a:"Sometimes for mass hiring. Prepare current IT topics."}],
      roadmap:[{week:"Week 1",task:"Number series, percentages, time & work"},{week:"Week 2",task:"Logical puzzles, seating arrangements"},{week:"Week 3",task:"Verbal: RC, grammar, fill in blanks"},{week:"Week 4",task:"SQL + Core CS interview prep"}]
    },
    { id:"hcl", name:"HCL", logo:"⚡", difficulty:"Easy", focus:["Aptitude","Core CS","Communication"], color:"#0073E6", package:"3.5-6 LPA",
      rounds:[{name:"Online Assessment",desc:"Aptitude + Technical MCQs (60 mins)"},{name:"Group Discussion",desc:"Topic-based group activity"},{name:"Technical Interview",desc:"CS fundamentals + projects"},{name:"HR Round",desc:"Soft skills, relocation, offer"}],
      skills:["Aptitude","Networking","OS","DBMS","C/Java"],
      faqs:[{q:"Is HCL interview easy?",a:"Yes, relatively. Strong communication and CS basics are key."},{q:"What topics in technical MCQs?",a:"Networking, OS, DBMS, basic coding logic."},{q:"Does HCL hire freshers in bulk?",a:"Yes, large campus and off-campus drives regularly."}],
      roadmap:[{week:"Week 1",task:"Aptitude: Quant + Logical"},{week:"Week 2",task:"OS, DBMS, Networking MCQs"},{week:"Week 3",task:"Communication & GD topics"},{week:"Week 4",task:"Mock interviews"}]
    },
    { id:"ibm", name:"IBM", logo:"💻", difficulty:"Medium", focus:["Aptitude","AI/ML","Core CS"], color:"#1261FE", package:"6-14 LPA",
      rounds:[{name:"Cognitive Ability Test",desc:"AI-proctored aptitude on IBM Kenexa (90 mins)"},{name:"Technical Interview",desc:"DSA basics, AI/ML concepts, projects"},{name:"HR Interview",desc:"IBM values alignment"}],
      skills:["AI/ML basics","Python","Data Analysis","SQL","Cloud (IBM Cloud)"],
      faqs:[{q:"What is IBM Kenexa?",a:"IBM's AI-powered assessment platform testing cognitive, language and behavioral skills."},{q:"Is AI knowledge required?",a:"Yes — basic ML concepts, Python and data handling are important."},{q:"What is IBM's work culture?",a:"Innovation-driven. Show curiosity, adaptability and problem-solving mindset."}],
      roadmap:[{week:"Week 1",task:"Python + Data handling basics"},{week:"Week 2",task:"AI/ML concepts: regression, classification"},{week:"Week 3",task:"SQL + Cloud fundamentals"},{week:"Week 4",task:"Cognitive test practice + mock interviews"}]
    },
    { id:"honeywell", name:"Honeywell", logo:"🏭", difficulty:"Medium", focus:["Core CS","Embedded","DSA"], color:"#E5392B", package:"8-18 LPA",
      rounds:[{name:"Online Assessment",desc:"Aptitude + Coding 2 problems (90 mins)"},{name:"Technical Round 1",desc:"Core CS, Embedded C, DSA"},{name:"Technical Round 2",desc:"System-level programming, IoT"},{name:"HR Round",desc:"Culture fit, career goals"}],
      skills:["C/C++","Embedded Systems","RTOS","DSA","Networking"],
      faqs:[{q:"Does Honeywell hire CS students?",a:"Yes, both CS and ECE for software and embedded roles."},{q:"What is the Embedded focus?",a:"RTOS, Embedded C, hardware-software interfacing, IoT protocols."},{q:"How to prepare?",a:"Strong CS fundamentals, C/C++ and embedded systems knowledge are key."}],
      roadmap:[{week:"Week 1",task:"C/C++ programming mastery"},{week:"Week 2",task:"RTOS concepts + Embedded C"},{week:"Week 3",task:"DSA: Arrays, Pointers, Memory management"},{week:"Week 4",task:"Networking + Mock rounds"}]
    },
    { id:"caterpillar", name:"Caterpillar", logo:"🐛", difficulty:"Medium", focus:["Core CS","System Design","Aptitude"], color:"#FFCD11", package:"10-20 LPA",
      rounds:[{name:"Online Test",desc:"Aptitude + Technical MCQs (75 mins)"},{name:"Technical Interview",desc:"CS fundamentals, projects, problem-solving"},{name:"HR Interview",desc:"Values alignment, goals"}],
      skills:["Java","Python","SQL","System Design","Agile"],
      faqs:[{q:"What projects does Caterpillar hire for?",a:"Industrial IoT, data analytics, enterprise software and digital transformation."},{q:"Is Caterpillar good for freshers?",a:"Yes! Great work-life balance, competitive package, global exposure."},{q:"What technical skills to focus?",a:"Java or Python, SQL, basic system design and software lifecycle."}],
      roadmap:[{week:"Week 1",task:"Java/Python programming"},{week:"Week 2",task:"SQL + DBMS"},{week:"Week 3",task:"Aptitude + Logical reasoning"},{week:"Week 4",task:"System design basics + Mock interviews"}]
    },
    { id:"motorola", name:"Motorola", logo:"📡", difficulty:"Medium", focus:["Embedded","Core CS","Networking"], color:"#005EB8", package:"8-16 LPA",
      rounds:[{name:"Written Test",desc:"Technical MCQs + Coding (60 mins)"},{name:"Technical Round 1",desc:"C/C++, OS, Networking, Embedded"},{name:"Technical Round 2",desc:"Project questions, design patterns"},{name:"HR Round",desc:"Communication, goals"}],
      skills:["C/C++","Networking Protocols","OS","Embedded Linux","DSP basics"],
      faqs:[{q:"What domain does Motorola focus on?",a:"Public safety comms, networking solutions and wireless infrastructure."},{q:"Is networking knowledge important?",a:"Yes — TCP/IP, LTE, radio protocols commonly tested."},{q:"What's the work culture?",a:"Innovation-driven, fast-paced with focus on real-world engineering impact."}],
      roadmap:[{week:"Week 1",task:"C/C++ + OS fundamentals"},{week:"Week 2",task:"Networking: TCP/IP, UDP, protocols"},{week:"Week 3",task:"Embedded Linux + device drivers"},{week:"Week 4",task:"Technical MCQ practice + Mock rounds"}]
    },
    { id:"mrcooper", name:"Mr. Cooper", logo:"🏠", difficulty:"Medium", focus:["Full Stack","Aptitude","SQL"], color:"#E91E63", package:"8-15 LPA",
      rounds:[{name:"Online Assessment",desc:"Aptitude + Basic coding (45 mins)"},{name:"Technical Interview",desc:"Full-stack concepts, SQL, REST APIs"},{name:"HR Interview",desc:"Culture fit, fintech knowledge"}],
      skills:["React","Node.js","SQL","RESTful APIs","Agile/Scrum"],
      faqs:[{q:"What domain is Mr. Cooper in?",a:"Mortgage and financial technology (Fintech) — digital lending platforms."},{q:"What tech stack is used?",a:"React, .NET, SQL Server, Azure cloud services."},{q:"Is domain knowledge required?",a:"Basic fintech/mortgage knowledge helps but not mandatory for freshers."}],
      roadmap:[{week:"Week 1",task:"React + JavaScript fundamentals"},{week:"Week 2",task:"SQL + Database design"},{week:"Week 3",task:"REST APIs + Backend basics"},{week:"Week 4",task:"Aptitude practice + Mock interviews"}]
    },
    { id:"embeddedur", name:"Embedded UR", logo:"🔧", difficulty:"Hard", focus:["Embedded C","RTOS","Hardware"], color:"#4CAF50", package:"5-12 LPA",
      rounds:[{name:"Written Test",desc:"Embedded C MCQs + Circuit fundamentals"},{name:"Technical Round 1",desc:"RTOS, interrupt handling, peripheral interfaces"},{name:"Technical Round 2",desc:"Practical coding + hardware debugging"},{name:"HR Round",desc:"Team fit, passion for embedded"}],
      skills:["Embedded C","RTOS (FreeRTOS)","I2C/SPI/UART","ARM Cortex","Circuit Design"],
      faqs:[{q:"What domains does Embedded UR work in?",a:"Industrial automation, automotive systems and IoT device development."},{q:"Is hardware knowledge required?",a:"Yes — microcontroller architecture, peripheral interfacing and PCB basics."},{q:"What RTOS knowledge is needed?",a:"FreeRTOS task scheduling, semaphores, queues and interrupt management."}],
      roadmap:[{week:"Week 1",task:"Embedded C: pointers, memory, bit manipulation"},{week:"Week 2",task:"RTOS: tasks, semaphores, queues"},{week:"Week 3",task:"Peripheral protocols: I2C, SPI, UART"},{week:"Week 4",task:"ARM Cortex-M + practical projects"}]
    }
  ],
  practice: {
    aptitude:[
      {id:1,title:"Time & Work Problems",difficulty:"Easy",questions:20,duration:"30 mins",topic:"Quantitative"},
      {id:2,title:"Percentage & Profit/Loss",difficulty:"Easy",questions:15,duration:"25 mins",topic:"Quantitative"},
      {id:3,title:"Logical Reasoning Basics",difficulty:"Easy",questions:25,duration:"35 mins",topic:"Logical"},
      {id:4,title:"Number Series",difficulty:"Medium",questions:20,duration:"30 mins",topic:"Logical"},
      {id:5,title:"Seating Arrangements",difficulty:"Medium",questions:10,duration:"40 mins",topic:"Logical"},
      {id:6,title:"Data Interpretation",difficulty:"Hard",questions:15,duration:"45 mins",topic:"Quantitative"},
      {id:7,title:"Syllogisms & Verbal Logic",difficulty:"Medium",questions:20,duration:"30 mins",topic:"Verbal"},
      {id:8,title:"Permutation & Combination",difficulty:"Hard",questions:10,duration:"35 mins",topic:"Quantitative"}
    ],
    coding:[
      {id:1,title:"Array Manipulation Challenges",difficulty:"Easy",questions:10,duration:"60 mins",topic:"Arrays"},
      {id:2,title:"String Reversal & Anagrams",difficulty:"Easy",questions:8,duration:"45 mins",topic:"Strings"},
      {id:3,title:"Linked List Operations",difficulty:"Medium",questions:8,duration:"60 mins",topic:"Linked Lists"},
      {id:4,title:"Binary Tree Traversals",difficulty:"Medium",questions:10,duration:"75 mins",topic:"Trees"},
      {id:5,title:"Dynamic Programming Set 1",difficulty:"Hard",questions:6,duration:"90 mins",topic:"DP"},
      {id:6,title:"Graph BFS/DFS Problems",difficulty:"Hard",questions:8,duration:"90 mins",topic:"Graphs"},
      {id:7,title:"Sorting & Searching",difficulty:"Medium",questions:10,duration:"60 mins",topic:"Algorithms"},
      {id:8,title:"Recursion & Backtracking",difficulty:"Hard",questions:6,duration:"80 mins",topic:"Recursion"}
    ],
    technical:[
      {id:1,title:"OS Concepts MCQs",difficulty:"Medium",questions:30,duration:"40 mins",topic:"OS"},
      {id:2,title:"DBMS & SQL Quiz",difficulty:"Medium",questions:25,duration:"35 mins",topic:"DBMS"},
      {id:3,title:"Computer Networks Basics",difficulty:"Easy",questions:30,duration:"40 mins",topic:"Networking"},
      {id:4,title:"OOP Concepts",difficulty:"Easy",questions:25,duration:"30 mins",topic:"OOP"},
      {id:5,title:"Advanced SQL Queries",difficulty:"Hard",questions:20,duration:"45 mins",topic:"DBMS"},
      {id:6,title:"System Design MCQs",difficulty:"Hard",questions:20,duration:"50 mins",topic:"Design"},
      {id:7,title:"Data Structures Theory",difficulty:"Medium",questions:30,duration:"40 mins",topic:"DSA"},
      {id:8,title:"Embedded Systems Basics",difficulty:"Hard",questions:25,duration:"45 mins",topic:"Embedded"}
    ]
  },
  mockTests:[
    {id:1,title:"TCS NQT Mock Test",company:"TCS",duration:180,questions:75,difficulty:"Easy",participants:12400,rating:4.5},
    {id:2,title:"Amazon Full Stack Assessment",company:"Amazon",duration:90,questions:3,difficulty:"Hard",participants:8900,rating:4.7},
    {id:3,title:"Infosys Reasoning & Aptitude",company:"Infosys",duration:95,questions:65,difficulty:"Easy",participants:15200,rating:4.3},
    {id:4,title:"Microsoft Campus Mock",company:"Microsoft",duration:90,questions:60,difficulty:"Hard",participants:6700,rating:4.8},
    {id:5,title:"HCL Tech Assessment",company:"HCL",duration:60,questions:50,difficulty:"Easy",participants:9300,rating:4.2},
    {id:6,title:"IBM Cognitive Test Simulator",company:"IBM",duration:75,questions:55,difficulty:"Medium",participants:7800,rating:4.6},
    {id:7,title:"Full Stack Developer Mock",company:"General",duration:120,questions:40,difficulty:"Medium",participants:11500,rating:4.4},
    {id:8,title:"Core CS Comprehensive Test",company:"General",duration:60,questions:80,difficulty:"Medium",participants:13200,rating:4.5}
  ],
  experiences:[
    {name:"Priya Sharma",company:"Amazon",role:"SDE-1",year:"2025",avatar:"PS",rating:5,summary:"The online assessment had two medium-hard LeetCode problems. Focus on Trees and DP. The bar raiser round tested leadership principles deeply — prepare real-life STAR examples!",tags:["DSA","Leadership Principles","System Design"]},
    {name:"Rahul Verma",company:"Microsoft",role:"SDE",year:"2025",avatar:"RV",rating:5,summary:"Microsoft was my dream company! 4 rounds total. They love recursion and tree problems. Interviewers were very friendly and guided me through. Tip: Think aloud — your approach matters more than perfect code.",tags:["Recursion","Trees","Good Culture"]},
    {name:"Ananya Iyer",company:"TCS",role:"Systems Engineer",year:"2024",avatar:"AI",rating:4,summary:"TCS NQT was manageable. Aptitude and verbal were straightforward. Technical interview covered CS fundamentals and my college project. HR was very relaxed. Cracked it in one attempt!",tags:["NQT","Aptitude","Fresher Friendly"]},
    {name:"Karthik Rajan",company:"Infosys",role:"Systems Engineer",year:"2024",avatar:"KR",rating:4,summary:"The puzzle section caught me off guard! Practice logical puzzles heavily. Interview was conversational — mostly about my projects and why I want to join Infosys.",tags:["Puzzles","Projects","Interview Prep"]},
    {name:"Sneha Patel",company:"IBM",role:"Associate Developer",year:"2025",avatar:"SP",rating:5,summary:"IBM's Kenexa test is unique — gamified and AI-proctored. Stay calm. Technical round focused on Python and basic ML. IBM values innovation — showcase any AI/data projects!",tags:["Kenexa","Python","AI/ML"]},
    {name:"Aditya Kumar",company:"Honeywell",role:"Software Engineer",year:"2025",avatar:"AK",rating:4,summary:"Honeywell's process was smooth. Two technical rounds focused on C++ and embedded concepts. Grilled on pointers and memory management. Networking basics also came up. Package is great!",tags:["C++","Embedded","Networking"]},
    {name:"Meera Suresh",company:"Caterpillar",role:"Software Developer",year:"2024",avatar:"MS",rating:5,summary:"Cat's campus hiring was structured and fair. Java, SQL, and aptitude are enough. Interviewers asked about scalability and system thinking. Work-life balance is AMAZING!",tags:["Java","SQL","Work-Life Balance"]},
    {name:"Dev Krishnan",company:"Motorola",role:"Embedded Engineer",year:"2024",avatar:"DK",rating:4,summary:"Motorola focuses heavily on networking and embedded systems. OSI model, TCP/IP and protocol stack questions were common. Had to write code for packet parsing in C.",tags:["Networking","Embedded C","Protocols"]},
    {name:"Lakshmi Nair",company:"Mr. Cooper",role:"Full Stack Developer",year:"2025",avatar:"LN",rating:4,summary:"Mr. Cooper surprised me with their tech stack (React + .NET). Interview was practical — built a small component on the spot. SQL queries came up heavily. Fintech is a great domain!",tags:["React","SQL","Fintech"]}
  ]
};
