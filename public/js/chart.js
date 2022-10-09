google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Category', 'Amount'],
        ['Example', '123'],
    ]);

    var options = {
        is3D: true,
        'fontSize': 13,
        'legendFontSize': 13,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}