'use strict';
//  using let because it change
let secretNumber=Math.trunc(Math.random()*20)+1;

let score=20;
let heighscore=0;
// how to write function for dry code, dry code means-don't reapet yourself

const displayMessage=function(message){
    document.querySelector(`.message`).textContent=message;
};

const displayNumber=function(number){
    document.querySelector(`.number`).textContent=number;
};

const displayScore=function(score){
    document.querySelector(`.score`).textContent=score;
};
// before here are function for dry code

document.querySelector(`.check`).addEventListener(`click`, function(){
    const guess=Number(document.querySelector(`.guess`).value);
    console.log(guess);

    // when there is no input

    if(!guess){
      displayMessage(`⛔ NO NUMBER`);
    }else if(guess===secretNumber){
        displayMessage(`🎉 correct number`);

       // change background color

       displayNumber(secretNumber);
       document.querySelector(`body`).style.backgroundColor=`#60b347`;

       //  change background style 

       document.querySelector(`.number`).style.width=`30rem`;

      //  how to make highscore
      if(score>heighscore){
        heighscore=score;
        document.querySelector(`.highscore`).textContent=heighscore;
      } ; 
    }else if(guess!==secretNumber){
        if (score>1){
            displayMessage(guess>secretNumber? `📉 too high!`: `📈too low!`);
            score--;
        }else{
            displayMessage(`💥You Lost the game`);
            displayScore(0);
        };
    };
});

// how to restart `again` click

document.querySelector(`.again`).addEventListener(`click`, function(){
    score=20;
    let secretNumber=Math.trunc(Math.random()*20)+1;
    displayMessage(`start guess.....`);
    displayScore(score);
    displayNumber(`?`);
    document.querySelector(`.guess`).value=``;
    document.querySelector(`body`).style.backgroundColor=`#222`;
    Document.querySelector(`.number`).style.width =`15rem`;
});