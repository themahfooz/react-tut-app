import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"

function PageNotFound() {
    return (
        <div>
            <Router>
                <Link to="/home">Home Page</Link>   <br /><br />

                <Link to="/dashboard">Dashboard Page</Link>   <br /><br />

                <Link to="/login">Login Page</Link>   <br /><br />

                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>



            </Router>
        </div>
    )
}

export default PageNotFound

function HomePage() {
    return (
        <div>
            <h1>This is Home</h1>
        </div>
    )
}

function DashboardPage() {
    return (
        <div>
            <h1>This is Dashboard</h1>
        </div>
    )
}

function NotFound() {
    return (
        <div>
            <h1>404 Page Not Found</h1>
        </div>
    )
}