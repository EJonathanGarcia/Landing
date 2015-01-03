var $form 			= $('.formulario'),
	$box 			= $('.discussion'),
	$comment 		= $('.comentario'),
	$link 			= $('.link'),
	$cajat 			= $('.textoInput'),
	$cajal 			= $('.link'),
	$button 		= $('.boton'),
	$list			= $('.abajo'),
	$arriba			= $('.arriba'),
	$botonMostrar 	= $('.botonRecompensas'),
	$recompensas  	= $('.recompensas'),
	$botonRegresar	= $('.botonRegresar');
	$botonComentario= $('.textoInput');
	$answerLink		= $('.answerLink');
	$answerTextBox  = $('.answerTextbox');

function agregarPost(e){
	e.preventDefault();
	var texto	= $cajat.val(),
		url		= $cajal.val(),
		$clone 	= $box.clone();

		$clone.find('.comentario')
			.text(texto);

		$clone.find('.hipertexto a')
			.text(url)
			.attr('href', url);


		$list.prepend($clone);

		$cajat.val('');
		$cajal.val('');

		$link.removeClass('link-after');
		$button.removeClass('boton-after');
		$arriba.removeClass('arriba-after');
		$botonComentario.removeClass('textoInput-after');
		$botonComentario.addClass('textoInput');
}

function mostrarRecompensas(e){
	e.preventDefault();
		
		$recompensas.show(1500);
		$botonMostrar.hide();
		$botonRegresar.show();
		$list.hide();
		$arriba.hide();

}

function ocultarRecompensas(e){
	e.preventDefault();

		$recompensas.hide();
		$botonRegresar.hide();
		$botonMostrar.show();
		$list.show(1500);
		$arriba.show(1500);
}
function mostrarCajaComentario(e){
	e.preventDefault();
		$link.addClass('link-after');
		$button.addClass('boton-after');
		$arriba.addClass('arriba-after');
		$botonComentario.removeClass('textoInput');
		$botonComentario.addClass('textoInput-after');

}
function addAnswer(e){
	e.preventDefault();

	var $boxAnswer = $('.answerFormulary');

	$boxAnswer.slideToggle(); 
}
function showCompleteBoxAnswer(e){
	e.preventDefault();

	var $answerButton = ('.answerButton');
		
		$answerButton.slideToggle();

}
$button.click( agregarPost );
$botonMostrar.click( mostrarRecompensas );
$botonRegresar.click( ocultarRecompensas );
$botonComentario.click( mostrarCajaComentario );
$answerLink.click( addAnswer );
$answerTextBox.click( showCompleteBoxAnswer );