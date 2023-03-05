var data = [
    {code: "COMS10016", title: "Imperative and Functional Programming", year: 1, tb: 1, pre: []},
    {code: "COMS10015", title: "Computer Architecture", year: 1, tb: 1, pre: []},
    {code: "COMS10014", title: "Mathematics for Computer Science A", year: 1, tb: 1, pre: []},
    {code: "COMS10017", title: "Object-Oriented Programming and Algorithms I", year: 1, tb: 2, pre: ["COMS10016"]},
    {code: "COMS10012", title: "Software Tools", year: 1, tb: 2, pre: ["COMS10016", "COMS10015"]},
    {code: "COMS10013", title: "Mathematics for Computer Science B", year: 1, tb: 2, pre: ["COMS10014"]},
    {code: "COMS20007", title: "Programming Languages and Computation", year: 2, tb: 1, pre: ["COMS10016", "COMS10014"]},
    {code: "COMS20008", title: "Computer Systems A", year: 2, tb: 1, pre: ["COMS10016", "COMS10015", "COMS10014", "COMS10017", "COMS10012", "COMS10013"]},
    {code: "COMS20010", title: "Algorithms II", year: 2, tb: 1, pre: ["COMS10017", "COMS10014", "COMS10013"]},
    {code: "COMS20009", title: "Interaction and Society", year: 2, tb: 2, pre: ["COMS10013"]},
    {code: "COMS20012", title: "Computer Systems B", year: 2, tb: 2, pre: ["COMS10016", "COMS10014", "COMS10013", "COMS10015", "COMS10012", "COMS20007", "COMS20008"]},
    {code: "COMS20011", title: "Data-Driven Computer Science", year: 2, tb: 2, pre: ["COMS10014"]},
    {code: "COMS20006", title: "Software Engineering Project", year: 2, tb: 4, pre: ["COMS10016", "COMS10017", "COMS10014", "COMS10013"]},
    {code: "COMS30042", title: "Advanced Algorithms", year: 3, tb: 1, pre: ["COMS10016", "COMS10017", "COMS20010"], skills: ["Solid understanding of O-notation and recurrence relations, the greedy, divide-and-conquer and dynamic programming paradigms of algorithm design, proof by induction and contradiction, discrete probability.", "Previous exposure to pseudocode.", "A solid understanding of arrays, linked lists, and priority queues."]},
    {code: "COMS30014", title: "Artificial Intelligence", year: 3, tb: 1, pre: ["COMS10016", "COMS10017", "COMS10014", "COMS10013", "COMS20011"], skills: ["Programming paradigms, mathematics (including statistics, probability and algebra), and also desirable basic ideas of data mining/analysis."]},
    {code: "COMS30017", title: "Computational Neuroscience", year: 3, tb: 1, pre: [], skills: ["Basic knowledge of Python or Julia programming languages would help as the courseworks (both formative and summative) will be best implemented in these languages. No previous neuroscience knowledge is required."]},
    {code: "COMS30020", title: "Computer Graphics", year: 3, tb: 1, pre: ["COMS10016", "COMS10017", "COMS20010"], skills: ["Proficiency programming with C.", "Knowledge of linear algebra.", "Knowledge of matrices and vectors."]},
    {code: "COMS30023", title: "Cryptology", year: 3, tb: 1, pre: ["COMS10017", "COMS10014", "COMS10013", "COMS20010"], skills: ["A working understanding of algorithms and complexity analysis (Understanding Big-Oh notation, Analyze WCET of an algorithm in terms of elementary operations)", "Exposure to abstract algebra or number theory (Groups, cyclic groups and finite fields, Polynomials)", "A working understanding of (discrete) probability theory, e.g. General manipulation of probability expressions", "For assessment by coursework: basic programming skills in at least one language"]},
    {code: "COMS30026", title: "Design Verification", year: 3, tb: 1, pre: ["COMS10016", "COMS10017", "COMS20008"], skills: ["Strong programming skills, software engineering skills and a basic understanding of computer architecture."]},
    {code: "COMS30029", title: "Human-Computer Interaction", year: 3, tb: 1, pre: ["COMS10014", "COMS10013", "COMS20009"], skills: ["Knowledge of statistics (for experimental research) and qualitative research methods."]},
    {code: "COMS30030", title: "Image Processing and Computer Vision", year: 3, tb: 1, pre: ["COMS10016", "COMS10017", "COMS10014", "COMS10013", "COMS20011"]},
    {code: "COMS30035", title: "Machine Learning", year: 3, tb: 1, pre: ["COMS10016", "COMS10017", "COMS10014", "COMS10013", "COMS20011"], skills: ["Programming paradigms, mathematics (including statistics, probability and algebra), and also desirable basic ideas of data mining/analysis."]},
    {code: "COMS30038", title: "Security Behaviours", year: 3, tb: 1, pre: [], skills: ["Ability to write basic scripts in a commonly-used programming language, e.g. Python. There are no other explicit prerequisites, but a general computer science background is assumed."]},
    {code: "COMS30040", title: "Types and Lambda Calculus", year: 3, tb: 1, pre: ["COMS10014", "COMS10013", "COMS20007"], skills: ["Basic set theory", "basic logical notation", "read and write mathematical proofs", "proof by induction", "implement functional programs in any functional programming language", "decidable vs undecidable problems", "draw syntax trees of expressions", "read and write types of expressions."]},
    {code: "COMS30045", title: "Individual Project", year: 3, tb: 2, pre: []},
    {code: "COMS30043", title: "Team Project", year: 3, tb: 2, pre: []},
    {code: "COMS30046", title: "Advanced Computer Architecture", year: 3, tb: 2, pre: ["COMS10016", "COMS10017", "COMS10015", "COMS20008", "COMS20012", "COMS20010"], skills: ["Strong programming skills.", "Good knowledge of computer architecture."]},
    {code: "COMS30048", title: "Applied Cryptology", year: 3, tb: 2, pre: ["COMS30023"], skills: ["Software developing using low-level languages (e.g., C and assembly language) and tools.", "Number theory (e.g., finite fields)", "Cryptography (e.g., primitives such as AES and RSA)", "Computer architecture (e.g., properties of instruction execution)", "Computer networks (e.g., TCP/IP)."]},
    {code: "COMS30050", title: "Applied Data Science", year: 3, tb: 2, pre: ["COMS10016", "COMS10017", "COMS10014", "COMS10013", "COMS20011", "COMS30035"], skills: ["Good knowledge of machine learning", "Programming: Python or another major programming language (Java, C)", "Maths: basic linear algebra, basic statistics, some calculus, some discrete maths."]},
    {code: "COMS30058", title: "CGI", year: 3, tb: 2, pre: [], skills: ["An interest in graphics production and the creative design process is important.",  "Experience of using CAD, a 3D software environment and/or a games engine would obviously be ideal – but not essential."]},
    {code: "COMS30053", title: "High Performance Computing", year: 3, tb: 2, pre: ["COMS10016", "COMS10017", "COMS20007", "COMS20010"], skills: ["Strong programming skills", "Experience with the C programming language", "Good knowledge of computer architecture."]},
    {code: "COMS30060", title: "Interaction Design", year: 3, tb: 2, pre: ["COMS10016", "COMS10017", "COMS10013", "COMS20009"], skills: ["Probability and statistics and skills in programming."]},
    {code: "COMS30056", title: "Robotic Systems for Computer Scientists", year: 3, tb: 2, pre: [], skills: ["C/C++"]},
    // {code: "COMSMXXX1", title: "Advanced Computer Vision", year: 4, tb: 1, pre: ["COMS10016", "COMS10017", "COMS10014", "COMS10013", "COMS20011", "COMS30030"], skills: ["Introductory course in Computer Vision.", "Programming skills in C++ and OpenCV"]},
    {code: "COMSM0042", title: "Advanced Cryptology", year: 4, tb: 1, pre: ["COMS10017", "COMS10014", "COMS10013", "COMS20010", "COMS30023"], skills: ["Working understanding of algorithms and complexity analysis (Understanding Big-O notation, Analyze WCET of an algorithm in terms of elementary operations, Understanding polynomial running times)", "Exposure to abstract algebra or number theory (Groups, cyclic groups and finite fields, Polynomials, Linear algebra)", "A good understanding of (discrete) probability theory (General manipulation of probability expressions, Manipulation of distributions, random variables)", "Exposure to basic cryptographic reductions and game-based security definitions"]},
    {code: "COMSM0067", title: "Advanced Topics in Programming Languages", year: 4, tb: 1, pre: ["COMS10016", "COMS10017", "COMS20007"], skills: ["Types and Lambda Calculus (COMS30009 in the old curriculum; COMS30040 in the new curriculum) will be beneficial, but not required."]},
    {code: "COMSM0068", title: "Advanced Topics in Theoretical Computer Science", year: 4, tb: 1, pre: ["COMS10016", "COMS10017", "COMS20007", "COMS20010", "COMS30042"]},
    {code: "COMSM0045", title: "Applied Deep Learning", year: 4, tb: 1, pre: ["COMS10016", "COMS10017", "COMS10014", "COMS10013", "COMS20011", "COMS30035"]}
    {code: "COMSM0075", title: "Information Processing and the Brain", year: 4, tb: 1, pre: ["COMS10014", "COMS10013"], skills: ["A knowledge of Python or Julia.", "A basic knowledge of probability theory and of differential equations."]},
    {code: "COMSM0046", title: "Internet Economics and Financial Technology", year: 4, tb: 1, pre: [], skills: ["Students are not expected to have any background in economics or finance.", "A general computer science background is assumed.", "Coursework will require coding in Python, so a familiarity with Python is an advantage."]},
    {code: "COMSM0134", title: "Sustainable Computing", year: 4, tb: 1, pre: [], skills: []},
    {code: "COMSM0049", title: "Systems and Software Security", year: 4, tb: 1, pre: ["COMS10016", "COMS10017", "COMS10015", "COMS10012", "COMS20007", "COMS20008", "COMS20012"], skills: ["C Programming", "Computer Architecture", "Software Development Tools", "Compilers", "Operating Systems", "NetworkingS"]},
    {code: "COMSM0052", title: "Individual Project with Innovation Case", year: 4, tb: 2, pre: []}
]
