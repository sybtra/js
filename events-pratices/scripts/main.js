/* output the pressed key */
/*const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');
textBox.addEventListener('keydown', (event) => output.textContent = `vous avez appuyé sur "${event.key}".`);*/

/* form submission event checker */
/*const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
});*/

/* parents event handler */
/* const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
container.addEventListener('click', handleClick);*/

/* video event handler */
const btn = document.querySelector('button');
const videoBox = document.querySelector('div');

function displayVideo() {
  if (videoBox.getAttribute('class') === 'hidden') {
    videoBox.setAttribute('class','showing');
    videoBox.setAttribute('alt','showing');
  }
}

btn.addEventListener('click', displayVideo);
videoBox.addEventListener('click', () => videoBox.setAttribute('class', 'hidden'));

const video = document.querySelector('video');

video.addEventListener('click', (e) => {
    e.stopPropagation();
    video.play();
});
