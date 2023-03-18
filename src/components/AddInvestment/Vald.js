import * as Yup from "yup";


export const signUpSchema=Yup.object({
    investmentName:Yup.string().min(2).max(25).required("*InvestmentName is mandatory.").trim(),
    investmentTypeName:Yup.string("selected").required("*InvestmentType field is mandatory."),
    active:Yup.string("selected").required("*Active field is mandatory."),
    accountID:Yup.string().min(6).max(6).required("*AccountID field is mandatory.").trim(),
    strategyName:Yup.string().min(2).max(25).required("*StrategyName field is mandatory.").trim(),
    investmentAmount:Yup.string().min(1).max(12).required("*Amount field is mandatory.").trim(),
  
});