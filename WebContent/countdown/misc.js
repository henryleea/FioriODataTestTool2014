

function getDeadline() {
	var myDate = new Date();
	var time = myDate.getTime();
	var inteval = 1 * 1000 * 3600 * 24;
	time += inteval;
	var newDate = new Date(time);
	console.log("full year: " + newDate.getFullYear());   
	console.log("month: " + newDate.getMonth());     
	console.log("date: " + newDate.getDate());  
	return {
		year: newDate.getFullYear(),
		month: parseInt(newDate.getMonth(), 10 ) + 1,
		date: newDate.getDate()
	};
}
	
function getDeadlineString(deadline) {
	return deadline.year + "/" + deadline.month + "/" + deadline.date + " 00:00:00AM";
}

