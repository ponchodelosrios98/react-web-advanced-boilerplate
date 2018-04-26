export const conceptMean = [
  'It is structured and each person in the structure has a defined role',
  'Each person has some training in his/her position, but is constantly in a state of upgrading those skills',
  'Each person feels essential to the group',
  "The group is honest about the member's contributions: if they need improvement, then they are told nicely; if they are great, they are complemented.",
  'No person is ever demeaned. They are helped if their work is not up to par.',
  'The basic assumption is that everyone wants to do well and help out.',
  'Some people are more skilled than others and they help out the less skilled.',
  'Basic assumption: everyone can learn; everyone learns at different rates',
  'Team members are taught to have patience; no one is perfect, but they all try.',
  'They all have a common goal',
  'Common language: journalistic terms',
  'Common clothing: team T-shirt',
  'Common fun experiences: lunches, dinners, field trips, parties',
  'A sense of humor is essential for getting through stressful situations',
];

export const goals = [
  'Learn to be better writers by consistently revising; making it clear to students that all professional writers revise repeatedly. Revision is part of the process.',
  'Learn how to be treated as an equal by an adult they respect',
  "Learn to be editors and edit their own work and other's work",
  'Learn to be critical readers of newspapers and magazines',
  'Learn how to do desktop publishing',
  'Understand the power of the press in a democracy',
  'Be informed and interested in community issues',
  'Be willing to take an unpopular stand',
  'Have the courage of their convictions',
  'Understand and respect the laws of the press',
  'Understand the importance of accuracy in news',
  'Be willing to take the responsibility for their actions',
  'Learn to be organized',
  'Learn how to work effectively within time limits and under pressure',
  'Learn how to be a leader as well as a team player',
  'Learn how to interview effectively and ask difficult questions',
  'Learn how to think critically and distinguish what is important',
  'Distinguish between fact and opinion',
  'Be aware of and watch out for fallacies in logic',
  'Learn desktop publishing skills',
  'Learn to take the initiative for something they want',
  'Learn to use the computer effectively',
  'Learn how to use the Internet to do research',
  'Be skilled in using the phone to solicit advertising',
  'Be skilled in soliciting advertising in person',
  'Be responsible and show up consistently even when ill.',
  'Meet deadlines',
  'Be cooperative with everyone',
  'Realize that most people you work with will not be your friends; they are your colleagues, which is different.',
  'Learn how to communication effectively, especially when they want to complain',
  'Learn to set goals and achieve them on a regular basis',
  'Be creative in problem solving',
  'Understand the importance of finance in be able to achieve a goal',
  'Be honest with peers about problems; we work as a team and we will help you.',
  'Learn how to show appreciation to each other for a job well done',
  'Learn how to fail and not be defeated',
  'Learn how to take calculated risk',
];

export const selfGoals = [
  'To be able to have a positive impact on students lives;',
  'To work more effectively',
  'To be happy to come to work everyday',
  'To minimize negative interactions between students and between myself and students',
  'To provide a place where students can learn the most',
];


export const columns = [{
  title: 'Skills',
  dataIndex: 'skill',
  key: 'skill',
  render: (text) => text,
}, {
  title: 'Habits',
  dataIndex: 'habit',
  key: 'habit',
}, {
  title: 'Knowledge',
  dataIndex: 'knowledge',
  key: 'knowledge',
}];

export const columns2 = [{
  title: 'Begginning Journalism',
  dataIndex: 'beggining',
  key: 'beggining',
  render: (text) => text,
}, {
  title: 'Advanced Journalism',
  dataIndex: 'advanced',
  key: 'advanced',
}];

export const roles = [
  {
    beggining: 'Traditional teacher at beginning',
    advanced: 'Teacher takes on role of coach',
  },
  {
    beggining: 'Give out class syllabus',
    advanced: 'Instruction is one a one to one',
  },
  {
    beggining: 'Traditional class work',
    advanced: 'Instruction in small groups',
  },
  {
    beggining: 'Traditional homework',
    advanced: 'Teacher models behavior she expects',
  },
  {
    beggining: 'Begin to treat students as equals',
    advanced: 'No direct instruction',
  },
  {
    beggining: 'Begin to allow students to challenge me',
    advanced: 'Focus in on student-student interaction',
  },
  {
    beggining: 'Teacher is editor of their papers',
    advanced: 'Teacher as facilitator',
  },
  {
    beggining: 'Teacher sets the model for editing',
    advanced: 'Students become peer editors',
  },
  {
    beggining: 'Teacher works on group cohesiveness',
    advanced: 'Student leaders promote sense of group',
  },
];

export const preparation = [
  {
    skill: 'Computer skills',
    habit: 'Positive outlook',
    knowledge: 'News writing',
  },
  {
    skill: 'Internet skills',
    habit: 'Patience',
    knowledge: 'Editorial / opinion writing',
  },
  {
    skill: 'Writing skills',
    habit: 'Cooperativeness',
    knowledge: 'Feature writing',
  },
  {
    skill: 'Critical thinking skills',
    habit: 'Friendliness',
    knowledge: 'Review writing',
  },
  {
    skill: 'Interviewing skills',
    habit: 'Cooperativeness',
    knowledge: 'Sports writing',
  },
  {
    skill: 'Leadership skills',
    habit: 'Honesty',
    knowledge: 'Column writing',
  },
  {
    skill: 'Teamwork skills',
    habit: 'Thoroughness',
    knowledge: 'Laws of the press',
  },
  {
    skill: 'Research skills',
    habit: 'Tenacity',
    knowledge: 'Rights of students',
  },
  {
    skill: 'Assertiveness skills',
    habit: 'Determination',
    knowledge: 'Current world news',
  },
  {
    skill: 'Self-confidence',
    habit: 'Punctuality',
    knowledge: 'Current local news',
  },
  {
    skill: 'Critical reading skills',
    habit: 'Cope well with stress',
    knowledge: 'Desktop publishing',
  },
  {
    skill: 'Logic skills',
    habit: 'Meet deadlines',
    knowledge: 'Major national newspapers',
  },
  {
    habit: 'Resourcefulness',
    knowledge: 'Time Magazine',
  },
];

export default conceptMean;
