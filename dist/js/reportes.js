
window.onload = function () {
    CanvasJS.addColorSet("tecloColor1",
                [//colorSet Array
                "#8085e9",
                "#f7a35c",
                "#90ed7d",
                "#8085e9"
                ]);
	var chart = new CanvasJS.Chart("chartContainerPie",
	{
		colorSet: "tecloColor1",
		theme: "theme1",
		title:{
			text: "CLASIFICACIÓN",
			fontSize: 17
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: "#0.#,,. Registros",
			legendText: "{indexLabel}",
 			dataPoints: [
				{  y: 41815635400, indexLabel: "LUZ ROJA" },
				{  y: 21754985400, indexLabel: "P.D" },
				{  y: 31258445400, indexLabel: "FRONTAL" },
			]
		}
		]
	});
	chart.render();
	
	
	var chart2 = new CanvasJS.Chart("chartContainerPie2",
	{
		colorSet: "tecloColor1",
		theme: "theme1",
		title:{
			text: "PREVALIDACIÓN",
			fontSize: 17
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: "#0.#,,. Registros",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: 4181563, indexLabel: "LUZ ROJA" },
				{  y: 2175498, indexLabel: "P.D." },
				{  y: 3125844, indexLabel: "FRONTAL" },
			]
		}
		]
	});
	chart2.render();
	
	var chart3 = new CanvasJS.Chart("chartContainerPie3",
	{
		colorSet: "tecloColor1",
		theme: "theme1",
		title:{
			text: "VALIDACIÓN",
			fontSize: 17
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: "#0.#,,. Registros",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: 4181563, indexLabel: "LUZ ROJA" },
				{  y: 2175498, indexLabel: "P.D." },
				{  y: 3125844, indexLabel: "FRONTAL" },
			]
		}
		]
	});
	chart3.render();
	
	
	var chart = new CanvasJS.Chart("chartContainerColumns", {
				theme: "theme1",
				title: {
					text: "CLASIFICACIÓN",
					fontSize: 17

				},
				data: [{
					type: "column",
					dataPoints: [
					  { y: 2000, label: "LR" },
					  { y: 1500, label: "FRONTAL" },
					  { y: 1200, label: "P.D" }, 
					]
				}, {
					type: "column",
					dataPoints: [
					  { y: 1900, label: "LR"},
					  { y: 1490, label: "FRONTAL" },
					  { y: 1000, label: "P.D" },
					  
					]
				}]
			});
			chart.render();
	var chart = new CanvasJS.Chart("chartContainerColumns2", {
				theme: "theme1",
				title: {
					text: "PREVALIDACIÓN",
					fontSize: 17

				},
				data: [{
					type: "column",
					dataPoints: [
					  { y: 2000, label: "LR" },
					  { y: 1500, label: "FRONTAL" },
					  { y: 1200, label: "P.D" }, 
					]
				}, {
					type: "column",
					dataPoints: [
					  { y: 1900, label: "LR"},
					  { y: 1490, label: "FRONTAL" },
					  { y: 1000, label: "P.D" },
					  
					]
				}]
			});
			chart.render();
	
	var chart = new CanvasJS.Chart("chartContainerColumns3", {
				theme: "theme1",
				title: {
					text: "VALIDACIÓN",
					fontSize: 17
				},
				data: [{
					type: "column",
					dataPoints: [
					  { y: 2000, label: "LR" },
					  { y: 1500, label: "FRONTAL" },
					  { y: 1200, label: "P.D" }, 
					]
				}, {
					type: "column",
					dataPoints: [
					  { y: 1900, label: "LR"},
					  { y: 1490, label: "FRONTAL" },
					  { y: 1000, label: "P.D" },
					  
					]
				}]
			});
			chart.render();
			
			
			var chart = new CanvasJS.Chart("chartContainer", {
				theme: "theme1",
				title: {
 					fontSize: 17
				},
				animationEnabled: true,
				axisX: {
					 
					valueFormatString: "MMM",
					interval: 1,
					intervalType: "month",
					gridColor: "Silver",
					tickColor: "silver",
					valueFormatString: " MMM"

				},
				toolTip: {
					shared: true
				},
				
				axisY: {
					 
					gridColor: "#D7D7D7",
					tickColor: "#D7D7D7"
				},
				legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center"
				},
				data: [{
					type: "line",
					lineThickness: 3,
 					showInLegend: true,
					name: "Infracciones",
					markerType: "circle",
					color: "#d9534f",
					
					
					dataPoints: [
					{ x: new Date(2016, 00, 1), y: 4014 },
 					{ x: new Date(2016, 01, 1), y: 3114 },
					{ x: new Date(2016, 02, 1), y: 3520  },
					{ x: new Date(2016, 03, 1), y: 2460 },
					{ x: new Date(2016, 04, 1), y: 3450 },
					{ x: new Date(2016, 05, 1), y: 2500 },
					{ x: new Date(2016, 06, 1), y: 3480 },
					{ x: new Date(2016, 07, 1), y: 4480 },
					{ x: new Date(2016, 08, 1), y: 2410 },
					{ x: new Date(2016, 09, 1), y: 3500 },
					{ x: new Date(2016, 10, 1), y: 4480 },
					{ x: new Date(2016, 11, 1), y: 5510 }
					]
				},
				{
					type: "line",
					lineThickness: 3,
 					showInLegend: true,
					name: "Liberaciones",
					markerType: "circle",
					color: "#00c0ef",
					
					
					dataPoints: [
					{ x: new Date(2016, 00, 1), y: 3014 },
 					{ x: new Date(2016, 01, 1), y: 3014 },
					{ x: new Date(2016, 02, 1), y: 2520 },
					{ x: new Date(2016, 03, 1), y: 1460 },
					{ x: new Date(2016, 04, 1), y: 2450 },
					{ x: new Date(2016, 05, 1), y: 1500 },
					{ x: new Date(2016, 06, 1), y: 2480 },
					{ x: new Date(2016, 07, 1), y: 2980 },
					{ x: new Date(2016, 08, 1), y: 2010 },
					{ x: new Date(2016, 09, 1), y: 1900 },
					{ x: new Date(2016, 10, 1), y: 3480 },
					{ x: new Date(2016, 11, 1), y: 4510 }
					]
				}
				]
			});
			chart.render();

