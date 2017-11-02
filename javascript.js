
// Homework exercise 1
// Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.

var x = 7
var y = 9

console.log (x+y)


var hockey = "islanders"
var baseball = "mets"

console.log ( hockey + " " + baseball )


// Homework exercise 2
// Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var sports = ["hockey", "baseball", "soccer", "football"]
var hockeyteams = ["Islanders", "Rangers", "Flyers", "Senators"]
var islanders = ["Tavares", "Boychuck", "Ladd", "Greiss", "Halak", "Clutterbuck", "Leddy"]

console.log ( "My favorite sport is " + sports[0] + ". My favorite team is the " + hockeyteams[0] + ". I have a crush on the player " + islanders[5] + ".")



// Homework exercise 3
// Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.





document.getElementById("submit-btn").addEventListener("click", validateNumber);


  function validateNumber() {
    var num = document.getElementById("number").value;

    if (num<100){
      return alert("Your answer is less than 100!");
    }

    else {
      return alert("sorry, your answer is " + num + " which is greater than 100");
    }

}


// Homework exercise 4
// Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.


document.getElementById("submit-btn2").addEventListener("click", alertName);

  function alertName() {
    var myName = document.getElementById("name").value;

    return alert("Hi " + myName);
}





// Homework exercise 5
// Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

document.getElementById("submit-btn3").addEventListener("click", alertPrize);


  function alertPrize(doorNumber) {
    var doorNumber = document.getElementById("door").value;

      doorNumber = parseInt(doorNumber);

      if (doorNumber === 1){
        return alert("You won a pony!");
      }
      else if (doorNumber === 2) {
        return alert("You won a vacation!");
      }
      else if (doorNumber === 3) {
        return alert("You won a dollar!");
      }
      else {
        return alert ("that is an invalid door");
      }}
