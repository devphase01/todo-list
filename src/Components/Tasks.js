import React from 'react'

const Tasks = (tasks) => {
    return (
        <div className="tasks">
            {tasks.map(task => (
                <h3>{ task.description }</h3>
            ))}
        </div>
    )
}

export default Tasks
