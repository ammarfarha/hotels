// let x = parseInt(prompt("Please Enter the x value"));
// let y = 4;
// document.write(4 ** 6);
// //window.alert(x * y);
// document.getElementById("mydiv").innerHTML = 4 ** 6;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);
// window.alert("حاجة لعب يا أنطون");
// let x = 1;
// let y = "1";
// let z = 1.0;
// document.getElementById("mydiv").innerHTML = "My Name Is Ammar Farha";
// document.write("<div><h1>BBBBBBBBBBBBBBBB</h1></div>");
// document.write(x === y);
// document.write("<br>");
// document.write(x === z);
// document.write("<br>");
// document.write(Number.EPSILON);
// console.log("Hello My Dears");


//let x = 50.2;
//{
    //var y = "Ahmad";
//}

//document.getElementById("mydiv").innerHTML = x + y;

let card1 = {
    header:"My First Card", 
    content:500, 
    footer:"Card1"
};

document.getElementById("car1-head").innerHTML = card1.header;
document.getElementById("car1-content").innerHTML = card1.content;
document.getElementById("car1-footer").innerHTML = card1.footer;


const cards = [
    {
        active: true,
        header : "First Card",
        content: 600,
        footer: "Card1"
    },
    {
        active: true,
        header : "second Card",
        content: 1200,
        footer: "Card2"
    },
    {
        active: true,
        header : "thierd Card",
        content: 1500,
        footer: "Card3"
    },
    {
        active: false,
        header : "Forth Card",
        content: 2000,
        footer: "Card4"
    }
];


//console.log(document.getElementById("tbl1").children);