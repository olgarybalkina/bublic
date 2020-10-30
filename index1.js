const users = [
   {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female',
      ip_address: '26.58.193.2',
   },
   {
      id: 2,
      first_name: 'Petr',
      last_name: 'Jackson',
      email: 'gfrediani1@senate.gov',
      gender: 'Male',
      ip_address: '229.179.4.212',
   },
];

const GenderSelection = (array) => {
   const womenArray = [];
   const menArray = [];
   array.forEach((item) => {
      const newItem = {
         id: item.id,
         fullName: `${item.first_name} ${item.last_name}`,
         email: item.email,
         gender: item.gender,
         ip_address: item.ip_address,
      };
      if (newItem.gender === 'Male') menArray.push(newItem);
      if (newItem.gender === 'Female') womenArray.push(newItem);
   })
   return {

      women: womenArray,
      men: menArray,
   }
}
console.log(GenderSelection(users));