import React from 'react'
import { useState } from 'react'

export default function TaskList({ taskList , handleEditTask , handleDeleteTask }) {
    const [editTaskId , setEditTaskId] = useState(null);
    const [editedTitle , setEditedTitle] = useState("");
    const clickOnEdit = (id) =>{
        setEditTaskId(id);
    }

    const onSaveChange = ( id , newTitle) =>{
        handleEditTask(id , newTitle);
        setEditTaskId(null);
    }
  return (
    <div>
      {taskList.map((task, index) => (
        <div key={task.id + index}>
            <div>{task.id}</div> 
            {editTaskId === task.id ? <input type="text" defaultValue={task.title} onChange={(e)=> setEditedTitle(e.target.value)} /> : <div>{task.title}</div>}
            { editTaskId !== task.id && <button onClick={() => clickOnEdit(task.id)}>Edit</button>} 
            { editTaskId === task.id && <button onClick={()=> onSaveChange(task.id , editedTitle)}>Save</button>}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
