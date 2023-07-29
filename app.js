function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
}

function readFormData(){
    var formData ={};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["phno"] = document.getElementById("phno").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["skills"] = document.getElementById("skills").value;
    return formData;    
}

function insertNewRecord(data) {
    var table = document.getElementById("studentlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phno;
    cell6 = newRow.insertCell(3);
    cell6.innerHTML = data.gender;
    cell6 = newRow.insertCell(4);
    cell6.innerHTML = data.skills;
}

function resetForm() {
    document.getElementById("name").value ="";
    document.getElementById("email").value ="";
    document.getElementById("phno").value ="";
    document.getElementById("gender").value ="";
    document.getElementById("skills").value ="";
}
