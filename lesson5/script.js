// function getAve() {
//     console.log("web brain");
//     console.log("web brain");
//     console.log("web brain");
//     console.log("web brain");
//     console.log("web brain");
//     console.log("web brain");
//     console.log("web brain");
// }
// getAve()

// function getNumber(son1 , son2 ) {
//     return(son1 + son2);
// }
// console.log(getNumber( 10 , 30));


//parametrs

// const getAva = function (name , age) {
//     console.log(`name : ${name} `);
//     console.log(`surname: ${surname}`);
//     console.log(`surname: ${age}`);
// } 
// getAva("najmiddin" , "quchkarov" , 99)


// function test(name , surname , country , skill) {
//     console.log(`mening ismim: ${name}`);
//     console.log(`mening familyam: ${surname}`);
//     console.log(`tugilganman: ${country}`);
//     console.log(`qilolaman: ${skill}`);
// }

// test("murodxon" , " Ganijonov" , "Janubiy Koreyada" , "tez yozish")
// test("tursinxon" , " Maxluqov" , "Sjuunda " , "qoshiq aytish")

// function person(ism  ,tel ,  telegram) {
//     console.log("ismi: " + ism + " " + "tel numer: " + tel  + " " + "user :" + " " + telegram);
// }
// // person()
// person( "tursinboy" , +998949876755 , "@yekiliooj")
// person( "suxrobbek" , +998976765443 , "@hgdgsffhkdy")


//=============================================================


// function reserve_a_number(n) {
//     n = n + ""
//     return n.split("").reverse().join("")
// }
// console.log(String(reserve_a_number("webbrain")));

// Sonni teskari qilish funksiyasi  
// Split () usuli String ob'ektini qatorni pastki qatorlarga ajratish orqali satrlar massiviga bo'lish uchun ishlatiladi.
// Kod: console.log('1000'.split(""));
// Chiqish : ["1", "0", "0", "0"]

// Reverse () usuli massivni joyiga qaytarish uchun ishlatiladi. Birinchi massiv elementi oxirgi, oxirgisi esa birinchi bo'ladi.
// Kod: console.log(["1", "0", "0", "0"].reverse());
// Chiqish : ["0", "0", "0", "1"] Massivning barcha elementlarini satrga birlashtirish uchun join() usuli

const Movie = function(title, director, genre, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.getDetails = function() {
        console.log(`${this.title} of the genre ${this.genre}. It is 
        directed by ${this.director}.`);
    }
 } 

 const avengers = new Movie('Avengers: Endgame', 'Joss Whedon', 'Action/Sci-fi');
 const guardians = new Movie ('Guardians of the Galaxy', 'James Gunn', 'Action/Sci-fi');

console.log(avengers); 
console.log(guardians.getDetails());
