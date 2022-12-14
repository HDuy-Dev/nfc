import React, { useEffect } from "react";
import "./kungfu.scss";
import { kungfuPlace, bannerKungfu } from "../../config";
import Banner from "components/banner";

export default function KungFuList() {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    const openLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="kungfu-list">
            <Banner bannerList={bannerKungfu} />
            <div className="kungfu-list-container">
                {kungfuPlace.map((place, idx) => (
                    <div key={`place-${idx}`} className="place">
                        <div className="title">{place.title}</div>
                        <div className="card-list">
                            {place.list.map((pagoda, idx) => (
                                <div
                                    key={`pagoda-${idx}`}
                                    className="card-item"
                                    onClick={() => openLink(pagoda.mapLink)}
                                >
                                    <div className="card-top">
                                        <div className="pagoda-name">
                                            {pagoda.pagodaName}
                                        </div>
                                        <div className="pagoda-address">
                                            {pagoda.pagodaAddress}
                                        </div>
                                    </div>

                                    <div className="card-bottom">
                                        <div className="time-wrapper">
                                            <span className="time">
                                                {pagoda.time}
                                            </span>
                                        </div>
                                        <div className="contact-title">
                                            Th??ng tin li??n h???
                                        </div>
                                        {pagoda.contact.map((contact, idx) => (
                                            <div
                                                className="contact"
                                                key={`contact-${idx}`}
                                            >
                                                <div className="contact-name">
                                                    {contact.name}
                                                </div>
                                                <div className="contact-space">
                                                    {" "}
                                                    -{" "}
                                                </div>
                                                <div className="contact-phone">
                                                    {contact.phone}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
