var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

function weatherinfo() {
	// body...
	fetch('http://api.openweathermap.org/data/2.5/weather?q=halifax&appid=e3d7efe364d9991231ff379a8b4262af')
  .then(response => response.json())
  .then(data => {
  	console.log(data);
  	var tempValue = data.main.temp;
  	var descValue = data.weather[0].description; 

  	desc.innerHTML = descValue;
  	temp.innerHTML = Math.floor(tempValue - 273.15) + " ℃";

  })


}
        