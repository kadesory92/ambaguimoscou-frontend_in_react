import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import '../../../assets/css/styles.css';

const Navbar=()=>{
    return (
            <>
                <nav className="navbar navbar-light fixed-top py-4">
                    <div className="container px-lg-5">
                            <img src={logo} alt="Logo" className="logo" />
                            <div className="navbar-brand">
                                <p className="text-center">République de Guinée 
                                    <br /> Ministères des Affaires Etrangères <br /> <em>Ambassade Guinée à Moscou</em>
                                </p>
                            </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="posts">Actualités</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#!">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
    )
}
export default Navbar;