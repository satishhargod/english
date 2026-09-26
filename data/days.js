// ==========================================================
// Yaha par naya day add karna ho to bas is array me
// ek naya object add kar do. Baaki sab automatic ho jayega
// (home page pe naya card, aur uski apni reading page).
//
// Format:
// {
//   id: 1,                 -> unique number (URL me use hota hai)
//   title: "Day 1",        -> card pe dikhne wala title
//   summary: "short line",  -> card pe dikhne wali chhoti line
//   content: `Full paragraph text...`
// }
// ==========================================================

const days = [
  {
    id: 1,
    title: "Day 1",
    summary: "A normal day at home and office",
    content: `I woke up in the morning and had a glass of water. After that, I went to the washroom, but someone was already inside. So, I asked Vishal to come outside with me because I wanted to wash my face.

After some time, Vishal came out, and then I went to the washroom. I got freshened up and went upstairs to have some tea. However, there was no tea ready at that time.

So, I went to Maharaj and asked about the tea. He told me that I would have to wait for about ten minutes. After around ten minutes, the tea arrived. I had my tea and then came back downstairs.

After coming downstairs, I lay down on my bed for a while and used my phone. After that, I called my mother and talked to her about things at home. Then, I talked to my son, Nityam, about his school and asked him how everything was going.

Later, I also made a phone call to my wife and talked to her for some time.

After that, I got ready and left for the office. I reached the office and started my work. I spent most of the day working on my tasks, attending calls, checking messages, and completing my pending work. I also interacted with my colleagues and discussed the work that needed to be completed.

During the day, I took a short break for lunch and then continued working. I completed my important tasks and wrapped up my work in the evening.

After finishing my work at the office, I left for home. I reached home in the evening and relaxed for some time. I spent some time with my family and talked to them about how their day had been.

After that, I had dinner and spent some time on my phone. Finally, I went to bed and took some rest.

Overall, it was a normal but busy day. I spent time with my family, completed my office work, and also got some time to relax.`,
  },

  // Example of how Day 2 will look — uncomment and edit when ready:
  // {
  //   id: 2,
  //   title: "Day 2",
  //   summary: "A short one-line summary of the day",
  //   content: `Your Day 2 paragraph goes here...`,
  // },
];

export default days;
