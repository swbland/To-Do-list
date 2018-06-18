

window.setTimeout(function() {

var todos = ["buy house"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodo();
	} else if(input === "delete"){
		deleteTodo();
}

input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
	console.log("***********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	})
	console.log("***********");}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	alert("Your todo has been added!");}

function deleteTodo(){
	var index =	prompt("What todo do you want to delete?");
	todos.splice(index, 1);
	alert("Your todo has been deleted!");}
			

}, 500);
