// Problem statement 1

let exampleInputArray1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

function getUsersObj(users) {
  return users.reduce((acc, el) => {
    console.log(acc, el);
    acc[el.name] = el.id;
    return acc;
  }, {})
}

let output = getUsersObj(exampleInputArray1);
// console.log(output);


// Problem statement 2
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let exampleInputArray2 = [ john, pete, mary ];

function getMassagedUsers(users){
    return users.map((user) => {
     return { "fullName" : `${user.name} ${user.surname}` , "id" : user.id} ;

    })
  
}

let output2 = getMassagedUsers(exampleInputArray2);
// console.log(output2)

export {
  getUsersObj,
  exampleInputArray1,
  getMassagedUsers,
  exampleInputArray2
}