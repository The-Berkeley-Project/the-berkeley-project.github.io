google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = google.visualization.arrayToDataTable([
  ['Task', 'Sites'],
  ['Landscaping', 24],
  ['Cleaning', 20],
  ['Gardening', 48],
  ['Litter/Trash Pickup', 8],
]);

var options = {
  title: 'Although gardening is the most common type of voluteering happening on BP day, the Berkeley Project had all kinds of volunteering happening in Spring 2025.'
};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
