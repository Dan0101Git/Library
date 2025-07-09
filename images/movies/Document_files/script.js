// // making my first javascript constructor

//protypal inheritance

// function Book(title,author,pages,read){
// this.title=title;
// this.author=author;
// this.nopages=pages;
// this.read=read;
// this.info=function(){
//     console.log(`This book ${title} is written by ${author} and is huge considering ${this.nopages} pages, which i have ${read?"read":"not read"}`)
// }
// }
// function Player(name,type){
//     this.name=name;
//     this.type=type;

// }
// console.log(Book.prototype);
// // console.log(Object.getPrototypeOf(Book.prototype).prototype); only constructpor functions have .prototype property
// console.log(Object.getPrototypeOf(Book.prototype).hasOwnProperty('valueOf'));
// console.log(Object.prototype);
// Player.prototype.hey=function(){
//         console.log("this is a f"+this.name);}
// Object.setPrototypeOf(Book.prototype,Player.prototype);
// const book=new Book("the man who knew infiinity","ramanujan",1000,false);
// const player=new Player("danish","footballer");

// book.hey();



// function Book(title,author,pages,read){
// this.title=title;
// this.author=author;
// this.nopages=pages;
// this.read=read;
// this.info=function(){
//     console.log(`This book ${title} is written by ${author} and is huge considering ${this.nopages} pages, which i have ${read?"read":"not read"}`)
// }
// }
// const book=new Book("hey","i",200,true);
// let x=new Object();

// let y=[];
// y.push(1)

// // console.log(Object.setPrototypeOf(Object.prototype,Array.prototype)); this wont Worker,  sicne Object.prototype or Array.prototype are immutable
// console.log(Object.getPrototypeOf(Array.prototype)===Object.prototype)

//character game
// function Warrior(name,level,weapon){
//     Hero.call(this,name,level);
//     this.weapon=weapon;
// }
// function Healer(name, level, spell) {
//   Hero.call(this, name, level);

//   this.spell = spell;
// }

// function Hero(name,level,points){
//     this.name=name;
//     this.level=level;
//     this.points=points;
// }

// let player1=new Hero("danish",2,1);

// Hero.prototype.greet=function(){console.log(`${this.name} greets you`)}
// console.log(`hey ${Object.getPrototypeOf(Warrior.prototype)===Object.prototype}`);
// Object.setPrototypeOf(Warrior.prototype,Hero.prototype);
// console.log( Object.getPrototypeOf(Object.getPrototypeOf(Warrior.prototype))===Object.prototype);

// Object.setPrototypeOf(Healer.prototype,Hero.prototype);

// Warrior.prototype.attack=function(){
//     return `${this.name}  attacks with ${this.weapon}`;
// }// console.log(Object.getPrototypeOf(Object.getPrototypeOf(player1))===Object.prototype);
// Healer.prototype.heal=function(){
//         return `${this.name}  spells ${this.spell}`;

// }
// let hero1=new Warrior("Danish",5,"knife");
// console.log(hero1.attack());
// hero1.greet();


// javascipt info Challanges

// let animal={
//     jumps:null
// ,};

// let rabbit={
//     __proto__:animal,
//     jumps:true,
// };
// alert(rabbit.jumps);//should be true

// delete rabbit.jumps;

// alert(rabbit.jumps); //shpuld be null

// delete animal.jumps;

// alert(rabbit.jumps); //should be undefined

// challenge 2

// let head = {
//   glasses: 1,
  

// };

// let table = {
//   pen: 3,
//   __proto__:head,

// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__:table,

// };

// let pockets = {
//   money: 2000,
//   __proto__:bed,
// };

// challenge 3


// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//     // or this.stomach=[food];  second solution with no inherent stomach property in speedy or lazy
//   }
// };

// let speedy = {
//   __proto__: hamster,
//   stomach:[]
// };

// let lazy = {
//   __proto__: hamster,
//   stomach:[],
// };

// // This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// alert( lazy.stomach ); // apple

// function danish(){
//     console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(this))))===Object.prototype);
// }
// danish(); this is window object over  here,  above  code mentiones the deep prototype chain o fthe window object(when function is directly called)


