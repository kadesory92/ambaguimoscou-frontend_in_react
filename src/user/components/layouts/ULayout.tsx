import { Outlet } from "react-router-dom";
import Sidebar from "./inc/Sidebar";
import Navbar from "./inc/Navbar";
import '../../assets/css/styles.css';
import '../../assets/js/scripts.js'
import Footer from "./inc/Footer";

const ULayout = () => {
    return ( 
        <div className="layout">
            <div className="d-flex" id="wrapper">
                <Sidebar/>
                <div id="page-content-wrapper">
                    <Navbar/>
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </div>
            <footer className="py-5 bg-dark">
                <Footer />
            </footer>
        </div>
     );
}
 
export default ULayout;