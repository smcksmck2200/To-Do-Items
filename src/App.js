
import './App.css';
import ToDoItem from './components/ToDoItem'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addTask: "",
      toDoItems: [
        { task: "Clean the house", completed: true, editting: false },
        { task: "Buy groceries", completed: false, editting: false }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.addToList = this.addToList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.changeMode = this.changeMode.bind(this)
    this.updateName = this.updateName.bind(this)
  }
  handleChange(event) {
    this.setState({ addTask: event.target.value })
  }

  addToList(event) {// Regular old Javascript
    console.log(this.state.addTask)
    event.preventDefault()
    let currentTasks = this.state.toDoItems
    currentTasks.push({
      task: this.state.addTask,
      completed: false,
      editting: false
    })

    this.setState({ toDoItems: currentTasks, addTask: "" })
  }
  updateName(id, newName) {
    let ourTask = this.state.toDoItems
    ourTask[id].task = newName
    ourTask[id].editting = false
    this.setState({ toDoItems: ourTask })
  }
  deleteItem(id) {
    let remainingTasks = this.state.toDoItems
    remainingTasks.splice(id, 1)
    this.setState({ toDoItem: remainingTasks })
  }
  changeMode(id) {
    let ourTask = this.state.toDoItems
    ourTask[id].editting = !ourTask[id.editting]
    this.setState({ toDoItems: ourTask })
  }
  render() { //JSX
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do:</h1>
          <ul>
            {
              this.state.toDoItems
                .map((item, index) =>
                  <ToDoItem
                    id={index}
                    key={"task" + index}
                    editting={item.editting}
                    toDoItem={item.task}
                    completed={item.completed}
                    deleteItem={this.deleteItem}
                    changeMode={this.changeMode}
                    updateName={this.updateName}
                  />
                )
            }
          </ul>
          <form onSubmit={this.addToList}>
            <input type="text" value={this.state.addTask} onChange={this.handleChange} />
            <button>Add To List</button>
          </form>
        </header>
      </div>
    );
  }
}
export default App
