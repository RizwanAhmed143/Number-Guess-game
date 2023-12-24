
  import inquirer from "inquirer"

  type GuessType = {

    UserGuess : number


  }

let sysGenno = Math.floor(Math.random()*10);

let GuessResult :GuessType = await inquirer.prompt ({

  type : "number",
  name: "UserGuess",
  message: "Enter user guess b/w 1 to 16 :"

})

console.log(GuessResult.UserGuess);

let {UserGuess} =GuessResult;

if(UserGuess === sysGenno) {

  console.log (UserGuess + "You are a Wuinner \n You Win!" )

  } else {console.log("Try next time",)}

  console.log(UserGuess + "Your Guess" ,  sysGenno  +  "System number");