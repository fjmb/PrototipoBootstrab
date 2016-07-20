/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($, AdminLTE) {

  "use strict"; 

  //Make the dashboard widgets sortable Using jquery UI
  if($(".connectedSortable").size() > 0){
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
  }
  /**
   * List of all the available skins
   *
   * @type Array
   */
  var my_skins = [
    "skin-blue",
    "skin-black",
    "skin-red",
    "skin-yellow",
    "skin-purple",
    "skin-green",
    "skin-blue-light",
    "skin-black-light",
    "skin-red-light",
    "skin-yellow-light",
    "skin-purple-light",
    "skin-green-light"
  ];

  //Crear Encabezado
  
	var header = "<!-- Logo -->"
    + "<a href='infracciones.html' class='logo'>"
	+ "	<img src='dist/img/iconTeclo.png' class='logo-mini' style='width:40px;height:40px;margin-top:5px;margin-left:-10px'></img>"
	+ " <img src='dist/img/logoTeclo.png' class='logo-lg' style='width:215px;height:100px;margin-top:-25px;margin-left:-10px'></img>"
    + "</a>"
    + "<!-- Header Navbar: style can be found in header.less -->"
    + "<nav class='navbar navbar-static-top'>"
    + "  <!-- Sidebar toggle button-->"
    + "  <a href='#' class='sidebar-toggle' data-toggle='offcanvas' role='button'>"
    + "    <span class='sr-only'>Toggle navigation</span>"
    + "  </a>"
    + "  <!-- Navbar Right Menu -->"
    + "  <div class='navbar-custom-menu'>"
    + "    <ul class='nav navbar-nav'>"
    + "      <!-- User Account: style can be found in dropdown.less -->"
    + "      <li class='dropdown user user-menu'>"
    + "        <a href='#' class='dropdown-toggle' data-toggle='dropdown'>"
    + "          <img src='dist/img/user1-128x128.jpg' class='user-image' alt='User Image'>"
    + "          <span class='hidden-xs'>Francisco Martinez</span>"
    + "        </a>"
	
    + "			  <ul class='dropdown-menu'>"
    + "				  <!-- User image -->"
    + "				  <li class='user-header'>"
    + "					<img src='dist/img/user2-160x160.jpg' class='img-circle' alt='User Image'>"

    + "					<p>"
    + "					  Francisco Martinez - Administrador"
    + "					  <small>Supervisión de Infracciones</small>"
    + "					</p>"
    + "				  </li>"
    + "				  <!-- Menu Footer-->"
    + "				  <li class='user-footer'>"
    + "					<div class='pull-left'>"
    + "					  <a href='#' class='btn btn-default btn-flat'>Perfil</a>"
    + "					</div>"
    + "					<div class='pull-right'>"
    + "					  <a href='login.html' class='btn btn-default btn-flat'>Salir</a>"
    + "					</div>"
    + "				  </li>"
    + "				</ul>"
    + "			  </li>"
    + "      <!-- Control Sidebar Toggle Button -->"
    + "      <li>"
    + "        <a href='#'><i class='fa fa-gears'></i></a>"
    + "      </li>"
    + "    </ul>"
    + "  </div>"
    + "</nav>";
	
   $(".main-header").append(header);
   
   //Crear Footer
   var footer = "<div class='pull-right hidden-xs'>"
			  + "<b>Versión</b> 1.0.0"
			  + "</div>"
			  + "<strong>Copyright &copy; 2015-2016 <a href='http://teclomexicana.mx/'>TECLO Mexicana</a>.</strong> Todos los derechos reservados.";
   
   $(".main-footer").append(footer);
   
   //Crear Menu
   var sidebar = "    <section class='sidebar'>"          
	+ "      <!-- /.search form -->"
	+ "      <!-- sidebar menu: : style can be found in sidebar.less -->"
	+ "      <ul class='sidebar-menu'>"
	+ "        <li class='header'>MENÚ DE NAVEGACIÓN</li>"
	
	+ "        <li class='treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-book'></i> <span>Infracciones</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul  class='treeview-menu'>"
	+ "            <li><a href='altaInfraccion.html'><i class='fa fa-circle-o'></i>Alta</a></li>"
	+ "            <li><a href='consultaInfraccion.html'><i class='fa fa-circle-o'></i>Consulta</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Modificación</a></li>"
	+ "            <li><a href='reportes.html'><i class='fa fa-circle-o'></i>Reportes</a></li>"
	+ "          </ul>"
	+ "        </li>"
	
	+ "        <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-safari'></i> <span>Radares</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='complementacion.html'><i class='fa fa-circle-o'></i>Complementar</a></li>"
	+ "            <li><a href='archivosProcesados.html'><i class='fa fa-circle-o'></i>Archivos Procesados</a></li>"
	+ "            <li><a href='reasignacionlc.html'><i class='fa fa-circle-o'></i>Reasigna Linea Captura</a></li>"
	+ "          </ul>"
	+ "        </li>"   
	
	+ "         <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-camera'></i> <span>Fotomultas</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='deteccionSp.html'><i class='fa fa-circle-o'></i>Detección sin procesar</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Consulta Detecciones</a></li>"
	+ "            <li><a href='creacionLotes.html'><i class='fa fa-circle-o'></i>Creación Lotes</a></li>"
	+ "            <li><a href='reportesFotomulta.html'><i class='fa fa-circle-o'></i>Reportes</a></li>"
	+ "          </ul>"
	+ "        </li>"
	
	+ "        <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-credit-card-alt'></i> <span>Garantías</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Sin Procesar</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Recepción</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Pago</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Entrega</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Consulta</a></li>"
	+ "          </ul>"
	+ "        </li>"	
	
	+ "        <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-user-times'></i> <span>Remisión a Depósito</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Con Infracción</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Con Acta Administrativa</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Movimientos Depositos</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Consulta</a></li>"
	+ "          </ul>"
	+ "        </li>"	

	+ "       <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-car'></i> <span>Liberación de Vehículo</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Liberación</a></li>"
	+ "          </ul>"
	+ "        </li>"	
	
	+ "       <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-gavel'></i> <span>Impugnación</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Alta</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Infracciones Canceladas</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Consulta</a></li>"	
	+ "          </ul>"
	+ "        </li>"
	
	+ "       <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-newspaper-o'></i> <span>Parte Informativo</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Alta Documento</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Consulta Documento</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Consulta Boleta Sanción</a></li>"		
	+ "          </ul>"
	+ "        </li>"
	
	+ "		   <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-credit-card'></i> <span>Pagos</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='pagoInfraccion.html'><i class='fa fa-circle-o'></i>Infracción</a></li>"
	+ "            <li><a href='pagoInfraccion.html'><i class='fa fa-circle-o'></i>Acta Administrativa</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Consulta</a></li>"	
	+ "          </ul>"
	+ "        </li>"
	
	+ "		   <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-money'></i> <span>Corte de Caja</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Nuevo</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Consulta</a></li>"
	+ "          </ul>"
	+ "        </li>"
	
	+ "		   <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-list-ol'></i> <span>Control de Suministro</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Control Almacén</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Suministro Áreas</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Devoluciones</a></li>"	
	+ "          </ul>"
	+ "        </li>"	
	
	+ "		   <li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-line-chart'></i> <span>Reportes</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Consulta</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Localización GPS</a></li>"
	+ "          </ul>"
	+ "        </li>"
	
	+ "		<li class=' treeview'>"
	+ "          <a href='#'>"
	+ "            <i class='fa fa-gear'></i> <span>Administración</span> <i class='fa fa-angle-left pull-right'></i>"
	+ "          </a>"
	+ "          <ul class='treeview-menu'>"
	+ "			   <li><a href='configuracion.html'><i class='fa fa-circle-o'></i>Configuración</a></li>"
	+ "            <li><a href='#'><i class='fa fa-circle-o'></i>Localización GPS</a></li>"	
	+ "            <li><a href='logsAdmin.html'><i class='fa fa-circle-o'></i>Logs</a></li>"	
	+ "            <li><a href='usuariosAdmin.html'><i class='fa fa-circle-o'></i>Usuarios</a></li>"
	+ "            <li><a href='passwordAdmin.html'><i class='fa fa-circle-o'></i>Cambio de Contraseña</a></li>"
	+ "            <li><a href='catalagosAdmin.html'><i class='fa fa-circle-o'></i>Catálogos</a></li>"

	+ "          </ul>"
	+ "        </li>" 
	
	+ "      </ul>"
	+ "    </section>"
	+ "    <!-- /.sidebar -->";

	$(".main-sidebar").append(sidebar);
	
  //Create the new tab
  var tab_pane = $("<div />", {
    "id": "control-sidebar-theme-demo-options-tab",
    "class": "tab-pane active"
  });

  //Create the tab button
  var tab_button = $("<li />", {"class": "active"})
      .html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'>"
      + "<i class='fa fa-wrench'></i>"
      + "</a>");

  //Add the tab button to the right sidebar tabs
  $("[href='#control-sidebar-home-tab']")
      .parent()
      .before(tab_button);

  //Create the menu
  var demo_settings = $("<div />");

  //Layout options
  demo_settings.append(
      "<h4 class='control-sidebar-heading'>"
      + "Layout Options"
      + "</h4>"
        //Fixed layout
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-layout='fixed' class='pull-right'/> "
      + "Fixed layout"
      + "</label>"
      + "<p>Activate the fixed layout. You can't use fixed and boxed layouts together</p>"
      + "</div>"
        //Boxed layout
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-layout='layout-boxed'class='pull-right'/> "
      + "Boxed Layout"
      + "</label>"
      + "<p>Activate the boxed layout</p>"
      + "</div>"
        //Sidebar Toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-layout='sidebar-collapse' class='pull-right'/> "
      + "Toggle Sidebar"
      + "</label>"
      + "<p>Toggle the left sidebar's state (open or collapse)</p>"
      + "</div>"
        //Sidebar mini expand on hover toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-enable='expandOnHover' class='pull-right'/> "
      + "Sidebar Expand on Hover"
      + "</label>"
      + "<p>Let the sidebar mini expand on hover</p>"
      + "</div>"
        //Control Sidebar Toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-controlsidebar='control-sidebar-open' class='pull-right'/> "
      + "Toggle Right Sidebar Slide"
      + "</label>"
      + "<p>Toggle between slide over content and push content effects</p>"
      + "</div>"
        //Control Sidebar Skin Toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-sidebarskin='toggle' class='pull-right'/> "
      + "Toggle Right Sidebar Skin"
      + "</label>"
      + "<p>Toggle between dark and light skins for the right sidebar</p>"
      + "</div>"
  );
  var skins_list = $("<ul />", {"class": 'list-unstyled clearfix'});

  //Dark sidebar skins
  var skin_blue =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-blue' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Blue</p>");
  skins_list.append(skin_blue);
  var skin_black =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-black' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Black</p>");
  skins_list.append(skin_black);
  var skin_purple =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-purple' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Purple</p>");
  skins_list.append(skin_purple);
  var skin_green =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-green' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Green</p>");
  skins_list.append(skin_green);
  var skin_red =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-red' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Red</p>");
  skins_list.append(skin_red);
  var skin_yellow =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-yellow' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Yellow</p>");
  skins_list.append(skin_yellow);

  //Light sidebar skins
  var skin_blue_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-blue-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Blue Light</p>");
  skins_list.append(skin_blue_light);
  var skin_black_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-black-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Black Light</p>");
  skins_list.append(skin_black_light);
  var skin_purple_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-purple-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Purple Light</p>");
  skins_list.append(skin_purple_light);
  var skin_green_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-green-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Green Light</p>");
  skins_list.append(skin_green_light);
  var skin_red_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-red-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Red Light</p>");
  skins_list.append(skin_red_light);
  var skin_yellow_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-yellow-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px;'>Yellow Light</p>");
  skins_list.append(skin_yellow_light);

  demo_settings.append("<h4 class='control-sidebar-heading'>Skins</h4>");
  demo_settings.append(skins_list);

  tab_pane.append(demo_settings);
  $("#control-sidebar-home-tab").after(tab_pane);

  setup();

  /**
   * Toggles layout classes
   *
   * @param String cls the layout class to toggle
   * @returns void
   */
  function change_layout(cls) {
    $("body").toggleClass(cls);
    AdminLTE.layout.fixSidebar();
    //Fix the problem with right sidebar and layout boxed
    if (cls == "layout-boxed")
      AdminLTE.controlSidebar._fix($(".control-sidebar-bg"));
    if ($('body').hasClass('fixed') && cls == 'fixed') {
      AdminLTE.pushMenu.expandOnHover();
      AdminLTE.layout.activate();
    }
    AdminLTE.controlSidebar._fix($(".control-sidebar-bg"));
    AdminLTE.controlSidebar._fix($(".control-sidebar"));
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function change_skin(cls) {
    $.each(my_skins, function (i) {
      $("body").removeClass(my_skins[i]);
    });

    $("body").addClass(cls);
    store('skin', cls);
    return false;
  }

  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem(name, val);
    } else {
      window.alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof (Storage) !== "undefined") {
      return localStorage.getItem(name);
    } else {
      window.alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Retrieve default settings and apply them to the template
   *
   * @returns void
   */
  function setup() {
    var tmp = get('skin');
    if (tmp && $.inArray(tmp, my_skins))
      change_skin(tmp);

    //Add the change skin listener
    $("[data-skin]").on('click', function (e) {
      e.preventDefault();
      change_skin($(this).data('skin'));
    });

    //Add the layout manager
    $("[data-layout]").on('click', function () {
      change_layout($(this).data('layout'));
    });

    $("[data-controlsidebar]").on('click', function () {
      change_layout($(this).data('controlsidebar'));
      var slide = !AdminLTE.options.controlSidebarOptions.slide;
      AdminLTE.options.controlSidebarOptions.slide = slide;
      if (!slide)
        $('.control-sidebar').removeClass('control-sidebar-open');
    });

    $("[data-sidebarskin='toggle']").on('click', function () {
      var sidebar = $(".control-sidebar");
      if (sidebar.hasClass("control-sidebar-dark")) {
        sidebar.removeClass("control-sidebar-dark")
        sidebar.addClass("control-sidebar-light")
      } else {
        sidebar.removeClass("control-sidebar-light")
        sidebar.addClass("control-sidebar-dark")
      }
    });

    $("[data-enable='expandOnHover']").on('click', function () {
      $(this).attr('disabled', true);
      AdminLTE.pushMenu.expandOnHover();
      if (!$('body').hasClass('sidebar-collapse'))
        $("[data-layout='sidebar-collapse']").click();
    });

    // Reset options
    if ($('body').hasClass('fixed')) {
      $("[data-layout='fixed']").attr('checked', 'checked');
    }
    if ($('body').hasClass('layout-boxed')) {
      $("[data-layout='layout-boxed']").attr('checked', 'checked');
    }
    if ($('body').hasClass('sidebar-collapse')) {
      $("[data-layout='sidebar-collapse']").attr('checked', 'checked');
    }

  }
})(jQuery, $.AdminLTE);
