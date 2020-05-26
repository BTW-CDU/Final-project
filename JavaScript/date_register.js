document.write(Date());

function create(){
	alert("Only open for VIP students.");
  document.getElementById("demo").innerHTML=("You are not VIP student so you would not be able to register.");
  document.getElementById("demo").style.color = "#ff0000";
}
