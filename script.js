/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.foreach(function(x) {
    if(profession == 'developer'){
      e = arr.name;
      console.log(e);
    }
    
  });
}

function addData() {
  //Write your code here
  let obj1= {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj1);
  console.log(arr);
  
}

function removeAdmin() {
  //Write your code here
  arr = arr.filter(function(x) {
   return x.profession != "admin";
  });
  console.log(arr);
  
  
}

function concatenateArray() {
  //Write your code here
  let arr1 = [
  { id: 5, name: "Ayushi", age: "18", profession: "developer" },
  { id: 6, name: "Arya", age: "20", profession: "developer" },
  { id: 7, name: "Palak", age: "19", profession: "admin" },
  ];
  let arr3 = arr.concat(arr1);
  console.log(arr3);
  
}
