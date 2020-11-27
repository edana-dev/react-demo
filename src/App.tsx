import React, {useState} from 'react';
import './App.css';
import Home from "./pages/home/Home";
import HelloWorld from "./pages/hello/HelloWorld";

const styles = {
    fontFamily: "sans-serif",
    paddingLeft: "250px",
};

const routeMap = new Map([
    ["home", Home],
    ["hello-world", HelloWorld]
])


function App() {
    let clickMenu = (key: string) => {
        window.history.pushState(null, "", `/#/${key}`)
        setCurrentPage(key)
    }

    const [currentPage, setCurrentPage] = useState("home")

    // const currentPage: string = document.location.hash.replace(/#\/?/, "");
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
