const c1={
  "key1":"shubham",
  "key2":"ankit",
  "key3":5,
  "key4":6
}
c1.key3= function f1(){ //[Function: f1]
  console.log("hello")
}
c1.key4=function () { //[Function (anonymous)]
   console.log(`hello world ${this.key2}`)
}
console.log(c1["key3"])//[Function: f1]
c1.key3()//hello
c1.key4()//hello world ankit
console.log(c1["key4"])//[Function (anonymous)]

const arr2=[{"key1":"ankit1","key2":"ankit2"},
  {"key3":"ankit3","key4":"ankit4"}]
console.log(arr2[1])//  { key3: 'ankit3', key4: 'ankit4' }