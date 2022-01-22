function ChessboardStartPlace()
{
	PutPiece("[0,0]", "♖");
	// PutPiece("[1,0]", "♘");
	// PutPiece("[2,0]", "♗");
	// PutPiece("[3,0]", "♕");
	// PutPiece("[4,0]", "♔");
	// PutPiece("[5,0]", "♗");
	// PutPiece("[6,0]", "♘");
	// PutPiece("[7,0]", "♖");
	// PutPiece("[0,1]", "♙");
	// PutPiece("[1,1]", "♙");
	// PutPiece("[2,1]", "♙");
	// PutPiece("[3,1]", "♙");
	// PutPiece("[4,1]", "♙");
	// PutPiece("[5,1]", "♙");
	// PutPiece("[6,1]", "♙");
	// PutPiece("[7,1]", "♙");
	
	PutPiece("[0,7]", "♜");
	// PutPiece("[1,7]", "♞");
	// PutPiece("[2,7]", "♝");
	// PutPiece("[3,7]", "♛");
	// PutPiece("[4,7]", "♚");
	// PutPiece("[5,7]", "♝");
	// PutPiece("[6,7]", "♞");
	// PutPiece("[7,7]", "♜");
	// PutPiece("[0,6]", "♟");
	// PutPiece("[1,6]", "♟");
	// PutPiece("[2,6]", "♟");
	// PutPiece("[3,6]", "♟");
	// PutPiece("[4,6]", "♟");
	// PutPiece("[5,6]", "♟");
	// PutPiece("[6,6]", "♟");
	// PutPiece("[7,6]", "♟");
}

function GetRandomPlaceByColor(color)
{
	place = "";
	while(place == "")
	{
		randomPlace = GetRandomPlace();
		
		if(color == "white")
		{
			if(GetPiece(randomPlace) == "♙" || GetPiece(randomPlace) == "♖" || GetPiece(randomPlace) == "♘" || GetPiece(randomPlace) == "♗" || GetPiece(randomPlace) == "♕" || GetPiece(randomPlace) == "♔"){
				return randomPlace;
			}
		}
		else
		{
			if(GetPiece(randomPlace) == "♟" || GetPiece(randomPlace) == "♜" || GetPiece(randomPlace) == "♞" || GetPiece(randomPlace) == "♝" || GetPiece(randomPlace) == "♛" || GetPiece(randomPlace) == "♚"){
				return randomPlace;
			}
		}
	}
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