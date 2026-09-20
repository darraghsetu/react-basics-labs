const Task = (props) => {
    const priorityLevelColour = { 
      "Low": "green", 
      "Medium": "Orange", 
      "High": "Red" 
    }

    return (
      <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
          <p className="title">{props.title}</p>
          <p>Due: {props.deadline}</p>
          <p className="description">{props.description}</p>
          <p 
            className="priorityLevel"
            style={{ backgroundColor: priorityLevelColour[props.priorityLevel], color: "white", padding: "5px"}}
          >{props.priorityLevel}</p>
          <button onClick={props.markDone} className='doneButton'>Done</button>
          <button onClick={props.deleteTask} className='deleteButton'>Delete</button>
      </div>
    )
}

export default Task;
