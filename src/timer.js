const template = `
<form id="timer">
    <h3>Таймер</h3>
    <input type="number" name="seconds" placeholder="секунды">
    <button class="buttonTimer">Старт</button>
    <p id="timer__result"></p>
</form>
`;

function handleTimer(event) {
    const buttonTimer = document.querySelector('.buttonTimer');
    const timerResult = document.getElementById('timer__result');
    let timer = 0;

    event.preventDefault();
    if( buttonTimer.textContent === 'Стоп' ) {
        timerResult.innerHTML = '';
        clearInterval(timer);
        buttonTimer.textContent = 'Старт';
    } else {
        let { seconds } = event.target.elements;
        let count = seconds.value;
        if ((count != null) && (count > 0)) {
            timerResult.innerHTML = count;
            buttonTimer.textContent = "Стоп";
           
                timer = setInterval(() => {
                    if (count >= 0) {
                        timerResult.innerHTML = count--;
                   } else {
                        clearInterval(timer);
                        let audio = new Audio('notification.mp3');
                        timerResult.innerHTML = '';
                        buttonTimer.textContent = 'Старт'
                        seconds.value = '';
                        audio.play();
                   }
               }, 1000);
        }    
    }    
}

function showForm(rootNode) {
    rootNode.innerHTML = template;
    const timerForm = document.getElementById("timer");
    timerForm.addEventListener("submit", handleTimer);
}

export default { showForm };