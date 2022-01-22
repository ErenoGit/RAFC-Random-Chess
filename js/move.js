function IsCanMoveThere(color, from, to)
{
	to_piece = GetPiece(to);
	
	if(color == "white"){
		if(to_piece == "♙" || to_piece == "♖" || to_piece == "♘" || to_piece == "♗" || to_piece == "♕" || to_piece == "♔"){
			return false;
		}
	}
	else
	{
		if(to_piece == "♟" || to_piece == "♜" || to_piece == "♞" || to_piece == "♝" || to_piece == "♛" || to_piece == "♚"){
			return false;
		}
	}
	
	pieceToCheck = GetPiece(from);
	switch(pieceToCheck)
	{
		case "":
			return false;
		break;
		case "♙" || "♟":
			return IsCanMoveTherePawn(from, to);
		break;
		case "♖" || "♜":
			return IsCanMoveThereRook(from, to);
		break;
		case "♘" || "♞":
			return IsCanMoveThereKnight(from, to);
		break;
		case "♗" || "♝":
			return IsCanMoveThereBishop(from, to);
		break;
		case "♕" || "♛":
			return IsCanMoveThereQueen(from, to);
		break;
		case "♔" || "♚":
			return IsCanMoveThereKing(from, to);
		break;
	}
}

function IsCanMoveTherePawn(from, to)
{
	return true;
}

function IsCanMoveThereKnight(from, to)
{
	return true;
}

function IsCanMoveThereBishop(from, to)
{
	return true;
}

function IsCanMoveThereQueen(from, to)
{
	return true;
}

function IsCanMoveThereKing(from, to)
{
	return true;
}

function IsCanMoveThereRook(from, to)
{
	from_replaced = from.replace('[', '');
	from_replaced = from_replaced.replace(']', '');
	from_splitted = from_replaced.split(',');
	from_x = parseInt(from_splitted[0]);
	from_y = parseInt(from_splitted[1]);
			
	to_replaced = to.replace('[', '');
	to_replaced = to_replaced.replace(']', '');
	to_splitted = to_replaced.split(',');
	to_x = parseInt(to_splitted[0]);
	to_y = parseInt(to_splitted[1]);
			
	horizontal_move = 0;
	vertical_move = 0;
			
	if(from_x == to_x){
		horizontal_move = to_y - from_y;
	}
	else if(from_y == to_y){
		vertical_move = to_x - from_x;
	}
	else{
		return false;
	}
			
	var between = [];
			
	if(vertical_move > 0)
	{
		//move to right
		for (var i = from_x + 1; i < to_x; i++) {
		   between.push("["+ i + "," + from_y + "]");
		}
	}
	else if(vertical_move < 0)
	{
		//move to left
		for (var i = from_x - 1; i > to_x; i--) {
		   between.push("["+ i + "," + from_y + "]");
		}
	}
	else if(horizontal_move > 0)
	{
		//move to up
		for (var i = from_y + 1; i < to_y; i++) {
		   between.push("["+ from_x + "," + i + "]");
		}
	}
	else if(horizontal_move < 0)
	{
		//move to down
		for (var i = from_y - 1; i > to_y; i--) {
		   between.push("["+ from_x + "," + i + "]");
		}
	}
				
			
	for (const element of between) {
		console.log("check "+element);
		if(GetPiece(element) != ""){
			return false;
		}
	}
			
	return true;
}