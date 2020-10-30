const users = [
   {
      id: 1,
      name: 'Alex',
   },
   {
      id: 2,
      name: 'Tomara',
   },
   {
      id: 3,
      name: 'Max'
   },
];

const removeUsers = (usersArray, idsArray) => {
   return usersArray.filter((user) => {
      return !idsArray.some((id) => id === user.id);
   });
}
console.log(removeUsers(users, [2, 3]))
console.log(removeUsers(users, [3]))