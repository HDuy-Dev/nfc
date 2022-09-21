import React from "react";
import "./banner.scss";
import { sliderSettings } from "../../config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner({ bannerList }) {
    return (
        <Slider {...sliderSettings}>
            {bannerList.map((item, idx) => (
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
    );
}
