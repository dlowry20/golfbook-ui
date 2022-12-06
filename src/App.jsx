import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurrentRound from "./CurrentRound";
import Leaderboard from "./Leaderboard";
import Login from "./containers/Login";
import Courses from './components/Courses';
import StartRound from './components/StartRound';
import CreateCourse from './components/CreateCourse';
import HolesByCourse from './components/HolesByCourse';
import { SingleCourseCard } from './components/SingleCourseCard';

function App() {
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="leaderboard">
                        <Leaderboard/>
                    </Route>
                    <Route exact path="courses">
                        <Courses/>
                    </Route>
                    <Route exact path="/courses/:courseId">
                        <SingleCourseCard />
                    </Route>
                    <Route path="startRound">
                        <StartRound/>
                    </Route>
                    <Route path="currentRound">
                        <CurrentRound/>
                    </Route>
                    <Route path="createCourse">
                        <CreateCourse/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;