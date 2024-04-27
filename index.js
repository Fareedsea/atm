#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myPin = 1234;
let myBalance = 10000;
let pinanswers = await inquirer.prompt({
    name: "userPin",
    type: "number",
    message: "Please Enter Your Pin Code :",
});
if (pinanswers.userPin === myPin) {
    const choice = await inquirer.prompt({
        name: "selection",
        type: "list",
        message: "Select your option to perform action:",
        choices: ["Withdrawl", "FastCash", "Balance"],
    });
    if (choice.selection === "Withdrawl") {
        let withdarwalAmt = await inquirer.prompt({
            name: "amt",
            type: "number",
            message: "Please Enter Your Withdrawl Amount :",
        });
        if (withdarwalAmt.amt <= myBalance) {
            myBalance = myBalance - withdarwalAmt.amt;
            console.log(`Your Account Currnt Balance is Rs. ${myBalance}`);
        }
        else {
            console.log(`Your account balance is insufficient : ${myBalance}`);
        }
    }
    else if (choice.selection === "FastCash") {
        const fChoice = await inquirer.prompt([
            {
                name: "amt",
                type: "list",
                message: "Select your Fast Cash Amount:",
                choices: [1000, 2000, 5000, 10000, 15000],
            },
        ]);
        if (fChoice.amt <= myBalance) {
            myBalance = myBalance - fChoice.amt;
            console.log(`Your Account Currnt Balance is Rs. ${myBalance}`);
        }
        else {
            console.log(`Your account balance is insufficient : ${myBalance}`);
        }
    }
    else {
        console.log(`Your Account Balance is Rs. ${myBalance}`);
    }
}
else {
    console.log(chalk.black.bgRedBright("Your Enter Pin Code is Incorrect:"));
}
