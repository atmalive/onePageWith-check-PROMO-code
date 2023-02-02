const checkButton = document.getElementById("submit");
const promoCodeInput = document.getElementById("promoCodeInput");
const result = document.getElementById("result");


const promoCodes = ['SUMMER20', 'WINTER15', 'FALL30'];

checkButton.addEventListener("click", () => {
    const promoCode = promoCodeInput.value;

    const foundCode = promoCodes.find((data) => data === promoCode);

    console.log(foundCode)

    if (foundCode) {
        result.innerHTML = "Your promo code is valid!";
        window.location.href = "https://google.com/";
    } else {
        result.innerHTML = "Sorry, the promo code is not valid.";
    }
});
