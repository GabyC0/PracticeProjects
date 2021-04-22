const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // console.log(seconds);

  const min = now.getMinutes();
  const minuteDegrees = ((min / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
