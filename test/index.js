const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];





const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const bodyRef = document.querySelector("body");
const startRef = document.querySelector('[data-action="start"]');
const finishRef = document.querySelector('[data-action="stop"]');

let timerId;
const switchColor = () => {

    timerId = setInterval(() => {
        bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        startRef.disabled = true;
        finishRef.disabled = false;
    }, 1000)
}



startRef.addEventListener("click", switchColor);
finishRef.addEventListener("click", () => {
    clearInterval(timerId);
    startRef.disabled = false;
    finishRef.disabled = true;
});









// const bodyRef = document.querySelector("body");
// const buttonStartRef = document.querySelector("[data-action='start']");
// const buttonStopRef = document.querySelector("[data-action='stop']");
// let targetStop;

// const onbButtonStop = (event) => {
//     targetStop = !!event.target;
//     return targetStop;
// }

// const switchColor = () => {
//     const intervalId = setInterval(() => {
//         if (targetStop) {
//             clearInterval(intervalId)
//             buttonStartRef.removeAttribute("disabled");
//         } else {
//             let indexColor;
//             const randomIntegerFromInterval = (min, max) => {
//                 return indexColor = Math.floor(Math.random() * (max - min + 1) + min);
//             };
//             randomIntegerFromInterval(0, colors.length - 1);
//             bodyRef.style.backgroundColor = colors[indexColor];
//             buttonStartRef.setAttribute("disabled", "disabled");
//         }
//     }, 1000)
// };


// const onClickStart = buttonStartRef.addEventListener("click", switchColor)
// const onClickStop = buttonStopRef.addEventListener("click", onbButtonStop)




