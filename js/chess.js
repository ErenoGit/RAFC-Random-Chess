async function NewGame()
{
	ChessboardStartPlace();
	await sleep(1000);
	
	while (true) {
		Move("white");
		IsCheckmate();
		await sleep(500);
		Move("black");
		IsCheckmate();
		await sleep(500);
	}
}


function IsCanMoveThere(from, to)
{
	//to do
	
	return true;
}

function IsCheckmate()
{
	//to do
}

function Move(color)
{
	while(true)
	{
		from = GetRandomPlace(color);
		to = GetRandomPlace();
		if(IsCanMoveThere(from, to) == false) {
			continue;
		}
		
		PutPiece(to, GetPiece(from))
		RemovePiece(from);
		break;
	}
}




function GetRandomPlace(color)
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


function GetRandomPlace()
{
	return "["+randomIntFromInterval(0, 7)+","+randomIntFromInterval(0, 7)+"]";
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}