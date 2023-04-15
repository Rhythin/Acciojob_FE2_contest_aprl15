/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
}

function addData() {
  //Write your code here, just console.log
  let objToBeAdded={id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(objToBeAdded)
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter(person=> person.profession !== "admin")
  
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
}
