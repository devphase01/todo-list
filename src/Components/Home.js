import Header from "./Header"
import useFetch from "./useFetch";
import Tasks from "./Tasks";

const Home = () => {
    const {data: tasks, isPending, error} = useFetch("http://localhost:8000/tasks");

    return (
        <div className="home-page">
            <Header />
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {tasks && <Tasks tasks={tasks}/>}
        </div>
    )
}

export default Home
