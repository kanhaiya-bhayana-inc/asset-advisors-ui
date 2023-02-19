import * as Yup from "yup";
 
export const fschema=Yup.object({
    password:Yup.string().max(15).required("Please enter your password"),
    confirmpassword:Yup.string().required("Please enter the password again to confirm").oneOf([Yup.ref("password"),null],"Password must match")
});