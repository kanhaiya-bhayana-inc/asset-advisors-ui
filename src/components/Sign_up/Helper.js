//import React from 'react';
import * as Yup from "yup";
 
export const signUpSchema=Yup.object({
    firstName:Yup.string().min(2).max(25).required("*Please enter your First name"),
    lastName:Yup.string().min(2).max(25).required("*Please enter your Last name"),
    phone:Yup.string().min(10).max(10).required("*Please enter a valid mobile number"),
    email:Yup.string().email().required("*Please enter a valid email"),
    company:Yup.string().min(2).max(25).required("*Please enter your Company Name"),
    address:Yup.string().min(2).max(25).required("*Please enter your address"),
    state:Yup.string().min(2).max(25).required("*Please enter your state"),
    city:Yup.string().min(2).max(25).required("*Please enter your City"),
    password:Yup.string().min(6).max(15).required("*Please enter your password"),
    confirmpassword:Yup.string().required("*Please enter the password again to confirm").oneOf([Yup.ref("password"),null],"Password must match")
});