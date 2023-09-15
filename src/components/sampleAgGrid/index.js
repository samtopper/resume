import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// import "ag-grid-community/styles/ag-theme-alpine-dark.css"; // Add a dark theme if desired
// import { saveAs } from "file-saver";
// import "xlsx/dist/xlsx.mini.min";

const SampleAgGrid = () => {
  // Sample data
  const rowData = [
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
    { name: "Bob Johnson", age: 40 },
  ];

  // Column definitions
  const columnDefs = [
    { headerName: "Name", field: "name" },
    {
      headerName: "Age",
      field: "age",
      cellRenderer: "agGroupCellRenderer", // You can specify a cell renderer here
    },
  ];

  // Reference to the AgGridReact instance
  let gridApi;

  // Function to export grid data to Excel
  const exportToExcel = () => {
    const params = {
      fileName: "agGridData.xlsx", // Specify the file name
    };
    gridApi.exportDataAsExcel(params); // Export data to Excel
  };

  return (
    <div>
      <button onClick={exportToExcel}>Export to Excel</button>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={{
            flex: 1,
            resizable: true,
          }}
          onGridReady={(params) => {
            gridApi = params.api; // Save the AgGridReact instance
          }}
        />
      </div>
    </div>
  );
};

export default SampleAgGrid;
