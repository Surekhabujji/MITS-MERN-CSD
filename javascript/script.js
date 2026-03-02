// console.log("Hello World!!");
// //variable we can reinitialize and redeclare also 
// var a;//global scope
// a=10;
// var a;
// a=20;
// //reinitialize
// let b=10;//block scope
//  b=20;
//  //can't redeclare or reinitialize
// const c=30;//block scope
// console.log(a);
// console.log(b);
// console.log(c);

// var num=10;
// var str="surekha";//` ` " " ' '
// var bool=true;
// var un;
// var nu=null;
// var big=1234567789n;
// var symbol=Symbol('li');

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);

// var arr=[1,2,3,4,5]
// console.log(typeof arr);

// var Obj={
//     name:"Surekha",
//     dept:"DS"
// }//Object
// console.log(Obj);
// console.log(typeof Obj);

//Arithmetic Operator
// var a=10;
// var b="2"; // when you give a char instead of this it showing NaN
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);
// console.log(a**b);

// //Relational Operator
// var a=10;
// var b="20";
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);//== is used to check the data type not a value
// console.log(a>b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a>=b);

// //logical
// var a=true;
// var b=false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

//Control statement
//Conditional statement(if,if....else,else if,switch)
//if even
var a=10;
if(a%2===0){
    console.log("Even");
}
//if...else(odd or even)
if(a%2===0){
    console.log(`${a} is even`);// Template literal
}
else{
    console.log(`${a} is odd`);
}
//else...if
var mark=80;
if(mark>90){
    console.log("O Grade");
}
else if(mark>70){
    console.log("A Grade");
}
else if(mark>35){
    console.log("Pass");
}
else{
    console.log("Fail");
}
//Terinary Operator
var s=5;
// //const result=condition?true:false
const result=(s%2===0) ? `${s} is Even` : `${s} is Odd`;
console.log(result);
var mark1=80;
const result1=(mark >= 90) ? "O Grade" :(mark >= 80) ? "A Grade" :(mark >= 70) ? "B Grade" :(mark >= 60) ? "C Grade" :"Fail";
console.log(result1);
//Switch
var day=6;
switch(day){
    case 1:{
        console.log("Sunday");
        break;
    }
    case 2:{
        console.log("Monday");
        break;
    }
    case 3:{
        console.log("Tuesday");
        break;
    }
    case 4:{
        console.log("Wednesday");
        break;
    }
    case 5:{
        console.log("Thursday");
        break;
    }
    case 6:{
        console.log("Friday");
        break;
    }
    case 7:{
        console.log("Saturday");
        break;
    }
    default:{
        console.log("Invalid");
    }

}
//Looping statement(for,while,do...while)
//For loop
for(let i=0;i<=10;i++){
    console.log(i);
}
//while loop
var num=1234;
var count=0;
while(num>0){
    count++;
    num=Math.floor(num/10);

}
console.log(count);
//do...while
var v=0;
do{
    console.log("Example Do while");
}while(v!==0);

// //Normal Function
// function add(x,y){ // with parameters
//     // var x=10;
//     // var y=20;
//     // console.log(x+y);
//     return x+y;
// }
// var res=add(10,10);
// console.log(res);

//Arrow Function(ES6)
// var add=()=>{
//     console.log("Arrow function");
// }
// add();

//with parameters
// var add=(c=0,d=0)=>{
//     console.log(c+d);
// }
// add(20,30);
// //with return
// var add=(a,b)=>{
//     return a+b;
// }
// console.log(add(10,20));

// //CallBack Function
// var add=(a,b,demo)=>{
//     var c=a+b;
//     demo(c);
// }
// var res1=(res)=>{
//     console.log(res);
// }
// add(10,20,res1);

// var add=(a,b,demo)=>{
//     var c=a+b;
//     demo(c);
// }
// add(10,10,(res)=>{
//     console.log(res);
// })
// add(10,20,(res)=>{


// })
//Spread Operator(...) (ES6)
// var arr=[1,2,3];
// var arr2=[...arr,4,5,6];
// console.log(arr);
// console.log(arr2);

// //Destructuring operator (ES6)
// var [m1,m2,m3,m4,m5]=[99,98,97,96,95];
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

// var{name,age,dept,contact}={
//     name:"surekha",
//     age:20,
//     dept:["DS","CS"],
//     contact:{
//         mobile:1234567890,
//         mail:'surekhas@gmail.com'
//     }
// }
// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(contact);

//for..in
var arr=[10,20,30,40];
for(let i in arr){
    console.log(i,arr[i]);
}
var obj={
    name:"surekha",
    age:20,
    isActive:true
}
for(let key in obj){
    console.log(key,obj[key]);
}

// //for...of
// var arr=[10,20,30,40];
// for(let val of arr){
//     console.log(val);
// }
// //forEach is a callbackfunction
// arr.forEach((val,index)=>{
//     console.log(val,index);
// })

// var arr1=[1,2,3,4,5];
// //Map to return a new array
// var double=arr1.map((val)=>(val*2));
// console.log(double); 

// //Filter according to condition
// var even=arr1.filter((val)=>(val%2===0));
// console.log(even);

// //reducer 
// var total=arr1.reduce((sum,val)=>(sum+val),0);
// console.log(total);

// var r=arr1.map((val)=>val**2).filter((val)=>val%2===0).reduce((sum,val)=>(sum+val),0);
// console.log(r);

// //Hoisting 
// //var a
// console.log(a);
// var a=10;
// // For let and const hoisting not possible
// add();//function hoisting
// function add(){
//     console.log(10+20);
// }

// //Scope 

// //Global scope
// var a=20;
// if(true){
//     var b=10;//block scope
// }
// console.log(a);
// console.log(b);

// //block scope 
// //let
// const i=10;
// if(true){
//     const j=20;
// }
// console.log(i);
// console.log(j);

//Promise
// const promise=new Promise((resolve,reject)=>{
//     var success=true;
//     if(success){
//         resolve("Task completed");
//     }
//     else{
//         reject("Task not completed");
//     }
// })
// promise.then((message)=>{
//     console.log(message);
// }).catch((err)=>{
//     console.log(err);
// })

//setTimeout
// const promise=new Promise((resolve,reject)=>{
//     var success=true;
//     if(success){
//         setTimeout(()=>{
//             resolve("Task completed");
//         },2000);
//     }
//     else{
//         reject("Task not completed");
//     }
// })
// promise.then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

//setInterval

// var count=1;
// const Intervalcount=setInterval(()=>{
//     console.log(count);
//     count++;
//     if(count>5){
//         clearInterval(Intervalcount)
//     }
// },2000);

//fetch 

// const getData=()=>{
//     return fetch("https://jsonplaceholder.typicode.com/users")
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

//Async and await
const getData=async()=>{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await res.json();
        console.log(data);

    }catch(err){
        console.log(err)
    }
}
getData();