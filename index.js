import inquirer from "inquirer";
let myPin = 1234;
let myBalance = 10000;
let pinanswers = await inquirer.prompt({
    name: "userPin",
    type: "number",
    message: "Please Enter Your Pin Code :",
});
if (pinanswers.userPin === myPin) {
    console.log("Your Enter Pin Code is Correct:");
    const choice = await inquirer.prompt([
        {
            name: "selection",
            type: "list",
            message: "Select your option to perform action:",
            choices: ["Withdrawl", "Balance"],
        },
    ]);
    if (choice.selection === "Withdrawl") {
        let withdarwalAmt = await inquirer.prompt({
            name: "amt",
            type: "number",
            message: "Please Enter Your Withdrawl Amount :",
        });
        if (withdarwalAmt.amt <= myBalance) {
            console.log(choice.selection);
            console.log(withdarwalAmt.amt);
            myBalance = myBalance - withdarwalAmt.amt;
            console.log("Now Your Account Balance is Rs.", myBalance);
        }
        else {
            console.log('Your account balance is not enough for withdrawl:', myBalance);
        }
    }
    else {
        console.log(choice.selection);
    }
}
else {
    console.log("Your Enter Pin Code is Incorrect:");
}
console.log("Last line Your Account Balance is Rs.", myBalance);
console.log(pinanswers.userPin);
