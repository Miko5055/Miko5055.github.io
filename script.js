const randomFact = async () => {
  const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
  const data = await response.json();
  document.querySelector('.textran').innerText = data.text;
};

const button = document.querySelector('.randomFact');
button.addEventListener('click', randomFact);

const randomFact2 = async () => {
  const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist');
  const data = await response.json();
  const jokeElement = document.querySelector('.textran2');
  if (data.type === 'single') {
      jokeElement.innerText = data.joke;
  } else if (data.type === 'twopart') {
      jokeElement.innerText = `${data.setup} - ${data.delivery}`;
  }
};

const button2 = document.querySelector('.randomFact2');
button2.addEventListener('click', randomFact2);