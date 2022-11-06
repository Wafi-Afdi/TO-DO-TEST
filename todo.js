let input = prompt("What would you like to do");
const todo = ['collect eggs', 'do homework'];
while (input !== 'quit' && input !=='q'){
    input = prompt("what would you like to do?")
    if(input === 'list'){
        console.log('---------------');
        console.log('TO DO LIST : ');
        for(let i = 0;i < todo.length; i++){
            console.log(`${i+1}: ${todo[i]}`);
        }
        console.log('---------------');
    } else if (input === 'new'){
        const newTodo = prompt('Ok, what is new to do');
        todo.push(newTodo);
        console.log(`${newTodo} added to list`);
    } else if (input === 'delete' || input === 'd') {
        const IndexDelete = parseInt(prompt('Insert Index To Delete'));
        if(!Number.isNaN(IndexDelete)){ 
            const deleted = todo.splice(IndexDelete-1, 1);
            console.log(`${deleted[0]} is deleted`);
        }
        else {
            console.log('Unknown Index');
        }
    }
    
}
console.log("OK QUIT THE APP!");