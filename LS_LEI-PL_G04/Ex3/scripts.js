let qDay = 0;
let qEvent = 0;
let qPremium = 0;

function changeQty(type, val) {
    if (type == "day") {
        qDay = qDay + val;
        if (qDay < 0) qDay = 0;
        document.getElementById("qtd-dia").innerText = qDay;
    }
    else if (type == "event") {
        qEvent = qEvent + val;
        if (qEvent < 0) qEvent = 0;
        document.getElementById("qtd-evento").innerText = qEvent;
    }
    else if (type == "premium") {
        qPremium = qPremium + val;
        if (qPremium < 0) qPremium = 0;
        document.getElementById("qtd-premium").innerText = qPremium;
    }

    calculateTotal();
}

function calculateTotal() {
    let finalTotal = (qDay * 40) + (qEvent * 80) + (qPremium * 100);
    document.getElementById("total-price").innerText = finalTotal;
}

function finishPurchase() {
    document.getElementById("mensagem-sucesso").innerText = "Purchase completed successfully!";
}

let forbiddenWords = [
    "alcoviteiro", "biltre", "beocio", "calhorda", "energumeno",
    "janota", "mentecapto", "mequetrefe", "mocorongo", "paspalho",
    "palerma", "patife", "pulha", "purgante", "sacripanta"
];

function checkBadWords() {
    let text = document.getElementById("comment-box").value.toLowerCase();
    let btn = document.getElementById("submit-btn");
    let msg = document.getElementById("warning-msg");
    let isBad = false;

    for (let i = 0; i < forbiddenWords.length; i++) {
        if (text.includes(forbiddenWords[i])) {
            isBad = true;
        }
    }

    if (isBad == true) {
        msg.innerText = "Please moderate your language!";
        if (btn) btn.disabled = true;
    } else {
        msg.innerText = "";
        if (btn) btn.disabled = false;
    }
}

// C) Slideshow
let eventImages = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
let currentPosition = 0;
let slideTimer;

function updateSlide() {
    let imgElement = document.getElementById("img-slide");
    if (imgElement) {
        imgElement.src = eventImages[currentPosition];
    }
}

function changeSlide(val) {
    currentPosition = currentPosition + val;

    if (currentPosition >= eventImages.length) {
        currentPosition = 0;
    }
    if (currentPosition < 0) {
        currentPosition = eventImages.length - 1;
    }

    updateSlide();
    resetSlideTimer();
}

function resetSlideTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(function() {
        changeSlide(1);
    }, 3000);
}

resetSlideTimer();

// D) Meta: 01/01/2027
function startCounter() {
    const targetDate = new Date("2027-01-01T09:00:00");
    const now = new Date();

    const totalSeconds = Math.floor((targetDate - now) / 1000);

    if (totalSeconds < 0) {
        document.getElementById("counter").innerText = "The event has started!";
        return;
    }

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("counter").innerText =
        days + " days, " + hours + "h " + minutes + "m " + seconds + "s";
}

startCounter();
setInterval(startCounter, 1000);