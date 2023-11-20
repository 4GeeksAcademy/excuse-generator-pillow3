let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

// My code:
const random = document.getElementById('random');
const button = document.getElementById('button');

function randomExcuse() {
  const whoRandom = Math.floor(Math.random() * who.length);
  const actionRandom = Math.floor(Math.random() * action.length);
  const whatRandom = Math.floor(Math.random(what) * what.length);
  const whenRandom = Math.floor(Math.random(when) * when.length);

  const excuse = who[whoRandom] + ' ' + action[actionRandom] + ' ' + what[whatRandom] + ' ' + when[whenRandom] + '.';

  random.textContent = excuse;
  random.classList.remove("text-muted")
  random.classList.add("text-success")

  return excuse
}


button.addEventListener('click', randomExcuse);