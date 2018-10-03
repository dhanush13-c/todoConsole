var todo = []; //Todo array

window.setTimeout(function(){
    var action = prompt("What's your option from Todo list?");
    while(action !== "quit"){ // if action is not equal to quit then code will execute
        if(action === "list"){
          todoList();
        }else if(action === "new"){
          todoNew();
        }else if(action === "delete"){
          todoDelete();
        }
        action = prompt("what would you like todo?");// It asks until we didn't quit
    }
    console.log("OK, You Quit the app");//Exits the app

    function todoList(){
        console.log("*******************");
        todo.forEach(function(todo, index){
            console.log( index + ": " + todo); // Lists all Todo in console 
        });
        console.log("*******************");
    }

    function todoNew(){
        var newTodo = prompt("enter new todo"); // Add the new Todo into array
        todo.push(newTodo);
        console.log(newTodo + " added to the list");
    }

    function todoDelete(){
        //ask with a prompt what specific item to delete
        var index = prompt("Enter the index of item to delete");
        //Delete the specified item from the list
        todo.splice(index, 1);
        console.log("todo " + index + " removed");
    }
}, 500);