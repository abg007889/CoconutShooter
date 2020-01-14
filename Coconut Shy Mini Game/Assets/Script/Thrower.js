#pragma strict

public var cocoThrow : AudioClip;
public var coconut : GameObject;
private var canThrow : boolean;
private var noCoconut : boolean;
public var scoreText : UI.Text;
public var coconutNum : UI.Text;
public var crosshair : UI.Image;
public var textHint : UI.Text;
public var numText : UI.Text;
private var uiDemo : GameObject;
//private var uiDemo2 : GameObject;
var times : int;

function Start () {
	canThrow = false;
	noCoconut = true;
	crosshair.enabled = false;
	textHint.enabled = false;
	scoreText.enabled = false;
	coconutNum.enabled = false;
	numText.enabled = false;
	uiDemo = GameObject.Find("UIDemo");
	//uiDemo2 = GameObject.Find("UIDemo2");
	times = 6;
}

function Update () {
	if (canThrow == true) {
		var f : boolean = Input.GetButtonDown("Fire1");
		if (noCoconut == false){
			if (f){
				if (times > 0){
					GetComponent.<AudioSource>().PlayOneShot(cocoThrow);
					Instantiate(coconut, transform.position, transform.rotation);
					times--;
					numText.text = times.ToString();
				}
			}
		}
	}
}

function HadCoconut () {
	noCoconut = false;
	times = 6;
	numText.text = times.ToString();
}

function NoCoconut () {
	if (times == 0){
		noCoconut = true;
		uiDemo.SendMessage("NoCoconut");
	}
}

function CanThrow () {
	canThrow = true;
	crosshair.enabled = true;
	textHint.enabled = true;
	scoreText.enabled = true;
	coconutNum.enabled = true;
	numText.enabled = true;
}

function CannotThrow () {
	canThrow = false;
	crosshair.enabled = false;
	textHint.enabled = false;
	uiDemo.SendMessage("ScoreZero");
	scoreText.enabled = false;
	coconutNum.enabled = false;
	numText.enabled = false;
}