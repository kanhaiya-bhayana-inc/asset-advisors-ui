import * as Yup from "yup";
 
export const fschema=Yup.object({
    email:Yup.string().required("Please enter your email."),
   });