import "./ToDoItem.css"
import { useState } from "react"

// Input box for our text
// Save button
// Cancel button

function ToDoItem(props) {
    const [newName, setNewName] = useState("")

    function handleChange(event) {
        setNewName(event.target.value)
    }

    const editMode = (
        <div className="edit-mode">
            <input type="checkbox" defaultChecked={props.completed} />
            <input type="text" value={newName} onChange={handleChange} />
            <div className="buttons">
                <button onClick={() => props.updateName(props.id, newName)}>Save</button>
                <button onClick={() => props.changeMode(props.id)}>Cancel</button>
            </div>
        </div>
    )
    const viewMode = (
        <div className="view-mode">
            <input type="checkbox" defaultChecked={props.completed} />
            <span>{props.toDoItem}</span>
            <div className="buttons">
                <button onClick={() => props.changeMode(props.id)}>Edit</button>
                <button onClick={() => props.deleteItem(props.id)}>Remove</button>
            </div>
        </div>
    )
    return (
        <li>
            {props.editting ? editMode : viewMode}
        </li>
    )
}
export default ToDoItem