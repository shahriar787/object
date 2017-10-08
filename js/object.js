
var person=[
	
	{name:"shakil",email:"shakil@gmail.com",phone:016755425},
	{name:"karim",email:"karim@gmail.com",phone:01675587425},
	{name:"rahim",email:"rahim@gmail.com",phone:01675587425},
	{name:"salman",email:"salman@gmail.com",phone:0167755425},
	{name:"shah",email:"shah@gmail.com",phone:01675546625},

];
for(i=0;i<person.length;i++){
	document.getElementById("result").innerHTML +="Person Data: <br/>";
	document.getElementById("result").innerHTML +="Name :"+person[i].name+"<br/>";
	document.getElementById("result").innerHTML +="Email :"+person[i].email+"<br/>";
	document.getElementById("result").innerHTML +="Phone :"+person[i].phone+"<br/><br/>";
};

// document.getElementById("result").innerHTML = person[2].email;