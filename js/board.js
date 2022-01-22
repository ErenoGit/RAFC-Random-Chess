function ChessboardStartPlace()
{
	PutPiece("[0,0]", "♜");
	PutPiece("[0,1]", "♞");
	PutPiece("[0,2]", "♝");
	PutPiece("[0,3]", "♛");
	PutPiece("[0,4]", "♚");
	PutPiece("[0,5]", "♝");
	PutPiece("[0,6]", "♞");
	PutPiece("[0,7]", "♜");
	PutPiece("[1,0]", "♟");
	PutPiece("[1,1]", "♟");
	PutPiece("[1,2]", "♟");
	PutPiece("[1,3]", "♟");
	PutPiece("[1,4]", "♟");
	PutPiece("[1,5]", "♟");
	PutPiece("[1,6]", "♟");
	PutPiece("[1,7]", "♟");
	
	PutPiece("[7,0]", "♖");
	PutPiece("[7,1]", "♘");
	PutPiece("[7,2]", "♗");
	PutPiece("[7,3]", "♕");
	PutPiece("[7,4]", "♔");
	PutPiece("[7,5]", "♗");
	PutPiece("[7,6]", "♘");
	PutPiece("[7,7]", "♖");
	PutPiece("[6,0]", "♙");
	PutPiece("[6,1]", "♙");
	PutPiece("[6,2]", "♙");
	PutPiece("[6,3]", "♙");
	PutPiece("[6,4]", "♙");
	PutPiece("[6,5]", "♙");
	PutPiece("[6,6]", "♙");
	PutPiece("[6,7]", "♙");
}

function GetPiece(place)
{
	return document.getElementById(place).innerHTML;
}

function RemovePiece(place)
{
	document.getElementById(place).innerHTML = "";
}

function PutPiece(place, piece)
{
	document.getElementById(place).innerHTML = piece;
}