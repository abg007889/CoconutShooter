#pragma strict

public var minX : float = 115;
public var maxX : float = 210;
public var minZ : float = 200;
public var maxZ : float = 300;
public var coconut : GameObject;

function Start () {
	for (var i : int = 0; i <10 ; i++){
	var pos : Vector3 = Vector3(Random.Range(minX, maxX), 50, Random.Range(minZ, maxZ));
	Instantiate (coconut, pos, transform.rotation);
	}
}

function Update () {

}