RPG Idea

==============================================

Fix up CSS

Make a proper victory/Loss Page
Allow for a replay
	Allow for using Score as experience to level up caracters after each reset/round
Write Defense/Stance Change/Charge
	- Make Heal Mechanically not retarded
Make Next Button Bigger when it appears
	-Give next button an idle animation
	-Move to div on top
Add animation
	-Character moving forward for attack
Control with arrow keys!
Make a dice roll for bonuses/Include animation?
Write character Passives (see below)
Enable Multiple enemies

Music
	-Play Character's theme when they're the last standing


Future Ideas:
Equipment/Items
	-Card Slash
Allow for multiple enemies if time allows.

Leveling up - Gaining Experience
-Experience Between fights
-Transform to change stats
-Summons (Partner Digimon!)

Enemies change behavior depending on health
Passive Effect for Characters?
Missing characters for certain fights?
Buffs for certain fights?

Overworld if time allows.



Done:
Made Heal Work
Hide other buttons when #next comes up
-floating animation for hover over (enemy, characters, buttons)
Rounds of Fights
Have animation showing amount of damage

=============================================

Objects

Characters
	Name
	Health
	Attack
	Defense
	Mana
	Speed
	Charge
	Skills
		Cost
		Cooldown
	Exp	

Enemy
	Name
	Health
	Attack
	Defense
	Mana
	Speed
	Charge
	Skills
		Cost
		Cooldown


Skills:
	Defend:
		Block next Attack
	Heal:
	 	Heal for a certain amount
	Super Attack:
		1.5 Attack for next turn.
	Stance Change
		Offensive - 1.5 Attack/9.5 Armor
		Defensive - 1.5 Armor/ 0.5 Attack
		Neutral

	 - Form Change -


(Function/methods)
-Select attacks
-Select skills
	- Skills are more effective but cost cost mp
	- Have cooldowns rather than mp?
	- Both?
-Health


Damage Calculation:
Attack * (random number betweeen 0.9 and 1.25) - Opponents Armor

Turn Queue
Characters are randomly placed on quue based off Speed.
After an action they are placed at the end of a queue.
High Speed characters can attack twice if they're lucky?

UI
characters on right, enemy on left

Replace commands with "Spawn new enemy"
Keep a score of total experience in the bottom left. (DP?)


MVP:
Turned based boss fight.


Characters:

Castor - Fighter 
Abby - Healer 
Konrad - Paladin 
Chie - Brawler
Todd - Thief 

(Stats were changed)

Characters Passive - 
Castor - Progressively gets stronger
Abby - Better dice roles/Higher range with RNG / Makes Opponents Dice Range Lower
Chie - Chance for double hit/Reroll dodges
Konrad - ???
Recovers HP
Todd - ???
Always goes third





Base it off encounters in DO
-evolve as you reach that point in the story




List of enemies:
Shurimon
Mysterious Beast (Hollowmon) (Dosnt count)
Sheepmon x2
Bullmon x2
Kuwwagamon, Sangloupmon
Hollowmon
Agent 37 (Alicia)

-Bonus-
Devimon?
Leomon
-Flashback-
-Armors-
Hollowmon x3
Hollowmon x4
DeathMeramon
Stronk DeathMeramon, x2 Hollowmon
Shurimon, Makuramon, x2 Igamon
-CARD SLASH: NEPTUNEMON-
BlackWereGarurumon



===========================


Quick Demo

-Can only attack
Win
Loss

Hard Parts:
Getting Animations going
Moving onto a new round.
-Show $('.enemyimage').show

Connecting the javascript to css

Realized I could just give thhe jquery position as key in the characters object for easy reference



Overcame:
Planning was difficult

You have to think about the battle system
ho to organizee the data

Game Status
-Characters
--Stats

Messy Code
Coming back to it was hard
-Would just sit and stare for like an hour before someting started to make sense and would gete a flow going.
Felt a need to reorganize but given that we only had a week it didn't seem worthwhile.

Inconsistent with my logic which made for coming back difficult (result from learning new tricks as I worked)
- Adding classes for animations vs addding an id to determine which element should be removed 
- Lot of canging gers on processing things which is tiring

ideas constantly came and conflicted with what I had
would require very basic changes, which would break other parts of the code.

