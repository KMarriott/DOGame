// 

let enemylist = {
	coronamon: {
		id: 0,
		name: 'Coronamon',
		image: 'https://wikimon.net/images/8/82/Coronamon.jpg',
		level: 1,
		health: 1000,
		mana: 100,
		attack: 100,
		defense: 50,
		charge: 0,
		skills: {},
		experience: 100,
		speed: 1200,
		enemy: true
	},
	shurimon : {
		id: 1,
		name: 'Shurimon',
		image: 'https://wikimon.net/images/thumb/7/76/Shurimon2.jpg/200px-Shurimon2.jpg',
		level: 1,
		health: 1000,
		mana: 100,
		attack: 100,
		defense: 50,
		charge: 0,
		skills: {},
		experience: 100,
		speed: 120,
		enemy: true
	},
	sheepmon1: {
		id: 2,
		name: 'Sheepmon Bro 1',
		image: 'https://wikimon.net/images/b/bb/Sheepmon.jpg',
		level: 1,
		health: 1000,
		mana: 100,
		attack: 100,
		defense: 50,
		charge: 0,
		skills: {},
		experience: 200,
		speed: 100,
		enemy: true
	},
	sheepmon2: {
		id: 3,
		name: 'Sheepmon Bro 2',
		image: 'https://wikimon.net/images/f/f2/Sheepmon_illustcon3.jpg',
		level: 1,
		health: 1000,
		mana: 100,
		attack: 100,
		defense: 50,
		charge: 0,
		skills: {},
		experience: 200,
		speed: 100,
		enemy: true
	},
	bullmon: {
		id: 4,
		name: 'Bullmon',
		image: 'https://wikimon.net/images/2/2f/Bullmon.jpg',
		level: 1,
		health: 2000,
		mana: 100,
		attack: 110,
		defense: 80,
		charge: 0,
		skills: {},
		experience: 250,
		speed: 100,
		enemy: true
	},
	kuwagamon: {
		id: 3,
		name: 'Kuwagamon',
		image: 'https://wikimon.net/images/e/e3/Kuwagamon3.jpg',
		level: 1,
		health: 1500,
		mana: 100,
		attack: 120,
		defense: 120,
		charge: 0,
		skills: {},
		experience: 300,
		speed: 100,
		enemy: true
	},
	sangloupmon: {
		id: 3,
		name: 'Sangloupmon',
		image: 'https://wikimon.net/images/d/da/Sangloupmon_fortune.png',
		level: 1,
		health: 900,
		mana: 100,
		attack: 200,
		defense: 50,
		charge: 0,
		skills: {},
		experience: 250,
		speed: 100,
		enemy: true
	}


}

let enounters = {
	// first : [enemylist.coronamon],
	second : [enemylist.shurimon],
	third : [enemylist.sheepmon1],
	win: "win!"
}


//gets the enounter in order
let getencounter = function(round){
	return enounters[Object.keys(enounters)[round]]
}

console.log(getencounter(1))
