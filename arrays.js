function dispaly() {
  let arr = ["a", "b", "c", "d"];
  let i = 0;
  while (i < arr.length) {
    console.log(`value is ${arr[i]}`);

    i++;
  }
}
dispaly();
///////////////////////////////////////////////////////////////////////////////////////////
function reverse() {
  let arr1 = [1, 2, 3, 4, 5];
  let idx = arr1.length;
  do {
    console.log(arr1[idx]);
    idx--;
  } while (idx >= 0);
}
//reverse();
//////////////////////////////////////////////////////////////////////////////////////////

function dis1() {
  let arr1 = [1, 2, 3, 4, 5];
  for (let item of arr1) {
    // it is like for each
    console.log(item);
  }
}
// dis1();
//////////////////////////////////////////////////////////////////////////////////////////////
function dis2() {
  let str = "shubham";
  for (let item of str) {
    // it is like for each
    console.log(item); // here directly will char array
  }
}
//dis2();
/////////////////////////////////////////////////////////////////////////////////////////////////

function maps() {
  // Creating a new Map object
  const myMap = new Map();

  // Adding key-value pairs to the Map
  myMap.set("name", "John");
  myMap.set("age", 30);
  myMap.set("city", "New York");

  for (const [key, value] of myMap) {
    // but for only on object can not traverse so use In for loop for traversing
    // object
    console.log(`${key} and ${value} `);
  }
}
maps();
///////////////////////////////////////////////////////////////////////////////////////////////////////

function display_object() {
  const person = {
    name: "John",
    age: 30,
    city: "New York",
  };

  // Using a for...in loop to traverse and print object properties
  for (const key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key} and their value ${person[key]}`);
    }
  }
}
display_object();
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function for_each() {
  const str1 = ["a", "b", "c", "d", "e"];
  str1.forEach((item) => {
    console.log(item);
  });
}
for_each();
///////////////////////////////////////////////////////////////////////////////////////////////////////

const str = ["a", "b", "c", "d", "e"];
function reverse_string(str) {
  let s = 0;
  let e = str.length - 1;
  while (s <= e) {
    let temp = str[s];
    str[s] = str[e];
    str[e] = temp;
    s++;
    e--;
  }
  return str;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function print(str) {
  console.log(str);
}
let Strings = ["a", "b", "c", "d", "e"];
Strings.forEach(print); // we can pass direct function but not like this print() only ref

//////////////////////////////////////////////////////////////////////////////////////////////////////////
let Str12 = ["ab", "bb", "cb", "db", "eb"];
Str12.forEach((item, index, arr) => {
  console.log(item + " " + index + " " + arr);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////

function prints_object() {
  // take object in form of array & print
  let objects = [
    { id: 123, name: "shubham" },
    { id: 456, name: "ankit" },
    { id: 789, name: "golu" },
  ];

  objects.forEach((item) => {
    console.log(item.id + " " + item.name);
  });
}
//prints_object();
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// foreach loop does not return anything  but filter return those array which satisfy condition

let fil = [1, 2, 3, 4, 5, 7, 8, 9];

let ans_fil = fil.filter((item) => {
  return item % 2 === 0; // for even num
});
///////////////////////////////////////////////////////////////////////////////////////////////////
let ans_fil2 = fil.filter(
  (item) => item > 3 // for greter than 3, do not use { } if do not want write return
);
console.log(ans_fil);
console.log(ans_fil2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// print even using foreach

function even_print() {
  let for_each = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  let ans_for_each = [];
  for_each.forEach((item) => {
    // array.foreach(their item or element)
    if (item % 2 == 0) {
      ans_for_each.push(item);
    }
  });
  console.log(ans_for_each);
}
//even_print();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function even_print_and_biger4() {
  let for_each = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  let ans = for_each.filter((item) => item % 2 == 0 && item > 4);
  console.log(ans);
}
//even_print_and_biger4()
////////////////////////////////////////////////////////////////////////////////
// use method chaning

function chain() {
  let chain = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13];

  let ans_chain = chain
    .map((item) => item * item)
    .map((item) => item + 1)
    .filter((item) => item > 40);
  // it will return latest updated array after opration
  console.log(ans_chain);
}
chain();

/////////////////////////////////////////////////////////////////////////////////////////////////

// wap to sum using reduce method
function sum() {
  let sum = [1, 2, 3, 4, 6, 7];
  let ans_sum = sum.reduce(function (inital, curr_sum) {
    return inital + curr_sum;
  }, 0);
  console.log(ans_sum);
}
sum();
//////////////////////////////////////////////////////////////////////////////////////////////////
function sum2() {
  let sum = [1, 2, 3, 4, 6, 7];

  let ans_sum = sum.reduce((inital, curr_sum) => inital + curr_sum, 0); // 0 will pass in inital valu
  console.log(ans_sum);
}
sum2();

// make fn for addcard price

function add_card(params) {
  let card = [
    { product_name: "lapto", price: 5000 },
    { product_name: "mobile", price: 4000 },
    { product_name: "gitar", price: 7000 },
  ];
  
  let add_card_price=card.reduce((initail,curr_price)=>(initail+curr_price.price),0);
  console.log("total add card price is "+add_card_price);
}
add_card();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