// let car={
//     brand:"honda",
//     getbrand:function(){
//         return this.brand;
//     },
// };

// let brand=car.getbrand.bind(car);//bind is  afunction of Function protoype object
// console.log(brand());

//construcntor invocation

// function Car(brand){
//     this.brand=brand;
// }

// Car.prototype.getBrand=function(){
//     return this.brand;
// }
// let car=new Car('honda');
// console.log(car.getBrand());

//indirect invokation
// call and apply with function calling to provide with this as firstt argument
// getbrand.call(this.brand,seciond argument)


//arrow function cannot be used as constructor function
// let user={
//     hobbies:['cycling','guitar','bikepacking'],
//     name:'danish',
//     testme:function(){
//         this.hobbies.forEach(
//         (hobby)=>console.log(this.name+" "+hobby))
//     }//arrow function to get context of object in callbackfunctionss(new context) or use second argument with callbakc as object you want context in the callback
// }
// user.testme();

//object.create() function
// console.dir(Object.getPrototypeOf(Object.keys));
// const noproto=Object.create(null);//argument of obejct's prototype
// //main purpose of Object.create is to extend constructors

// const Car=function(mag){
//     this.mag="x";
// }
// Car.prototype.getcolor=function(color){
//     this.color=color;
//     console.log(this.color);
// }
// const Toycar=function(){}
// const newcar=new Car("x");

// const newtoycar=new Toycar();
// // Object.setPrototypeOf(Toycar.prototype,Car.prototype);
// newtoycar.getcolor('red');
// console.dir(Object.getPrototypeOf(Object.getPrototypeOf(Toycar.prototype))===Object.prototype)
// console.log(newtoycar.getcolor('red'));//set protoype of constructor to other constructor
// can use create methoid to0
//  Toycar.prototype=Object.create(Car.prototype);





//factory functions, module patterns,iife and closures practice

//scope
// var first=function(){
//     console.log("hey");
// }
// window.first();//not availabke with const andd let, first isnt attached to window object if declkared wiuth const or let
//  function bro(){
//      let cool;
//      if(1===1){
//                 const cool="bro";

//      }
//      console.log(cool)
// return cool;
//  }
//  bro();
//  for(var i=0;i<10;i++){
//     console.log(i);
//  }
//  console.log(i+"hey");

//closures

//closure first example
// function outer(){
//     const outerVar="i am the outer var";
// return function(){
//     const innerVar="i am the inner var";
//     console.log(innerVar+", "+outerVar);
// }

// }
// const user=outer();
// user();
// function createGreeting(greeting){
//     const myGreet=greeting.toUpperCase();
//     return function(name){
//         return `${myGreet} ${name}`;
//     }
// }
// const myEc=createGreeting("namaste");
// const hey=createGreeting("hey");
// console.log(myEc("danish") +", "+ hey("danish"));
// console.log(hey("ishan"));// we did in two seperate functions so as to have standardised version of each greeting, and seperate greeting type  from the personw e are greetig
//so simply whenever we need ot have a specific greet to a person, we cann that greet function on the person'sname, segragation helps in arranging js code here


//private variables
// function creategame(name){
// let score=0;
// const win=function (){
//     score++;
//     return `${name}'s score:${score}`
// }
// return win;
// }
// const game1=creategame("fifa");
// game1();
// game1();

// console.log(game1());//score is private for the closure and closure stays un the memory as logn it is pointing to thw iinner function
// function creategame(name){
// let score=0;
// const win=function (){
//     score++;
//     return `${name}'s score:${score}`
// }
// return win;
// }
// function person(){
// const game1=creategame("fifa");
// return game1;
// }
// let newgame=person();
// newgame();
// newgame();
// newgame();
// newgame();
// newgame();
// newgame();
// newgame();

// console.log(newgame());







//module patterns

// const module=(function(){
//     const log=(message)=>{console.log(message+timesRun);}
// let timesRun=0;
//     const makeUpperCase=(text)=>{
//         log("hey danish");
//         timesRun++;
//         return text.toUpperCase();
//     }
//   return {
//      newTimesRun: timesRun,
//     makeUpperCase,
// }
// })();
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// module.makeUpperCase("ishan");
// console.log(module.newTimesRun);//module  is  aoughto  flcosre too, since  makeuppercase containins variable of outer  function, so timenewrun conetxt remains same
// module.timesRun=10;
// module.makeUpperCase("ishan");
// console.log(module.newTimesRun);


