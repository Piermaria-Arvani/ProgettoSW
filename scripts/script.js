function gestisciVisualizzazione(){
    var form = document.getElementById("form");
	var display = form.style.display;
    
    if (display === 'none')
        form.style.display = 'block';
    else{
        form.style.display = 'none';
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("level").value = "";
        document.getElementById("salary").value = "";
    }
        
}


