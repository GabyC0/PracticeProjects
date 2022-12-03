//click event
document.querySelector('#inputButton').addEventListener('click', convert)
function convert() {
  //get value from an input
  const cel = document.querySelector('#input').value
  //the math here
  const convertedValue = (cel - 32) * 5/9
//display the value
  //console.log(convertedValue)
  document.querySelector('#header').innerText = convertedValue

if (convertedValue >= 29){
  document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/e5kbmb3wX3J1S/giphy.gif')"
}else if (
convertedValue < 29 && convertedValue >18){

document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/xT8qBqfCcrD50Ffq7e/giphy.gif')"
}else {
  document.querySelector('html').style.backgroundImage = "url('https://media.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif')"
}

}
