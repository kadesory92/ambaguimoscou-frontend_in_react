import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import '../../../assets/css/styles.css';

const Navbar=()=>{
    return (
            <>
                <nav className="navbar navbar-light fixed-top py-4">
                    <div className="container px-lg-5">
                        <img src={logo} alt="Logo" className="logo" />
                        <Link className="navbar-brand" to="/"><p className="text-center">République de Guinée <br /> Ministères des Affaires Etrangères <br /> <em>Ambassade Guinée à Moscou</em> </p></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#!">Actualités</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#!">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#!">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
    )
}
export default Navbar;