//some  rules

//efficiient dom usage

//protypal inheritance again
// const person={
//     species:"humans",
//     saySpecies:function(){
//         console.log(this.species);
//     },
//     sayName:function(){
// console.log(this.name);
//     }
// }
// let musician=Object.create(person);
// console.dir(Object.getPrototypeOf(person))
// console.dir(Object.getPrototypeOf(musician)===person);


// const proto = {
//     level:0 ,
//   hello: function hello() {
//     return `Hello, my name is ${ this.name }`;
//   },
//   type:{species:"homo"}
// };

// // const george = Object.assign({}, proto, {name: 'George'});
// const george=proto;

// const msg = george.hello();
// george.hello=function(){return "danish"};
// george.level=1;

// console.dir(proto.hello());
// const counter=(function(){
//     let counter=0;
//     const getInstance=function(){
//         return this;
//     };
//     const getCount=function(){
//         return counter;};
//     const increment=function(){
//             return  counter++;
//         };
//     const decrement=function(){
//         return counter--;
//     };
//     return{getInstance,getCount,increment,decrement}
//     }

// )();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();counter.decrement();
// counter.decrement();
// counter.decrement();

// console.log(counter.getCount()); 


//gemini exercises for more confidence

// const createShoppingCart=function(taxRate){
//     const items=[];
//     const itemList=[];

//     const addItem=function(name,price){items.push({name,price})};
//     const getItemCount=function(){
//         return items.length;
//     }
//     const getTotal=function(){
//             let itemSum=0;
//          items.forEach((item)=>{itemSum=item.price+itemSum;})
//         return itemSum+((this.taxRate/100)*itemSum);
//     }
//     const getItemList=function(){
//         items.forEach((item)=>{itemList.push(item.name)});
//         return itemList;
//     }
//     return {addItem,getItemCount,getTotal,taxRate,getItemList}
// }
// const cart1=createShoppingCart(8);//create the closure

// cart1.addItem("cookie",48);
// cart1.addItem("chips",57);
// cart1.addItem("fruits",90);
// cart1.addItem("fruits",90);
// cart1.addItem("fruits",90);
// cart1.addItem("fruits",90);




// console.log(cart1.getTotal(),cart1.getItemList(),isOverBudget(cart1,250));
// function isOverBudget(cart,limit){
//     const getcartTotal=cart.getTotal;
//     return getcartTotal.call(cart)>limit
// }




//challenge 2
// const GameManager=(function(){
//     let highScore=0;
//     const getHighScore=function(){return highScore}
//     const updateHighScore=function(newScore){
//         highScore=newScore>highScore?newScore:highScore;
//     }
 
//     return{getHighScore,updateHighScore}
// })();
// const Player=function(){
//     let currentScore=0;
//     const incrementCurrentScore=function(){
//         currentScore++;
//     }
//   const {getHighScore, updateHighScore}=GameManager;
//     const getCurrentScore=function(){

//         return currentScore;
//     }
//     return{getCurrentScore,incrementCurrentScore,getHighScore,updateHighScore};
// }

// let player1=Player();
// player1.incrementCurrentScore();
// player1.incrementCurrentScore();
// player1.incrementCurrentScore();
// player1.incrementCurrentScore();
// player1.incrementCurrentScore();
// player1.incrementCurrentScore();
// console.log(player1.getCurrentScore());
// player1.updateHighScore(player1.getCurrentScore());
// console.log(player1.getHighScore());
// //factory choice good for player because we ant instances of different players with peronalsied scores
// //singleton module for gamemanager, because we can compose gamemanger's ffunctions as personalsied functionions for each player insatnce
// //i dont really get this i am i really underconfident and feeling extremely lost rigth now
// let player2=Player();
// player2.incrementCurrentScore();
// player2.incrementCurrentScore();
// player2.incrementCurrentScore();
// player2.incrementCurrentScore();
// player2.incrementCurrentScore();
// player2.incrementCurrentScore();
// player2.incrementCurrentScore();
// player2.incrementCurrentScore();
// player2.incrementCurrentScore();
// player2.incrementCurrentScore();
// player2.updateHighScore(player2.getCurrentScore());
// console.log(player2.getHighScore());
// console.log(player1.getHighScore());

