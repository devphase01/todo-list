import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const Detail = () => {
    const { id } = new useParams();
    const uri = `http://localhost:8000/tasks/${id}`;

    const { data: task, isPending, error } = useFetch(uri);

    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(uri, {
            method: "DELETE"
        })
        .then(() => {
            console.log("Task successfully removed =)");
            navigate("/");
        })
    }

    return (
        <div>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {task && (
                <article>
                    <h2>{task.data}</h2>
                    <button onClick={handleDelete}>Delete</button>
                </article>
                )}
        </div>
    )
}

export default Detail