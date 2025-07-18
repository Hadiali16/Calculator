let buttons = document.querySelectorAll(".btn")
let screen = document.querySelector(".screen")

let expression = ""

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;

        if (value === "=") {
            try {
                const result = eval(expression)
                screen.textContent = result;
               
            } catch (error) {
                screen.textContent = "Error"
                expression = ""
            }
        } else {
            expression = expression + value
            screen.textContent = expression
        }
    })
}) 



