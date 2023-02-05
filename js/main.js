
// Start Color Fillper

let arrOfColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let arrOfSimpleColors = ["Green", "Red", "Rgba(133,122,200)", "#F15025"];

let simpleButton = document.querySelector(".color-flipper .header .simple");
let hexButton = document.querySelector(".color-flipper .header .hex");

let mainOfColorFillper = document.querySelector(".color-flipper main");
let paraOfColorFillper = document.querySelector(".color-flipper main p")
let buttonOfColorFillper = document.querySelector(".color-flipper main button");

simpleButton.onclick = function () {
    sessionStorage.setItem("simplehex", "simple");
}
hexButton.onclick = function () {
    sessionStorage.setItem("simplehex", "hex");
}



buttonOfColorFillper.addEventListener("click", () => {
    let simpleOrHex = sessionStorage.getItem("simplehex");
    if (simpleOrHex === "hex") {
        let myRandomBGArr = [];
        for (let i = 0; i < 6; i++) {
            myRandomBGArr.push(arrOfColors[Math.floor(Math.random() * arrOfColors.length)]);
        }

        mainOfColorFillper.style.backgroundColor = `#${myRandomBGArr.join("")}`;
        paraOfColorFillper.innerHTML = `Backgroundcolor : #${myRandomBGArr.join("")}`;

    }
    else {
        let myRandomBGArr = [];
        for (let i = 0; i < 1; i++) {
            myRandomBGArr.push(arrOfSimpleColors[Math.floor(Math.random() * arrOfSimpleColors.length)]);
        }

        mainOfColorFillper.style.backgroundColor = `${myRandomBGArr.join("")}`;
        paraOfColorFillper.innerHTML = `Backgroundcolor : ${myRandomBGArr.join("")}`;
    }
})
// end Color Fillper

// Start Counter
let counterParagraph = document.querySelector(".counter p");
counterParagraph.innerHTML = 0;

let decreaseButton = document.querySelector(".counter .buttons .decrease");
let resetButton = document.querySelector(".counter .buttons .reset");
let increaseButton = document.querySelector(".counter .buttons .increase");


decreaseButton.addEventListener("click", (e) => {
    counterParagraph.innerHTML = parseInt(counterParagraph.innerHTML) - 1;
    chageColor(counterParagraph)
});

increaseButton.addEventListener("click", (e) => {
    counterParagraph.innerHTML = parseInt(counterParagraph.innerHTML) + 1;
    chageColor(counterParagraph)

})

resetButton.addEventListener("click", (e) => {
    counterParagraph.innerHTML = 0;
    chageColor(counterParagraph)

})

function chageColor(x) {
    let z = parseInt(x.innerHTML);
    if (z > 0) {
        x.style.color = "red";
    }
    else if (z < 0) {
        x.style.color = "green";
    }
    else {
        x.style.color = "#212529";
    }
}

// End Counter

// Start Numbers 
let count1 = setInterval(updated1);
let upto1 = 0;
function updated1() {
    var count = document.querySelector(".numbers .number1");
    count.innerHTML = `${++upto1}+`;
    if (upto1 === 1500) {
        clearInterval(count1);
    }
}
let count2 = setInterval(updated2);
let upto2 = 0;
function updated2() {
    var count = document.querySelector(".numbers .number2");
    count.innerHTML = `${upto2+=2}+`;
    if (upto2 === 1200) {
        clearInterval(count2);
    }
}
let count3 = setInterval(updated3);
let upto3 = 0;
function updated3() {
    var count = document.querySelector(".numbers .number3");
    count.innerHTML = `${upto3+=8}+`;
    if (upto3 === 1000) {
        clearInterval(count3);
    }
}
// End Numbers

// Start Sidebar 
let aside = document.querySelector(".sidebar aside");
let closeIcon = document.querySelector(".sidebar .close-icon");
let menuCloseICon = document.querySelector(".sidebar i.icon");

closeIcon.onclick = function () {
    aside.classList.remove("left");
}
menuCloseICon.onclick = function () {
    aside.classList.toggle("left");
}
    // end Sidebar

    // start modal 
let modalButton = document.querySelector(".modal-container .modal-button");
let modalContainer = document.querySelector(".modal-container");
let modalOverflow = document.querySelector(".modal-container .overflow");
let modalCloseIcon=document.querySelector(".modal-container .overflow i")
modalButton.onclick = function () {
    modalContainer.classList.toggle("overlay");
    modalOverflow.classList.toggle("d-none")
}
modalCloseIcon.onclick = function () {
    modalContainer.classList.toggle("overlay");
    modalOverflow.classList.toggle("d-none")
}
// end modal


// Start Card 
let app = document.querySelector(".app");
let yellowIcon = document.querySelector(".app .card .price .left i.yellow");
let redIcon = document.querySelector(".app .card .price .left i.red");
let blueIcon = document.querySelector(".app .card .price .left i.blue");
let price = document.querySelector(".app .card .price .right");
let shoesImg = document.querySelector(".app .card img.shoes");
let headerIcon = document.querySelector(".app .header i");
yellowIcon.onclick = function () {
    app.style.backgroundColor = "yellow";
    shoesImg.src = "/imgs/photo-1.png";
    price.innerHTML = "$13.00";
}

redIcon.onclick = function () {
    app.style.backgroundColor = "red";
    shoesImg.src = "/imgs/photo-3.png";
    price.innerHTML = "$15.00";

}

blueIcon.onclick = function () {
    app.style.backgroundColor = "blue";
    shoesImg.src = "/imgs/photo-2.png";
    price.innerHTML = "$17.00";

}

headerIcon.onclick = function () {
    headerIcon.classList.toggle("fa-solid");
    headerIcon.classList.toggle("fa-regular");

}
// end Card 
