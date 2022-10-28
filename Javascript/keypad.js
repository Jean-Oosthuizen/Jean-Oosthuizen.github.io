//Initialization
//Variables are set for the buttonHandler function
let currentNum = "";
let attempts = 0;
let passcode = Math.floor(Math.random() * 10000);
let resetNum = "Enter The Passcode";
//Collects all of the buttons on the page and sets them as variables
let submit = document.getElementById("submit")
let winState = document.getElementById("winstate");
let display = document.getElementById("display");
let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");
let button5 = document.getElementById("5");
let button6 = document.getElementById("6");
let button7 = document.getElementById("7");
let button8 = document.getElementById("8");
let button9 = document.getElementById("9");
let button0 = document.getElementById("0");

//Function handling the entering of numbers, as well as comparing a sumbitted number to the generated number
function buttonHandler(number){
    //If the display has been clicked on, the number is reset
    if (number == -1){
        currentNum = resetNum;
    }
    else{
        //If the submit button has been pressed, do this
        if (number == -2){
            stringCurrentNum = parseInt(currentNum);
            attempts += 1;
            //If the entered number is correct, then output "You won!"
            if (stringCurrentNum == passcode){
                winState.innerHTML = "You won!";
            }
            //If the entered number is incorrect, determine a hint and display the number of attempts done
            else{
                if (stringCurrentNum < passcode){
                    winState.innerHTML = "Too small | Number of attempts: "+attempts;
                }
                else{
                    winState.innerHTML = "Too big | Number of attempts: "+attempts;
                }
                currentNum = resetNum;
            }
        }
        //If neither the sumbit or display buttons have been clicked, it's another digit, and this is run
        else{
            //If the number is not 4 digits long, this will be run. If it is 4 digits long, the max amount of digits has been found so the new number will not be appended
            if(currentNum.length != 4){
                if (currentNum == resetNum){
                    currentNum = number.toString();
                }
                else{
                    currentNum = currentNum + number.toString();
                }
            }
        } 
    }
    //Changes the value shown in the display.
    display.innerHTML = currentNum;
}

//Main program, a listener is made for every button and each one calls the buttonHandler function
display.addEventListener("click", function(){ buttonHandler(-1) });
submit.addEventListener("click", function(){ buttonHandler(-2) });
button1.addEventListener("click", function(){ buttonHandler(1) });
button2.addEventListener("click", function(){ buttonHandler(2) });
button3.addEventListener("click", function(){ buttonHandler(3) });
button4.addEventListener("click", function(){ buttonHandler(4) });
button5.addEventListener("click", function(){ buttonHandler(5) });
button6.addEventListener("click", function(){ buttonHandler(6) });
button7.addEventListener("click", function(){ buttonHandler(7) });
button8.addEventListener("click", function(){ buttonHandler(8) });
button9.addEventListener("click", function(){ buttonHandler(9) });
button0.addEventListener("click", function(){ buttonHandler(0) });











