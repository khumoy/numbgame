const numB = Math.floor(Math.random() * 100);
console.log(numB);

const container = document.getElementById("container");
const attempChance = document.getElementById("attempChance");
const input = document.getElementById("input1");
const winner = document.getElementById("winner");
const gameOver = document.getElementById("gameOver");
const helpNumb = document.getElementById("helpNumb");

function helpBtn() {
    helpNumb.innerHTML = numB;

};
let winAudio = document.getElementById("myAudio");

function enableAutoplay() {
    winAudio.autoplay = true;
    winAudio.load();
}
let overAudio = document.getElementById("myAudio2");

function enableAutoplay2() {
    overAudio.autoplay = true;
    overAudio.load();
}

let level = 10;
const card1 = document.getElementById("card1");

const findNumb = () => {
    if (level > 0) {
        --level;

        if (input.value == ``) {
            alert("Для того что б найты цифру то что думаеть компютер введите цифру в инпут ")
            // card1.classList.remove("d-none");
            // card1.innerHTML = `Enter a number <i class="far fa-arrow-alt-circle-down"></i>`

        };
        attempChance.innerHTML = `You have <i class="fas fa-heart text-danger "></i> ${level} chances left `;

        if (input.value == numB) {
            container.classList.add("dark-window")
            winner.classList.remove("d-none");
            enableAutoplay();
            AOS.init();
        }

        if (input.value > numB) {
            card1.classList.remove("d-none");
            card1.innerHTML = "oh no i thought less";

        }
        if (input.value < numB) {
            card1.innerHTML = "oh, I thought more";
            card1.classList.remove("d-none");
        }


    }
    if (level == 0) {
        gameOver.classList.remove("d-none");
        container.classList.add("dark-window");
        attempChance.innerHTML = ` <i class="fas fa-heart-broken text-danger "></i> ${level} You have no chance!`;
        enableAutoplay2();
        AOS.init();
    }
    console.log(level);
};



function refresh() {
    window.location.reload("Refresh");
}