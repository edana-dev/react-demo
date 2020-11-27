import React, {useState} from 'react';
import './App.css';
import Home from "./pages/home/Home";
import HelloWorld from "./pages/hello/HelloWorld";
import ChatApp from "./pages/chat/ChatApp";
import CommentBox from "./pages/comment-box/CommentBox";

const styles = {
    fontFamily: "sans-serif",
    paddingLeft: "250px",
};

const routeMap = new Map([
    ["home", Home],
    ["hello-world", HelloWorld],
    ["chat", ChatApp],
    ["common-box", CommentBox],
])


function App() {
    let clickMenu = (key: string) => {
        window.history.pushState(null, "", `/#/${key}`)
        setCurrentPage(key)
    }
    const defaultPage = document.location.hash.replace(/#\/?/, "");

    const [currentPage, setCurrentPage] = useState(defaultPage || "home")

    let CurrentPage = routeMap.get(currentPage) || Home

    return (
        <div style={styles}>
            <ul className="menu-list">
                {Array.from(routeMap.keys()).map(key => (
                    <li
                        key={key}
                        className={key === currentPage ? "is-active" : ""}
                        style={{listStyle: "none"}}
                    >
                        <span className="link" onClick={() => clickMenu(key)}>
                            {key}
                        </span>
                    </li>
                ))}
            </ul>
            <div style={{padding: "30px 0"}}>
                <CurrentPage/>
            </div>
        </div>
    );
}

export default App;