// document.querySelector("#btn1").addEventListener("click",btn1handler)
// function btn1handler(){
//     this.textContent="I was clicked";
//     return
// }
// const myHandler = {
//     message: 'Button 2 was clicked!',
    
//     handleClick: function() {
//         // How do you get this to log the message property?
//         // And how could you also get it to change the button's text?
//     btn2.textContent=this.message;
//     }
// };
// const btn2=document.querySelector("#btn2");
// btn2.addEventListener("click",myHandler.handleClick.bind(myHandler))

// // Attach myHandler.handleClick to Button 2. How do you fix the 'this' context

// document.querySelector("#btn3").addEventListener("click",()=>{
//    this.textContent = 'This will not work!';//this here refers to the lexical scoping or in an arrow function it refers to the object where it can find th eobject, and hence referes to the window object here
// })


// challenge 4
// simple game world//character and physics laws()gloebal
// const world=(function(){
    
//     const updateGravity=function(){//this is private method to update the world object
//         console.log(this)
// this.gravity=this.gravity || 9.8;
//     }
//     const getGravity=function(){
//         updateGravity.bind(this)();
//      return this.gravity
//     }
//     const getWeather=function(){
//            this.weather="sunny";
//         return this.weather;
//     }
//     return{getGravity,getWeather}

// })();//singleton is perfect becoaseu it  asigular source of truth for every character in this world(hence no need of personalsiation since everyone experiences it)


// const createCharacter=function(name,health){
// let position={x:0,y:0};
// // const {getGravity,getWeather}=world;//i am not using this statemnt so as to prevent polluting chaarcter object with graivty, everytime gravityis updated
// let gravity=world.getGravity();
// let weather=world.getWeather();
// const getPosition=function(){
//     return  position;
// }

// const jump=function(){
//     position.x+=health;
//     position.y+=parseInt(health*10/gravity);

//     return `${name} jumps iwth a force against gravity of ${gravity}`
// }
// return {getPosition,jump}
// }
// const  char1=new createCharacter("danish",100);
// const char2=new createCharacter("shivam",200);
// char1.jump();char1.jump();
// char1.jump();
// char1.jump();
// char1.jump();
// char2.jump();char2.jump();char2.jump();
// console.log(char1.getPosition(),char2.getPosition());
// world.gravity=11;
// char1.jump();
// char1.jump();
// char1.jump();
// char1.jump();
// char1.jump();

// console.log(char1.getPosition());
// char2.jump();char2.jump();char2.jump();char2.jump();
// console.log(char2.getPosition());



// //challenge 5
// //part A
// const createBook=function(title,author){
//     let _isCheckedOut=false;
//     let _currentPage=0;
// const checkOut=function(){
//     _isCheckedOut=true;

// }
// const checkIn=function(){
//     _isCheckedOut=false

// }
// const read=function(pages){
//     _currentPage=pages+1;
//     return _currentPage;
// }
// const getStatus=function(){
//     return _isCheckedOut
// }
// return{checkOut,checkIn,getStatus,read} 
// }
// //partB
// const Book=function(title,author){
// this.title=title;
// this.author=author;
// this.checked=false;
// this.currentpage=0;
// }

// Book.prototype.checkOut=function(){
//     this.checked=true;
// }
// Book.prototype.checkIn=function(){
//     this.checked=false;
// }
// Book.prototype.getStatus=function(){
//    return this.checked
// }
// Book.prototype.read=function(pages){
//     this.currentpage=pages+1;
//     return this.currentpage;
// }

// //factory function felt more intuitive and naturanl, because how elegant and more natural faactory functions feel closure to actual functions than constructors are
// //also if while defining constructor you forget new, you;d get error, or unexpected result
// //privacy in factory functions is handled by closures, wile in contructors i am not sure how private the variables are
// //thiese methods live iin th eprotoype which the contructor points towards, that is in Book.protoype, the instance inehrits these mehtods
// //n factory function they live isnide the instance or the object created, hence protoype method can save memory



