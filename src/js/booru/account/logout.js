export default async function logout() {
    window.localStorage.removeItem("Login-Username");
    window.localStorage.removeItem("Login-Token");
    window.localStorage.removeItem("Login-Level");
}