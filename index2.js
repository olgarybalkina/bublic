const initialData = [
   {
      username: 'Maria',
      age: 25,
   },
   {
      username: 'Alex',
      age: 21,
   },
   {
      username: 'Oleg',
      age: 14,
   },
   {
      username: 'Dmitriy',
      age: 35,
   },
   {
      username: 'Oksana',
      age: 72,
   },
];

const sortArray = (array) => {
   const newArray = array.filter((item) => item.age >= 21);
   newArray.sort((a, b) => {
      if (a.username > b.username) {
         return 1;
      }
      if (a.username < b.username) {
         return -1;
      }
      return 0;
   });
   return newArray;
}
console.log(sortArray(initialData));