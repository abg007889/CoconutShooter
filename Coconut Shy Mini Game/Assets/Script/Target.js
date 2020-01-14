#pragma strict

public var coconut : GameObject;
public var anim : Animator;
private var uiDemo : GameObject;

function Update(){
	uiDemo = GameObject.Find("UIDemo");
}

function OnCollisionEnter(col : Collision){
	if(col.gameObject.tag == "coconut") {
		uiDemo.SendMessage("IncrementTarget");
		anim.SetBool("targetHit", true);
		yield WaitForSeconds(3);
		anim.SetBool("targetHit", false);
		uiDemo.SendMessage("DecrementTarget");
	}
}