// const second = 1000
// const minute = second * 60
// const hour = minute * 60
// const day = hour * 24
// const headline = 'May 8, 2022 :03:31';

// const daysID = document.getElementById('days');
// const hoursID = document.getElementById('hours');
// const minutesID = document.getElementById('minutes');
// const secondsID = document.getElementById('seconds');
// const contentID = document.getElementById('content');
// const countdownID = document.getElementById('countdown');
// const headlineID = document.getElementById('headline');

// headlineID.innerText = headline;

// let countDown = new Date(headline).getTime()
// let x = setInterval(function() {
//   let now = new Date().getTime()
//   let distance = countDown - now;
// // console.log('distance: ' ,distance);

// if(distance < 0) {
//   countdownID.style.display = 'none';
//   headlineID.style.display='none';
//   contentID.style.display = 'block';
//   console.log('time out');
// }

//   daysID.innerText = Math.floor(distance / (day)),
//   hoursID.innerText = Math.floor((distance % (day)) / (hour)),
//   minutesID.innerText = Math.floor((distance % (hour)) / (minute)),
//   secondsID.innerText = Math.floor((distance % (minute)) / second);
      
// }, second)

