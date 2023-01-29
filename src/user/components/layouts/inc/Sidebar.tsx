import { Link } from "react-router-dom";

const Sidebar = () => {
    return ( 
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/">Home</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/dashboard">Dashboard</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="#!">Overview</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="#!">Events</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="#!">Profile</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="#!">Status</Link>
            </div>
        </div>
     );
}
 
export default Sidebar;