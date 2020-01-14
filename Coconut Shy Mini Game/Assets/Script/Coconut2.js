#pragma strict

private var uiDemo : GameObject;
private var pack : boolean;

function Start(){
	uiDemo = GameObject.Find("UIDemo");
	pack = true;
}

function Update () {

}

function NoPack () {
	pack = false;
}

function Pack () {
	pack = true;
}

function OnCollisionEnter(col : Collision) {
	if (pack == true){
		if(col.gameObject.tag == "Player") {
			uiDemo.SendMessage("AddCoconut");
			Destroy(gameObject);
		}
	}
}