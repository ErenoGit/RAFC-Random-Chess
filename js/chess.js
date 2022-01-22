isCheckmate = 0;

async function NewGame()
{
	ChessboardStartPlace();
	await sleep(1000);
	
	while (isCheckmate == 0) {
		Move("white");
		IsCheckmate();
		if(isCheckmate != 0){
			break;
		}
		await sleep(100);
		Move("black");
		IsCheckmate();
		await sleep(100);
	}
}



function IsCheckmate()
{
	if(isCheckmate == 1)
	{
		RemoveMidOfBoardAndShowWinner("White won!");
	}
	else if(isCheckmate == 2)
	{
		RemoveMidOfBoardAndShowWinner("Black won!");
	}
}

async function Move(color)
{
	while(true)
	{
		from = GetRandomPlaceByColor(color);
		if(GetPiece(from) == "♙" || GetPiece(from) == "♟")
		{
			to = GetRandomPlaceForPawn(from, GetPiece(from));
		}
		else
		{
			to = GetRandomPlace();
		}
		
		if(from == to || IsCanMoveThere(color, from, to) == false) {
			continue;
		}
		
		if((GetPiece(from) == "♙" || GetPiece(from) == "♟") && CheckIsItPromoteField(to)){
			PromotePawn(from, color);
		}
		
		if(GetPiece(to) == "♚"){
			isCheckmate = 1;
		}
		else if(GetPiece(to) == "♔"){
			isCheckmate = 2;
		}
		
		PutPiece(to, GetPiece(from))
		RemovePiece(from);
		break;
	}
}

function CheckIsItPromoteField(field)
{
	field_replaced = field.replace('[', '');
	field_replaced = field_replaced.replace(']', '');
	field_splitted = field_replaced.split(',');
	field_x = parseInt(field_splitted[0]);
	field_y = parseInt(field_splitted[1]);
	
	if(field_y == 0 || field_y == 7){
		return true;
	}
	else
	{
		return false;
	}
}

function PromotePawn(field, color)
{
	randomForPromote = randomIntFromInterval(0, 4);
	if(color == "white")
	{
		if(randomForPawn == 0)
		{
			PutPiece(field, "♕");
		}
		else if(randomForPawn == 1)
		{
			PutPiece(field, "♗");
		}
		else if(randomForPawn == 2)
		{
			PutPiece(field, "♘");
		}
		else if(randomForPawn == 3)
		{
			PutPiece(field, "♖");
		}
	}
	else
	{
		if(randomForPawn == 0)
		{
			PutPiece(field, "♛");
		}
		else if(randomForPawn == 1)
		{
			PutPiece(field, "♝");
		}
		else if(randomForPawn == 2)
		{
			PutPiece(field, "♞");
		}
		else if(randomForPawn == 3)
		{
			PutPiece(field, "♜");
		}
	}
}


function GetRandomPlace()
{
	return "["+randomIntFromInterval(0, 7)+","+randomIntFromInterval(0, 7)+"]";
}

function GetRandomPlaceForPawn(from, pawn)
{
	from_replaced = from.replace('[', '');
	from_replaced = from_replaced.replace(']', '');
	from_splitted = from_replaced.split(',');
	from_x = parseInt(from_splitted[0]);
	from_y = parseInt(from_splitted[1]);
	
	randomForPawn = randomIntFromInterval(0, 3);
	
	if(pawn == "♙")
	{
		if(randomForPawn == 0)
		{
			if(from_y == 6){
				return "[0,0]";
			}
			return "["+from_x+","+(from_y+2)+"]";
		}
		else if(randomForPawn == 1)
		{
			return "["+from_x+","+(from_y+1)+"]";
		}
		else if(randomForPawn == 2)
		{
			if(from_x == 7){
				return "[0,0]";
			}
			return "["+(from_x+1)+","+(from_y+1)+"]";
		}
		else if(randomForPawn == 3)
		{
			if(from_x == 0){
				return "[0,0]";
			}
			return "["+(from_x-1)+","+(from_y+1)+"]";
		}
	}
	else
	{
		if(randomForPawn == 0)
		{
			if(from_y == 1){
				return "[0,0]";
			}
			return "["+from_x+","+(from_y-2)+"]";
		}
		else if(randomForPawn == 1)
		{
			return "["+from_x+","+(from_y-1)+"]";
		}
		else if(randomForPawn == 2)
		{
			if(from_x == 7){
				return "[0,0]";
			}
			return "["+(from_x+1)+","+(from_y-1)+"]";
		}
		else if(randomForPawn == 3)
		{
			if(from_x == 0){
				return "[0,0]";
			}
			return "["+(from_x-1)+","+(from_y-1)+"]";
		}
	}
}

function RemoveMidOfBoardAndShowWinner(text)
{
	document.getElementById("winner").innerHTML = text;
	document.getElementById("winner").style.display = "block";
}
		

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}