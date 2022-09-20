import Slider from "react-slick";

import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { label } from "./label";
import { fb, youtube, tiktok, appstore, chplay, bannerArr } from "./image";

const url = {
    fb: "https://www.facebook.com/ChungThanhNienPhatTuPhatQuangTphcm",
    yt: "https://www.youtube.com/c/SenHongPhapQuang",
    tiktok: "https://www.tiktok.com/@chungthanhnien_phatquang",
    chplay: "https://play.google.com/store/apps/details?id=com.pqsoft.phapquang",
    appstore: "https://apps.apple.com/vn/app/ph%C3%A1p-quang/id1608669200",
};

const data = [
    {
        id: "fb",
        label: label.fanpageLabel,
        img: fb,
    },
    {
        id: "yt",
        label: label.ytLabel,
        img: youtube,
    },
    {
        id: "tiktok",
        label: label.tiktokLabel,
        img: tiktok,
    },
    {
        id: "chplay",
        label: label.chPlayLabel,
        img: chplay,
    },
    {
        id: "appstore",
        label: label.appStoreLabel,
        img: appstore,
    },
];

function App() {
    const openLink = (id) => {
        window.open(url[id], "_blank");
    };

    const sliderSettings = {
        dots: true,
        arrows: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5 * 1000,
        slidesToShow: 1,
        swipe: true,
        variableWidth: false,
        mobileFirst: true,
        verticalSwiping: false,
        lazyLoad: "progressive",
    };
    return (
        <div className="app-container">
            <Slider {...sliderSettings}>
                {bannerArr.map((item, idx) => (
                    <div className="banner-wrapper" key={`banner-${idx}`}>
                        <div className="banner-container">
                            <img
                                src={item.desktop}
                                className="banner"
                                alt="banner"
                            />
                            <img
                                src={item.mobile}
                                className="banner-mobile"
                                alt="banner-mobile"
                            />
                        </div>
                    </div>
                ))}
            </Slider>

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
