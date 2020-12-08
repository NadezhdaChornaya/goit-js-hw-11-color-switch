import { colors } from "./data/colorsArr.js";

const bodyRef = document.querySelector("body");
const buttonStartRef = document.querySelector("[data-action='start']");
const buttonStopRef = document.querySelector("[data-action='stop']");
let targetStop;

const onbButtonStop = (event) => {
    targetStop = !!event.target;
    return targetStop;
}

const switchColor = () => {
    const intervalId = setInterval(() => {
        if (targetStop) {
            clearInterval(intervalId)
        } else {
            let indexColor;
            const randomIntegerFromInterval = (min, max) => {
                return indexColor = Math.floor(Math.random() * (max - min + 1) + min);
            };
            randomIntegerFromInterval(0, colors.length - 1);
            bodyRef.style.backgroundColor = colors[indexColor];
        }
    }, 1000)
};


const onClickStart = buttonStartRef.addEventListener("click", switchColor)
const onClickStop = buttonStopRef.addEventListener("click", onbButtonStop)




