//question1

var outOfStock= true;

if(outOfStock===true) {
    console.log("In stock");
}
else{
     console.log("Out of stock");
}

//question2

for(i = 15; i <= 25; i++) {
  if(i === 17 || i === 25) {
      console.log(i);
  }
}



//Question 3
var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];

var liValue1 = "";
for(i=0;i<5;i++){

    if(games[i].rating < 3.5){
        document.getElementsByTagName("ul")[0].innerHTML=liValue1 + "<li>" +games[i].title + ": " + games[i].rating+ "</li>";

        if(document.getElementsByTagName("ul")[0].innerHTML.valueOf() != ""){
            liValue1 = document.getElementsByTagName("ul")[0].innerHTML.valueOf();
        }
        
    }
}

//Question 4
var checkStringName = "this is a string";
function checkIfInputIsString(){
    if(typeof checkStringName == "string"){
        alert("I dont like");
    }
    else{
        alert("Please send in a string");
    }

}
console.log(checkStringName);

//question 5
function subtraction(num1, num2) {
    var convertedNum1 = parseFloat(num1);
    var convertedNum2 = parseFloat(num2);

    if (isNaN(convertedNum1) || isNaN(convertedNum2)) {
         
        return "Invalid argument(s)";
    }
      
       return convertedNum2 - convertedNum1;
    
    }

    var div = document.querySelector("#subtraction");

    var minus = subtraction(2, 4);
    div.innerHTML= minus;

    //question 6

    var buttonPage = document.querySelector(".page");
    var heading= document.querySelector("h1")

function change() {
    document.title = "Updated title";
    document.body.style.backgroundColor= "yellow";
    document.querySelector("h1").style.color="green";
    document.querySelector("h1").style.font="impact";
    heading.innerHTML="<a href= '#'>Programming foundation course assignment</a>"
    document.querySelector("ul").style.listStyle= "none";
    document.querySelector("ul").style.padding= "none";
  
    
    
}

buttonPage.onclick = change;


//question 7

var toys = [
    {
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    },
];


var buttonPrice= document.querySelector(".price");
var totalPrice= document.querySelector("#total")
 
function price() {
    var total = 0;
    for(var i = 0; i < toys.length; i++) {

        var itemPrice = parseFloat(toys[i].price);
        if (!isNaN(itemPrice)) {
            total = total + itemPrice;
        }
        totalPrice.innerHTML= total
    }
}
   
buttonPrice.onclick= price;


        


