import Content from "./Content"
import Header from "./Header"
import Timer from "./Timer";
import useFetch from "./useFetch"

const Home = () => {
    const {data: tasks, isPending} = useFetch("http://localhost:8000/tasks");

    return (
        <div className="home-page">
            <Header />
            {isPending && <p>Loading...</p>}
            {tasks && <Content tasks={tasks} />}
            <Timer />         
        </div>
    )
}

export default Home
