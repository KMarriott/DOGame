// let characters = require("./characters.js")
// let enemies = require("./enemies.js")
let characters = characterlist
let enemies = enemylist

let GameState = function(json){
	this.party  = json.party;
	this.enemy  = json.enemy;
	this.turn_queue  = json.turn_queue;
	this.current_turn = json.current_turn;
	this.current_target = json.current_target;
	this.round = json.round;
	this.score = json.score;
	this.isEnemyDead = function(){
		length = Object.keys(this.enemy).length
		console.log(length)
		count = 0;
		for (keys in this.enemy){
			if(status.enemy[keys].concious===false){
				count++
			}
			if(count===length){
				return true
			}
		}
		return false
	};
	this.isPartyDead = function(){
		length = Object.keys(this.party).length
		console.log(length)
		count = 0;
		for (keys in this.party){
			if(status.party[keys].concious===false){
				count++
			}
			if(count===5){
				return true
			}
		}
		return false
	};	
};


let Character = function(json){
	this.name = json.name;
	this.level = json.level;
	this.image = json.image;
	this.maxhealth = json.health;
	this.health = json.health;
	this.speed = json.speed;
	this.attack = json.attack;
	this.baseattack = json.attack;
	this.defense = json.defense;
	this.basedefense = json.defense;
	this.mana = json.mana;
	this.basemana = json.mana;
	this.charge = 0;
	this.concious = true;
	this.skills= {};
	this.experience = json.experience;
	this.enemy = json.enemy;
	this.position = json.position;

}


let status = ''

let gamestatejson = {
	party : {
		player1: '',
		player2: '',
		player3: '',
		player4: '',
		player5: ''
	},
	enemy : {},
	turn_queue : [],
	current_turn: {},
	current_target: {},
	round: 0,
	score: 0,
}


let newgame = function(){
	$('.left').hide()
	status = new GameState(gamestatejson);

	addplayers();
	addenemy()
	queueUp();


	//sets default target
	target(status.enemy.enemy0)
	$('.button#next').hide()
}

let addplayers = function(){

	//This is where I would set divs.

	characters.castor.position = $("#player1")
	characters.abby.position = $("#player2")
	characters.chie.position = $("#player3")
	characters.todd.position = $("#player4")
	characters.konrad.position = $("#player5")

	let player1 = new Character(characters.castor);
	let player2 = new Character(characters.abby); 
	let player3 = new Character(characters.chie); 
	let player4 = new Character(characters.todd);
	let player5 = new Character(characters.konrad); 

	player1.player = "player1";
	player2.player = "player2";
	player3.player = "player3";
	player4.player = "player4";
	player5.player = "player5";

	status.party.player1 = player1;
	status.party.player2 = player2;
	status.party.player3 = player3;
	status.party.player4 = player4;
	status.party.player5 = player5;

	$('#player1').find('health').text(player1.health +'/'+ player1.maxhealth)
	$('#player2').find('health').text(player2.health +'/'+ player2.maxhealth)
	$('#player3').find('health').text(player3.health +'/'+ player3.maxhealth)
	$('#player4').find('health').text(player4.health +'/'+ player4.maxhealth)
	$('#player5').find('health').text(player5.health +'/'+ player5.maxhealth)
	
	// $("#player2").append('<health>' + player2.health +'/'+ player2.maxhealth +'</health>')
	// $("#player3").append('<health>' + player3.health +'/'+ player3.maxhealth +'</health>')
	// $("#player4").append('<health>' + player4.health +'/'+ player4.maxhealth +'</health>')
	// $("#player5").append('<health>' + player5.health +'/'+ player5.maxhealth +'</health>')

	// console.log(status)0
}

let win = function(){
	$(".enemyimage").hide()
	$('.button').hide()
	$(".enemy_container").append("<win>You win!</win>")

	
}


let addenemy = function(){

	//adds targets from 
	$(".enemyimage").hide()

	if(getencounter(status.round)>=Object.keys(enounters).length-1)
	{
		console.log("You win!")
		win()
	}
	else{
		let position = $("#0")
		position.show()
		let current_encounter = getencounter(status.round)
		current_encounter[0].position = position
		newenemy = current_encounter[0]

		let enemy = new Character(newenemy)
		status.enemy.enemy0 = enemy;
	// console.log(enemy)
	$(position).css("background-image", "url("+enemy.image+")")
	target(status.enemy.enemy0)
}
	// let enemy_div = "<div class='enemyimage'>" +
	// "<div class='health-bg'><br></div>" +
	// '<div class=\'health-bar\' data-total="1000" data-value="1000">' +
	// '<div class="bar">' +
	// '<div class="hit"></div></div></div></div>'
	


	// for (var e = 0; e < Object.keys(enounters).length; e++) {
	// 	console.log(e)
	// 	let current_encounter = getencounter(e)
	// 	if(current_encounter.length > 1){
	// 		current_encounter.forEach(
	// 			function(el, i){
	// 				console.log(i)
	// 				enemy = new Character(el)
	// 				status.enemy["enemy" + i] = enemy

	// 				enemy_div = "<div class= 'enemyimage' id= 'enemy" + i +"'' encounter = 'e'>" +
	// 				"<div class='health-bg'><br></div>" +
	// 				'<div class=\'health-bar\' data-total="1000" data-value="1000">' +
	// 				'<div class="bar">' +
	// 				'<div class="hit"></div></div></div></div>'
	// 				$(".enemy_container").append($(enemy_div))
	// 				$(".enemyimage#enemy"+i).css("background-image", "url("+enemy.image+")")
	// 				$(".enemyimage#enemy"+i).hide()
	// 			})
	// 	}
	// 	else{
	// 		let enemy = new Character(current_encounter[0])
	// 		status.enemy.enemy0 = enemy;
	// 		$(".enemy_container").append($(enemy_div))
	// 		$(".enemyimage").css("background-image", "url("+enemy.image+")")
	// 	}

	// }

}

