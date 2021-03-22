import { formatError, diffDates } from "./utils";

const template = `
<form id="datecalc">
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
            </form>
`;

const diffToHtml = diff => `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years : ''} 
        ${diff.months ? 'Месяцев: ' + diff.months : ''} 
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
`;

function handleCalcDates(event) {
    const dateCalcResult = document.getElementById("datecalc__result");
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;

    if (firstDate.value && secondDate.value) {
        let diff = diffDates(firstDate.value, secondDate.value);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else {
        dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
    }
}

function showForm(rootNode) {
    rootNode.innerHTML = template;
    let dateCalcForm = document.getElementById("datecalc");
    dateCalcForm.addEventListener("submit", handleCalcDates);
}

export default { showForm };