console.log("Hello back to School");
let viz;
//1. create a variable to store the viz container
//2. create a variable to store dashboard option
//3. create variable to store the url - if doesnt load, might

const containerDiv = document.getElementById("vizContainer");
const options = {
  device: "desktop",
};
const URL =
  "https://public.tableau.com/views/Dashboard_16813783388360/Dashboard1?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link";
const exportpdfbutton = document.getElementById("exportPDF");
const exportpptbutton = document.getElementById("exportPPT");
function initViz() {
  viz = new tableau.Viz(containerDiv, URL, options);
}
initViz();
document.addEventListener("DOMContentLoaded", initViz);
exportpdfbutton.addEventListener("click", exportPDFfunction);
function exportPDFfunction() {
  viz.showExportPDFDialog();
}
exportpptbutton.addEventListener("click", exportPPTfunction);
function exportPPTfunction() {
  viz.showExportPowerPointDialog();
}
document
  .getElementById("FilterButton")
  .addEventListener("click", getRangeValues);
function getRangeValues() {
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);
  const sheetToFilter = sheets[0];
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz filtered !!"));
}
