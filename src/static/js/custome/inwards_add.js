var add = document.getElementById("addtobill");
add.addEventListener("click", displayDetails);

var table = document.getElementById("datatablesSimple")
table.addEventListener("click", onDeleteRow);

var row = 1;
function  displayDetails(){
    var partNumber = document.getElementById("vendorName").value
    var partName = document.getElementById("partName").value
    var description = document.getElementById("address").value
    var quantity = document.getElementById("quantity").value
    var dateTime = document.getElementById("dateTime").value
    var invoiceNo = document.getElementById("invoiceNo").value

    var dispay = document.getElementById("datatablesSimple")
    var newRow = dispay.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    if (!partNumber || !partName || !description || !quantity || !dateTime || !invoiceNo){
        alert("Please fill all the Information!")
        return;
    }

    cell1.innerHTML = partNumber;
    cell2.innerHTML = partName;
    cell3.innerHTML = description;
    cell4.innerHTML = quantity;

    var btn = document.createElement("a");
    btn.setAttribute("class", "btn btn-danger btn-sm");

    var icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-trash");
    btn.appendChild(icon);

    cell5.appendChild(btn);

    row++;
}

function onDeleteRow(e){
    if (e.target.classList.contains("btn btn-danger btn-sm")){
        return;
    }
    var del = e.target;
    del.closest("tr").remove();   
}