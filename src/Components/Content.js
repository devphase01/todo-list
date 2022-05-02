import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({tasks}) => {
    return (
        <div className='tasks'>
            {tasks.map(element => (
                <div key={`unique${element.id}`} className={`task`}>
                    <Link to={`detail/${element.id}`}>
                        <h2 className='task-description'>
                            {"id[" + element.id + "]: " + element.data}
                        </h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Content