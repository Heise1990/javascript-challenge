// from data.js
var tableData = data;

// use D3 to select the table data
var sightingData = d3.select("#ufo-table").select("tbody");

// populate table with sighting data
data.forEach((ufoSighting) => {
  var row = sightingData.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// // select the button
var button = d3.select("#filter-btn");
var dateTime = d3.select("#datetime");

// Create event handlers 
button.on("click", () => {
// form.on("submit",runEnter);

// // // Complete the event handler function for the form 
// function runEnter() {

//   // Prevent the page from refreshing
  d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
  // var inputElement = dateTime;

//   // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // console.log(inputValue);

  var filteredData = tableData.filter(tableData => tableData.dateTime === inputValue);

  let response = {filteredData}
})

  // console.log(filteredData);