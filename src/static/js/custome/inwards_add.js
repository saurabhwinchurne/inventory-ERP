var add = document.getElementById("addtobill");
add.addEventListener("click", displayDetails);

//function to add new rows to table
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
    newRow.setAttribute('id', row)



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

    var btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-danger btn-sm btn_delete_row");
    btn.setAttribute("type", "button");

    var icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-trash");
    btn.appendChild(icon);

    cell5.appendChild(btn);

    row++;
}


//jquery to delete the rows from table
$(document).ready(function($){
    $(document).on("click", ".btn_delete_row", function(e){
        var r = $(this).closest("tr").remove()
    })
})
