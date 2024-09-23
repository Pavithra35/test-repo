import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import scilogo from '../assets/scidenai.png';
import profileImage from '../assets/profileImg.jpg'
import { CiSearch } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
function Navbar() {
  return (
    <>
        <div className="header-layout">
        <div className="boxShadow search-bar" >
          <input type="text" placeholder="Search" className="search-input"/>
          <div  className='search-icon'>
            <CiSearch  style={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="boxShadow moon-icon">
          <IoMoonOutline style={{ fontSize: "20px", }} />
        </div>
        <div className="boxShadow user-profile" >
          <div className="user-position">
            <img src={profileImage} />
            <div style={{ marginLeft: "1em" }}>
              <p>Username</p>
              <p>Position</p>
            </div>
          </div>
          <IoSettingsOutline style={{ fontSize: "25px" }} />
        </div>
      </div>
    </>
  )
};

export default Navbar;