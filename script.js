


$(function(){
	console.log("Javascript Good!")

// charbacter object



var addEventListeners = function(){
	// $('.character').on(
	// 	'click', function(){
	// 		console.log('clicked X')
	// 		$('.character.selected').removeClass("selected")
	// 		$(this).toggleClass("selected")

	// 	})



	$('.button#heal').on(
		'click', function(){
			// if(status.current_turn.health = status.current_turn.maxhealth){
			// 	alert("Your health is full!")
			// }
			console.log(status.current_turn)
			heal(status.current_turn)
			console.log("You clicked heal")
			nextTurn();
		})

	$('.button#attack').on(
		'click', function(){
			console.log('clicked button')

			if(status.current_turn.enemy === true){
				enemyAttack(status.current_turn)
			}
			else
			{
				playerAttack(status.current_turn, status.current_target)
			}

			if(status.current_target.concious===false){
				// $('.enemyimage').text("out")
			}
			setTimeout(function() {
				if(status.isPartyDead()===true){
				//you lose
				$('.characters_container').empty()
				$('.characters_container').append("The party has been wiped out.<br><br> You Lose!")
			}
		}, 2000);
			//party is dead


			nextTurn()
		})

	$('div.enemy').on(
		'click', function(){
			$('div.enemy').css("background-image", "url("+ status.enemy.enemy1.image +")");
		})

	$('.enemyimage').on(
		'click', function(){
			let element = $(this).attr('key')
			$('.enemyimage').find('.selected').removeClass("selected")
			$(this).addClass("selected")

			// $(this).toggle(
			// 	function() {
			// 		$(this).addClass("selected");
			// 	}, function() {
			// 		$( this ).removeClass("selected");
			// 	})

			console.log(status.enemy)
			console.log(element)
			// status.current_target = status.enemy[element][0]

		})

	$('.button#next').on('click', function(){
		
		newround()
		// addEventListeners()	
	})
	$('.button#start').on('click', function(){
		console.log('start clicked')
		$('.start').hide()
		$('.left').show()
		$('.mid').show()
		$('.button').css('visibility', 'visible')
		if(status.current_turn.enemy==true){
			enemyturn()
		}

	})


}


console.log(status.turn_queue)

/*Health bar code - http://codepen.io/dwidomski/pen/KBzuo*/


$(document).ready(function(){
	addEventListeners();
})
})


