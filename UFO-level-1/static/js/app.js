// from data.js
var tableData = data;

// YOUR CODE HERE!
// Need to select 'tbody' tag to append dat to
var tableBody = d3.select('tbody');

tableData.forEach((alienLanding) => {
  var row = tableBody.append("tr");
  Object.entries(alienLanding).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

form.attr("id", "form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(event => event.datetime === inputValue);

  console.log(filteredData);

  tableBody.html("");

  filteredData.forEach((alienLanding) => {
  var row = tableBody.append("tr");
  Object.entries(alienLanding).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
};

