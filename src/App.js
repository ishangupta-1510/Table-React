import "../node_modules/handsontable/dist/handsontable.full.css";
import React from "react";
import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";

const data = Handsontable.helper.createSpreadsheetData(50, 25);
const settings = {
  colHeaders: true,
  rowHeaders: true,
  width: 600,
  height: 500,
  contextMenu: true,
  manualColumnFreeze: true,
  fixedRowsTop: 3,
  fixedColumnsLeft: 3,
  fixedRowsBottom: 3,
  manualColumnMove: true,
  manualColumnResize: true,
  manualRowResize: true,
  manualRowMove: true,
  dropdownMenu: true,
  filters: true,
  columnSorting: true,
  comments: true,
  mergeCells: true, // Add mergeCells option
  licenseKey: "non-commercial-and-evaluation",
};

export default function Table() {
  return <HotTable data={data} settings={settings} />;
}
