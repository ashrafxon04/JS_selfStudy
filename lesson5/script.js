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

// function person(ism ,tel ,  telegram) {
//     console.log("ismi: " + ism + " " + "tel numer: " + tel  + " " + "user :" + " " + telegram);
// }
// person( "sohibjon" , +998943755547 , "@mancioll011")
// person( "tursinboy" , +998949876755 , "@yekiliooj")
// person( "suxrobbek" , +998976765443 , "@hgdgsffhkdy")

function reserve_a_number(n) {
    n = n + ""
    return n.split("").reverse().join("")
}
console.log(Number(reserve_a_number(66227)));