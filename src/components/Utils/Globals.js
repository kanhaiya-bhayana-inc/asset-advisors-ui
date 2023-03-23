// const baseURL = 'https://localhost:7214';
const baseURL = 'https://advisorrun.azurewebsites.net';
// const MidURL = '/api/User/';
const MidURL = '/';

const addAdvisor = baseURL +MidURL + 'add-user';
const verifyAccount = baseURL +MidURL + 'verify-user-account';
const advisorLogin = baseURL + MidURL +'adv-login';
const getUserAuth = baseURL + MidURL +'get-user-auth';
const updateUserAdvisor = baseURL + MidURL +'update-user-advisor';
const addClient = baseURL + MidURL +'add-client';
const getAllClients = baseURL + MidURL +'get-all-clients';
const getSpecificClient = baseURL + MidURL +'Get-Client-by';
const updateClient = baseURL + MidURL +'Update-Client';
const deleteClient = baseURL + MidURL +'Delete-Client';
const forgotPassword = baseURL + MidURL +'forgot-password';
const resetPassword = baseURL + MidURL +'reset-password';



const MidURLInvestment = "/api/Investment/"

const addInvestment = baseURL + MidURLInvestment +'advisor-add-investments';
const getAllInvestments = baseURL + MidURLInvestment +'GetUserInvestments';
const getSingleInvestment = baseURL + MidURLInvestment +'GetSingleInvestment';
const getTotalInvestmnetAmount = baseURL + MidURLInvestment +'GetTotalAmount';
const updateInvestment = baseURL + MidURLInvestment +'advisorUpdateinvestment';
const deleteInvestment = baseURL + MidURLInvestment +'advisorDeleteinvestment';


export const routes = {
    "addAdvisor": addAdvisor,
    "verifyAcc" : verifyAccount,
    "advisorLogin": advisorLogin,
    "getUserAuth" : getUserAuth,
    "updateUserAdvisor" : updateUserAdvisor,
    "addClient" : addClient,
    "getAllClients" : getAllClients,
    "getSpecificClient": getSpecificClient,
    "updateClient" : updateClient,
    "deleteClient" : deleteClient,
    "forgotPassword" : forgotPassword,
    "addInvestment" : addInvestment,
    "getAllInvestments" : getAllInvestments,
    "getSingleInvestment": getSingleInvestment,
    "getTotalInvestmnetAmount" : getTotalInvestmnetAmount,
    "updateInvestment" : updateInvestment,
    "deleteInvestment" : deleteInvestment,
    "resetPassword" : resetPassword
}
