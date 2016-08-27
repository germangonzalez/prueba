$(document).ready(function(e) {
    $("#op_colorfondo").change(function(e) {
        $("#resultado").css("background-color", $("#op_colorfondo").val());
    });
	$("#op_ancho").change(function(e) {
        $("#resultado").css("width", $("#op_ancho").val());
    });
	$("#op_alto").change(function(e) {
        $("#resultado").css("height", $("#op_alto").val());
	});
	$("#op_titulo").keyup(function(e) {
        $("#titulo").html($("#op_titulo").val());
    });
	 $("#op_colorfondotitulo").change(function(e) {
        $("#titulo").css("background-color", $("#op_colorfondotitulo").val());
    });

	$("#op_titulo_art2").keyup(function(e) {
        $("#articulo2").html($("#op_titulo_art2").val());
    });
	$("#op_titulo_art1").keyup(function(e) {
        $("#articulo1").html($("#op_titulo_art1").val());
    });
	$("#op_colorfondoart1").change(function(e) {
        $("#articulo1").css("background-color", $("#op_colorfondoart1").val());
    });
	$("#op_colorfondoart2").change(function(e) {
        $("#articulo2").css("background-color", $("#op_colorfondoart2").val());
    });
	$("#op_tipoletra_art1").change(function(e) {
        $("#articulo1").css("font-family", $("#op_tipoletra_art1").val());
	});
	$("#op_tipoletra_art2").change(function(e) {
        $("#articulo2").css("font-family", $("#op_tipoletra_art2").val());
    });
	$("#op_tipoletra_titulo").change(function(e) {
        $("#titulo").css("font-family", $("#op_tipoletra_titulo").val());
    });
	$("#op_colorletra_art1").change(function(e) {
        $("#articulo1").css("color", $("#op_colorletra_art1").val());
    });
	$("#op_colorletra_art2").change(function(e) {
        $("#articulo2").css("color", $("#op_colorletra_art2").val());
    });
	$("#op_colorletra_titulo").change(function(e) {
        $("#titulo").css("color", $("#op_colorletra_titulo").val());
    });
	$("#conbarra").change(function(e) {
        $("#articulo2").css("overflow", $("#conbarra").val());
    });
	$("#sinbarra").change(function(e) {
        $("#articulo2").css("overflow", $("#sinbarra").val());
    });
	$("#op_colorletra_footer").change(function(e) {
        $("footer").css("color", $("#op_colorletra_footer").val());
    });
	$("#op_tipoletra_footer").change(function(e) {
        $("footer").css("font-family", $("#op_tipoletra_footer").val());
    });
	$("#op_tamanoletra_art1").change(function(e) {
        $("#articulo1").css("font-size", $("#op_tamanoletra_art1").val()+"px");
    });
	$("#op_tamanoletra_art2").change(function(e) {
        $("#articulo2").css("font-size", $("#op_tamanoletra_art2").val()+"px");
    });
	$("#op_tamanoletra_titulo").change(function(e) {
        $("#titulo").css("font-size", $("#op_tamanoletra_titulo").val()+"px");
    });
	$("#op_tamanoletra_footer").change(function(e) {
        $("footer").css("font-size", $("#op_tamanoletra_footer").val()+"px");
    });
	$("#fondopagina").change(function(e) {
        $("body").css("background-image", $("#fondopagina").val());
    });
	$("#cont-pagina").change(function(e) {
        $("#resultado").css("width", $("#cont-pagina").val());
		 });
	$("#cont-pagina").change(function(e) {
        $("#resultado").css("height", $("#cont-pagina").val());
		 });
});

