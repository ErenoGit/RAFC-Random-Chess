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
		
		case "♙":
			return IsCanMoveTherePawn(from, to, color, to_piece);
		case "♖":
			return IsCanMoveThereRook(from, to);
		case "♘":
			return IsCanMoveThereKnight(from, to);
		case "♗":
			return IsCanMoveThereBishop(from, to);
		case "♕":
			return IsCanMoveThereQueen(from, to);
		case "♔":
			return IsCanMoveThereKing(from, to);
		
		case "♟":
			return IsCanMoveTherePawn(from, to, color, to_piece);
		case "♜":
			return IsCanMoveThereRook(from, to);
		case "♞":
			return IsCanMoveThereKnight(from, to);
		case "♝":
			return IsCanMoveThereBishop(from, to);
		case "♛":
			return IsCanMoveThereQueen(from, to);
		case "♚":
			return IsCanMoveThereKing(from, to);
	}
}

function IsCanMoveTherePawn(from, to, color, to_piece)
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
	
	if(color == "white")
	{
		if(vertical_move == 1 && (horizontal_move == 1 || horizontal_move == -1)){
			if(to_piece == "♟" || to_piece == "♜" || to_piece == "♞" || to_piece == "♝" || to_piece == "♛" || to_piece == "♚"){
				return true;
			}
		}
		
		if(vertical_move == 1 && horizontal_move == 0){
			if(to_piece = ""){
				return true;	
			}
		}
		
		if(from_y == 1 && vertical_move == 2 && horizontal_move == 0){
			if(GetPiece("["+from_x+","+(from_y+1)+"]") == "" && to_piece == ""){
				return true;	
			}
		}
		
		return false;
	}
	else
	{
		if(vertical_move == -1 && (horizontal_move == 1 || horizontal_move == -1)){
			if(to_piece == "♙" || to_piece == "♖" || to_piece == "♘" || to_piece == "♗" || to_piece == "♕" || to_piece == "♔"){
				return true;
			}
		}
		
		if(vertical_move == -1 && horizontal_move == 0){
			if(to_piece = ""){
				return true;	
			}
		}
		
		if(from_y == 6 && vertical_move == -2 && horizontal_move == 0){
			if(GetPiece("["+from_x+","+(from_y-1)+"]") == "" && to_piece == ""){
				return true;	
			}
		}
		
		return false;
	}
}


function IsCanMoveThereKnight(from, to)
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
	
	horizontal_move = to_y - from_y;
	vertical_move = to_x - from_x;
	
	if(horizontal_move == 2 && vertical_move == 1){
		return true;
	}
	else if(horizontal_move == 2 && vertical_move == -1){
		return true;
	}
	else if(horizontal_move == -2 && vertical_move == 1){
		return true;
	}
	else if(horizontal_move == -2 && vertical_move == -1){
		return true;
	}
	else if(horizontal_move == 1 && vertical_move == 2){
		return true;
	}
	else if(horizontal_move == 1 && vertical_move == -2){
		return true;
	}
	else if(horizontal_move == -1 && vertical_move == 2){
		return true;
	}
	else if(horizontal_move == -1 && vertical_move == -2){
		return true;
	}
	else{
		return false;
	}
	
	return true;
}

function IsCanMoveThereBishop(from, to)
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
			
	if(Math.abs(to_y - from_y) == Math.abs(to_x - from_x)){
		//diagonally
		horizontal_move = to_y - from_y;
		vertical_move = to_x - from_x;
	}
	else{
		return false;
	}
			
	var between = [];
			
	if(vertical_move > 0 && horizontal_move > 0)
	{
		//move to up-right
		j = from_y + 1;
		for (var i = from_x + 1; i < to_x; i++) {
		   between.push("["+ i + "," + j + "]");
		   j++;
		}
	}
	else if(vertical_move < 0 && horizontal_move > 0)
	{
		//move to up-left
		j = from_y + 1;
		for (var i = from_x - 1; i > to_x; i--) {
		   between.push("["+ i + "," + j + "]");
		   j++;
		}
	}
	else if(vertical_move < 0 && horizontal_move < 0)
	{
		//move to down-left
		j = from_y - 1;
		for (var i = from_x - 1; i > to_x; i--) {
		   between.push("["+ i + "," + j + "]");
		   j--;
		}
	}
	else if(vertical_move > 0 && horizontal_move < 0)
	{
		//move to down-right
		j = from_y - 1;
		for (var i = from_x + 1; i < to_x; i++) {
		   between.push("["+ i + "," + j + "]");
		   j--;
		}
	}
				
			
	for (const element of between) {
		if(GetPiece(element) != ""){
			return false;
		}
	}
			
	return true;
}

