const year = document.querySelector('#year'),
   days = document.querySelector('#days'),
   hours = document.querySelector('#hours'),
   minutes = document.querySelector('#minutes'),
   seconds = document.querySelector('#seconds'),
   countdown = document.querySelector('#countdown'),
   preloader = document.querySelector('#preloader');


const currentYear = new Date().getFullYear(),
   nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);


year.innerText = currentYear + 1;

function updateCounter() {
   const currentTime = new Date();
   const diff = nextYear - currentTime;
   // Перевод в дні
   const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
   // Перевод в години
   const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
   // Перевод в хвилини
   const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
   // Перевод в секунди
   const secondsLeft = Math.floor(diff / 1000) % 60;

   days.innerText = daysLeft;
   hours.innerText = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
   minutes.innerText = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
   seconds.innerText = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
}

setInterval(updateCounter, 100);

setTimeout(() => {
   preloader.remove();
   countdown.style.display = 'flex';
}, 1000);



