/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  "use strict";

  //Make the dashboard widgets sortable Using jquery UI
  $(".connectedSortable").sortable({
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    handle: ".box-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

  //jQuery UI sortable for the todo list
  $(".todo-list").sortable({
    placeholder: "sort-highlight",
    handle: ".handle",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  
  /* Morris.js Charts */
  // Sales chart
  var area = new Morris.Area({
    element: 'revenue-chart',
    resize: true,
    data: [
      {m: '2016-01', pagadas: 52666, creadas: 82666},
      {m: '2016-02', pagadas: 72778, creadas: 82294},
      {m: '2016-03', pagadas: 74912, creadas: 91969},
      {m: '2016-04', pagadas: 53767, creadas: 63597},
      {m: '2016-05', pagadas: 76810, creadas: 91914},
      {m: '2016-06', pagadas: 65670, creadas: 84293},
      {m: '2016-07', pagadas: 74820, creadas: 93795},
      {m: '2016-08', pagadas: 75073, creadas: 85967},
      {m: '2016-09', pagadas: 61687, creadas: 74460},
      {m: '2016-10', pagadas: 88432, creadas: 95713}
    ],
    xkey: 'm',
    ykeys: ['pagadas', 'creadas'],
    labels: ['Pagadas', 'Creadas'],
    lineColors: ['#a0d0e0', '#3c8dbc'],
	/*ymin: 40000.0,*/
    /*ymax: 100000.0*/
    
  });

  //Donut Chart
  var donut = new Morris.Donut({
    element: 'sales-chart',
    resize: true,
    colors: ["#3c8dbc", "#f56954", "#00a65a"],
    data: [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ],
    hideHover: 'auto'
  });
  

  //Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });

  /* The todo list plugin */
  
  $(".todo-list").todolist({
    onCheck: function (ele) {
      window.console.log("The element has been checked");
      return ele;
    },
    onUncheck: function (ele) {
      window.console.log("The element has been unchecked");
      return ele;
    }
  });
  

});
