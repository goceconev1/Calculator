let numbers = document.getElementsByClassName("num");
let result = document.getElementById("result");
let multiply = document.getElementById("multiply");
let devide = document.getElementById("devide");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let coma = document.getElementById("coma");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");

for (var i = 0, len = numbers.length; i < len; i++) {
    num = parseInt(numbers[i].innerHTML);

    numbers[i].addEventListener("click", function () {

        let res = result.innerHTML += this.innerHTML;


        if (result.innerHTML[0] == 0) {
            result.innerHTML = result.innerHTML.substring(1);

        }

    })



}


multiply.addEventListener("click", function () {


    if (result.innerHTML.includes("x") || result.innerHTML.includes("/") || result.innerHTML.includes("+") || result.innerHTML.includes("-") || result.innerHTML === "0") {
        result.innerHTML = result.innerHTML;
    }
    else {
        result.innerHTML += "x";
    }




})
devide.addEventListener("click", function () {
    if (result.innerHTML.includes("x") || result.innerHTML.includes("/") || result.innerHTML.includes("+") || result.innerHTML.includes("-") || result.innerHTML === "0") {
        result.innerHTML = result.innerHTML;
    }
    else {
        result.innerHTML += "/";
    }


})
add.addEventListener("click", function () {

    if (result.innerHTML.includes("x") || result.innerHTML.includes("/") || result.innerHTML.includes("+") || result.innerHTML.includes("-") || result.innerHTML === "0") {
        result.innerHTML = result.innerHTML;
    }
    else {
        result.innerHTML += "+";
    }

})
subtract.addEventListener("click", function () {
    if (result.innerHTML.includes("x") || result.innerHTML.includes("/") || result.innerHTML.includes("+") || result.innerHTML.includes("-") || result.innerHTML === "0") {
        result.innerHTML = result.innerHTML;
    }
    else {
        result.innerHTML += "-";
    }

})
coma.addEventListener("click", function () {


    if (result.innerHTML.includes("x") || result.innerHTML.includes("/") || result.innerHTML.includes("+") || result.innerHTML.includes("-") || result.innerHTML.includes(".") || result.innerHTML === "0") {
        result.innerHTML = result.innerHTML;
    }
    else {
        result.innerHTML += ".";
    }

})
clear.addEventListener("click", function () {
    result.innerHTML = "0";

})

equals.addEventListener("click", function () {
    for (var i = 0, len = result.innerHTML.length; i < len; i++) {

        // multyply
        if (result.innerHTML[i] == "x") {
            let myString = result.innerHTML.split('x');
            let num1 = parseFloat(myString[0]);
            let num2 = parseFloat(myString[1]);

            let sum = num1 * num2;
            result.innerHTML = sum

        }
        // devide
        else if (result.innerHTML[i] == "/") {
            let myString = result.innerHTML.split('/');
            let num1 = parseFloat(myString[0]);
            let num2 = parseFloat(myString[1]);

            let sum = num1 / num2;
            result.innerHTML = sum

        }
        // add
        else if (result.innerHTML[i] == "+") {
            let myString = result.innerHTML.split('+');
            let num1 = parseFloat(myString[0]);
            let num2 = parseFloat(myString[1]);

            let sum = num1 + num2;
            result.innerHTML = sum

        }
        // subtract
        else if (result.innerHTML[i] == "-") {
            let myString = result.innerHTML.split('-');
            let num1 = parseFloat(myString[0]);
            let num2 = parseFloat(myString[1]);

            let sum = num1 - num2;
            result.innerHTML = sum

        }

    }

})

