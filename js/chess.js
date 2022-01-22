async function NewGame()
{
	ChessboardStartPlace();
	await sleep(1000);
	
	while (true) {
		Move("white");
		IsCheckmate();
		await sleep(1000);
		Move("black");
		IsCheckmate();
		await sleep(1000);
	}
}



function IsCheckmate()
{
	//to do
}

function Move(color)
{
	while(true)
	{
		from = GetRandomPlaceByColor(color);
		to = GetRandomPlace();
		if(from == to || IsCanMoveThere(color, from, to) == false) {
			continue;
		}
		console.log("from: "+from+" to: "+to);
		PutPiece(to, GetPiece(from))
		RemovePiece(from);
		break;
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