function createButton(textContent) {
    const button = document.createElement("button");
    button.textContent = textContent;
    button.style.fontSize = "16px";
    button.style.width = "48px";
    button.style.height = "32px";
    button.style.margin = "16px";

    if (textContent == "del") {
        button.addEventListener("click", (event) => {
            const calc = document.querySelector(".calc");
            calc.textContent = calc.textContent.slice(0, -1);
        });

        return button;
    };

    if (textContent == "ac") {
        button.addEventListener("click", (event) => {
            const calc = document.querySelector(".calc");
            const result = document.querySelector(".result");
            calc.textContent = "";
            result.textContent = "0.";
        });

        return button;
    };

    if (textContent == "ans") {
        return button;
    };

    if (textContent == "exec") {
        button.addEventListener("click", (event) => {
            const calc = document.querySelector(".calc");
            const result = document.querySelector(".result");
            result.textContent = eval(calc.textContent);
        });

        return button;
    };

    button.addEventListener("click", (event) => {
        const calc = document.querySelector(".calc");
        calc.textContent += textContent;
    });

    return button;
}

const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "row";
body.style.justifyContent = "center";

const container = document.createElement("div");
container.style.display = "flex";
container.style.width = "512px";
container.style.flexDirection = "row";
container.style.flexWrap = "wrap";
container.style.padding = "30px";
container.style.margin = "30px";
container.style.borderRadius = "32px";
container.style.borderStyle = "solid";

const display = document.createElement("div");
display.style.display = "flex";
display.style.width = "512px";
display.style.height = "128px";
display.style.flexDirection = "row";
display.style.flexWrap = "wrap";
display.style.padding = "30px";
display.style.margin = "30px";
display.style.borderStyle = "solid";
display.style.borderRadius = "16px";
display.style.alignItems = "end";

const calc = document.createElement("div");
calc.classList.add("calc");
calc.style.fontSize = "32px";
calc.style.textAlign = "start";
calc.style.width = "384px";
calc.style.margin = "3px";
// calc.style.borderStyle = "solid";

const result = document.createElement("div");
result.classList.add("result");
result.textContent = "0.";
result.style.whiteSpace = "pre";
result.style.fontSize = "32px";
result.style.textAlign = "end";
result.style.width = "384px";
result.style.margin = "3px";
// result.style.borderStyle = "solid";

display.appendChild(calc);
display.appendChild(result);

const buttons = document.createElement("div");
buttons.style.display = "flex";
buttons.style.width = "512px";
buttons.style.height = "384px";
buttons.style.flexDirection = "row";
buttons.style.flexWrap = "wrap";
buttons.style.justifyContent = "space-between";
buttons.style.padding = "30px";
buttons.style.margin = "30px";
buttons.style.borderStyle = "solid";
buttons.style.borderRadius = "16px";

buttons.appendChild(createButton("7"));
buttons.appendChild(createButton("8"));
buttons.appendChild(createButton("9"));
buttons.appendChild(createButton("del"));
buttons.appendChild(createButton("4"));
buttons.appendChild(createButton("5"));
buttons.appendChild(createButton("6"));
buttons.appendChild(createButton("ac"));
buttons.appendChild(createButton("1"));
buttons.appendChild(createButton("2"));
buttons.appendChild(createButton("3"));
buttons.appendChild(createButton("+"));
buttons.appendChild(createButton("0"));
buttons.appendChild(createButton("-"));
buttons.appendChild(createButton("x"));
buttons.appendChild(createButton("/"));
buttons.appendChild(createButton("."));
buttons.appendChild(createButton("ans"));
buttons.appendChild(createButton("exec"));

container.appendChild(display);
container.appendChild(buttons);

body.appendChild(container);
