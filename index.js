function myFunction(myName){
    return 'My name is ' .concat(myName);
};

console.log(myFunction("Olamide"));

function myFunction1(myName){
    return myName;
};

console.log(myFunction1('SendX'));

function performMathsOperation(a, b, c){
    if(c == "+") return a + b;
    if(c == "-") return a - b;
    if(c == "*") return a * b;
    if(c == "/") return a / b;

    return "invalid";
};
console.log(performMathsOperation(30, 9, "-"));

var currentDate = 2019;
var dateOfBirth = 1994;
function myDateOfBirth(a, b){
    var age = a - b;
    return   age;
};
console.log(myDateOfBirth(currentDate, dateOfBirth));

function goHomeFunction(myName){
    return 'I am about going home, '+myName;
    };
    console.log(goHomeFunction('Jos'));
    console.log(goHomeFunction('Ola'));

//Good Day
function goodDayToStartWork(readyToRoll){
    return readyToRoll;
};
console.log(goodDayToStartWork("readyToRoll"));

function myProfession(pro='Banker'){

    return 'My Profession is ' + pro;

};

  //document.getElementById('result').textContent = myProfession('Hacker');


  //OBJECT

var car = {
brand: 'Toyota',
model: 2010,
color: 'Silver',
paceNumber: 50,
displayMyBrand: function(){
    return 'My brand is ' +this.paceNumber;
    
}
}

var car2 = {
    brand: 'Camry',
    model: 2020,
    color: 'Gold',
    paceNumber: 50,
    displayMyBrand: function(){
        return 'My brand is ' +this.paceNumber;
        
    }
    }

car.paceNumber = 1000;
car.numberOfTires = 4;
console.log(car)

//document.getElementById('result').textContent = car.color;
document.getElementById('result').textContent =car.paceNumber;


var Person = function(name,age,skinColor,height, weight){ //Example of a constructor
this.name = name;  //Example of a constructor
this.age = age;
this.skinColor = skinColor,
this.height = height;
this.weight = weight


}
  

var gabby = new Person('gabby', 12, 'mol', '5.5ft', '12KG')
var ola = new Person('josh', 7, 'red', '7.5ft', '200KG')

console.log(gabby)
console.log(ola)


{


};

function timeToGo(myActivity){
    return "It's time to go home, "+myActivity;
};    
function timeToGoHome(myActivity){
    return "Thank you for the internet, "+myActivity;
};

function timeToGoHomeHappy(myActivity){
    return "Thanks for coming, "+myActivity;
};
document.getElementById('result').textContent = timeToGo('Ola');
document.getElementById('result2').textContent = timeToGoHome('Tim');
document.getElementById('result3').textContent = timeToGoHomeHappy('Gabby');
document.getElementById('result3').innerText = timeToGoHomeHappy('Gato');

function myDailyTaskForFriday(myTask){
    return 'I plan to cover how to combine multiple functions and methods in an ' +myTask;
};
function coreAreasToBeCovered(toDoTask){
    return 'Cover other key areas in ' +toDoTask;//.concat(ToDoTask);
};

document.getElementById('ToDo').innerText = myDailyTaskForFriday('Applications');
document.getElementById('toDoTask').innerText = coreAreasToBeCovered('JavaScript');
console.log(coreAreasToBeCovered('JavaScript'));

var phone = {
    name: 'Samsung',
    color: 'Pink',
    version: 2019,
    make: 'Hungary',

    displayMyPhoneMake: function(){
        return 'The name of the phone is ' +this.name;
    }
};


console.log(phone);
console.log(phone.color);//1st method for invoking a function
console.log(phone['make']);//2nd method for invoking a function 
console.log(phone.displayMyPhoneMake());



var Car = function(brand, color, seat, category){ //constructor function created
this.brand = brand;
this.color = color;
this.seat = seat;
this.category= category
};//constructor function terminated

var Porch = new Car('Porch', 'wine', 2, 'automatic'); //constructor function instantiated
var Camry = new Car('Camry', 'wine', 4, 'Manuel');
var Honda = new Car('Honda', 'silver', 5, 'automatic');
var Bens = new Car('Benz', 'Black', 4, 'automatic');

console.log(Porch); //constructor function debugged using console
console.log(Camry);
console.log(Honda);
console.log(Bens);

function timeToGo(myActivity){
    return "It's time to go home, "+myActivity;
};    
function timeToGoHome(myActivity){
    return "Thank you for the internet, "+myActivity;
};

function timeToGoHomeHappy(myActivity){
    return "Thanks for coming, "+myActivity;
};
document.getElementById('result6').textContent = timeToGo('ELLO');
document.getElementById('result7').textContent = timeToGoHome('Ben');
document.getElementById('result8').textContent = timeToGoHomeHappy('Tola');







 











