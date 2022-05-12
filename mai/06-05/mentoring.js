// recursive Funktion

// const countdown = (num) => {
//     if (num<0) {
//         return;
//     }
//     console.log(num);
//     countdown(num - 1);
// };

// countdown(20);

//----------

const mainNavTree = [
  {
    title: "Home",
  },
  {
    title: "Folder",
    children: [
      {
        title: "Item1",
      },
      {
        title: "Item2",
      },
      {
        title: "Subfolder1",
        children: [
          {
            title: "Subitem1",
          },
          {
            title: "Subitem2",
          },
        ],
      },
    ],
  },
  {
    title: "Something else",
  },
];

const print = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log();
  }
};
console.log(mainNavTree);
