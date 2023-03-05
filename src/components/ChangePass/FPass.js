import * as Yup from "yup";
 
export const fschema=Yup.object({
    token:Yup.string().required("Please enter your token"),
    password:Yup.string().min(6).max(15).required("*Please enter your password").matches(/[a-z]+/,"password should contain atleast one lowercase character").matches(/[A-Z]+/,"password should contain atleast one uppercase character").matches(/[@$!%*#?&]+/,"password should contain atleast one special character").matches(/\d+/,"password should contain atleast one number"),
    confirmpassword:Yup.string().required("Please enter the password again to confirm").oneOf([Yup.ref("password"),null],"Password must match")
});