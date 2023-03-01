function append_to_div(div_name, data) {
    var newDiv = document.createElement("div"); 
    newDiv.innerText += data;
    document.getElementById(div_name).appendChild(newDiv); 
    

}

document.getElementById("add_data") 
    .addEventListener('click', function() { 
var input = document.getElementById("technology"); 
var value = input.value.trim(); 

if(!value){
    alert("Input field can't be empty!"); 
} else {
   
    append_to_div("grid-container", value); 
}
input.value = ""; 
});