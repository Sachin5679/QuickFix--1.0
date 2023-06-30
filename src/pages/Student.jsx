import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import jwt from "jsonwebtoken";
import rlogo from "../assets/recentLOGO.png";
import clogo from "../assets/newComLOGO.png";
import Complaint from "../components/Complaint.jsx";
import ProfileNav from "../components/ProfileNav.jsx";
import "../styles/student.css";

const Student = () => {
  // const isTokenExpired = (s) => {
  //   try {
  //     // Decode the token to extract the payload
  //     const decodedToken = jwt.decode(token);

  //     // Check if the token has an expiration claim
  //     if (decodedToken && decodedToken.exp) {
  //       // Get the expiration timestamp (in seconds)
  //       const expirationTime = decodedToken.exp;

  //       // Get the current timestamp (in seconds)
  //       const currentTime = Math.floor(Date.now() / 1000);

  //       // Compare the expiration time with the current time
  //       if (expirationTime < currentTime) {
  //         // Token is expired
  //         return true;
  //       }
  //     }
  //     // Token is not expired
  //     return false;
  //   } catch (error) {
  //     // Error occurred while decoding the token
  //     console.error("Error decoding token:", error);
  //     return false;
  //   }
  // };

  // const usenavigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("jwtToken");

  //   if (isTokenExpired(token)) {
  //     localStorage.removeItem("jwtToken");
  //     usenavigate("/");
  //     return;
  //   }
  // }, []);

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div>
      {/* Navigation-bar */}
      <ProfileNav />
      {/* Navigation-bar */}

      <div className="container">
        <div className="choices">
          <div>
            <h2 style={{ fontSize: "25px", fontWeight: 500 }}>Category</h2>
            <form>
              <label>
                <input type="checkbox" name="item" value="Item 1" />
                <p>Carpentary</p>
              </label>

              <label>
                <input type="checkbox" name="item" value="Item 2" />
                <p>Electrical</p>
              </label>

              <label>
                <input type="checkbox" name="item" value="Item 3" />
                <p>Plumbing</p>
              </label>
            </form>
          </div>

          <div>
            <h2 style={{ fontSize: "25px", fontWeight: 500 }}>State</h2>
            <form>
              <label>
                <input type="checkbox" name="item" value="Item 1" />
                <p>New</p>
              </label>

              <label>
                <input type="checkbox" name="item" value="Item 2" />
                <p>Accepted</p>
              </label>

              <label>
                <input type="checkbox" name="item" value="Item 3" />
                <p>Rejected</p>
              </label>

              <label>
                <input type="checkbox" name="item" value="Item 4" />
                <p>Done</p>
              </label>

              <label>
                <input type="checkbox" name="item" value="Item 5" />
                <p>Closed</p>
              </label>
            </form>
          </div>
        </div>

        <div className="com">
          <div className="com-container">
            <div className="com-header">
              <div>
                <button
                  style={{ borderRadius: "5rem 0 0 50rem" }}
                  onClick={() => handleButtonClick(1)}
                  className={
                    selectedButton === 1
                      ? "selectedUserLogin slanted-border"
                      : "slanted-border"
                  }
                >
                  <p>My Complaints</p>
                </button>
                <button
                  style={{ borderRadius: "0 50rem 5rem 0" }}
                  onClick={() => handleButtonClick(2)}
                  className={
                    selectedButton === 2
                      ? "selectedUserLogin slanted-border"
                      : "slanted-border"
                  }
                >
                  <p>Common Complaints</p>
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link to={"/newComplaint"}>
                  <button
                    style={{
                      margin: "0.8rem 0.5rem 0.3rem 0.5rem",
                      padding: "0.8rem 1.6rem",
                      backgroundColor: "#17c17b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={clogo} alt="Logo" className="clogo" />
                    <p>New Complaint</p>
                  </button>
                </Link>

                <button
                  style={{
                    margin: "0.8rem 0.5rem 0.3rem 0.5rem",
                    padding: "0.8rem 1.6rem",
                    backgroundColor: "#425fc6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={rlogo} alt="Logo" className="rlogo" />
                  <p>Recent</p>
                </button>
              </div>
            </div>
            <div className="com-complaints">
              <Complaint />
              <Complaint />
              <Complaint />
              <Complaint />
              <Complaint />
              <Complaint />
              <Complaint />
              <Complaint />
              <Complaint />
              <Complaint />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
