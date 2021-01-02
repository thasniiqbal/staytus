var alert = document.getElementById('alert');
var btn = document.getElementById('myBtn');
var x = document.getElementById('inputtext').value;
var span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
	alert.style.display = 'block';
	document.getElementById('textboxvalue').innerHTML = x;
};
//Fetch api


fetch('https://randomuser.me/api')
.then(function(response){
return response.json()
}).then(function(data) {
   console.log(JSON.stringify(data))
   const user = data.results[0]
  var myJSON = JSON.stringify(user);
  document.getElementById("apiresult").innerHTML = myJSON
  
}).catch(function(err){
   document.getElementById("apiresult").innerHTML = err
})
