// No1
// object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id,name

// let center = {
//     name : "Webbrain",
//     id: 1
// }
// console.log(Object.keys(center));

// no2
// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id

// let obj ={
//     name : "zukkowducation" ,
//     teachers : 10 ,
//     location : "beruniy",
//     id : 88838,
//   }

//   for(let i in obj){
//     if(typeof(obj[i])==="number"){
//         console.log(`${i}:${obj[i]}`);
//     }
//   }

// let obj ={
//     name : "zukkowducation" ,
//     teachers : 10 ,
//     location : "beruniy",
//     id : 88838,
//   }

//   let table = "teachers"

//   console.log(obj[table]);
//   console.log(obj["table"]);
//   console.log(obj["teachers"]);


//agar abject ichida malumot bulmasa bizaga true qaytarsin agar mlumot bulsa bizaga false qaytarsin


// let obj ={};
// function isEmpty(input) {
//     for( let kay in input){
//         return true
//     }
//     return false
// }
// console.log(isEmpty(obj));
// ===============================================


// let obj = {
//     Jhon: 100,
//     Ann: 150,
//     Jili: 200

// }

// let sum = 0;
// for ( let kalit in obj) {
//     sum += obj[kalit]
// }
// console.log(sum);

// /=================================
// for (let i in obj){
//     console.log(obj[i]);
// }

// let val = Object.values(obj)
// console.log(val);


// let menu = {
//     width: 100 ,
//     height: 150 ,
//     title: "restaurant"
// }

// const multipleObj = (obj)  =>{
//     for(let i in obj){
//         if (typeof obj[i] === 'number') {
//             obj [i] *= 2
//         }
//     }
// }

// multipleObj(menu)
// console.log(menu);




//  let number = {
//     name : "Bektemr",
//     surname : "Yuldoshev"
//  }

//  let personaj = number

//  console.log();





//=======================================

// let sum = 0;
// for (let i = 1; i <= 7 ; i++) {
//    sum += i;
// }
// console.log(sum); // 1 dan 7 gacha bulgan sonni bir biriga qushib berish funksiyasi natija 28 chiqadi


// let  number = {
//    name : "raxmat",
//    age : 90,
//    status : "Developer"
// }
//  const argument = {...number,name: "tursinboy" , age : 90, biggest:"killer"} // Spread clone yozilish funksiyasi

//  console.log(argument);




//=======================

// const telephones = {
//    models: {
//       first: {
//          name: "Iphone",
//          memory: 64
//       },
//       second: {
//          name: "Samsung Galaxy",
//          memory: 128
//       }
//    }
// };

// const {
//    models :{
//       second :{
//          name ,
//          memory
//       }
//    }
// } = telephones

// console.log(memory);    // nested obj larni ham destructure qilsa buladiga holat ifodlangan holat.

//===================================================
// let obj = {
//    name: "WBA",
//    age: 20,
//    child: {
//       age: 14,
//       child: {
//          age: 10,
//          child: {
//             age:1000
//          }
//       }
//    }
// }

// let sum = 0;
// while (true) {
//    if (obj) {
//       sum += obj.age
//       // console.log(obj.age);
//    }
//    else {
//       break
//    }
//    obj = obj.child
// }
// console.log(sum);                 // child lardagi age larni biri biri ga qushish formulasi


//=======================================
// carra jadval yasash for loop da

// for ( let i = 1 ; i <= 10 ; i++){
//    for( let j = 1; j <= 10 ; j++){
//       console.log(`${i} x ${j} = ${i*j}`);
//    }
// }





 



