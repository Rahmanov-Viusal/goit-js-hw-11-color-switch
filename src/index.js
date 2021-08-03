import colors from './js/colors';

const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"'),
  },

  randomIntegerFromInterval = (max) => {
    return Math.floor(Math.random() * (max + 1));
  },
  setRandomColor = () => {
    const _color = colors[randomIntegerFromInterval(colors.length - 1)]
    console.log(_color)
    document.body.style.backgroundColor = _color
  }

let interval = undefined

refs.startBtn.addEventListener('click', e => interval = interval ?
  interval :
  setInterval(() => setRandomColor(), 1000))

refs.stopBtn.addEventListener('click', e => clearInterval(interval))