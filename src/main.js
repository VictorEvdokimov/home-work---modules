import { formatError } from "./utils.js";
import { diffDates, diffToHtml } from "./datecalc.js";

let timer = 0;

export function handleCalcDates(event) {
    const dateCalcResult = document.getElementById("datecalc__result");
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

export function handleTimer(event) {
    const buttonTimer = document.querySelector('.buttonTimer');
    const timerResult = document.getElementById("timer__result");
    timerResult.innerHTML = "";
    event.preventDefault();
    if( buttonTimer.textContent === 'Стоп' ) {
        clearInterval(timer);
        buttonTimer.textContent = 'Старт';
    } else {
        let { seconds } = event.target.elements;
        let count = seconds.value;
        if ((count != null) && (count > 0)) {
            seconds.value = "";
            buttonTimer.textContent = "Стоп";
            timer = setInterval(() => {
                if (count >= 0) {
                    timerResult.innerHTML = count--;
               } else {
                    clearInterval(timer);
                    let audio = new Audio('../notification.mp3');
                    audio.play();
               }
           }, 1000);
        }    
    }    
}



