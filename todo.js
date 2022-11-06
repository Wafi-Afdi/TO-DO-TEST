let input = prompt("What would you like to do");
const todo = ['collect eggs', 'do homework'];
while (input !== 'quit' && input !=='q'){
    input = prompt("what would you like to do?")
    if(input === 'list'){
        console.log('---------------');
        console.log('TO DO LIST : ');
        for(let i = 0;i < todo.length; i++){
            console.log(`${i+1}: ${todo[i]}`)
        }
        console.log('---------------');
    } else if (input === 'new'){
        const newTodo = prompt('Ok, what is new to do');
        todo.push(newTodo);
        console.log(`${newTodo} added to list`)

    }
}
console.log("OK QUIT THE APP!")