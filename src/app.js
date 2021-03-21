import "./style/style.css";
require("./notification.mp3");
import { handleCalcDates, handleTimer } from "./main.js";

const texts = {
    text1: `<form id="datecalc">
                <h3>Калькулятор дат</h3>
                <label>
                    <strong>Первая дата:</strong>
                    <input type="date" name="firstDate" />
                </label>
                <label>
                    <strong>Вторая дата:</strong>
                    <input type="date" name="secondDate" />
                </label>
                <button type="submit">Расчитать промежуток</button>
                <p id="datecalc__result"></p>
            </form>`,
    text2: `<form id="timer">
                <h3>Таймер</h3>
                <input type="number" name="seconds" placeholder="секунды">
                <button class="buttonTimer">Старт</button>
                <p id="timer__result"></p>
            </form>`,
};
const listNavLink = document.querySelectorAll('.nav-link');
const code = document.querySelector('.code');

code.innerHTML = texts.text1;
handleDateCalcFormListener();

function clickHandler(event) {
    changeText(event);
    changeActiveClass(event);
}

function changeActiveClass(event) {
    listNavLink.forEach(item => item.classList.remove('active'));
    event.target.classList.toggle('active');
}

function changeText(event) {
    if (event.target.textContent == 'Калькулятор дат') {
        handleDateCalcFormListener();
    } else {
        code.innerHTML = texts.text2;
        const timerForm = document.getElementById("timer");
        timerForm.addEventListener("submit", handleTimer);
    }
}

function handleDateCalcFormListener() {
    code.innerHTML = texts.text1;
    const dateCalcForm = document.getElementById("datecalc");
    dateCalcForm.addEventListener("submit", handleCalcDates);
}

listNavLink.forEach(item => {
    item.addEventListener('click', clickHandler);
});
