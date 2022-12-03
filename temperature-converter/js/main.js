function showInput(){
  let checkedCelsius = document.getElementByName("celcius");
  let showInput = document.getElementById('#input');
  showInput.style.display = checkedCelsius.checked ? "block" : "none";
}



//click event
document.querySelector('#inputButton').addEventListener('click', convert);
function convert() {
  //get value from an input
  const inputValue = document.querySelector('#input').value;
  //const radioSelection = document.querySelector('#formInput').value;
  //the math here
  const convertToCelsius = (inputValue - 32) * 5/9;
  //const convertToFahrenheit = (inputValue * 1.8) + 32;
//display the value
  //console.log(convertedValue)
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
