import "./MessageBox.css";

export default function MessageBox(props) {
    return (
        <div id="messageBox-container" >
            <div id="messageBox">
                {props.children}
            </div>
        </div>
    );
}
