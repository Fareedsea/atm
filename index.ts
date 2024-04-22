#!/usr/bin/env node
import inquirer from "inquirer"
let myPin = 1112;
let myBalance = 10000;

let pinanswers = await inquirer.prompt(
    {
        name: "userPin",
        type: "number",
        message: "Please Enter Your Pin Code :",
}
);
if (pinanswers.userPin === myPin) {
    console.log("Your Enter Pin Code is Correct:");
        const choice = await inquirer.prompt([
            {
                message: "Select your option to perform action:",
                type: "list",
                name: "selection",
                choices: ["Withdrawl", "Balance"],
            },
            ]

        )
        if (choice.selection === "Withdrawl") {
            
                let withdarwalAmt = await inquirer.prompt(
                    {
                    name: "amt",
                    type: "number",
                    message: "Please Enter Your Withdrawl Amount :",
                    }
                        );
                        if (withdarwalAmt.amt <= myBalance){
                            console.log(choice.selection);
                            console.log(withdarwalAmt.amt);
                            myBalance = myBalance - withdarwalAmt.amt
                            console.log("Now Your Account Balance is Rs.", myBalance);
                                      
                        } else {
                            console.log("Your Account Balance is Short:", myBalance);

                        }

                  
        } else {
            console.log(choice.selection);
        }

} else {
    console.log("Your Enter Pin Code is Incorrect:");
}
console.log("Last line Your Account Balance is Rs.", myBalance );
console.log(pinanswers.userPin);
