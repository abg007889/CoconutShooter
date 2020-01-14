#pragma strict

public var speed : float = 20.0;
public var lifeTime : float = 1;

function Start () {
	var r : Rigidbody = GetComponent.<Rigidbody>();
	r.velocity = transform.forward * speed;
	Destroy(gameObject, lifeTime);
}

function Update () {
	
}