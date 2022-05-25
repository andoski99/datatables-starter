
var table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  const obj = JSON.parse(json);
  // console.log(obj);
  const data = obj.data;
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

  var myNewArray = [];
  data.forEach(function (item,index,data) {
    myNewArray.push([
      [data[index].fieldData.City],
      [data[index].fieldData.CompanyName],
      [data[index].fieldData.Id],
      [data[index].fieldData.ModifiedTimeStamp],
      [data[index].fieldData.State],
      [data[index].fieldData.StreetAddress],
      [data[index].fieldData.Zip],
    ]);
    return myNewArray;
  });
  console.log(myNewArray);
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

  table = $("#dtable").DataTable({
    paging: true,
    pageLength: 20,
    searching: true,
    colReorder: true,
    columns: [
      { title: myKeys[0] },
      { title: myKeys[1] },
      { title: myKeys[2] },
      { title: myKeys[3] },
      { title: myKeys[4] },
      { title: myKeys[5] },
      { title: myKeys[6] },
      // { title: "City" },
      // { title: "CompanyName" },
      // { title: "Id" },
      // { title: "ModifiedTimeStamp" },
      // { title: "State" },
      // { title: "StreetAddress" },
      // { title: "Zip" },
    ],
    data: myNewArray,
    // [
    //   [
    //     [data[0].fieldData.City],
    //     [data[0].fieldData.CompanyName],
    //     [data[0].fieldData.Id],
    //     [data[0].fieldData.ModifiedTimeStamp],
    //     [data[0].fieldData.State],
    //     [data[0].fieldData.StreetAddress],
    //     [data[0].fieldData.Zip],
    //   ],
    //   [
    //     [data[1].fieldData.City],
    //     [data[1].fieldData.CompanyName],
    //     [data[1].fieldData.Id],
    //     [data[1].fieldData.ModifiedTimeStamp],
    //     [data[1].fieldData.State],
    //     [data[1].fieldData.StreetAddress],
    //     [data[1].fieldData.Zip],
    //   ],
    //   [
    //     [data[2].fieldData.City],
    //     [data[2].fieldData.CompanyName],
    //     [data[2].fieldData.Id],
    //     [data[2].fieldData.ModifiedTimeStamp],
    //     [data[2].fieldData.State],
    //     [data[2].fieldData.StreetAddress],
    //     [data[2].fieldData.Zip],
    //   ],
    //   // [["Tamworth"],["Tamworth"], ["Tamworth"]],
    // ],
    // data: [
    //   {firstName: "John", lastName: "Brown", age: 62},
    //   {firstName: "Jane", lastName: "Doe", age: 58}
    // ],
  });
};


//Ultimate Function
// uniqueStates.forEach((state) => {
//   const stateData = filterForState(companiesData, state);
//   const parentElement = createParent(state);
// //TODO: append button to each parent element
//   stateData.forEach((company) => {
//     const CompanyName = company.fieldData.CompanyName;
//     const btn = createButton(CompanyName);
//     parentElement.appendChild(btn);
//   });
//   //TODO: append the parent element to the after div
//   console.log(stateData);
//   after.appendChild(parentElement);
// });


