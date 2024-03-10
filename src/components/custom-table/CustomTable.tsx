import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DummyTableData } from "../../dummy-data/DummyTableData";
import "./CustomTable.scss";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

interface tableProps {
  data: any[];
  scrollHeight?: string;
  columnsArray: any[];
  actionButtonArray?: any[];
  loading?: boolean;
}
// interface TableColumn {
//   field: string;
//   header: string;
//   frozen?: boolean;
//   minWidth?: string;
//   textAlign?: string;
// }

// interface actionType {
//   icon?: string;
//   label: string;
//   severity: string;
//   onClick?: (event: Event) => void;
// }

const CustomDataTable = ({
  data,
  scrollHeight,
  columnsArray,
  actionButtonArray,
  loading
}: tableProps) => {
  console.log("data in custom table", data);

  const [globalFilters, setGlobalFilters] = useState<string>("");
  const handleSpeechRecognition = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US"; // Set the language for recognition (change as needed).
    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setGlobalFilters(transcript);
    };
    recognition.start();
  };
  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  return (
    <>
      <div className="flex justify-between items-center p-2 bg-white rounded-tl-md rounded-tr-md">
        <div className="btn-section">
          <Button
            icon="pi pi-check"
            rounded
            aria-label="Filter"
            className="border h-10 w-10 ml-0 mr-2"
          />
          <Button
            icon="pi pi-bookmark"
            rounded
            severity="secondary"
            className="action-btn border h-10 w-10 mx-2"
            aria-label="Bookmark"
          />
          <Button
            icon="pi pi-search"
            rounded
            severity="success"
            className="action-btn border h-10 w-10 mx-2"
            aria-label="Search"
          />
          {actionButtonArray &&
            actionButtonArray.map((item: any) => (
              <Button
                icon={item.icon}
                rounded
                severity={item.severity}
                className="action-btn border mx-2 h-10 w-10"
                aria-label={item.label}
                onClick={item?.onClick}
              />
            ))}
        </div>
        <div className="global-filter">
          <div className="p-inputgroup border rounded-md bg-white">
            <span className="p-inputgroup-addon min-w-8 bg-white">
              <i className="pi pi-search"></i>
            </span>
            <InputText
              value={globalFilters}
              onChange={(e) => setGlobalFilters(e.target.value)}
              className="p-inputtext-sm text-xs focus:border-none focus:outline-none focus:shadow-none"
              placeholder="Search here..."
            />

            <span
              className="p-inputgroup-addon cursor-pointer min-w-8 bg-white"
              onClick={() => handleSpeechRecognition()}
            >
              <i className="pi pi-microphone"></i>
            </span>
            <span
              className="p-inputgroup-addon cursor-pointer min-w-8 bg-white"
              onClick={() => setGlobalFilters("")}
            >
              <i className="pi pi-times"></i>
            </span>
          </div>
        </div>
      </div>
      <DataTable
        value={data}
        className="global-table-style rounded-tl-none rounded-tr-none"
        size={"small"}
        showGridlines
        stripedRows={true}
        scrollable
        scrollHeight={scrollHeight ? scrollHeight : "calc(100vh - 210px)"}
        reorderableColumns
        globalFilter={globalFilters}
        paginator
        rows={15}
        rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
        removableSort
        loading={loading}
      >
        {columnsArray.map((col, i) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            frozen={col.frozen}
            style={{ minWidth: col.minWidth ? col.minWidth : "85px" }}
            body={col.body ? col.body : null}
          />
        ))}
      </DataTable>
    </>
  );
};

export default CustomDataTable;
