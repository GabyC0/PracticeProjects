//click event
document.querySelector('#getInput').addEventListener('click', convert);
//function to execute on click
function convert() {
  //get value from an input
  const inputValue = document.querySelector('#input').value;
  //get the value from dropdown options
  const optionVal = Number(document.querySelector('#temperature').value);
  //the math to convert & display amount converted to
  const convertToCelsius = (inputValue - 32) * 5/9;
  const celsius = document.querySelector('#header').innerText = convertToCelsius;
  const convertToFahrenheit = (inputValue * 1.8) + 32;
  const fahrenheit = document.querySelector('#header').innerText = convertToFahrenheit;
  //background images
  const image1 = document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/e5kbmb3wX3J1S/giphy.gif')";
  const image2 = document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/xT8qBqfCcrD50Ffq7e/giphy.gif')";
  const image3 = document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif')";
  //if statement to account for option & temp range -> render background img and conversion
  if(optionVal === 1 && convertToCelsius >= 29){
    celsius , image1;
  } else if(optionVal === 1 && (convertToCelsius < 29 && convertToCelsius >= 18)) {
    celsius, image2;
  } else if (optionVal === 1 && convertToCelsius < 18) {
    celsius, image3;
  }else if (optionVal === 2 && convertToFahrenheit >= 84) {
    fahrenheit, image1;
  } else if (optionVal === 2 && (convertToFahrenheit < 84 && convertToFahrenheit >= 64)) {
    fahrenheit, image2;
  } else if (optionVal === 2 && convertToFahrenheit < 64) {
    fahrenheit, image3;
  }
}

  //next steps
  //refactor
