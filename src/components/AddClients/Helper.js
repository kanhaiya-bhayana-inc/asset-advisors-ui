
//import React from 'react';
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("*Please enter your First name").trim(),
  lastName: Yup.string()
    .min(2)
    .max(25)
    .required("*Please enter your Last name").trim(),

  phone: Yup.string()
    .min(10)
    .matches(phoneRegExp, "*Please enter a valid mobile number")
    .max(10)
    .required("*Please enter a valid mobile number").trim(),

  email: Yup.string().email().required("*Please enter a valid email").trim(),
  company: Yup.string()
    .min(2)
    .max(25)
    .required("*Please enter your Company Name"),
  address: Yup.string().min(2).max(25).required("*Please enter your address"),
  state: Yup.string().min(2).max(25).required("*Please enter your state"),
  city: Yup.string().min(2).max(25).required("*Please enter your City"),
  password: Yup.string()
    .min(6)
    .max(15)
    .required("*Please enter your password")
    .matches(
      /[a-z]+/,
      "password should contain atleast one lowercase character"
    )
    .matches(
      /[A-Z]+/,
      "password should contain atleast one uppercase character"
    )
    .matches(
      /[@$!%*#?&]+/,
      "password should contain atleast one special character"
    )
    .matches(/\d+/, "password should contain atleast one number")
    .trim(),
  confirmpassword: Yup.string()
    .required("*Please enter the password again to confirm")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
