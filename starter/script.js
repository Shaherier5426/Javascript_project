'use strict';
console.log(document.querySelector('.label-score').textContent);
console.log(document.querySelector('.highscore'));

// DOM manipulation 
/// dom is a structed representative of html document and allows javascript to access and manipulate the style. 

// // practice
// document.querySelector('.message').textContent = "Correct number."

// document.querySelector('.score').textContent = 100;
// document.querySelector('.highscore').textContent = 100;

// // inputs
// document.querySelector('.guess').value = 23; 
// console.log(document.querySelector('.guess').value);

// // button

// document.querySelector('.check').addEventListener('click', function(){

//     console.log(document.querySelector('.guess').value);
// } )
const MAX = 20; 
const MIN = 1; 

// let value = Math.round( Math.random() * (MAX - MIN) + MIN,0); 
// console.log(value);
// let score = 20;


// // again btn 

// document.querySelector('.again').addEventListener('click', function(){
//     value = Math.round( Math.random() * (MAX - MIN) + MIN,0); 
//     console.log(value);
//     document.querySelector('.score').textContent = 20
//     score = 20;


// })


// // check btn
// document.querySelector('.check').addEventListener('click', function(){
//     console.log(document.querySelector('.guess').value);

//     if(document.querySelector('.guess').value == value){
//         document.querySelector('.message').textContent = "Correct Number.";
//         document.querySelector('.highscore').textContent = score;
//     }
//     else{
//         score--;
//         document.querySelector('.score').textContent = score;
//         document.querySelector('.message').textContent = "Try again";
//     }
// });


// Solution Purpose to write better code 
let number = Math.round(Math.random()* (MAX-MIN) + MIN, 0);
let score = 20;
let highscore = 0;


// Check btn
document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);

if(score <= 1 ){
    document.querySelector('.message').textContent = "Try again. You lost the game";
    document.querySelector('body').style.backgroundColor = '#FF0000';
    document.querySelector('.score').textContent = 0;
    return;
}
if(!guess){
     document.querySelector('.message').textContent = "No Number !!"
}
else if (guess === number){
    document.querySelector('.message').textContent = "Correct Number.";

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
}
// else if(guess > number){
//     document.querySelector('.message').textContent = "Number is too high";
//     score--;
//     document.querySelector('.score').textContent = score;
// }
// else if(guess < number){
//     document.querySelector('.message').textContent = "Number is too low";
//     score--;
//     document.querySelector('.score').textContent = score;
// }
// reforactor it  // make function if there is repeat stuff, use of inverse to break down nest if, use of teritary operatot. dry principle. 
else if(guess != number){
    score--;
    document.querySelector('.score').textContent = score;
    guess > number ?  document.querySelector('.message').textContent = "Number is too high": document.querySelector('.message').textContent = "Number is too low";
}
})


// again btn 

document.querySelector('.again').addEventListener('click', function(){
    number = Math.round( Math.random() * (MAX - MIN) + MIN,0); 
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = null;

})