const Task = (props) => {
    const lowPriority = props.priorityLevel === "Low"

    return (
      <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
          <p className="title">{props.title}</p>
          <p>Due: {props.deadline}</p>
          <p className="description">{props.description}</p>
          <p 
            className="priorityLevel"
            style={{ fontWeight: lowPriority ? "normal" : "bold" }}
          >{props.priorityLevel}</p>
          <button onClick={props.markDone} className='doneButton'>Done</button>
          <button onClick={props.deleteTask} className='deleteButton'>Delete</button>
      </div>
    )
}

export default Task;
