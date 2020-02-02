// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '"', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
function password(length, special, numbers, upper, lower){
 var holderArr =[]
  if(special){
    holderArr.push(specialChar)
  }
  if(lower){
    holderArr.push(lowerCase)
  }
  if(upper){
    holderArr.push(upperCase)
  }
  if(numbers){
    holderArr.push(nums)
  }
  console.log(holderArr)
  var pass =[]
  parseInt(length)
  for(var i =0; i < length; i++){
    var arrayPostion =Math.floor(Math.random() * holderArr.length);  

    var postionOfChar =Math.floor(Math.random()* holderArr[arrayPostion].length)
    pass.push(holderArr[arrayPostion][postionOfChar])
    
  }
  console.log(pass.join(""))
    var passwordText = document.querySelector("#password");

    passwordText.value = pass.join("");
}

function nextStep(length){
  console.log(length)
  var special = confirm("Do you want special characters")
  var numbers = confirm("Do you want numbers?")
  var upper = confirm("Do you want upper case letters")
  var lower = confirm("Do you want lower case letters")
 if(special || numbers || upper || lower ){
   password(length, special, numbers, upper, lower)
 }else{
   nextStep()
 }
  
}
// Write password to the #password input
function start() {
  console.log("clicked")
  // var password = generatePassword();

  var length = prompt("How long would you like password to be? Must between 8-128 characters long.")

  if (length > 7 && length < 129) {
    nextStep(length)

  } else{
    start ()
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", start);
