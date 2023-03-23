import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./Vald";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../Utils/Globals";

export default function EditInvestment() {
  const [editShow, setEditShow] = useState(false);
  const [det, setDet] = useState({});
  let { infoID, strtID, vcliID } = useParams();
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [dispMsg, setDispMsg] = useState("");
  const [showErrorsMsg, setShowErrorMsg] = useState(false);
  const successBg = "alert alert-success alert-dismissible fade show";
  const warningBg = "alert alert-warning alert-dismissible fade show";
  const [isLoading, setIsLoading] = useState(true);

  const [initialValues, setInitialValues] = useState({
    investmentName: "",
    investmentTypeName: "",
    strategyName: "",
    investmentAmount: "",
    accountID: "",
    active: "",
  });
  const navigate = useNavigate();
  function myFuncCall() {
    let url = `/viewclient/${vcliID}`;
    navigate(url, { replace: true });
  }
  const singleInvestmentData = async () => {
    let token = localStorage.getItem("tokena");
    let ntoken = "Bearer " + token.replaceAll('"', "");

    await fetch(`${routes.getSingleInvestment}/${infoID}/${strtID}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
        Authorization: ntoken,
        "Access-Control-Max-Age": 86400,
      },
    })
      .then(async (res) => await res.json())
      .then((data) => {
        setIsLoading(false)
        // localStorage.setItem("id", data.userID);
        // localStorage.setItem("advName", data.sortName);
        setDet(data.result);
        console.log(data.result);
        setInitialValues(data.result);
        // Formik.values(data);
        // console.log("Mydata->", det);
        // console.log("Mydata2->", initialValues);
        // setFlag("true");
        // console.log(flag);
      });
  };
  let noc = "nochange";
  useEffect(() => {
    // if (flag != "true") { clientProfileData(); }
    singleInvestmentData();
    // myFunc();
  }, [noc]);

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      setIsLoading(true)
      console.log(values);
      try {
        let token = localStorage.getItem("tokena");
        let advId = localStorage.getItem("id");
        let ntoken = "Bearer " + token.replaceAll('"', "");
        console.log("Call maked!");
        fetch(`${routes.updateInvestment}/${infoID}/${strtID}/${advId}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            Authorization: ntoken,
            "Access-Control-Max-Age": 86400,
          },
          body: JSON.stringify(values),
        })
          .then((res) => {
            res.json();
            setIsLoading(false)
            if (res.status === 200) {
              // alert("Investment updated successfully.")
              setDispMsg("Investment updated successfully.");
              setShowSuccessMsg(true);
              setEditShow(false);
              setTimeout(myFuncCall, 2000);
              // window.location = `/viewclient/${vcliID}`;
            } else {
              // alert("Something went wrong, try again.")
              setDispMsg("Something went wrong, try again.");
              setShowErrorMsg(true);
              setShowSuccessMsg(true);
            }
          })
          .then((data) => {
            console.log(data);
            // alert(data);
            // window.location ='/login'
          })
          .catch((error) => {
            setIsLoading(false)
            console.log("Error occurred:", error);

            if (
              error == "TypeError: Load failed" ||
              error == "TypeError: Failed to fetch"
            ) {
              setShowErrorMsg(true);
              setShowSuccessMsg(true);
              setDispMsg(
                "Server is Facing some issue. Please check Again Later!"
              );
            }
          });
      } catch (error) {
        console.log("Error b->", error);
      }
      action.resetForm();
    },
  });
  const sc = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {!isLoading && <div className="mt-4">
        <div style={{ marginRight: "20px" }}>
          <form onSubmit={Formik.handleSubmit}>
            <div className="row p-2">
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
              <div className="col-5">
                <h5 className="mt-5">Investment Details</h5>
                <p className="font-weight-bold mt-2">
                  InvestmentID:{det.inofID}
                </p>
              </div>

              <div className="col-5">
                <h3 className="">Edit Investment</h3>
              </div>
              <div className="col-2 mb-2">
                <button
                  className="float-right mt-5 btn btn-primary"
                  type="button"
                  onClick={(e) => {
                    setEditShow(true);
                  }}
                >
                  Edit
                </button>
              </div>
              <div className="col-4 mt-2">
                <label>
                  <b>Investment Name: &nbsp; {det.investmentName}</b>{" "}
                </label>
              </div>
              <div className="col-4">
                <label>Investment Type: &nbsp;{det.investmentTypeName} </label>
              </div>
              <div className="col-4">
                <label>Amount: &nbsp;{det.investmentAmount}</label>
              </div>
              <div className="col-4 mt-2">
                <label>AccountID: &nbsp;{det.accountID}</label>
              </div>
              <div className="col-4">
                <label>StrategyID: &nbsp;{det.strategyID}</label>
              </div>
              <div className="col-4">
                <label>Active Status: &nbsp;{det.active}</label>
              </div>
              <div className="col-4 mt-2">
                <label>Strategy Name: &nbsp;{det.strategyName}</label>
              </div>
              <div className="p-2 mt-2">
                <hr />
                {editShow && (
                  <AiOutlineCloseCircle
                    size={25}
                    className=""
                    style={{ float: "right" }}
                    onClick={(e) => {
                      setEditShow(false);
                    }}
                  />
                )}
              </div>

              {editShow ? (
                <>
                  <h3 className="text-center p-4">Update Investment</h3>

                  <div className="col-4">
                    <lable style={{ marginLeft: "10px" }}>
                      Investment Name
                    </lable>
                    <input
                      type="text"
                      name="investmentName"
                      placeholder="Investment name"
                      value={Formik.values.investmentName}
                      onChange={Formik.handleChange}
                      className="form-control shadow-none my-3"
                    />
                    {Formik.errors.investmentName &&
                    Formik.touched.investmentName ? (
                      <p className="Form-error">
                        {" "}
                        {Formik.errors.investmentName}
                      </p>
                    ) : null}
                  </div>

                  <div className="col-4">
                    <div
                      className="dropdown p-4 mt-3"
                      style={{ width: "auto" }}
                    >
                      <select
                        className="form-select"
                        name="investmentTypeName"
                        value={Formik.values.investmentTypeName}
                        onChange={Formik.handleChange}
                        aria-label="Default select example"
                      >
                        <option value="selected">Investment Type</option>
                        <option value="Unknown">Unknown</option>
                        <option value="Retirement">Retirement</option>
                        <option value="GeneralSavings">GeneralSavings</option>
                        <option value="Income">Income</option>
                      </select>
                      {Formik.errors.investmentTypeName &&
                      Formik.touched.investmentTypeName ? (
                        <p className="Form-error">
                          {" "}
                          {Formik.errors.investmentTypeName}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-4 mt-3">
                    <div className="dropdown p-4" style={{ width: "auto" }}>
                      <select
                        className="form-select"
                        name="active"
                        value={Formik.values.active}
                        onChange={Formik.handleChange}
                        aria-label="Default select example"
                      >
                        <option value="selected">Active Status</option>
                        <option value="1">True</option>
                        <option value="0">False</option>
                      </select>
                      {Formik.errors.active && Formik.touched.active ? (
                        <p className="Form-error"> {Formik.errors.active}</p>
                      ) : null}
                    </div>
                  </div>
                  {/* <hr /> */}
                  <div className="col-4">
                    <lable style={{ marginLeft: "10px" }}>AccountID</lable>
                    <input
                      type="text"
                      name="accountID"
                      value={Formik.values.accountID}
                      onChange={Formik.handleChange}
                      placeholder="Enter accountID"
                      className="form-control shadow-none my-3"
                    />
                    {Formik.errors.accountID && Formik.touched.accountID ? (
                      <p className="Form-error"> {Formik.errors.accountID}</p>
                    ) : null}
                  </div>
                  <div
                    className="col-4"
                    style={{ marginLeft: "20px", width: "360px" }}
                  >
                    <lable style={{ marginLeft: "13px" }}>Strategy Name</lable>
                    <input
                      type="text"
                      name="strategyName"
                      value={Formik.values.strategyName}
                      onChange={Formik.handleChange}
                      placeholder="Enter strategy name"
                      className="form-control shadow-none my-3"
                    />
                    {Formik.errors.strategyName &&
                    Formik.touched.strategyName ? (
                      <p className="Form-error">
                        {" "}
                        {Formik.errors.strategyName}
                      </p>
                    ) : null}
                  </div>

                  <div
                    className="col-4"
                    style={{ marginLeft: "40px", width: "360px" }}
                  >
                    <lable style={{ marginLeft: "15px" }}>
                      Investment Amount
                    </lable>
                    <input
                      type="number"
                      name="investmentAmount"
                      value={Formik.values.investmentAmount}
                      onChange={Formik.handleChange}
                      placeholder="Enter investment amount"
                      className="form-control shadow-none my-3"
                    />
                    {Formik.errors.investmentAmount &&
                    Formik.touched.investmentAmount ? (
                      <p className="Form-error">
                        {" "}
                        {Formik.errors.investmentAmount}
                      </p>
                    ) : null}
                  </div>
                  <div className="col-4"></div>
                  <div className="col-4 mb-4 mt-4 text-center">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      style={{ width: "150px" }}
                      onClick={sc}
                    >
                      {" "}
                      Update
                    </button>
                  </div>
                  <div className="col-4"></div>
                </>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>}{isLoading && (
        <div class="loader">
          <h1></h1>
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
}
