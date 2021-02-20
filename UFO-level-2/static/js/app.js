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
  var inputElement1 = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");

  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");

//   function selectEvent(event){
//   return event.datetime === inputValue1 && 
//     event.city === inputValue2 &&
//     event.state === inputValue3 &&
//     event.country === inputValue4 &&
//     event.shape === inputValue5
// };
  
  function selectEvent(event){
    var catchlist = []
    if (inputValue1 != "") {catchlist.push(event.datetime === inputValue1)} else {catchlist.push(true)};
    if (inputValue2 != "") {catchlist.push(event.city === inputValue2)} else {catchlist.push(true)};
    if (inputValue3 != "") {catchlist.push(event.state === inputValue3)} else {catchlist.push(true)};
    if (inputValue4 != "") {catchlist.push(event.country === inputValue4)} else {catchlist.push(true)};
    if (inputValue5 != "") {catchlist.push(event.shape === inputValue5)} else {catchlist.push(true)};
    console.log(catchlist[0], catchlist[1], catchlist[2], catchlist[3], catchlist[4])
    return catchlist[0] && catchlist[1] && catchlist[2] && catchlist[3] && catchlist[4]

    };

  var filteredData = tableData.filter(selectEvent);

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


