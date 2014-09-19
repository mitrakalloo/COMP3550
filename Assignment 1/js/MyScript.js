function checkPhone(){

	var data=document.forms["form"]["telephone"].value;
	console.log(data);
	if(data.search("-")==-1||data==="")
	{
		alert("Contact number required. Contact number can only contain [0-9] and '-'");
		return true;
	}
	for (var i = 0; i <data.length; i++) {
			if(isNaN(data[i])&&data[i]!='-')
			{
				alert("Contact number required. Contact number can only contain [0-9] and '-'");
				console.log(data);
				return true;
			}		
	}
}
