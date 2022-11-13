// - 1 ,apprendre condition et statement en javasctipt, true
// - 2 ,apprendre array et number en javascript,true
// - 3 ,javascript object, false

var index = 0

function createTodo (title, done) {
  return {
    id: index++,
    title: title,
    done: done
  }
}

function doneTodo (_todos, todoId) {
  for (var i = 0; i < _todos.length; i++) {
    if (_todos[i].id == todoId) {
      _todos[i].done = true
    }
  }
}

function addTodo (_todos, todo) {
  _todos.push(todo)
}

// parameter & argument
// index=index+1
function listTodo (_todos = []) {
  for (var index = 0; index < _todos.length; index++) {
    console.log(
      `identifiant: ${_todos[index].id}\ntitle: ${_todos[index].title}\ndone:${_todos[index].done}\n`
    )
  }
}

function removeTodo (_todos, todoId) {
  var todos = []
  for (var i = 0; i < _todos.length; i++) {
    if (_todos[i].id != todoId) {
      todos.push(_todos[i])
    }
  }
  return todos
}

let todos = []

// create todo
const todo1 = createTodo('Apprendre condition et statement en javascript', true)
const todo2 = createTodo('apprendre array et number en javascript', true)
const todo3 = createTodo('javascript object', false)
const todo4 = createTodo('todo à supprimer', false)
// add todo
/*todos[0] = Todo
todos[1] = Todo
todos[2] = Todo
todos[3] = Todo
todos[4] = Todo*/

addTodo(todos, todo1)
addTodo(todos, todo2)
addTodo(todos, todo3)
addTodo(todos, todo4)
// List todo
listTodo(todos)

todos = removeTodo(todos, 3)

console.log('#Après suppression\n')

listTodo(todos)

console.log('Done todo:\n')

doneTodo(todos, 2)

listTodo(todos)