function IsCanMoveThereQueen(from, to)
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
		//horizontal
		horizontal_move = to_y - from_y;
	}
	else if(from_y == to_y){
		//vertical
		vertical_move = to_x - from_x;
	}
	else if(Math.abs(to_y - from_y) == Math.abs(to_x - from_x)){
		//diagonally
		horizontal_move = to_y - from_y;
		vertical_move = to_x - from_x;
	}
	else{
		return false;
	}
			
	var between = [];
			
	if(vertical_move > 0 && horizontal_move == 0)
	{
		//move to right
		for (var i = from_x + 1; i < to_x; i++) {
		   between.push("["+ i + "," + from_y + "]");
		}
	}
	else if(vertical_move < 0 && horizontal_move == 0)
	{
		//move to left
		for (var i = from_x - 1; i > to_x; i--) {
		   between.push("["+ i + "," + from_y + "]");
		}
	}
	else if(horizontal_move > 0 && vertical_move == 0)
	{
		//move to up
		for (var i = from_y + 1; i < to_y; i++) {
		   between.push("["+ from_x + "," + i + "]");
		}
	}
	else if(horizontal_move < 0 && vertical_move == 0)
	{
		//move to down
		for (var i = from_y - 1; i > to_y; i--) {
		   between.push("["+ from_x + "," + i + "]");
		}
	}
	else if(vertical_move > 0 && horizontal_move > 0)
	{
		//move to up-right
		j = from_y + 1;
		for (var i = from_x + 1; i < to_x; i++) {
		   between.push("["+ i + "," + j + "]");
		   j++;
		}
	}
	else if(vertical_move < 0 && horizontal_move > 0)
	{
		//move to up-left
		j = from_y + 1;
		for (var i = from_x - 1; i > to_x; i--) {
		   between.push("["+ i + "," + j + "]");
		   j++;
		}
	}
	else if(vertical_move < 0 && horizontal_move < 0)
	{
		//move to down-left
		j = from_y - 1;
		for (var i = from_x - 1; i > to_x; i--) {
		   between.push("["+ i + "," + j + "]");
		   j--;
		}
	}
	else if(vertical_move > 0 && horizontal_move < 0)
	{
		//move to down-right
		j = from_y - 1;
		for (var i = from_x + 1; i < to_x; i++) {
		   between.push("["+ i + "," + j + "]");
		   j--;
		}
	}
				
			
	for (const element of between) {
		if(GetPiece(element) != ""){
			return false;
		}
	}
			
	return true;
}

function IsCanMoveThereKing(from, to)
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
	
	horizontal_move = to_y - from_y;
	vertical_move = to_x - from_x;
	
	if((horizontal_move == -1 || horizontal_move == 0 || horizontal_move == 1) && (vertical_move == -1 || vertical_move == 0 || vertical_move == 1)){
		return true;
	}
	
	return false;
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
			
	if(vertical_move > 0 && horizontal_move == 0)
	{
		//move to right
		for (var i = from_x + 1; i < to_x; i++) {
		   between.push("["+ i + "," + from_y + "]");
		}
	}
	else if(vertical_move < 0 && horizontal_move == 0)
	{
		//move to left
		for (var i = from_x - 1; i > to_x; i--) {
		   between.push("["+ i + "," + from_y + "]");
		}
	}
	else if(horizontal_move > 0 && vertical_move == 0)
	{
		//move to up
		for (var i = from_y + 1; i < to_y; i++) {
		   between.push("["+ from_x + "," + i + "]");
		}
	}
	else if(horizontal_move < 0 && vertical_move == 0)
	{
		//move to down
		for (var i = from_y - 1; i > to_y; i--) {
		   between.push("["+ from_x + "," + i + "]");
		}
	}
				
			
	for (const element of between) {
		if(GetPiece(element) != ""){
			return false;
		}
	}
			
	return true;
}