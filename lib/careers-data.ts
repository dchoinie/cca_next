export interface OpenPosition {
  title: string;
  reportsTo: string;
  startTime: string;
  positionType: string;
  salaryRange: string;
  contact: {
    mail: string;
    email: string;
  };
  whoWeAreLookingFor: string;
  qualifications: string[];
  candidatesMust: string[];
  responsibilities: string[];
  benefits: string[];
  active: boolean;
}

export const openPositions: OpenPosition[] = [
  {
    title: "K-8 Latin and Middle School Teacher",
    reportsTo: "Headmaster and the Academic Dean",
    startTime: "July 2026",
    positionType: "Full-time teaching position",
    salaryRange: "$40,000 - $48,000",
    contact: {
      mail: "2101 Lor Ray Drive, North Mankato, MN 56003",
      email: "pastor@ccamankato.education",
    },
    whoWeAreLookingFor:
      "Concordia Classical Academy is prayerfully seeking a gifted and passionate confessional Christian educator to join us in our mission to partner with families to help students to grow in the grace and knowledge of our Lord Jesus Christ as they grow in body, mind, and spirit with truth, goodness, and beauty.",
    qualifications: [
      "A bachelor's degree or higher, preferable in elementary education or classical education",
      "Five or more years of teaching experience with students ranging from K-8th grade",
      "Experience teaching Latin",
      "Knowledge of classical education",
      "A love for teamwork",
      "A drive to help students grow in the grace and knowledge of our Lord and Savior Jesus Christ in body, mind and spirit through what is true, good, and beautiful",
      "Willing to be flexible to teach other subjects as needed as our school continues to grow",
      "*New graduates are also encouraged to apply!",
    ],
    candidatesMust: [
      "Be a confessing Christian who agrees that the Bible is the true and inerrant Word of God and the only source of doctrine and truth",
      "Agree that the Apostle's Creed is a true and trustworthy statement of the Christian faith",
      "Be an active, practicing member of a Christian congregation (preferable Lutheran) that agrees with the above statements of teaching",
    ],
    responsibilities: [
      "Teach all Latin classes in grades K-8",
      "Review curriculum needs for the Latin program and implement a systemic program of instruction",
      "Teach other subjects as needed and according to subject-matter mastery in grades 5-8",
    ],
    benefits: [
      "Opportunities for professional development",
      "A supportive work environment",
      "Concordia Plan benefits",
    ],
    active: true,
  },
];
