/*import printMe from './print.js';*/
import './styles/style.css';
import './styles/global.scss';
import printMe from "./printMe";

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.classList.add("example");
    element.innerHTML = "Hello webpack";

    btn.innerHTML = 'Click me and check the console!';
    btn.classList.add("global")
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());