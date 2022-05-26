



export const customerColumns = [
  {
    title: "Company",
    data: "fieldData.CompanyName",
    searchable: false,
  },
  { title: "ADDRESS", data: "fieldData.StreetAddress", orderable: true },
  { title: "State", data: "fieldData.State", orderable: true },
  { title: "Zip", data: "fieldData.Zip", orderable: true },
];

export const admissionColumns = [
  {
    title: "MatricYear",
    data: "fieldData.MatricYear",
    searchable: false,
  },
  { title: "School", data: "fieldData.School" },
  { title: "State", data: "fieldData.State" },
  { title: "Region", data: "fieldData.Region" },
];
