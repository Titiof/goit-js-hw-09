const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyElement: document.body,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16716215).toString(16).padStart(6, 0)}`;
};

let colorId;

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    colorId = setInterval(() => { refs.bodyElement.style.backgroundColor = getRandomHexColor() }, 1000);
    refs.startBtn.disabled = true;

}

refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
    clearInterval(colorId);
     refs.startBtn.disabled = false;
}
