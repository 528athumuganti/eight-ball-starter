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

let greeting

if (userName === "") {
greeting = "Hello Mystery Person!";
} else {
greeting = `Hello ${userName}`;

}

document.getElementById('greeting').textContent = greeting;

// get a random number

if (userQuestion === ''){
  document.getElementById('questionOut').textContent = '';
  document.getElementById('answer').textContent = 'The 8 ball made a question';
  document.getElementById('answerType').innerHTML = '';


}
// get the magic 8 ball answer

// show the 8 ball answer type badge










// end of ask 8 ball function
}