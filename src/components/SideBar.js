import { NavLink } from 'react-router-dom';
import { HiBarsArrowUp } from "react-icons/hi2";
import logo from "../assets/scidenai.png"
import { RiBuilding2Line } from 'react-icons/ri';
function SideBar() {
    return (
        <>
            <div style={{backgroundColor:"#ffffff"}}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "1em", alignItems: "center" }}>
                    <img src={logo} style={{ maxWidth: "95%" }} />
                </div>
                <ul className='nav-links' style={{ display: "flex", marginTop: "2em", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="/" activeClassName="active" exact style={{ display: "flex", alignItems: "center" }}>
                            <RiBuilding2Line className="nav-icon" style={{ fontSize: "25px" }} />
                            Page1
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/page2" className="nav-link" activeClassName="active" style={{ display: "flex", alignItems: "center" }} >
                            <RiBuilding2Line className="nav-icon" style={{ fontSize: "25px" }} />
                            Page2
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/page3" className="nav-link" activeClassName="active" style={{ display: "flex", alignItems: "center" }}>
                            <RiBuilding2Line className="nav-icon" style={{ fontSize: "25px" }} />
                            Page3
                        </NavLink>

                    </li>
                </ul>
            </div>
        </>
    )
};

export default SideBar;