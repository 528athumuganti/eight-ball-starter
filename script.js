/*
  Magic 8 Ball
  Name:
  Period:
*/


function askEightBall() {

  // get input value
let userName = document.getElementById('nameInput').value;
let userQuestion = document.getElementById('questionInput').value;
console.log(userName, userQuestion);

// i wanna show the comments on the site
if(userQuestion === ""){
document.getElementById('questionOut').textContent = "You asked nothing"; 

} else {
document.getElementById('questionOut').textContent = "You asked" + "" + userQuestion;

}

let greeting;

if (userName === "") {
greeting = "Hello Mystery Person!";
} else {
greeting = `Hello ${userName}`;

}

document.getElementById('greeting').textContent = greeting;

// get a random number
let randomNumber = Math.floor(Math.random() * 8);


let eightBall = '';


if (userQuestion === ''){
  document.getElementById('questionOut').textContent = '';
  document.getElementById('answer').textContent = 'The 8 ball made a question';
  document.getElementById('answerType').innerHTML = '';

}
// get the magic 8 ball answer

switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;

}

if (userQuestion !== '') {
    document.getElementById('answer').textContent = eightBall;
    document.getElementById('answerType').textContent = answerType;
  } else {
    document.getElementById('questionOut').textContent = '';
    document.getElementById('answer').textContent = 'Ask a question first!';
    document.getElementById('answerType').textContent = '';
  }




// show the 8 ball answer type badge

let answerType = "";







// end of ask 8 ball function
}