$(function () {
	
    //--------------
    //- Line CHART -
    //--------------
      var lineChartData = {
      labels: ["","ENE 2016", "FEB 2016" , "MAR 2016", "APR 2016", "MAY 2016", "JUN 2016", "JUL 2016"],
    datasets: [
      {
        label: "Electronics",
        fillColor: "rgb(210, 214, 222)",
        strokeColor: "rgb(210, 214, 222)",
        pointColor: "rgb(210, 214, 222)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgb(220,220,220)",
        data: [60,65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "Digital Goods",
        fillColor: "rgba(60,141,188,0.9)",
        strokeColor: "rgba(60,141,188,0.8)",
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: [20,28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

    //--------------
    //- AREA CHART -
    //--------------
    var areaChartData = {
       labels: ["LR", "BOTCH", "MAR" ],
      datasets: [
        {
          label: "Electronics",
          fillColor: "#d9534f",
          strokeColor: "#d9534f ",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80 ]
        },
        {
          label: "Digital Goods",
          fillColor: "#5cb85c",
          strokeColor: "#5cb85c",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: [28, 48, 40]
        }
      ]
    };

    var areaChartOptions = {
      //Boolean - If we should show the scale at all
      showScale: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: false,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - Whether the line is curved between points
      bezierCurve: true,
      //Number - Tension of the bezier curve between points
      bezierCurveTension: 0.3,
      //Boolean - Whether to show a dot for each point
      pointDot: false,
      //Number - Radius of each point dot in pixels
      pointDotRadius: 4,
      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,
      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,
      //Boolean - Whether to show a stroke for datasets
      datasetStroke: true,
      //Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2,
      //Boolean - Whether to fill the dataset with a color
      datasetFill: true,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: true,
      //Boolean - whether to make the chart responsive to window resizing
      responsive: true
    };

      
    //-------------
    //- BAR CHART -
    //-------------
    var barChartCanvas = $("#barChart").get(0) ;
    var barChart = new Chart(barChartCanvas);
    var barChartData = areaChartData;
    barChartData.datasets[1].fillColor = "#00a65a";
    barChartData.datasets[1].strokeColor = "#00a65a";
    barChartData.datasets[1].pointColor = "#00a65a";
	
    var barChartOptions = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - If there is a stroke on each bar
      barShowStroke: true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth: 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing: 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing: 1,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to make the chart responsive
      responsive: true,
      maintainAspectRatio: true
    };

    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);
	

 });
	
	
}

//REPORTES INFRACCIONES
	 var chart = new CanvasJS.Chart("capacidadDeposito",
    {
      title:{
        
      },
      axisY: {
        
        maximum: 1010
      },
      data: [
      {
        type: "bar",
        showInLegend: true,
        legendText: "Capacidad",
		
        color: "#3c8dbc",
        dataPoints: [
        { y: 198, label: "Depósito 1"},
        { y: 510, label: "Depósito 2"},
        { y: 9002, label: "Depósito 3"},
        { y: 836, label: "Depósito 4"},
        { y: 595, label: "Depósito 5"},        
        ]
      },
      {
        type: "bar",
        showInLegend: true,
        legendText: "Inventario Actual",
        color: "#a0d0e0",
        dataPoints: [
        { y: 166, label: "Depósito 1"},
        { y: 144, label: "Depósito 2"},
        { y: 223, label: "Depósito 3"},
        { y: 272, label: "Depósito 4"},
        { y: 319, label: "Depósito 5"},
        ]
      }
      ]
    });
 

    chart.render();