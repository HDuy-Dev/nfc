import React, { useEffect } from "react";
import "./App.scss";
import Banner from "components/banner";
import { url, data, bannerArr } from "./config";
import { useHistory } from "react-router-dom";

function App() {
    const history = useHistory();

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    const openLink = (id) => {
        if (["ctn", "kungfu"].includes(id)) {
            history.push(url[id]);
            return;
        }
        window.open(url[id], "_blank");
    };

    return (
        <div className="app-container">
            <Banner bannerList={bannerArr} />
            <div className="container">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className="row-item"
                        onClick={() => openLink(item.id)}
                    >
                        <img src={item.img} alt="logo" className="logo" />
                        <div className="desc">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
