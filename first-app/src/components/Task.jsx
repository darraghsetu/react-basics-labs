const Task = (props) => {
    const lowPriority = props.priorityLevel === "Low"

    return (
      <div className="card">
          <p className="title">{props.title}</p>
          <p>Due: {props.deadline}</p>
          <p className="description">{props.description}</p>
          <p 
            className="priorityLevel"
            style={{ fontWeight: lowPriority ? "normal" : "bold" }}
          >{props.priorityLevel}</p>
      </div>
    )
}

export default Task;
