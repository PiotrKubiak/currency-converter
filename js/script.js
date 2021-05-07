let form = document.querySelector(".js-form");
let formInput = document.querySelector(".js-form__input");
let formSelect = document.querySelector(".js-form__select");
let paragraph = document.querySelector(".js-form__result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let euroRate = 4.56;
    let poundRate = 5.29;
    let usdRate = 3.80;
    let kronenRate = 0.46;
    let kronesRate = 0.45;
    let frankRate = 4.13;

    let rates = formInput.value;
    let currency = formSelect.value;

    let resultAmount;
    let resultSentence = "Wynik=>";

    switch (currency) {
        case "EUR":
            resultAmount = (rates / euroRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} EUR`;
            break;
        case "GBP":
            resultAmount = (rates / poundRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} GBP`;
            break;
        case "USD":
            resultAmount = (rates / usdRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} USD`;
            break;
        case "NOK":
            resultAmount = (rates / kronenRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} NOK`;
            break;
        case "SEK":
            resultAmount = (rates / kronesRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} SEK`;
            break;
        case "CHF":
            resultAmount = (rates / frankRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} CHF`;
            break;
        default:
            paragraph.innerText = "ERROR!!!";
    }
    form.addEventListener("reset", () => {
        paragraph.innerText = "Wynik=>";
    });
});