import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"

function RouterSetUp() {
    return (
        <div>
            <Router>
                <Link to="/home">Home Page</Link>
                <br /><br />
                <Link to="/dashboard">Dashboard Page</Link>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>



            </Router>
        </div>
    )
}

export default RouterSetUp

function Home() {
    return (
        <div>
            <h1>This is Home</h1>
        </div>
    )
}

function Dashboard() {
    return (
        <div>
            <h1>This is Dashboard</h1>
        </div>
    )
}