const submit = document.querySelector('#submit');
const form = document.querySelector('#form');
const url = document.querySelector('#url');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const container = document.querySelector('#container');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let memeDiv = document.createElement('div');
  let memeUrl = document.createElement('img');
  let top = document.createElement('div');
  let bottom = document.createElement('div');

  memeDiv.classList.add('canvas-div');
  top.classList.add('top-text');
  bottom.classList.add('bottom-text');

  memeUrl.src = url.value;
  top.innerHTML = topText.value;
  bottom.innerHTML = bottomText.value;

  memeDiv.appendChild(memeUrl);
  memeDiv.appendChild(top);
  memeDiv.appendChild(bottom);

  container.appendChild(memeDiv);

  url.value = '';
  topText.value = '';
  bottomText.value = '';
});

container.addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
  }
});
