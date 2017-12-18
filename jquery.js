


	$('.btnprincipal').hover(function(){
    $(this).css("box-shadow", "6px 6px 20px black");
        }, function(){
        $(this).css("box-shadow", "");

	});

	  // LABEL
	$('#label').click(function(){
	     $('hr').after('<div id="container"> Texte du label <input type ="text" id="idinput"><button id="btnok" class="btnsecondaire">OK</button><button id="btnannuler" class="btnsecondaire">Annuler</button></div><div id="container2"></div>');
	$('#container2').load('load.html .zlabel');	

	$('.btnprincipal').css("box-shadow", "");
	$('.btnprincipal').attr('disabled', 'disabled');
	$('#container').hide().fadeIn(2000);
	$('#container2').hide().fadeIn(2000);
	//Input
	$('#idinput').focus();

	$('.btnsecondaire').hover(function(){
    $(this).css("box-shadow", "6px 6px 20px black");
        }, function(){
        $(this).css("box-shadow", "");

	});


	//Bouton ok
	$('#btnok').click(function(){
		var validation = '<span>' + $('#idinput').val() + '</span>';
		$('#gauche').append(validation);

		$('#container').fadeOut(2000,function(){
			$('#container').remove();
			$('.btnprincipal').removeAttr('disabled');
		});
		$('#container2').fadeOut(2000);
		
	});

	//Bouton annuler
	$('#btnannuler').click(function(){
		$('#container').fadeOut(2000,function(){
			$('#container').remove();
			$('.btnprincipal').removeAttr('disabled');
		});
	$('#container2').fadeOut(2000);
		
	});


	}); //Fin label


	  // ZONE DE TEXTE
	$('#text').click(function(){
	     $('hr').after('<div id="container"> id de la zone de texte <input type ="text" id="idinput"><button id="btnok" class="btnsecondaire">OK</button><button id="btnannuler" class="btnsecondaire">Annuler</button></div><div id="container2"></div>');
	$('#container2').load('load.html .zinput');	

	$('.btnprincipal').css("box-shadow", "");
	$('.btnprincipal').attr('disabled', 'disabled');
	$('#container').hide().fadeIn(2000);
	$('#container2').hide().fadeIn(2000);

	//Input
	$('#idinput').focus();

	$('.btnsecondaire').hover(function(){
    $(this).css("box-shadow", "6px 6px 20px black");
        }, function(){
        $(this).css("box-shadow", "");

	});

	//Bouton ok
	$('#btnok').click(function(){
		var validation = '<input type="text" id="' + $('#idinput').val() +'"><br>';
		$('#gauche').append(validation);

		$('#container').fadeOut(2000,function(){
			$('#container').remove();
			$('.btnprincipal').removeAttr('disabled');
		});
		$('#container2').fadeOut(2000);
	});

	//Bouton annuler
	$('#btnannuler').click(function(){
		$('#container').fadeOut(2000,function(){
			$('#container').remove();
			$('.btnprincipal').removeAttr('disabled');
		});
		$('#container2').fadeOut(2000);
		
	});


	}); //Fin zone de texte

	  // BUTTON
	$('#bouton').click(function(){
	     $('hr').after('<div id="container"> Texte du bouton <input type ="text" id="idinput"><button id="btnok" class="btnsecondaire">OK</button><button id="btnannuler" class="btnsecondaire">Annuler</button></div><div id="container2"></div>');
	$('#container2').load('load.html .zbouton');		

	$('.btnprincipal').css("box-shadow", "");
	$('.btnprincipal').attr('disabled', 'disabled');
	$('#container').hide().fadeIn(2000);
	$('#container2').hide().fadeIn(2000);

	//Input
	$('#idinput').focus();

	$('.btnsecondaire').hover(function(){
    $(this).css("box-shadow", "6px 6px 20px black");
        }, function(){
        $(this).css("box-shadow", "");

	});

	//Bouton ok
	$('#btnok').click(function(){
		var validation = '<button>' + $('#idinput').val() +'</button><br>';
		$('#gauche').append(validation);

		$('#container').fadeOut(2000,function(){
			$('#container').remove();
			$('.btnprincipal').removeAttr('disabled');
		});
		$('#container2').fadeOut(2000);
	});

	//Bouton annuler
	$('#btnannuler').click(function(){
		$('#container').fadeOut(2000,function(){
			$('#container').remove();
			$('.btnprincipal').removeAttr('disabled');
		});
		$('#container2').fadeOut(2000);
	});


	}); //Fin button



