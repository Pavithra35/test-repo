import { MdOutlineFileUpload } from "react-icons/md";
import './page2.css';
import { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { IoIosClose } from "react-icons/io";

function Page2(){

    const [isPopupVisible, setPopupVisible] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setPopupVisible(true);
  
    };
  
    const handleClosePopup = () => {
      setPopupVisible(false);
    };
    return(
      <div>
      <div className={`form-container ${isPopupVisible ? 'opacity-background' : ''}`}>
          <form onSubmit={handleSubmit}>
            <h3 style={{ marginTop:0,marginBottom: '20px' }}>Heading for the Content</h3>

            {/* Row 1 */}
            <div className="form-row">
              <div className="form-col-1">
                <label >Input Field 1</label>
                <input type="text"  placeholder="Enter the value" className="form-input" required/>
              </div>
              <div className="form-col-2">
                <label>Input Field 2</label>
                <input type="text" placeholder="Enter the value" className="form-input" required/>
              </div>
            </div>

            {/* Row 2 */}
            <div className="form-row">
              <div className="form-col-1">
                <label>Input Field 3</label>
                <input type="text" placeholder="Enter the value" className="form-input" required/>
              </div>
              <div className="form-col-2">
                <label>Input Field 4</label>
                <input type="text" placeholder="Enter the value"className="form-input" required />
              </div>
            </div>

            {/* Paragraph */}
            <h3 style={{ marginBottom: '20px' }}>
              Heading for the content
            </h3>

            {/* File Upload */}
            <div className="file-div">
              <input type="file" id="uploadBtn"/>
              <label for="uploadBtn" >
                Browse
                  <MdOutlineFileUpload style={{marginLeft:"8px"}}/>
              </label>
          </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Submit
            </button>
      </form>
      </div>
      {isPopupVisible && (
        <div className="popup">
              <IoIosClose
              className="close-icon"
              onClick={handleClosePopup}
              />
              <div className="popup-content">
              <ImCheckboxChecked  className="check-icon"/>
              <p>Uploaded Successfully</p>
            </div>
        </div>
      )}
    </div>
    )
};

export default Page2;