
window.onload = function () {
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
        color: "#e01d50",
        dataPoints: [
        { y: 198, label: "Depósito 1"},
        { y: 510, label: "Depósito 2"},
        { y: 9002, label: "Depósito 3"},
        { y: 836, label: "Depósito 4"},
        { y: 595, label: "Depósito 5"},
        { y: 957, label: "Depósito 6"}
        ]
      },
      {
        type: "bar",
        showInLegend: true,
        legendText: "Inventario en depósito",
        color: "silver",
        dataPoints: [
        { y: 166, label: "Depósito 1"},
        { y: 144, label: "Depósito 2"},
        { y: 223, label: "Depósito 3"},
        { y: 272, label: "Depósito 4"},
        { y: 319, label: "Depósito 5"},
        { y: 759, label: "Depósito 6"}
        ]
      }
      ]
    });
 

    chart.render();
	
}