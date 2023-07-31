console.log(typeof null); //  object
console.log(typeof undefined); // undefined

//variable and datatype
let a = 45; // will take memory in stack

a = 46;

// OBJECT
let num12 = new Object(); //singloten object & object will take memory in heap area
let sym = Symbol("n3"); // take symbol & add as key
let detils = {
  //  non singloten object
  n1: "jk",
  n2: "kl",
  sym: "hk",
};
console.log(`"valu of a is " + a + " " + ${detils.n1} + " " + ${detils.n2} `);
console.log("valu of a is " + a + " " + detils.n1 + " " + detils.n2);
detils.n1 = "shubham";

console.log("valu of a is " + a + " " + detils.n1 + " " + detils["sym"]);

detils.n2 = function () {
  console.log(`this is function  ${this.n1}`); // this refers current object
};

console.log(detils.n2());
console.log(detils.n2); // this will nothing but nothing annymous fn

/////////////////////////////////////////////////////////////////////////

let o1 = { 1: "j", 2: "l" };
let o2 = { 3: "o", 4: "p", islogin: "shubham@" };
let o3 = { ...o1, ...o2 }; // spraed & assign both object
console.log(o3);

console.log(Object.keys(o3));
console.log(Object.values(o3));
console.log(Object.entries(o3)); // it will give in from of array we can do loop
console.log(o3.hasOwnProperty("islogin")); // true

////////////////////////////////////////////////////////////////////////////

const user = [{ p1: 2, user1: "root", password: 321 },// 1st object
                      {}, // 2nd object
 
                 {}// 3rd object
                ];
console.log(user[1].password);

///////////////////////////////////////////////////////////////////////////////////////////

const data={
     i1:"shubham",
     i2:{
        i3:"aman", i4:"ghjil"// nested object
     }


}

console.log(data.i2.i4);
