import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Create = () => {
    const navigate = useNavigate();
    const [data, setData] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleChange = (e) => setData(e.target.value);

    /* Send data */
    const handleSubmit = (e) => {
        e.preventDefault();

        const task = {data};

        setIsPending(true);

        fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        })
        .then(() => {
            setIsPending(false);
            console.log("Task successfully created =)");
            navigate("/");
        })       
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Task Name:</label>
                <input
                    value={data}
                    onChange={handleChange}
                    required
                />
                {!isPending && <button>Create task</button>}
                {isPending && <button>Creating...</button>}
            </form>

            <button onClick={() => navigate("/")}>Back to main</button>
        </div>
    )
}

export default Create