let newround= function(){
	status.round ++;
	status.score += status.current_target.experience;
	scoreupdate()
	if(getencounter(status.round)=="win!")
	{
		console.log("You win!")
		win()
	}
	else{
		$('.header#left').text("Round - " + (status.round+1))
		$('.bar').css('width', '100%');
		$('.defeated').removeClass('defeated')
		for( key in status.party){
			status.party[key].health = status.party[key].maxhealth
			status.party[key].concious = true
			status.party[key].position.find('health').text(status.party[key].health +'/'+ status.party[key].maxhealth)
		}


		$('.enemyimage').removeClass('defeated')
		
		status.enemy = {};
		$('.turnorder').text("")
		$('.playertext').text("")
		status.turn_queue = []

	// $('.button#attack').show('click')
	$('.button').show()
	$('.button#next').hide()

	addenemy();
	setTurnOrder()
	queueUp();
}

	// status.current_turn = {};
	

	// status.current_target = {};
	// $('.enemyimage').remove()
	// addenemy()
	// queueUp();

	
	
}

function setinitiative(characters){
	
	for(unit in characters){
		let current_unit = characters[unit]
		let speed = current_unit.speed
		let unit_initiative = Math.floor(speed*(Math.random() *(1.25-1) +1.25))
		current_unit.initiative = unit_initiative
		status.turn_queue.push(current_unit)
	}
}

let queueUp = function(){

	setinitiative(status.enemy)
	setinitiative(status.party)

	status.turn_queue.sort(function(a, b){
		return b.initiative - a.initiative;
	});

	status.current_turn = status.turn_queue[0]
	status.current_target = status.enemy.enemy0
	setTurnOrder()
}


let setTurnOrder = function (){

	for (var i = 0; i < status.turn_queue.length; i++) {
		// 	$('.turnorder').append($('ul.turn').text(status.turn_queue[i].name)
		let display = $('<ul class=\'turn\'  order id = order' + i + '>'+ status.turn_queue[i].name + '</ul>');
		$('.turnorder').append(display)
	}
}

let nextTurn = function(){
	
	status.current_turn.position.removeClass('selected')
	$('.CurrentTurn#'+status.current_turn.name).removeClass('visible')
	$('[order]').first().remove()
	$('[order]').first().css(
		{'border-bottom-style': 'solid',
		'border-color': 'orange'}
		)
	status.turn_queue.shift()
	status.current_turn = status.turn_queue[0]
	console.log(status.turn_queue[0])
	if(status.turn_queue[0]===undefined){
		queueUp()
		console.log("Requeued!")
		status.current_turn = status.turn_queue[0]
	}

	status.current_turn.position.addClass('selected')

	$('.CurrentTurn#'+status.current_turn.name).addClass('visible')

	if(status.current_turn.enemy===true){
		enemyturn()
	}
	if(status.current_turn.name==="Castor"){
		status.current_turn.attack += 10
		console.log("Castor gained 10 attack!")
	}

	// Konrad's broken passive
	// if(status.current_turn.name==="Konrad"){
	// 	console.log("Konrad's Health: " + status.current_turn.health)
	// 	if(status.current_turn.health<status.current_turn.maxhealth){

	// 		status.current_turn.health += 10
	// 		console.log("Konrad's is now: " + status.current_turn.health)
	// 		if(status.current_turn.health>status.current_turn.health){
	// 			status.current_turn.health=status.current_turn.health

	// 			console.log("Konrad's is MAXIMUM")

	// 		}
	// 		console.log("Konrad healed 10 health!")
	// 	}
	// }

}

function enemyturn(){

	$('.button').hide()
	setTimeout(function() {
		$('.button').show()
		$('#next').hide()
		enemyAttack(status.current_turn)
		nextTurn()
	}, 1000);
	
}

let target = function(x){
	status.current_target = x
}