// //cahlenge 6

// //defining behaviors

// const canFight = {
//     attack(target) {
//         console.log(`${this.name} attacks ${target.name} for 5 damage!`);
//     }
// };

// const canCast = {
//     cast(spell, target) {
//         console.log(`${this.name} casts ${spell} on ${target.name}!`);
//     }
// };

// const canHeal = {
//     heal(target) {
//         console.log(`${this.name} heals ${target.name}.`);
//     }
// };
// const createCharacter=function(name){
// const getHealth=function(health=100){
//     this.health=health;
//     return this.health
// }
// return{name,getHealth}
// }
// let warrior=Object.assign(createCharacter("danish"),canFight);


// let Priest=Object.assign(createCharacter("arora"),canCast,canHeal);
// warrior.attack(Priest)
// //justification:it knew that this.name belongs to warrior names danish, becuase object.assign copied gethealth and name along with canfight object, into an object createing personalised  can fight or can heal for each character, along with their name, also we are calling warrior.attack, hence this is attached to warrior and target.name is a personalsied property of character priest
// //composition makes it possile since we ar ecomposing a new obejct 
// //this way we can have eprsonalised properties of each object and kind of mixc characters over single traits without worrying about mixing proerties



//challenge 7(architect)
//text absed dungeon game
const Game=(function(){
   let state=false;
    const start=function(){
        state=true;
    };
   const stop=function(){
       state=false;
    };
    const getState=function(){
        return state;
    }
    return {start,stop,getState};
})();
const Character=function(initialStrength){
     let health=100;
     let strength=initialStrength;


   const updateHealth=function(weaponStrength=0){
        if(health>0 && weaponStrength!==100)
        health-=strength+weaponStrength;
    
    else if(weaponStrength===100){
        health=100;
        return;
    }
}
    const getHealth=function(){
        return health;
    }
    const updateStrength=function(charStrength){
            strength=charStrength;

    }
   return {updateHealth,getHealth,updateStrength} 
}
const Loot=function(name,power){
  
return{name,power}
}

const healthPlus=new Loot("Health Potion",100);
const sword=new Loot("sword",10);
const fire=new Loot("fire",20);
const water=new Loot("water",15);



const Player=(function(){
    const inventory=[sword,fire];
    let name;
    
   const setInventory=function(item){
    inventory.push(item);
    console.log(inventory);
   }
    const getStrength=function(){
        let weaponStrength=inventory[Math.floor(Math.random()*inventory.length)].power;
        // console.log(weaponStrength);
        return weaponStrength;
    }
 return Object.assign({},{getStrength,setInventory},Character(24))
})();
const monster=function(name){
  const inventory=[sword,fire,water,healthPlus];
    const attack=function(target){
        if(Game.getState()){ if(target.getHealth()>0 && this.getHealth()>0){  this.updateHealth(target.getStrength());
        target.updateHealth();
        console.log(this.getHealth())
   console.log(this.getHealth()<=0);
    }
     if( !target.getHealth()>0 || inventory.length===0)
    {
        Game.stop();
        console.log(target.getHealth());
        console.log(`game over, ${this.name} gave a final blow to player`)
    }
    if(this.getHealth()<=0){
        this.updateItems(this,target)
    }}
        // console.log(target.getStrength())
       
}
const updateItems=function(mon,target){
    let newItem=inventory.pop();
    console.log(inventory)
    mon.updateHealth(newItem.power);
    console.log(newItem);
    target.updateHealth(newItem.power);
   target.setInventory(newItem);
}
      

    return Object.assign({},{attack,name,updateItems},Character(15))
}
const Goblin=new monster("goblin");
const Gargantua=monster("giant");
Game.start();
Gargantua.updateStrength(30);
console.log(Gargantua);
Goblin.attack(Player);
Goblin.attack(Player);
Goblin.attack(Player);
Goblin.attack(Player);
Goblin.attack(Player);
Goblin.attack(Player);
Goblin.attack(Player);
Gargantua.attack(Player);
Gargantua.attack(Player);
Gargantua.attack(Player);

Gargantua.attack(Player);

console.log(Goblin.getHealth());
console.log(Player.getHealth());






