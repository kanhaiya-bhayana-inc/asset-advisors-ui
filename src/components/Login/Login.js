import React, { useState } from "react";
// import pic from './undraw_access_account_re_8spm.svg'
import pic from "./undraw_login_re_4vu2 (1).svg";
import "./style.css";
import { Link } from "react-router-dom";
import { setLocale } from "yup";
import { routes } from '../Utils/Globals'

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [dispMsg, setDispMsg] = useState("");
  const [showErrorsMsg, setShowErrorMsg] = useState(false);
  const successBg = "alert alert-success alert-dismissible fade show";
  const warningBg = "alert alert-warning alert-dismissible fade show";
  const loginVerify = (e) => {
    e.preventDefault();
    // console.log(email, " ", Password);
    if (email.trim().length === 0) {
      setShowErrorMsg(true);
      setShowSuccessMsg(true);
      setDispMsg("Email cannot be empty!");
      // alert("email cannot be empty!");
      console.log("huu");
    } else if (Password.trim().length === 0) {
      setShowErrorMsg(true);
      setShowSuccessMsg(true);
      setDispMsg("Password cannot be empty!");
      // alert("email cannot be empty!");
      console.log("huu");
    } else {
      console.log("ju");
      try {
        setIsLoading(true);
        fetch(routes.advisorLogin, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
            "Access-Control-Max-Age": 86400,
          },
          body: JSON.stringify({ email: email, Password: Password }),
        })
          .then((res) => {
            try {
              
              if (res.status === 200) {
                window.location = "/aldsh";
                return res.text();
              } else if (res.status === 400) {
                return "Wrong Password!";
              } else {
                setIsLoading(false);
                return res.text();
              }
            } catch (error) {
              setIsLoading(false);
              console.log("server is Facing some issue");
            }
          })
          .then((data) => {
            if (data.startsWith("ey")) {
              localStorage.setItem("tokena", JSON.stringify(data));
              console.log(data);
            } else {
              // alert(data)
              setShowErrorMsg(true);
              setShowSuccessMsg(true);
              setDispMsg(data);
            }
            setIsLoading(false);
          })
          .catch((error) => {
            
            console.log("Error occurred:", error);

            if (error == "TypeError: Load failed" || error == "TypeError: Failed to fetch") {
              setShowErrorMsg(true);
              setShowSuccessMsg(true);
              setDispMsg("Server is Facing some issue. Please check Again Later!");
            }
            setIsLoading(false);
            // Handle the error here
          });
      } catch (error) {
        setIsLoading(false);
        console.log("Error b->", error);
      }
    }
  };
  return (
    <div>
      {/* <h1>hey</h1> */}
      <section
        className="Form style.my-4 style.mx-5"
        style={{ minHeight: "80.2vh", marginTop: "40px" }}
      >
        <div className="container">
          <div className="row py-5">
            {showSuccessMsg && (
              <div className="p-4 tex-center">
                <div
                  className={showErrorsMsg ? warningBg : successBg}
                  style={{ width: "auto" }}
                  role="alert"
                >
                  {showErrorsMsg ? (
                    <i class="bi bi-exclamation-circle"></i>
                  ) : (
                    <i className="bi bi-check-circle mt-1"></i>
                  )}{" "}
                  &nbsp;
                  <strong></strong> {dispMsg}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={(e) => {
                      setShowSuccessMsg(false);
                    }}
                  ></button>
                </div>
              </div>
            )}
            <div className="col-lg-6 ">
              <img src={pic} className="img-fluid img m-lg-4" alt="imageprev" />
            </div>
            <div className="col-lg-6   px-5 pt-5">
              <h1 className="font-weight-bold py-3">Hey Advisor</h1>
              <h4>Sign Into Your Account</h4>
              <form className="needs-validation" novalidate>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className=" form-control my-3 p-2"
                      required
                    ></input>
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="Password"
                      placeholder="******"
                      onChange={(e) => setPassword(e.target.value)}
                      value={Password}
                      className="form-control my-3 p-2"
                      required
                    ></input>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    {/* <button
                      type="submit"
                      className={`btn btn-primary mt-3 mb-3 glow-on-hover ${
                        isLoading ? "loading" : ""
                      }`}
                      // onClick={() => setIsLoading(true)}
                    >
                      {isLoading ? "Signing Up..." : "Sign Up"}
                    </button> */}
                    <button
                      type="submit"
                      onClick={loginVerify}
                      className={`btn btn-dark mt-3 mb-4 ${
                        isLoading ? "loading" : ""
                      }`}
                    >
                      {isLoading ? "Logging In..." : "Sign In"}
                    </button>
                  </div>
                </div>
                <Link to="/forgotpass" style={{ textDecoration: "none" }}>
                  Forgot Password
                </Link>
                <p>
                  Don't Have An Account ?{" "}
                  <Link style={{ textDecoration: "none" }} to="/Signup">
                    Register Here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login;
