#pragma strict

private var thrower : GameObject;

function Update(){
	thrower = GameObject.Find("Thrower");
}

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Player") {
		thrower.SendMessage("CanThrow");
	}
}

function OnTriggerExit(col : Collider){
	if(col.gameObject.tag == "Player") {
		thrower.SendMessage("CannotThrow");
	}
}