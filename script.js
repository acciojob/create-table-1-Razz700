function insert_Row() {
    //Write your code here
   let table=document.getElementById("sampleTable");
  let newRow=document.createElement("tr");
  newRow.innerHTML="<tr><td>New cell1</td> <td>New cell2</td></tr>";
  table.append(newRow);
}
  
}
