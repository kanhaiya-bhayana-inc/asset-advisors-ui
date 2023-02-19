import * as Yup from "yup";
 
export const fschema=Yup.object({
    token:Yup.string().required("Please enter your token"),
    password:Yup.string().min(6).required("Please enter your password"),
    confirmpassword:Yup.string().required("Please enter the password again to confirm").oneOf([Yup.ref("password"),null],"Password must match")
});