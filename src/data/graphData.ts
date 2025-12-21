
export interface Resource {
  title: string;
  author?: string;
  url: string;
  type: 'Article' | 'Video' | 'Book' | 'Course' | 'Tool' | 'Paper' | 'Podcast' | 'Newsletter' | 'Community' | 'Program' | 'Organization';
  rating: number; // 1-10
  description: string;
  featured?: boolean;
}

export interface NodeData {
  id: string;
  title: string;
  category: string;
  description: string;
  resources: Resource[];
  x: number; 
  y: number; 
  dependencies: string[];
}

export const graphData: NodeData[] = [
  {
    "id": "intro",
    "title": "ZKP Intuition & Introductions",
    "category": "Foundations",
    "description": "High-level intuition, core ideas, and why zero-knowledge matters.",
    "resources": [
      {
        "title": "Zero Knowledge Proofs: An Illustrated Primer",
        "url": "https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/",
        "type": "Article",
        "rating": 8,
        "description": "Classic illustrated primer explaining ZK proofs with simple examples.",
        "featured": true
      },
      {
        "title": "ZKP Overview: History, Proving Systems, Circuits, Compilers",
        "url": "https://zkp.science",
        "type": "Article",
        "rating": 8,
        "description": "Curated overview of ZKP history with links to foundational primers and system guides.",
        "featured": true
      },
      {
        "title": "History of Zero-Knowledge Proofs (LambdaClass)",
        "url": "https://blog.lambdaclass.com/our-highly-subjective-view-on-the-history-of-zero-knowledge-proofs/",
        "type": "Article",
        "rating": 8,
        "description": "Narrative overview of ZKP evolution from interactive proofs to modern SNARK systems."
      },
      {
        "title": "10 Must-Read Papers That Shaped Modern Zero-Knowledge Proofs",
        "url": "https://blog.zksecurity.xyz/posts/ten-zk-papers/",
        "type": "Article",
        "rating": 9,
        "description": "ZK/SEC quarterly overview of ten seminal ZKP papers and their impact."
      },
      {
        "title": "A Non-Mathematical Introduction to Zero Knowledge Proof",
        "url": "https://mirror.xyz/krinza.eth/5_Cr91cBK3XdkeHPQ9yjc7z_4NoTNxyqBiM4Jz4d5VE",
        "type": "Article",
        "rating": 8,
        "description": "Narrative, example-driven introduction to ZK proofs without heavy math."
      },
      {
        "title": "ZKPs for Engineers: Introduction",
        "url": "https://blog.zkga.me/intro-to-zksnarks",
        "type": "Article",
        "rating": 8,
        "description": "Engineer-focused intro to zkSNARKs with prerequisites and a Circom example."
      },
      {
        "title": "Prerequisite understanding questions",
        "url": "https://0xparc.notion.site/Prerequisite-understanding-questions-c5ebb77a5cc049f39577ec9a7fb7b22c",
        "type": "Article",
        "rating": 8,
        "description": "Readiness problem set covering modular arithmetic and CRT skills for ZK circuits."
      },
      {
        "title": "zk Battleship interactive course by sCrypt",
        "url": "https://academy.scrypt.io",
        "type": "Course",
        "rating": 8,
        "description": "Interactive lessons and exercises, including the zk Battleship learning game."
      },
      {
        "title": "Privacy in Cryptocurrencies: An Overview",
        "url": "https://medium.com/@yi.sun/privacy-in-cryptocurrencies-d4b268157f6c",
        "type": "Article",
        "rating": 8,
        "description": "Explains privacy goals and tradeoffs in cryptocurrency systems."
      }
    ],
    "x": -4.6,
    "y": -3.2,
    "dependencies": [
      "math_foundations"
    ]
  },
  {
    "id": "math_foundations",
    "title": "Math Fundamentals",
    "category": "Math Foundations",
    "description": "Finite fields, polynomials, elliptic curves, and pairings - the math toolkit for ZK.",
    "resources": [
      {
        "title": "A Graduate Course in Applied Cryptography",
        "url": "http://toc.cryptobook.us/book.pdf",
        "type": "Book",
        "rating": 8,
        "description": "Applied cryptography textbook by Boneh and Shoup; solid math and protocol prep.",
        "featured": true
      },
      {
        "title": "Computational Introduction to Number Theory and Algebra",
        "url": "https://shoup.net/ntb/ntb-v2.pdf",
        "type": "Book",
        "rating": 9,
        "description": "Book-length reference on Computational Introduction to Number Theory and Algebra."
      },
      {
        "title": "Pairings for Beginners",
        "url": "https://static1.squarespace.com/static/5fdbb09f31d71c1227082339/t/5ff394720493bd28278889c6/1609798774687/PairingsForBeginners.pdf",
        "type": "Book",
        "rating": 7,
        "description": "Beginner-friendly notes on bilinear pairings and their role in pairing-based SNARKs."
      },
      {
        "title": "Elliptic Curves & Cryptography (MoonMath Manual)",
        "url": "https://leastauthority.com/community-matters/moonmath-manual/",
        "type": "Book",
        "rating": 8,
        "description": "Free textbook covering finite fields, elliptic curves, and pairing-based cryptography for SNARKs.",
        "featured": true
      },
      {
        "title": "Modern Computer Algebra",
        "url": "https://maths-people.anu.edu.au/~brent/pd/mca-cup-0.5.9.pdf",
        "type": "Book",
        "rating": 8,
        "description": "Book-length reference on Modern Computer Algebra."
      },
      {
        "title": "Abstract Algebra",
        "url": "http://abstract.ups.edu/download/aata-20220728.pdf",
        "type": "Book",
        "rating": 8,
        "description": "Book-length reference on Abstract Algebra."
      },
      {
        "title": "Algebraic Number Theory",
        "url": "https://kashanu.ac.ir/Files/Content/ANT.pdf",
        "type": "Book",
        "rating": 8,
        "description": "Book-length reference on Algebraic Number Theory."
      },
      {
        "title": "Elliptic Curves Number Theory And Cryptography",
        "url": "https://people.cs.nctu.edu.tw/~rjchen/ECC2012S/Elliptic%20Curves%20Number%20Theory%20And%20Cryptography%202n.pdf",
        "type": "Book",
        "rating": 8,
        "description": "Book-length reference on Elliptic Curves Number Theory And Cryptography."
      },
      {
        "title": "SNARK Explained (series)",
        "url": "https://electriccoin.co/blog/snark-explain/",
        "type": "Article",
        "rating": 8,
        "description": "Multi-part walkthrough of SNARK construction from commitments to pairings.",
        "featured": false
      }
    ],
    "x": -1.6,
    "y": -0.8,
    "dependencies": []
  },
  {
    "id": "proof_mechanics",
    "title": "Proof System Mechanics",
    "category": "Proof Mechanics",
    "description": "Interactive proofs, commitments, Fiat-Shamir, and sum-check.",
    "resources": [
      {
        "title": "Succinct Non-Interactive ZK",
        "url": "https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Proof%20Systems/Computationally_Sound_Proofs.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Foundational paper on succinct non-interactive zero-knowledge arguments.",
        "featured": true
      },
      {
        "title": "Succinct NIZK without the PCP Theorem",
        "url": "http://www0.cs.ucl.ac.uk/staff/J.Groth/ShortNIZK.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Groth's construction of succinct NIZKs without relying on PCPs."
      },
      {
        "title": "Succinct NIZK without PCP Theorem & Quasi-linear prover time",
        "url": "https://eprint.iacr.org/2012/215.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Quasi-linear prover-time NIZK construction building on succinct arguments."
      },
      {
        "title": "Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge",
        "url": "https://eprint.iacr.org/2019/953.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Research paper on Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge."
      },
      {
        "title": "On the Size of Pairing-based Non-interactive Arguments",
        "url": "https://eprint.iacr.org/2016/260.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Research paper on On the Size of Pairing-based Non-interactive Arguments."
      },
      {
        "title": "On Interactive Proofs and Zero-Knowledge: A Primer",
        "url": "https://medium.com/magicofc/interactive-proofs-and-zero-knowledge-b32f6c8d66c3",
        "type": "Article",
        "rating": 9,
        "description": "Article covering On Interactive Proofs and Zero-Knowledge: A Primer.",
        "featured": true
      },
      {
        "title": "Proofs, Arguments, and Zero-Knowledge",
        "url": "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf",
        "type": "Book",
        "rating": 9,
        "description": "Lecture notes on ZKP definitions, soundness, and cryptographic assumptions.",
        "featured": true
      },
      {
        "title": "The RareSkills Book of Zero Knowledge",
        "url": "https://www.rareskills.io/zk-book",
        "type": "Book",
        "rating": 9,
        "description": "In-depth, practical book that spans ZK intuition through modern systems.",
        "featured": true
      },
      {
        "title": "RareSkills ZK Bootcamp",
        "url": "https://www.rareskills.io/zk-bootcamp",
        "type": "Course",
        "rating": 9,
        "description": "Structured course that walks through circuits, constraints, and proof systems.",
        "featured": true
      },
      {
        "title": "ZkStudyClub: Polynomial Commitments (series)",
        "url": "https://www.youtube.com/watch?v=bz16BURH_u8",
        "type": "Video",
        "rating": 9,
        "description": "Three-part session on polynomial commitments with Justin Drake.",
        "featured": true
      }
    ],
    "x": 0,
    "y": 0.4,
    "dependencies": [
      "intro"
    ]
  },
  {
    "id": "snark_r1cs",
    "title": "R1CS & Circuits (SNARK Track)",
    "category": "SNARK Track",
    "description": "R1CS, QAPs, and circuit construction for SNARKs.",
    "resources": [
      {
        "title": "Arithmetization schemes for ZK-SNARKs",
        "url": "https://blog.lambdaclass.com/arithmetization-schemes-for-zk-snarks/",
        "type": "Article",
        "rating": 8,
        "description": "Compares R1CS, AIR, and PLONK-style arithmetization approaches."
      },
      {
        "title": "Quadratic Arithmetic Programs (QAPs) and R1CS",
        "url": "https://alinush.github.io/r1cs",
        "type": "Article",
        "rating": 10,
        "description": "Deep dive on expressing NP relations as R1CS and QAPs with notation and history."
      },
      {
        "title": "Quadratic Arithmetic Programs (RareSkills)",
        "url": "https://rareskills.io/post/quadratic-arithmetic-program",
        "type": "Article",
        "rating": 8,
        "description": "Step-by-step tutorial constructing QAPs from R1CS with worked examples."
      },
      {
        "title": "Quadratic Arithmetic Programs: from Zero to Hero",
        "author": "Vitalik Buterin",
        "url": "https://medium.com/@VitalikButerin/quadratic-arithmetic-programs-from-zero-to-hero-f6d558cea649",
        "type": "Article",
        "rating": 10,
        "description": "Vitalik Buterin's comprehensive guide to QAPs, explaining the mathematics behind SNARKs.",
        "featured": true
      },
      {
        "title": "Circuit Optimisation Handout",
        "url": "https://docs.google.com/document/d/1aZ1GUAJOBFuqD4GOo9HqAH8w4xJo7HM4Bjte5-wkdnU/edit",
        "type": "Article",
        "rating": 9,
        "description": "Article covering Circuit Optimisation Handout.",
        "featured": true
      },
      {
        "title": "Circom: zkSnark circuit compiler",
        "url": "https://github.com/iden3/circom",
        "type": "Tool",
        "rating": 9,
        "description": "Tooling and codebase for Circom: zkSnark circuit compiler.",
        "featured": true
      },
      {
        "title": "RCC: Rust Circuit Compiler",
        "url": "https://github.com/delendum-xyz/rcc",
        "type": "Tool",
        "rating": 8,
        "description": "Tooling and codebase for RCC: Rust Circuit Compiler."
      },
      {
        "title": "Chiquito: DSL for Halo2 circuits",
        "url": "https://github.com/privacy-scaling-explorations/chiquito",
        "type": "Tool",
        "rating": 8,
        "description": "Tooling and codebase for Chiquito: DSL for Halo2 circuits."
      },
      {
        "title": "demo circuit",
        "url": "https://github.com/ebfull/bellman-demo",
        "type": "Article",
        "rating": 8,
        "description": "Demo project illustrating R1CS circuits and workflows."
      },
      {
        "title": "A circuit and zk-snark implement using Circom and SnarkJS by Luozhu",
        "url": "https://github.com/LuozhuZhang/zkps-circuit-snark",
        "type": "Article",
        "rating": 8,
        "description": "Article covering A circuit and zk-snark implement using Circom and SnarkJS by Luozhu."
      },
      {
        "title": "ZCash MPC Ceremony: Sapling Circuit",
        "url": "https://github.com/zcash-hackworks/sapling-mpc",
        "type": "Article",
        "rating": 8,
        "description": "Implementation notes for the ZCash Sapling circuit MPC ceremony."
      }
    ],
    "x": 3.6,
    "y": -1.2,
    "dependencies": [
      "proof_mechanics"
    ]
  },
  {
    "id": "bulletproofs",
    "title": "Bulletproofs & IPA Systems",
    "category": "Other Systems",
    "description": "Short proofs without trusted setup using inner-product arguments.",
    "resources": [
      {
        "title": "Introduction to Bulletproofs",
        "url": "https://crypto.stanford.edu/bulletproofs/",
        "type": "Article",
        "rating": 8,
        "description": "Overview and links for getting started with Bulletproofs."
      },
      {
        "title": "From Zero (Knowledge) to Bulletproofs",
        "url": "https://github.com/AdamISZ/from0k2bp",
        "type": "Article",
        "rating": 8,
        "description": "a long and very nice gradual explanation",
        "featured": true
      },
      {
        "title": "Bulletproofs: Short Proofs for Confidential Transactions and More",
        "url": "https://eprint.iacr.org/2017/1066.pdf",
        "type": "Paper",
        "rating": 10,
        "description": "Original Bulletproofs paper introducing inner-product arguments for range proofs.",
        "featured": true
      },
      {
        "title": "Bulletproofs Notes and Resources",
        "url": "https://github.com/sdiehl/bulletproofs",
        "type": "Article",
        "rating": 9,
        "description": "Notes and references for understanding Bulletproofs and inner-product arguments."
      },
      {
        "title": "Unfolding the Bulletproofs Magic: A SageMath Deep Dive",
        "url": "https://blog.zksecurity.xyz/posts/bulletproofs-sage/",
        "type": "Article",
        "rating": 9,
        "description": "Hands-on walkthrough of Bulletproofs with SageMath code and folding steps."
      },
      {
        "title": "Bulletproofs implementation in Haskell",
        "url": "https://github.com/adjoint-io/bulletproofs",
        "type": "Article",
        "rating": 8,
        "description": "Haskell implementation for Bulletproofs."
      },
      {
        "title": "Bulletproofs implementation in Rust",
        "url": "https://github.com/dalek-cryptography/bulletproofs",
        "type": "Article",
        "rating": 8,
        "description": "Rust implementation for Bulletproofs."
      },
      {
        "title": "Bulletproofs implementation in C",
        "url": "https://github.com/Tongsuo-Project/Tongsuo",
        "type": "Article",
        "rating": 8,
        "description": "C implementation for Bulletproofs."
      },
      {
        "title": "Programmable Constraint Systems for Bulletproofs",
        "url": "https://medium.com/interstellar/programmable-constraint-systems-for-bulletproofs-365b9feb92f7",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Programmable Constraint Systems for Bulletproofs."
      },
      {
        "title": "Halo: Recursive bullet proof composition",
        "url": "https://www.coindesk.com/you-can-now-prove-a-whole-blockchain-with-one-math-problem-really",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Halo: Recursive bullet proof composition."
      }
    ],
    "x": 2.6,
    "y": 1.2,
    "dependencies": [
      "proof_mechanics"
    ]
  },
  {
    "id": "stark_trace",
    "title": "Trace, AIR, and FRI (STARK Track)",
    "category": "STARK Track",
    "description": "Execution traces, AIR, and FRI for transparent proofs.",
    "resources": [
      {
        "title": "Introduction to SNARKs/STARKs by Eli Ben-Sasson",
        "url": "https://www.youtube.com/watch?v=VUN35BC11Qw",
        "type": "Video",
        "rating": 8,
        "description": "(YouTube)"
      },
      {
        "title": "Arithmetization II: We Need To Go Deeper",
        "url": "https://medium.com/starkware/arithmetization-ii-403c3b3f4355",
        "type": "Article",
        "rating": 8,
        "description": "STARK-focused arithmetization walkthrough with AIR and trace details."
      },
      {
        "title": "ZK Hack Whiteboard: SNARKs vs. STARKs",
        "url": "https://zkhack.dev/whiteboard/module-four/",
        "type": "Article",
        "rating": 8,
        "description": "Whiteboard session comparing SNARK and STARK tradeoffs."
      },
      {
        "title": "Anatomy of a STARK",
        "url": "https://aszepieniec.github.io/stark-anatomy/overview",
        "type": "Article",
        "rating": 9,
        "description": "Multi-part guide to STARK design, AIR, and FRI mechanics.",
        "featured": true
      },
      {
        "title": "STARKs (series)",
        "url": "https://vitalik.eth.limo/general/2017/11/09/starks_part_1.html",
        "type": "Article",
        "rating": 8,
        "description": "Vitalik Buterin's multi-part series introducing STARKs and FRI.",
        "featured": false
      },
      {
        "title": "Brainfuck STARK Tutorial",
        "url": "https://neptune.cash/learn/brainfuck-tutorial/",
        "type": "Article",
        "rating": 9,
        "description": "Hands-on tutorial building a STARK for Brainfuck programs (uses simple esoteric language to focus on STARK mechanics).",
        "featured": false
      }
    ],
    "x": 3.6,
    "y": 1.8,
    "dependencies": [
      "proof_mechanics"
    ]
  },
  {
    "id": "snark_systems",
    "title": "SNARK Systems",
    "category": "SNARK Track",
    "description": "Groth16, PLONK, Halo, and modern SNARK variants.",
    "resources": [
      {
        "title": "What are zk-SNARKs?",
        "url": "https://z.cash/technology/zksnarks/",
        "type": "Article",
        "rating": 8,
        "description": "Article covering What are zk-SNARKs?."
      },
      {
        "title": "zkSNARKs in a nutshell",
        "url": "https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/",
        "type": "Article",
        "rating": 9,
        "description": "Article covering zkSNARKs in a nutshell.",
        "featured": true
      },
      {
        "title": "Comments on paper: zkSNARKs in a Nutshell by Aaron",
        "url": "https://github.com/ventali/awesome-zk/tree/main/zk-intro",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Comments on paper: zkSNARKs in a Nutshell by Aaron."
      },
      {
        "title": "An approximate introduction to how zk-SNARKs are possible",
        "url": "https://vitalik.eth.limo/general/2021/01/26/snarks.html",
        "type": "Article",
        "rating": 9,
        "description": "Article covering An approximate introduction to how zk-SNARKs are possible.",
        "featured": true
      },
      {
        "title": "“SNARK” terminology and characterization of existence",
        "url": "https://eprint.iacr.org/2011/443.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "BCCT11"
      },
      {
        "title": "Understanding PLONK",
        "url": "https://vitalik.eth.limo/general/2019/09/22/plonk.html",
        "type": "Article",
        "rating": 9,
        "description": "Article covering Understanding PLONK.",
        "featured": true
      },
      {
        "title": "SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge",
        "url": "https://eprint.iacr.org/2013/507.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Research paper on SNARKs for C: Verifying Program Executions Succinctly and in Zero Knowledge."
      },
      {
        "title": "zk-SNARKs on Bitcoin",
        "url": "https://xiaohuiliu.medium.com/zk-snarks-on-bitcoin-239d96d182bd",
        "type": "Article",
        "rating": 8,
        "description": "Article covering zk-SNARKs on Bitcoin."
      },
      {
        "title": "Comparison of the most popular zkp systems",
        "url": "https://github.com/matter-labs/awesome-zero-knowledge-proofs#comparison-of-the-most-popular-zkp-systems",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Comparison of the most popular zkp systems."
      },
      {
        "title": "**Polylang**",
        "url": "https://polylang.dev",
        "type": "Article",
        "rating": 8,
        "description": "| |  | [**Miden**](https://docs.polygon.technology) | [**Risc Zero**](https://risczero.com/) | [**Noir (Barretenberg)**](https://noir-lang.org/) | [**Leo**](https://leo-lang.org/) |"
      },
      {
        "title": "Proving system comparison",
        "url": "https://youtu.be/LBTrX0Ukdvs?t=309",
        "type": "Video",
        "rating": 8,
        "description": "![compare snarks](./images/compare_snarks3.png)"
      }
    ],
    "x": 4.8,
    "y": -0.2,
    "dependencies": [
      "snark_r1cs"
    ]
  },
  {
    "id": "stark_systems",
    "title": "STARK Systems",
    "category": "STARK Track",
    "description": "STARK constructions, papers, and ecosystem overviews.",
    "resources": [
      {
        "title": "STARK @ Home {video playlist}",
        "url": "https://www.youtube.com/playlist?list=PLcIyXLwiPilUFGw7r2uyWerOkbx4GFMXq",
        "type": "Video",
        "rating": 9,
        "description": "Video session covering STARK @ Home {video playlist}.",
        "featured": true
      },
      {
        "title": "Transparent Succinct Arguments by Alessandro Chiesa (Oct 2018)",
        "url": "https://gist.github.com/Haseeb-Qureshi/f552fdbbb649ed4bbfeb681beb4091e1",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Transparent Succinct Arguments by Alessandro Chiesa."
      },
      {
        "title": "State of the STARK by Eli Ben-Sasson (Devcon IV, Oct 2018)",
        "url": "https://drive.google.com/file/d/1Osa0MXu-04dfwn1YOSgN6CXOgWnsp-Tu/view",
        "type": "Article",
        "rating": 8,
        "description": "([video](https://www.youtube.com/watch?v=1KSwVIZ82hs))"
      },
      {
        "title": "Introduction to ZK-STARKs by remco@0x.org",
        "url": "https://hackmd.io/s/rJHYnQ3Z4",
        "type": "Article",
        "rating": 9,
        "description": "Article covering Introduction to ZK-STARKs by remco@0x.org.",
        "featured": true
      },
      {
        "title": "The STARK paper",
        "url": "https://eprint.iacr.org/2018/046.pdf",
        "type": "Paper",
        "rating": 10,
        "description": "Seminal STARK paper introducing AIR and FRI for transparent proofs.",
        "featured": true
      },
      {
        "title": "libstark implementation",
        "url": "https://github.com/elibensasson/libSTARK",
        "type": "Article",
        "rating": 8,
        "description": "Article covering STARK Systems (libstark implementation)."
      },
      {
        "title": "starkware.co",
        "url": "https://www.starkware.co",
        "type": "Article",
        "rating": 8,
        "description": "More resources available at"
      },
      {
        "title": "Transparent SNARKs from DARK Compilers (Dec 2019)",
        "url": "https://eprint.iacr.org/2019/1229.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Research paper on Transparent SNARKs from DARK Compilers."
      }
    ],
    "x": 4.8,
    "y": 2.8,
    "dependencies": [
      "stark_trace"
    ]
  },
  {
    "id": "trusted_setup",
    "title": "Trusted Setup & KZG",
    "category": "SNARK Track",
    "description": "Ceremonies, KZG commitments, and setup tradeoffs.",
    "resources": [
      {
        "title": "Implementing Trusted Setup Ceremony for Ethereum’s EIP-4844",
        "url": "https://reilabs.io/blog/implementing-trusted-setup-ceremony-for-ethereums-eip-4844/",
        "type": "Article",
        "rating": 8,
        "description": "Technical post on the large-scale MPC ceremony for KZG in EIP-4844."
      },
      {
        "title": "The Incredible Machine",
        "url": "https://medium.com/qed-it/the-incredible-machine-4d1270d7363a",
        "type": "Article",
        "rating": 8,
        "description": "ZKP proving Sudoku and physical trusted setup"
      },
      {
        "title": "Diving into the zk-SNARKs Setup Phase",
        "url": "https://medium.com/qed-it/diving-into-the-snarks-setup-phase-b7660242a0d7",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Diving into the zk-SNARKs Setup Phase."
      },
      {
        "title": "Trusted Setup Workshop by 0xparc",
        "url": "https://learn.0xparc.org/materials/learning-group-1/trusted-setup",
        "type": "Article",
        "rating": 9,
        "description": "Article covering Trusted Setup Workshop by 0xparc.",
        "featured": true
      },
      {
        "title": "Setup Ceremonies",
        "url": "https://zkproof.org/2021/06/30/setup-ceremonies/",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Setup Ceremonies."
      },
      {
        "title": "On-Chain Trusted Setup Ceremony",
        "url": "https://a16zcrypto.com/on-chain-trusted-setup-ceremony/",
        "type": "Article",
        "rating": 8,
        "description": "Article covering On-Chain Trusted Setup Ceremony."
      },
      {
        "title": "How do trusted setups work?",
        "url": "https://vitalik.ca/general/2022/03/14/trustedsetup.html",
        "type": "Article",
        "rating": 9,
        "description": "Article covering How do trusted setups work?.",
        "featured": true
      },
      {
        "title": "Announcing the Perpetual Powers of Tau Ceremony to benefit all zk-SNARK projects",
        "url": "https://medium.com/coinmonks/announcing-the-perpetual-powers-of-tau-ceremony-to-benefit-all-zk-snark-projects-c3da86af8377",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Announcing the Perpetual Powers of Tau Ceremony to benefit all zk-SNARK projects."
      },
      {
        "title": "Trusted setup ceremonies explored",
        "url": "https://www.zeroknowledge.fm/133",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Trusted setup ceremonies explored."
      },
      {
        "title": "A Subversion-Resistant SNARK",
        "url": "https://eprint.iacr.org/2017/599",
        "type": "Article",
        "rating": 8,
        "description": "Article covering A Subversion-Resistant SNARK."
      },
      {
        "title": "Zero knowledge, subversion resistance, and concrete attacks | Steven Goldfeder | RWC 2018",
        "url": "https://youtu.be/DP8xSEM9bd8",
        "type": "Video",
        "rating": 9,
        "description": "Video session covering Zero knowledge, subversion resistance, and concrete attacks | Steven Goldfeder | RWC 2018.",
        "featured": true
      }
    ],
    "x": 5.2,
    "y": -2.2,
    "dependencies": [
      "snark_systems"
    ]
  },
  {
    "id": "stark_tooling",
    "title": "STARK Tooling & Languages",
    "category": "Tooling",
    "description": "Cairo, StarkNet tooling, and STARK-focused stacks.",
    "resources": [
      {
        "title": "StarkLab by FloatingPragma",
        "url": "https://floatingpragma.io/starklab",
        "type": "Tool",
        "rating": 8,
        "description": "Interactive StarkNet/Cairo lab for hands-on exploration and experiments.",
        "featured": true
      },
      {
        "title": "Miden: STARK-based zero-knowledge virtual machine",
        "url": "https://github.com/0xPolygonMiden/miden-vm",
        "type": "Tool",
        "rating": 8,
        "description": "Tooling and codebase for Miden: STARK-based zero-knowledge virtual machine."
      },
      {
        "title": "quark: decentralized state machine with STARK proofs",
        "url": "https://github.com/liamzebedee/quark-blockchain/blob/master/whitepaper.md",
        "type": "Article",
        "rating": 8,
        "description": "Article covering quark: decentralized state machine with STARK proofs."
      },
      {
        "title": "StarkNet: permissionless decentralized ZK-Rollup",
        "url": "https://starkware.co/starknet/",
        "type": "Article",
        "rating": 9,
        "description": "Article covering StarkNet: permissionless decentralized ZK-Rollup.",
        "featured": true
      },
      {
        "title": "Polygon Miden: a STARK-based zkRollup",
        "url": "https://polygon.technology/solutions/polygon-miden/",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Polygon Miden: a STARK-based zkRollup."
      },
      {
        "title": "Warp: transpile Ethereum smart contracts to Cairo",
        "url": "https://github.com/NethermindEth/warp",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Warp: transpile Ethereum smart contracts to Cairo."
      },
      {
        "title": "Isaac: a physics-powered onchain reality on Starknet",
        "url": "https://topology.gg/",
        "type": "Article",
        "rating": 8,
        "description": "and their [blog](https://www.guiltygyoza.xyz/2022/05/topology-isaac-defcon)"
      },
      {
        "title": "Suez: move Eth to the Starknet ecosystem",
        "url": "https://suez.dev/",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Suez: move Eth to the Starknet ecosystem."
      },
      {
        "title": "Papyrus: A Symbolic Execution Tool for Cairo",
        "url": "https://github.com/Veridise/Papyrus",
        "type": "Tool",
        "rating": 8,
        "description": "Tooling and codebase for Papyrus: A Symbolic Execution Tool for Cairo."
      },
      {
        "title": "chess-cairo - A Cairo contract to play chess in Starknet",
        "url": "https://github.com/greenlucid/chess-cairo",
        "type": "Article",
        "rating": 8,
        "description": "Article covering chess-cairo - A Cairo contract to play chess in Starknet."
      },
      {
        "title": "Cairo goldmine",
        "url": "https://github.com/beautyisourbusiness/cairo-goldmine#gaming",
        "type": "Article",
        "rating": 8,
        "description": "A comprehensive, annotated list repos in STARKNET",
        "featured": true
      }
    ],
    "x": 5.8,
    "y": 4,
    "dependencies": [
      "stark_trace"
    ]
  },
  {
    "id": "snark_tooling",
    "title": "SNARK Tooling & Languages",
    "category": "Tooling",
    "description": "Circom, Halo2, Noir, and popular SNARK toolchains.",
    "resources": [
      {
        "title": "Intro to Circom and Snarkjs by Iden3",
        "url": "https://iden3-docs.readthedocs.io/en/latest/iden3_repos/circom/TUTORIAL.html",
        "type": "Course",
        "rating": 8,
        "description": "Official Circom + SnarkJS tutorial with circuit and proof workflow.",
        "featured": true
      },
      {
        "title": "0xPARC circom and Halo2 learning resources",
        "url": "https://learn.0xparc.org",
        "type": "Course",
        "rating": 8,
        "description": "Curated learning paths and materials for Circom and Halo2."
      },
      {
        "title": "Zokrates Hello World Walkthrough",
        "url": "https://hackmd.io/@adietrichs/HkH0OduZw",
        "type": "Article",
        "rating": 8,
        "description": "Step-by-step Zokrates Hello World walkthrough building a simple circuit."
      },
      {
        "title": "zk-languages: A repo with basic example of most ZK languages",
        "url": "https://github.com/microbecode/zk-languages",
        "type": "Tool",
        "rating": 8,
        "description": "Tooling and codebase for zk-languages: A repo with basic example of most ZK languages."
      },
      {
        "title": "plonkit: zkSNARK toolkit to work with circom DSL in PLONK proof system",
        "url": "https://github.com/fluidex/plonkit",
        "type": "Tool",
        "rating": 8,
        "description": "Tooling and codebase for plonkit: zkSNARK toolkit to work with circom DSL in PLONK proof system."
      },
      {
        "title": "Plonk: A pure Rust PLONK implementation",
        "url": "https://github.com/ZK-Garage/plonk",
        "type": "Tool",
        "rating": 8,
        "description": "Tooling and codebase for Plonk: A pure Rust PLONK implementation."
      },
      {
        "title": "zk-ECDSA: zkSNARKs for ECDSA",
        "url": "https://0xparc.org/blog/zk-ecdsa-1",
        "type": "Article",
        "rating": 8,
        "description": "Article covering zk-ECDSA: zkSNARKs for ECDSA."
      },
      {
        "title": "Spartan ECDSA: Fast in-browser ECDSA verification",
        "url": "https://github.com/personaelabs/spartan-ecdsa",
        "type": "Tool",
        "rating": 8,
        "description": "Tooling and codebase for Spartan ECDSA: Fast in-browser ECDSA verification."
      },
      {
        "title": "Arkworks: an ecosystem for developing with zkSNARKs",
        "url": "https://github.com/arkworks-rs",
        "type": "Tool",
        "rating": 7,
        "description": "Rust libraries for fields, curves, pairings, and constraint systems.",
        "featured": true
      },
      {
        "title": "ZoKrates: a toolbox for zkSNARKs on Ethereum",
        "url": "https://zokrates.github.io/",
        "type": "Tool",
        "rating": 8,
        "description": "Tooling and codebase for ZoKrates: a toolbox for zkSNARKs on Ethereum."
      },
      {
        "title": "Snarkjs: zkSNARK implementation in JavaScript & WASM",
        "url": "https://github.com/iden3/snarkjs",
        "type": "Tool",
        "rating": 9,
        "description": "Tooling and codebase for Snarkjs: zkSNARK implementation in JavaScript & WASM.",
        "featured": true
      },
      {
        "title": "The State of Current Progress",
        "url": "https://delendum.xyz/2022/09/04/formal-verification-zk-constraint-systems.html#the-state-of-current-progress",
        "type": "Article",
        "rating": 8,
        "description": "Article covering The State of Current Progress."
      },
      {
        "title": "zkREPL: an in-browser collaborative development environment",
        "url": "https://zkrepl.dev/",
        "type": "Tool",
        "rating": 8,
        "description": "Tooling and codebase for zkREPL: an in-browser collaborative development environment."
      }
    ],
    "x": 4.2,
    "y": 4.2,
    "dependencies": [
      "snark_r1cs"
    ]
  },
  {
    "id": "advanced",
    "title": "zkEVMs & zkVMs",
    "category": "Advanced Topics",
    "description": "Execution proving stacks, recursion, and general-purpose zkVM research.",
    "resources": [
      {
        "title": "Notes on Halo",
        "url": "https://raw.githubusercontent.com/arnaucube/math/master/notes_halo.pdf",
        "type": "Paper",
        "rating": 9,
        "description": "Concise notes on Halo recursion and inner-product arguments.",
        "featured": true
      },
      {
        "title": "Matter Labs zkEVM",
        "url": "https://blog.matter-labs.io/unisync-a-port-of-uniswap-v2-on-the-zkevm-b12954748504",
        "type": "Article",
        "rating": 9,
        "description": "Article covering Matter Labs zkEVM.",
        "featured": true
      },
      {
        "title": "Hermez zkEVM",
        "url": "https://blog.hermez.io/introducing-hermez-zkevm/",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Hermez zkEVM."
      },
      {
        "title": "Scroll",
        "url": "https://hackmd.io/@yezhang/S1sJ2cEWY",
        "type": "Article",
        "rating": 8,
        "description": "and their [zkEVM](https://hackmd.io/@yezhang/S1_KMMbGt)",
        "featured": true
      },
      {
        "title": "Appliedzkp: Circuits for zkEVM",
        "url": "https://github.com/appliedzkp/zkevm-circuits",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Appliedzkp: Circuits for zkEVM."
      },
      {
        "title": "ConsenSys zkEVM",
        "url": "https://ethresear.ch/uploads/short-url/3DM8kjFfIG6PHXu4qpYpmujXgme.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "and their [gnark library](https://github.com/consensys/gnark)"
      },
      {
        "title": "TinyZKEVM",
        "url": "https://github.com/leonardoalt/tinyzkevm",
        "type": "Article",
        "rating": 8,
        "description": "Article covering TinyZKEVM."
      },
      {
        "title": "Sovereign Labs: zkEVM on Risc0",
        "url": "https://github.com/Sovereign-Labs/ethereum-vpm",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Sovereign Labs: zkEVM on Risc0."
      },
      {
        "title": "Vitalik Buterin: Halo and more: exploring incremental verification and SNARKs without pairings",
        "url": "https://vitalik.eth.limo/general/2021/11/05/halo.html",
        "type": "Article",
        "rating": 8,
        "description": "Proof size reduction",
        "featured": true
      },
      {
        "title": "Recursive Proof Composition without a Trusted Setup",
        "url": "https://eprint.iacr.org/2019/1021.pdf",
        "type": "Paper",
        "rating": 9,
        "description": "Research paper on Recursive Proof Composition without a Trusted Setup.",
        "featured": true
      },
      {
        "title": "Georgetown University COSC 544 Class Notes",
        "url": "https://people.cs.georgetown.edu/jthaler/COSC544.html",
        "type": "Article",
        "rating": 9,
        "description": "Article covering Georgetown University COSC 544 Class Notes.",
        "featured": true
      },
      {
        "title": "Pinocchio: Nearly Practical Verifiable Computation",
        "url": "https://eprint.iacr.org/2013/279.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Research paper on Pinocchio: Nearly Practical Verifiable Computation."
      },
      {
        "title": "Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger",
        "url": "https://eprint.iacr.org/2020/735",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Bulletproofs+: Shorter Proofs for Privacy-Enhanced Distributed Ledger."
      },
      {
        "title": "POSEIDON: A New Hash Function for Zero-Knowledge Proof Systems",
        "url": "https://eprint.iacr.org/2019/458.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Research paper on POSEIDON: A New Hash Function for Zero-Knowledge Proof Systems."
      },
      {
        "title": "Zether: Towards Privacy in a Smart Contract World",
        "url": "https://eprint.iacr.org/2019/191.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Research paper on Zether: Towards Privacy in a Smart Contract World."
      },
      {
        "title": "MANY-OUT-OF-MANY PROOFS",
        "url": "https://eprint.iacr.org/2020/293.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Research paper on MANY-OUT-OF-MANY PROOFS."
      },
      {
        "title": "Quisquis: A New Design for Anonymous Cryptocurrencies",
        "url": "https://eprint.iacr.org/2018/990.pdf",
        "type": "Paper",
        "rating": 8,
        "description": "Research paper on Quisquis: A New Design for Anonymous Cryptocurrencies."
      }
    ],
    "x": 2,
    "y": -2.8,
    "dependencies": [
      "snark_tooling",
      "stark_tooling"
    ]
  },
  {
    "id": "applications",
    "title": "Applications & Projects",
    "category": "Applications",
    "description": "Real-world systems and use cases built with ZK.",
    "resources": [
      {
        "title": "ZKML: Verifiable Machine Learning using Zero-Knowledge Proof",
        "url": "https://kudelskisecurity.com/modern-ciso-blog/zkml-verifiable-machine-learning-using-zero-knowledge-proof",
        "type": "Article",
        "rating": 8,
        "description": "Overview of ZKML and how ZKPs can verify ML training or inference without leaks."
      },
      {
        "title": "A Practical Guide To Building Zero Knowledge dApps",
        "url": "https://kndrck.co/posts/practical_guide_build_zk_dapps/",
        "type": "Article",
        "rating": 8,
        "description": "Hands-on guide to building a ZK dApp with Circom and SnarkJS.",
        "featured": true
      },
      {
        "title": "Delphinus zkWASM",
        "url": "https://delphinuslab.com/zk-wasm/",
        "type": "Article",
        "rating": 8,
        "description": "and their [github](https://github.com/DelphinusLab/zkWasm)"
      },
      {
        "title": "zkMove: bytecode VM",
        "url": "https://www.zkmove.net/",
        "type": "Article",
        "rating": 8,
        "description": "and their [github](https://github.com/young-rocks/zkmove)"
      },
      {
        "title": "zkRiscV: RV32I Risc-V instruction set",
        "url": "https://github.com/lucasgleba/zkRiscV",
        "type": "Article",
        "rating": 8,
        "description": "Article covering zkRiscV: RV32I Risc-V instruction set."
      },
      {
        "title": "OlaVM: An Ethereum compatible ZKVM",
        "url": "https://olavm.org/",
        "type": "Article",
        "rating": 8,
        "description": "Article covering OlaVM: An Ethereum compatible ZKVM."
      },
      {
        "title": "Tritron VM",
        "url": "https://github.com/TritonVM/triton-vm",
        "type": "Article",
        "rating": 8,
        "description": "Article covering Tritron VM."
      }
    ],
    "x": 2.2,
    "y": 5,
    "dependencies": [
      "snark_tooling",
      "stark_tooling"
    ]
  },
  {
    "id": "media_community",
    "title": "ZK Media & Community",
    "category": "Community",
    "description": "Podcasts, newsletters, and community programs for staying current.",
    "resources": [
      {
        "title": "Zero Knowledge Podcast",
        "url": "https://zeroknowledge.fm/",
        "type": "Podcast",
        "rating": 8,
        "description": "Podcast and blog covering ZK research, builders, and ecosystem updates."
      },
      {
        "title": "zkMesh: a monthly newsletter",
        "url": "https://zkmesh.substack.com/",
        "type": "Newsletter",
        "rating": 8,
        "description": "Monthly newsletter on privacy-preserving tech and ZK systems."
      },
      {
        "title": "0xPARC: Program for Applied Research in Cryptography",
        "url": "https://0xparc.org/blog/program-for-applied-research",
        "type": "Community",
        "rating": 8,
        "description": "Applied ZK research community program and learning hub."
      },
      {
        "title": "ZPrize: accelerate zero-knowledge cryptography",
        "url": "https://www.zprize.io/",
        "type": "Program",
        "rating": 8,
        "description": "Competition for accelerating ZK cryptography with challenges and resources."
      },
      {
        "title": "ZK Hash Bounties",
        "url": "https://www.zkhashbounties.info/",
        "type": "Program",
        "rating": 8,
        "description": "Ethereum Foundation bounty program for ZK hash function cryptanalysis."
      },
      {
        "title": "ZKHack Discord",
        "url": "https://discord.com/invite/tHXyEbEqVN",
        "type": "Community",
        "rating": 8,
        "description": "Community Discord for ZK Hack participants and study groups."
      }
    ],
    "x": 1.6,
    "y": 5.6,
    "dependencies": [
      "applications"
    ]
  },
  {
    "id": "security_exploitation",
    "title": "Security & Exploitation",
    "category": "Security",
    "description": "Soundness pitfalls, attack surfaces, and real-world exploit learnings.",
    "resources": [
      {
        "title": "SoK: What don't we know? Understanding Security Vulnerabilities in SNARKs",
        "url": "https://arxiv.org/abs/2402.15293",
        "type": "Paper",
        "rating": 10,
        "description": "Systematization-of-knowledge paper surveying real-world SNARK vulnerabilities."
      },
      {
        "title": "Fuzzing Processing Pipelines for Zero-Knowledge Circuits",
        "url": "https://arxiv.org/abs/2411.02077",
        "type": "Paper",
        "rating": 9,
        "description": "Fuzzing study on ZK circuit pipelines and bug-finding strategies."
      },
      {
        "title": "Specialized Zero-Knowledge Proof Failures",
        "url": "https://blog.trailofbits.com/2022/11/29/specialized-zero-knowledge-proof-failures/",
        "type": "Article",
        "rating": 8,
        "description": "Trail of Bits post analyzing niche ZK failures and missing checks."
      },
      {
        "title": "Reproducing and Exploiting ZK Circuit Vulnerabilities",
        "url": "https://blog.zksecurity.xyz/posts/zkbugs/",
        "type": "Article",
        "rating": 9,
        "description": "ZK/SEC writeup on reproducing real circuit bugs and exploit patterns."
      },
      {
        "title": "Trail of Bits: Zero-Knowledge Blog Category",
        "url": "https://blog.trailofbits.com/categories/zero-knowledge/",
        "type": "Article",
        "rating": 7,
        "description": "Collection of Trail of Bits posts on zero-knowledge vulnerabilities and audits."
      }
    ],
    "x": 1.6,
    "y": 5.4,
    "dependencies": [
      "applications"
    ]
  }
];
