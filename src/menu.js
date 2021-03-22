import Timer from "./timer.js";
import DateCalc from "./datecalc.js";

const listNavLink = document.querySelectorAll('.nav-link');
const code = document.querySelector('.code');

DateCalc.showForm(code);

function clickHandler(event) {
    changeTab(event);
    changeActiveClass(event);
}

function changeTab(event) {
    if (event.target.textContent == 'Калькулятор дат') {
        DateCalc.showForm(code);
    } else {
        Timer.showForm(code);
    }
}

function changeActiveClass(event) {
    listNavLink.forEach(item => item.classList.remove('active'));
    event.target.classList.toggle('active');
}


listNavLink.forEach(item => {
    item.addEventListener('click', clickHandler);
});
