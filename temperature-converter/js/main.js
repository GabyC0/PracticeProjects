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
  //const celsius = document.querySelector('#header').innerText = convertToCelsius;
  const convertToFahrenheit = (inputValue * 1.8) + 32;
  //temp ranges to change background and display temp after being converted
  if(optionVal === 1 && convertToCelsius >= 29){
    document.querySelector('#header').innerText = convertToCelsius + + " Celsius";
    document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/e5kbmb3wX3J1S/giphy.gif')";
  } else if(optionVal === 1 && (convertToCelsius < 29 && convertToCelsius >= 18)) {
    document.querySelector('#header').innerText = convertToCelsius + " Celsius";
    document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/xT8qBqfCcrD50Ffq7e/giphy.gif')";
  } else if (optionVal === 1 && convertToCelsius < 18) {
    document.querySelector('#header').innerText = convertToCelsius + + " Celsius";
    document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif')";
  }else if (optionVal === 2 && convertToFahrenheit >= 84) {
    document.querySelector('#header').innerText = convertToFahrenheit + " Fahrenheit";
    document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/e5kbmb3wX3J1S/giphy.gif')";
  } else if (optionVal === 2 && (convertToFahrenheit < 84 && convertToFahrenheit >= 64)) {
    document.querySelector('#header').innerText = convertToFahrenheit + " Fahrenheit";
    document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/xT8qBqfCcrD50Ffq7e/giphy.gif')";
  } else if (optionVal === 2 && convertToFahrenheit < 64) {
    document.querySelector('#header').innerText = convertToFahrenheit + " Fahrenheit";
    document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif')";
  }
}

  //next steps
  //refactor
