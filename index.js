var readlineSync = require('readline-sync')
var username=readlineSync.question("What is your name? ")
var welcomeMessage="Welcome to the game "
console.log(`Hi!!! ${username} `+ welcomeMessage) 
var score=0



var Questions=[{
  ques:"what? ",
  ans:"yes"}
, { ques:"why? ",
  ans:"no"
}]

function play(question,answer){
  var userAnswer=readlineSync.question(question)

 if(userAnswer===answer){
    console.log("You Are Right!!!")
    score=score+4
  }else{
    console.log("You Are Wrong!!!")
    score=score-3
  }
  console.log(score)
}

for(var i=0;i<Questions.length;i++){
 var oo= Questions[i]
  play(oo.ques,oo.ans)
}

 