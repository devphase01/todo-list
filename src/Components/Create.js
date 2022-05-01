import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Create = () => {
    const navigate = useNavigate();
    const [description, setDescription] = useState();

    const handleChange = (e) => setDescription(e.target.value);

    return (
        <div>
            <form>
                <label>Task Name:</label>
                <input
                value={description}
                onChange={(e) => handleChange(e)}
                required
                />
            </form>

            <button onClick={() => navigate("/")}>Back to main</button>
        </div>
    )
}

export default Create
