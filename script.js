// Create container variable
const container = document.getElementById('container');

// Create button variable
const btn = document.querySelector('button');
let n = 16;

// Create div element and add event listener
for (let i = 1; i <= n*n ; i++) {
    const div = document.createElement('div');
    div.className = "square";
    div.id = "Square: " + i;
    div.style.flex = `1 0 calc(${100/n}%)`;
    div.style.height = (720/n) + "px";
    container.appendChild(div);

    // Change the color when the mouse over the div
    div.addEventListener('mouseover', e => {
        e.preventDefault();
        x = e.screenX;
        y = e.screenY;
        e.target.style.backgroundColor = `rgb(${x}, ${y}, ${Math.floor(Math.random()*255) + 1})`;
        });
}

//Event listener to change number of div
btn.addEventListener('click', () => {
        inputUser = prompt("Enter a number: ");
        if (!Number(inputUser)) {
            alert("Enter a number!")
        } else {
            n = Number(inputUser);
            container.innerText = "";
            for (let i = 1; i <= n*n ; i++) {
                const div = document.createElement('div');
                div.className = "square";
                div.id = "Square: " + i;
                div.style.flex = `1 0 calc(${100/n}%)`;
                div.style.height = (720/n) + "px";
                container.appendChild(div);

                // Change the color when the mouse over the div
                div.addEventListener('mouseover', e => {
                    e.preventDefault();
                    x = e.screenX;
                    y = e.screenY;
                    e.target.style.backgroundColor = `rgb(${x}, ${y}, ${Math.floor(Math.random()*255) + 1})`;
                    });
            }
        }
    });

