{
    const welcome = () => {
        console.log("Hello developers!");
    }

    const resetResultText = () => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = "";
    }

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.56;
        const rateGBP = 5.29;
        const rateUSD = 3.80;
        const rateNOK = 0.46;
        const rateSEK = 0.45;
        const rateCHF = 4.13;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "GBP":
                return amount / rateGBP;
            case "USD":
                return amount / rateUSD;
            case "NOK":
                return amount / rateNOK;
            case "SEK":
                return amount / rateSEK;
            case "CHF":
                return amount / rateCHF;
        }
    };

    const updateResultText = (amount, result, currency,) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        welcome();

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

        formElement.addEventListener("reset", resetResultText);        

    }
    init();
}