let attack = function(attacker, defender){
	reset = $('button.reset'),
	position = defender.position

	hBar = position.find('.health-bar'),
	bar = hBar.find('.bar'),
	hit = hBar.find('.hit');	

	var total = defender.maxhealth,
	value = defender.health;

	if(status.current_target.enemy === true){
		console.log("Enemy turn")
	}


	let damage = Math.floor(attacker.attack * (Math.random() *(1.25-1) +1.25) - defender.defense)
	
	if(damage<0){
		damage=0
	}


	defender.health -= damage;

	$('.enemytext').text(attacker.name + " attacks " + defender.name +  " " + damage + " damage!");
	$('.playertext').append("<br>" + attacker.name + " dealt " + defender.name + " " + damage + " damage!");
	
	if(defender.health<0){
		defender.health=0
	}
	defender.position.find('health').text(defender.health +'/'+ defender.maxhealth)
	
	if (value < 0) {
			// log("you dead, reset");
			return;
		}

    // max damage is essentially quarter of max life
    // var damage = Math.floor(Math.random()*total);
    // damage = 100;
    var newValue = value - damage;
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;

    var hitWidth = (damage / value) * 100 + "%";
    var hitWidthval = (damage / value)
    console.log(hitWidthval*100)
    if(hitWidthval*100 > 99) {
    	console.log(hitWidth)
    	hitWidth = '99%'
    }

    
    // show hit bar and set the width
    hit.css('width', hitWidth);
    hBar.data('value', newValue);

    
    setTimeout(function(){
    	hit.css({'width': '0'});
    	bar.css('width', barWidth + "%");
    }, 500);


    //bar.css('width', total - value);
    
    // log(value, damage, hitWidth);

}


let heal = function(defender){
	position = defender.position
	defender.health = defender.maxhealth;
	position.addClass('heal')
	setTimeout(function() {
		position.removeClass('heal')
	}, 1000);


	//Hit Bar Stuf ========================
	hBar = position.find('.health-bar'),
	bar = hBar.find('.bar'),
	hit = hBar.find('.hit');	

	var damage = 0;
	var value = defender.health,
	total = defender.maxhealth;


	var newValue = value - damage;
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;

    var hitWidth = (damage / value) * 100 + "%";
    var hitWidthval = (damage / value)

    console.log(hitWidthval*100)
    if(hitWidthval*100 > 99) {
    	console.log(hitWidth)
    	hitWidth = '99%'
    }
    hit.css('width', hitWidth);
    hBar.data('value', newValue);

    setTimeout(function(){
    	hit.css({'width': '0'});
    	bar.css('width', barWidth + "%");
    }, 500);


    console.log(defender)
    defender.position.find('health').text(defender.health +'/'+ defender.maxhealth)


}



let playerAttack = function(attacker, defender){


	if(attacker.concious === true){
		attack(attacker, defender);

		attacker.position.addClass('pulse')
		// defender.position.addClass('pulse')
		setTimeout(function() {
			attacker.position.removeClass('pulse')
			// defender.position.removeClass('pulse')
		}, 750);


		if(defender.health <= 0){
			defender.health = 0;
			defender.concious = false;
			
			console.log(defender.name + " has been defeated by " + attacker.name +"!")
			// $('.enemytext').text(defender.name + " has been defeated by " + attacker.name +"!")
			$('.enemytext').append("<br>" + attacker.name + " dealt the final blow!")
			defender.position.addClass('defeated')


			if(status.isEnemyDead()===true){
				$('.button').hide()
				$('.button#next').show()
			}
		}
	}
	else{
		console.log(attacker.name + " is unconcious and cannot attack!");
		$('.playertext').append("<br>" + attacker.name + " is unconcious and cannot attack!");
	}

	scoreupdate()
	status.score += status.current_target.experience/10;
	scoreupdate()
}

function scoreupdate(){
	$('#score').text("Team Score:\n" + status.score)
}

let enemyAttack = function(attacker){
	// for (var i = 0; i < status.party.length; i++) {
	// 	status.party[i]
	// }
	concious_party = {}
	function ranChar(){
		
		for (keys in status.party){
			console.log(status.party[keys].concious)
			if(status.party[keys].concious===true)
				concious_party[keys] = status.party[keys]
		}

		var obj_keys = Object.keys(concious_party);
		var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
		ran_character = concious_party[ran_key];
		console.log("random character is ")
		console.log(ran_character);
		return ran_character;
	}

	defender = ranChar();

	if(defender.concious===false){
		console.log(attack.name + "tried to attack an unconcious target")
		$('.playertext').append("<br>Bug: " + attacker.name +" Tried to attack an unconcious target!")
	}	

	else{
		attack(attacker, defender)
		if(defender.health <= 0){
			defender.health = 0;
			defender.concious = false;
			console.log(defender.player)
			$('#'+defender.player).addClass('defeated')
			console.log(defender.name + " has been defeated by " + attacker.name +"!")
			$('.playertext').append("<br>" + defender.name + " has been defeated by " + attacker.name +"!")
		}
	}

	defender.position.addClass("hit")
	setTimeout(function() {
		defender.position.removeClass("hit")
	}, 1000);
}


newgame()
// http://codepen.io/dwidomski/pen/KBzuo - Code for hitbar
