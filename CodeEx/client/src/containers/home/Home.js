import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import './home.css'


function Home() {
    
    return (
        <div id="home">
            <div style={{ display: "block", minHeight: "100vh", paddingBottom: "60px" }}>
                <Navbar />
                <div className="justify-content-center mt-3">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home;