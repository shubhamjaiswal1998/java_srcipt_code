// Objects
const o1 = { 1: "a", 2: "b" };

const o2 = { 3: "c", 4: "d" };
const ans_o3 = { o1, o2 };
console.log(o1, o2);

const ans_o4 = Object.assign({}, o1, o2); // {null object,o1,o2} this is syntax {target object ,all source object}
console.log(ans_o4);
/////////////////////////////////////////////////////////////////////////////////////////////////////
// desturcting of object
const de_o1 = { name: "shubham", id: 123, address: "ashapur" };

console.log(de_o1.id);

const { address } = de_o1; // after this it will print address ,syntax const {}=all_object

console.log(address); //
const { address: addr } = de_o1; // y can change adderess to addr then print
console.log(addr);
////////////////////////////////////
console.log(de_o1.address);

////////////////////////////////////////////////////////////////////////////////////////
// function

function adress() {
  console.log("shubham");
  console.log("ohubham");
  console.log("phubham");
  console.log("lhubham");
}
adress(); // it will real output on console
adress; //it will give only refernce

function print_message(name) {
  if (name === undefined) {
    console.log("please give valid user name ");
    return;
  } else {
    return `${name} is  loged in`;
  }
}
console.log(print_message("hj12@lk"));
console.log(print_message()); // without parameter return undefined

///////////////////////////////////////////////////////////////////////////////////////
function print_message1(name = "jaiswal") {
  if (name === undefined) {
    console.log("please give valid user name ");
    return;
  } else {
    return `${name} is  loged in`;
  }
}
console.log(print_message1("hj12@lk")); // it will override value jaiswal to "hj12@lk"
console.log(print_message1()); // without parameter here return jaiswal by default

////////////////////////////////////////////////////////////////////////////////////////////////
function data1(num1, num2, ...arr) {
  console.log(num1 + num2); // 3
  return arr;
}

console.log(data1(1, 2, 3, 4, 5)); // 3 ,4 5 print by fn data1 bcoz only return arr

///////////////////////////////////////////////////////////////////////////////////////////
// pass object as argumenet

function h1_object(any_object) {
  console.log(`first object value is ${any_object.n1} and second is `);
}
h1_object({ n1: "sumer", n2: "ruem" });

////////////////////////////////////////////////////////////////////////////////////////////////

// pass array as argumenet
function reverse(arr) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
  }

  return arr;
}
console.log(reverse([1, 2, 3, 4, 5]));
//////////////////////////////////////////////////////////////////////////////////////////

// closure
function f1() {
  let a = 20;

  function f2() {
    let b = 10;
    console.log(a);
  }
  //console.log(b); b not accesbile
  f2();
}
f1();

////////////////////////////////////////////////////////////////////////////////////////
// console.log(f4(2,3)); // give error bcoz without initilazation acees
let f4 = function f5(num1, num2) {
  return num1 + num2;
};
console.log(f4(2, 3)); // no give error bcoz have initialized

///////////////////////////////////////////////////////////////////////////////////
// use of this it refers current object
// this keyword used only  for object not function
let object12 = {
  id: 321,
  name: "aka",
  o12: function dispaly() {
    console.log(`welcome to this id ${this.id} & name is ${this.name} `);
    console.log(this);
  },
};
//object12.o12 this will not print give only reference
console.log(object12.o12()); //or
object12.o12();
// if we change vale of name then this refer current object

// for example
object12.name = "aman";
object12.o12();
console.log(this.object12);

// validity of this keyword
function kito() {
  let v1 = "sahu";
  console.log("this is " + this.v1); // this is undefined print bcoz not valid this for fn
}
kito();

let kito1 = () => {
  let v1 = "sahu";
  console.log("this is " + this.v1); // this is undefined print bcoz not valid this also  for array fn
};
kito1();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// use paranthesis in arrow fn ,if we use { } then use return otherwise not

let adds = (num1, num2) => {
  return num1 + num2;
};
console.log(adds(1, 5));

const adds1 = (num1, num2) => num1 + num2; // it is called explicit return most use in react
console.log(adds1(1, 6));

// return object with using ()

const adds2 = (num1, num2) => ({ sum: num1 + num2 }); // it is called explicit return most use in react
console.log(adds2(1, 6));

// imedeitily invoked function expreseeion IFEE  () ();  in first() write fn then call ();
// this is used for imidiatae call like consrtucter
((num1, num2) => {
  console.log("product is " + num1 * num2);
})(5, 6);

//////////////////////////////////////////////////////////////////////////////
(function c1(num1, num2) {
  console.log("product is " + num1 * num2);
})(5, 6);
