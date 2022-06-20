const ccv = document.getElementById("ccv");
const cardFlip = document.getElementById("cardFlip");
const numberCard = document.getElementById("card-number-card");
const numberForm = document.getElementById("card-number-form");
const nameCard = document.getElementById("name_card");
const nameForm = document.getElementById("name_form");
const expirationDate= document.getElementById("expiration-date");
const expirationDateForm = document.getElementById("expiration-date-form");
const ccvBox= document.getElementById("ccvbox");


ccv.onfocus = function(){
    cardFlip.style.transform = "rotateY(180deg)";
}

ccv.onblur = function(){
    cardFlip.style.transform = "rotateY(0deg)";
}

numberForm.addEventListener("keyup", function (e) {
        
    if (numberForm.value === "") {
        numberCard.innerHTML = "################";

    } else {
        numberCard.innerHTML = numberForm.value;
    }


})

nameForm.addEventListener("input", function () {

    if (nameForm.value === "") {
        nameCard.innerHTML = "";

    } else {

        nameCard.innerHTML = nameForm.value;
    }
})

expirationDateForm.addEventListener("input", function () {

    if (expirationDateForm.value === "") {
        expirationDate.innerHTML = "MM/YY";

    } else {

        expirationDate.innerHTML = expirationDateForm.value;
    }

    if(expirationDateForm.value.length===2){

        expirationDateForm.value+="/";
    }
})

ccv.addEventListener("input", function () {

    if (ccv.value === "") {
        ccvBox.innerHTML = "";

    } else {

        ccvBox.innerHTML = ccv.value;
    }
})
