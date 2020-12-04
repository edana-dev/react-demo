import React, {useState} from 'react';
import './App.less';
import Home from "./pages/home/Home";
import HelloWorld from "./pages/hello/HelloWorld";
import ChatApp from "./pages/chat/ChatApp";
import CommentBox from "./pages/comment-box/CommentBox";
import Clock from "./pages/clock/Clock";
import Clock2 from "./pages/hoc/Clock2";
import Clock3 from "./pages/hoc/Clock3";
import PureRedux from "./pages/pure-redux/PureRedux";
import Counter from "./pages/counter/Counter"
import LocaleSample from "./pages/locale-sample/LocaleSample";
import FormSubmit from "./pages/form/FormSubmit";
import FormSubmitAntd from "./pages/form/FormSubmitAntd";
import AntdDemo from "./pages/antd/AntdDemo";

const styles = {
    fontFamily: "sans-serif",
    paddingLeft: "250px",
};

const routeMap = new Map<string, any>([
    ["home", Home],
    ["hello-world", HelloWorld],
    ["chat", ChatApp],
    ["comment-box", CommentBox],
    ["clock", Clock],
    ["clock2", Clock2],
    ["clock3", Clock3],
    ["pure-redux", PureRedux],
    ["counter", Counter],
    ["locale-sample", LocaleSample],
    ["form-submit", FormSubmit],
    ["form-submit-antd", FormSubmitAntd],
    ["antd-demo", AntdDemo],
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
