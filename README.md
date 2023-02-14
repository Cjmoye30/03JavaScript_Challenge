# 03 JavaScript: Password Generator

## Description

- What was your motivation?
    - My motivation for this was to create a randomly generated password by utilizing an event listener, values from the user, and string concatenation.
    - My main motivation was to gain a better understanding of how strings behave, and how we can continually store and add variables when needed.

- Why did you build this project?
    - This project was built to be able to randomly select index locations from a long string full of normal and special characters thatthe user selects, and then generate a random password.

- What did you learn?
    - The return value of a function can be called and then stored as a variable.
    - The text immediately after a backward slash will be omitted from the displayed code
    - It is essential to break apart your code into multiple, small functions with console.logs to keep track of what is going on while you're piecing it together.
    - The index of a string behaves the same way as the index of an array
    - Values entered through a prompt will default to a string. I used parseInt as a solution because I thought that was easier.
    - Recursion - calling the function within itself to "restart" it if there is an error by the user.
    -"Confirm" returns a boolean value which allows our code to be very clean when using if statements in the characters function
    - If statements without an else statement or the return value will keep on running even after the first if condition is met or not
    - Honestly, a very fun and not too complicated project which I was able to complete by myself.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality.
Part of the console log is included to illustrate behind the scenes execution.
![Once the "Generate Password" button is pressed, the user is taken through prompts before being given a randomly generated password".](./Assets/03Challenge%20-%20PW%20Generator.jpg)

## Installation / Live Site

[Github Pages Live Site](https://cjmoye30.github.io/03JavaScript_Challenge/)

## Credits

[StackBlitz Practice](https://stackblitz.com/edit/web-platform-xgikcm?file=styles.css,script.js)
[Codepen Practice](https://codepen.io/cjmoye30/pen/KKBjgpZ?editors=1111)
[Explanation of ParseInt](https://www.webdevelopersnotes.com/the-javascript-prompt-getting-user-input)

