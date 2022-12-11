//click event
document.querySelector('#inputButton').addEventListener('click', convert);
//function to execute on click
function convert() {
  //get value from an input
  const inputValue = document.querySelector('#input').value;
  //get the value from dropdown options
  const optionVal = Number(document.querySelector('#temperature').val;
  //the math to convert
  const convertToCelsius = (inputValue - 32) * 5/9;
  const convertToFahrenheit = (inputValue * 1.8) + 32;
  //background images
  const image1 = document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/e5kbmb3wX3J1S/giphy.gif')";
  const image2 = document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/xT8qBqfCcrD50Ffq7e/giphy.gif')";
  const image3 = document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif')";
    //document.querySelector('#header').innerText = convertToCelsius;
    //document.querySelector('#header').innerText = convertToFahrenheit;
  
  //if (document.querySelector('input[name="tempSelection"]:checked').value == 1){
    if (convertToCelsius >= 29){
      document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/e5kbmb3wX3J1S/giphy.gif')";
      document.querySelector('#header').innerText = convertToCelsius;
    } else if (convertToCelsius < 29 && convertToCelsius >18){
      document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/xT8qBqfCcrD50Ffq7e/giphy.gif')";
      document.querySelector('#header').innerText = convertToCelsius;
    } else {
      document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif')";
      document.querySelector('#header').innerText = convertToCelsius;
    } 
  }

//else if (document.querySelector('input[name="tempSelection"]:checked').value == 2){
//     if (convertToFahrenheit >= 84){
//       document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/e5kbmb3wX3J1S/giphy.gif')";
//     } else if (convertToCelsius < 84 && convertToCelsius >64){
//       document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/xT8qBqfCcrD50Ffq7e/giphy.gif')"
//     } else {
//       document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif')"
//     } 
//}

//}
