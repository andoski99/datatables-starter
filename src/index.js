

let table;

import { admissionColumns } from "./columns";
import { customerColumns} from "./columns";

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  const obj = JSON.parse(json);
  // console.log(obj);
  const data = obj.data;
  const type = obj.type;
  // console.log(data);
  //TODO: Load the DataTables libraries by linking to the DataTables CDN.
  //TODO: Get data from FileMaker
  //TODO: prep it for the JS.

  //TODO: create the columns.

  //TODO: Explore options of Datatables
  //https://datatables.net/reference/option/
  // Create the DataTable, after destroying it if already exists

  // Variables for the column definitions

  const myKeys = Object.keys(data[0].fieldData);
  // console.log(myKeys);
  // console.log(data[0].fieldData);
  // console.log(data[0].fieldData.City);

  
 
  const myArray =       [[
        [data[0].fieldData.City],
        [data[0].fieldData.CompanyName],
        [data[0].fieldData.Id],
        [data[0].fieldData.ModifiedTimeStamp],
        [data[0].fieldData.State],
        [data[0].fieldData.StreetAddress],
        [data[0].fieldData.Zip],
      ],
      [
        [data[1].fieldData.City],
        [data[1].fieldData.CompanyName],
        [data[1].fieldData.Id],
        [data[1].fieldData.ModifiedTimeStamp],
        [data[1].fieldData.State],
        [data[1].fieldData.StreetAddress],
        [data[1].fieldData.Zip],
      ],
      [
        [data[2].fieldData.City],
        [data[2].fieldData.CompanyName],
        [data[2].fieldData.Id],
        [data[2].fieldData.ModifiedTimeStamp],
        [data[2].fieldData.State],
        [data[2].fieldData.StreetAddress],
        [data[2].fieldData.Zip]
      ]];

  console.log(myArray);


    const columns = type === "Customers" ? customerColumns: admissionColumns;

  table = $("#dtable").DataTable({
    paging: true,
    pageLength: 10,
    searching: true,
    colReorder: true,
    columns: columns,
    data: data,

  });
};

$("#dtable").on("click","tbody tr", function() {
  console.log("clicked");
  const data = table.row(this).data();
  console.log(data);
})

