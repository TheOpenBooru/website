export default {
    set Search_Layout(value) {
        localStorage.setItem("view_mode", value);
    },
    get Search_Layout() {
        return localStorage.getItem("view_mode");
    }
}