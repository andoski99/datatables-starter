let table;

import { admissionColumns } from "./columns";
import { customerColumns} from "./columns";

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  const obj = JSON.parse(json);
  const data = obj.data;
  const type = obj.type;
  const myKeys = Object.keys(data[0].fieldData);

  const columns = type === "Customers" ? customerColumns: admissionColumns;

  table = $("#dtable").DataTable({
    paging: true,
    pageLength: 25,
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

