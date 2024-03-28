import inquirer from "inquirer";
let myPin = 1112;
let myBalance = 10000;
let pinanswers = await inquirer.prompt({
    name: "userPin",
    type: "number",
    message: "Please Enter Your Pin Code :",
});
if (pinanswers.userPin === myPin) {
    console.log("Your Enter Pin Code is Correct:");
}
else {
    console.log("Your Enter Pin Code is Incorrect:");
}
// if (pinanswers.userPin === myPin) {
//     let optionChoice = await inquirer.prompt([
//         {
//             message: "Select your option to perform action:",
//             type: "list",
//             name: "selection",
//             choices: ["Balance", "Withdrawl"],
//           },
//         ]
//     )};      
// } else {
//     console.log("Your Enter Pin Code is Incorrect:");
// },
console.log(pinanswers.userPin);
