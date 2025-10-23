let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

// Operators list
const operators = ['+', '-', '*', '/', '%', '.'];

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if(value === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if(value === 'AC'){
            string = "";
            input.value = string;
        }
        else if (value === 'DEL') {
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else {
            // prevent double operators
            let lastChar = string[string.length - 1];
            if (operators.includes(value) && operators.includes(lastChar)) {
                return; // skip if last is operator and current is operator
            }
            
            string += value;
            input.value = string;
        }
    });
});
