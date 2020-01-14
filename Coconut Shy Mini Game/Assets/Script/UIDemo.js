#pragma strict

var score : int;
var coconut : boolean;
var haveWon : boolean;
public var coconutNum : UI.Text;
public var scoreText : UI.Text;
//public var powerCell : GameObject;
//private var packCoconut : GameObject;
private var thrower : GameObject;

function Start () {
	score = 0;
	haveWon = false;
	coconut = false;
}

function Update () {
	//packCoconut = GameObject.Find("Coconut2");
	thrower = GameObject.Find("Thrower");
	if (score >= 6){
		scoreText.text = "You WIN!";
		score = 0;
		haveWon = true;
		//powerCell.transform.Translate(-1,0,0);
	}
}

function IncrementTarget () {
	if (haveWon == false){
		score++;
		scoreText.text = score.ToString();
	}
}

function DecrementTarget () {
	if (score > 0){
		score--;
		scoreText.text = score.ToString();
	}
}

function AddCoconut () {
	//if (coconut < 6){
		coconut = true;
		coconutNum.text = "You have 6 times to throw coconuts";
		/*coconut++;
		coconutNum.text = coconut.ToString();
	}
	if (coconut >= 1){*/
		thrower.SendMessage("HadCoconut");
	//}
}

function NoCoconut () {
	coconut = false;
}

function ScoreZero () {
	if (haveWon == false){
		score = 0;
		scoreText.text = score.ToString();
	}
}

/*function CanPack () {
	if (coconut < 6) {
		packCoconut.SendMessage("Pack");
	}
}

function CannotPack () {
	if (coconut == 6) {
		packCoconut.SendMessage("NoPack");
	}
}*/

/*function MinusCoconut () {
	if (coconut == 0){
		thrower.SendMessage("NoCoconut");
	}
	if (coconut > 0){
		coconut--;
		coconutNum.text = coconut.ToString();
	}
}*/

/*function CanPack () {
	if (coconut < 6) {
		packCoconut.SendMessage("Pack");
		promptText.text = " ";
	}
}

function CannotPack () {
	if (coconut == 6) {
		packCoconut.SendMessage("NoPack");
		promptText.text = "You cannot pack more coconuts";
	}
}

function AddCoconut () {
	if (coconut < 7){
		coconut++;
		coconutNum.text = coconut.ToString();
	}
	if (coconut >= 1){
		thrower.SendMessage("HadCoconut");
	}
}

function MinusCoconut () {
	if (coconut == 0){
		promptText.text = "You should go to pack coconuts";
		thrower.SendMessage("NoCoconut");
	}
	if (coconut > 0){
		coconut--;
		coconutNum.text = coconut.ToString();
	}
}
*/