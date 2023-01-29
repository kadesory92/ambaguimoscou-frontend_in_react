import Footer from "./inc/Footer";
//import Header from "./inc/Header";
import Navbar from "./inc/Navbar";
//import Topbar from "./inc/Topbar";
import {Outlet} from "react-router-dom";
import '../../assets/css/styles.css'

const Layout=()=>{
    return (
            <>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-4 banaNavBar">
                    <Navbar />
                </nav>
                <main className="py-1">
                    <Outlet />
                </main>
                <footer className="py-5 bg-dark">
                    <Footer/>
                </footer>
            </>
    )
}
export default Layout;