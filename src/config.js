import { label } from "./label";
import {
    fb,
    youtube,
    tiktok,
    appstore,
    chplay,
    bannerArr,
    ctn,
    kungfu,
    bannerKungfu,
} from "./image";
const url = {
    fb: "https://www.facebook.com/ChungThanhNienPhatTuPhatQuangTphcm",
    yt: "https://www.youtube.com/c/SenHongPhapQuang",
    tiktok: "https://www.tiktok.com/@chungthanhnien_phatquang",
    chplay: "https://play.google.com/store/apps/details?id=com.pqsoft.phapquang",
    appstore: "https://apps.apple.com/vn/app/ph%C3%A1p-quang/id1608669200",
    ctn: "/cacdiemsinhhoat",
    kungfu: "/cacdiemvothuat",
};

const data = [
    {
        id: "fb",
        label: label.fanpageLabel,
        img: fb,
    },
    {
        id: "ctn",
        label: label.ctnLabel,
        img: ctn,
    },
    {
        id: "kungfu",
        label: label.kungfuLabel,
        img: kungfu,
    },
    {
        id: "tiktok",
        label: label.tiktokLabel,
        img: tiktok,
    },
    {
        id: "yt",
        label: label.ytLabel,
        img: youtube,
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

const sliderSettings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3 * 1000,
    slidesToShow: 1,
    swipe: true,
    variableWidth: false,
    mobileFirst: true,
    verticalSwiping: false,
    lazyLoad: "progressive",
};

const kungfuPlace = [
    {
        title: "ĐIỂM TẬP VÕ PHẬT QUANG QUYỀN",
        list: [
            {
                pagodaName: "Nhà Thi Đấu Quân Khu 7",
                pagodaAddress: "202 Hoàng Văn Thụ, P.9, Q.Phú Nhuận, TP.HCM",
                mapLink: "https://goo.gl/maps/fnHay8jns7xYRB3R8",
                time: "Thứ 2,4,6 Hoặc 3,5,7 19H-21H00",
                contact: [
                    {
                        name: "Huệ Đức Chuyên",
                        phone: "0989554295",
                    },
                    {
                        name: "Hòa Bản Chương",
                        phone: "0962770898",
                    },
                    {
                        name: "Tâm Chương Ánh",
                        phone: "0968901146",
                    },
                ],
                code: 1,
            },
            {
                pagodaName: "Nhà Thi Đấu Đa Năng Q7",
                pagodaAddress: "506 Huỳnh Tấn Phát, Bình Thuận, Q.7, TP HCM",
                mapLink: "https://goo.gl/maps/UxUdZEmo636Gpwrt5",
                time: "Thứ 3,7 19H-21H00",
                contact: [
                    {
                        name: "Hòa Đăng Nghiêm",
                        phone: "0339997406",
                    },
                    {
                        name: "Huệ Đức Huyền",
                        phone: "0369748955",
                    },
                ],
                code: 1,
            },
            {
                pagodaName: "Thiền Thất Bảo Quang",
                pagodaAddress: "Ấp 3A, Tỉnh lộ 8, xã Tân Thạnh Tây, H.Củ Chi",
                mapLink: "https://goo.gl/maps/WGMv7cwS3mZHVPUC8",
                time: "Thứ 4,Chủ Nhật 18H-20H30",
                contact: [
                    {
                        name: "Thể Thanh Liên",
                        phone: "0347806017",
                    },
                ],
                code: 1,
            },
            {
                pagodaName: "Hóc Môn",
                pagodaAddress: "88/1 Lê Thị Hồng Gấm, KP 4, TT.Hóc Môn",
                mapLink: "https://goo.gl/maps/WFct1D7ZQF5jQasc6",
                time: "Thứ 2,4,6 19H-21H00",
                contact: [
                    {
                        name: "Huệ Đức Huyền",
                        phone: "0369748955",
                    },
                    {
                        name: "Phúc Phương Chánh",
                        phone: "0969960926",
                    },
                ],
                code: 1,
            },
            {
                pagodaName: "Tịnh Xá Ngọc Thành",
                pagodaAddress:
                    "37/12 Đường 41, Khu phố 6, P.Linh Đông, TP.Thủ Đức",
                mapLink: "https://goo.gl/maps/Zm28DfuvhbgDVMQh7",
                time: "Thứ 5,7 19H-21H00",
                contact: [
                    {
                        name: "Lương Huy Hiệp",
                        phone: "0394306174",
                    },
                    {
                        name: "Tâm Định Hoàng",
                        phone: "0359209646",
                    },
                ],
                code: 1,
            },
            {
                pagodaName: "Bình Dương",
                pagodaAddress:
                    "Hẻm 115, Nguyễn Thị Minh Khai, P.Phú Hòa, Thủ Dầu Một, Bình Dương",
                mapLink: "https://goo.gl/maps/aRSHRgnHMmj43ZvR6",
                time: "Thứ 4,6,7 19H-21H30",
                contact: [
                    {
                        name: "Khải Nguyên Ý",
                        phone: "0366582769",
                    },
                    {
                        name: "Tâm Định Chính",
                        phone: "0346796611",
                    },
                ],
                code: 1,
            },
        ],
    },
];

const placeList = [
    {
        title: "ĐIỂM SINH HOẠT CHÚNG THANH NIÊN TP.HCM",
        list: [
            {
                pagodaName: "Chùa Bửu Lâm",
                pagodaAddress: "205 Phan Văn Hớn, P.Tân Thới Nhất, Q.12",
                mapLink: "https://goo.gl/maps/BYd7s6JHvDtuLLHh6",
                time: "Hằng Ngày 19H-21H30",
                contact: [
                    {
                        name: "Huệ Hoàng Phong",
                        phone: "0989554295",
                    },
                    {
                        name: "Tịnh Nghĩa Chánh",
                        phone: "0918156278",
                    },
                ],
                code: 1,
            },
            {
                pagodaName: "Chùa Quan Âm",
                pagodaAddress:
                    "55 Đường số 1, Khu dân cư Nam Long, P.Tân Thuận Đông, Q.7",
                mapLink: "https://goo.gl/maps/KA7R9SGy32pYoZEF8",
                time: "Thứ 3 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Nguyễn Chánh Duy",
                        phone: "0985494968",
                    },
                    {
                        name: "Hòa Dương Tuệ",
                        phone: "0328320851",
                    },
                ],
                code: 3,
            },
            {
                pagodaName: "Thiền Viện Chơn Đức",
                pagodaAddress: "43/1 Dương Công Khi, Tân Hiệp, Hóc Môn",
                mapLink: "https://goo.gl/maps/o3DWti3CCa6JWhZTA",
                time: "Thứ 3 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Lương Đác Khiêm",
                        phone: "0979733256",
                    },
                    {
                        name: "Viên Bình Chiêu",
                        phone: "0388558944",
                    },
                ],
                code: 3,
            },
            {
                pagodaName: "Chùa Thiền Tôn 1",
                pagodaAddress: "479 Nguyễn Thị Định, P.Cát Lái, Q.2",
                mapLink: "https://goo.gl/maps/cBwbDyiJW5k5an2M6",
                time: "Thứ 3 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Trung Từ Vinh",
                        phone: "0903740059",
                    },
                    {
                        name: "Tâm Duyên Vinh",
                        phone: "0963332902",
                    },
                    {
                        name: "Hiền Phong Trí",
                        phone: "0964660879",
                    },
                ],
                code: 3,
            },
            {
                pagodaName: "Tịnh Xá Ngọc Thành",
                pagodaAddress:
                    "37/12 Đường 41, Khu phố 6, P.Linh Đông, TP.Thủ Đức",
                mapLink: "https://goo.gl/maps/Zm28DfuvhbgDVMQh7",
                time: "Thứ 3 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Tâm Viên Đoan",
                        phone: "0389972728",
                    },
                    {
                        name: "Huy Minh Tiến",
                        phone: "0968743545",
                    },
                    {
                        name: "Mẫn Định Liên",
                        phone: "0394415476",
                    },
                ],
                code: 3,
            },
            {
                pagodaName: "Chùa Long Hưng",
                pagodaAddress: "958/22 Lạc Long Quân, P.8, Q.Tân Bình",
                mapLink: "https://goo.gl/maps/ko24f7s4cNoeujK47",
                time: "Thứ 3 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Mẫn Huy Chân",
                        phone: "0342839762",
                    },
                    {
                        name: "Hòa Tuệ Giác",
                        phone: "0358939710",
                    },
                    {
                        name: "Trung Hưng Chánh",
                        phone: "0989823942",
                    },
                ],
                code: 3,
            },
            {
                pagodaName: "Chùa Giác Huệ",
                pagodaAddress: "198/55 Dương Bá Trạc, P.2, Q.8",
                mapLink: "https://goo.gl/maps/jmYoTYXqMNbRLhcf7",
                time: "Thứ 3 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Phúc Diệu Thường",
                        phone: "0354035806",
                    },
                    {
                        name: "Thể Lý Cần",
                        phone: "0968625603",
                    },
                    {
                        name: "Thể Huy Giác",
                        phone: "0393651131",
                    },
                ],
                code: 3,
            },
            {
                pagodaName: "Chùa Giác Quang",
                pagodaAddress: "Hẻm 322 Phan Văn Trị, P.11, Q.Bình Thạnh",
                mapLink: "https://goo.gl/maps/qFVbTR8wFtfkU3p67",
                time: "Thứ 3 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Tịnh Đăng Tính",
                        phone: "0376054799",
                    },
                    {
                        name: "Viên Hòa Chí",
                        phone: "0908513824",
                    },
                    {
                        name: "Tâm Định Hoàng",
                        phone: "0359209646",
                    },
                ],
                code: 3,
            },
            {
                pagodaName: "Chùa Long Thạnh",
                pagodaAddress: "1C Thạnh Xuân 52, P.Thạnh Xuân, Q.12",
                mapLink: "https://goo.gl/maps/w6LzD6AGB8FEn9rm8",
                time: "Thứ 3 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Huệ Tường Hải",
                        phone: "0984171183",
                    },
                    {
                        name: "Lương Chánh Tuân",
                        phone: "0354617443",
                    },
                ],
                code: 3,
            },
            {
                pagodaName: "Chùa Phật Học Xá Lợi",
                pagodaAddress: "89 Bà Huyện Thanh Quan, Q.3",
                mapLink: "https://goo.gl/maps/7Tnd5tpLNjeFDjyT6",
                time: "Thứ 4 Hằng Tuần 19H-21H00",
                contact: [
                    {
                        name: "Phúc Ân Chí",
                        phone: "0984524180",
                    },
                    {
                        name: "Khải Phúc Nhân",
                        phone: "0966869101",
                    },
                    {
                        name: "Hòa Huy Hưng",
                        phone: "0982247576",
                    },
                ],
                code: 4,
            },
            {
                pagodaName: "Chùa Phật Quang",
                pagodaAddress: "217 Đào Duy Từ, P.7, Quận 10",
                mapLink: "https://goo.gl/maps/vB9eyHcFhWGbdY5J6",
                time: "Thứ 5 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Trung Thăng Kiên",
                        phone: "0345337589",
                    },
                    {
                        name: "Tâm Thanh Lễ",
                        phone: "0966491141",
                    },
                ],
                code: 5,
            },
            {
                pagodaName: "Chùa Từ Tân",
                pagodaAddress: "90/153 Trường Chinh, P.12, Q.Tân Bình",
                mapLink: "https://goo.gl/maps/m6w3pefSP18nZ3as7",
                time: "Thứ 5 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Lương Hoàng Ngộ",
                        phone: "0931320984",
                    },
                    {
                        name: "Mẫn Tri Nhu",
                        phone: "0988301040",
                    },
                ],
                code: 5,
            },
            {
                pagodaName: "Chùa Bảo Long",
                pagodaAddress: "12 Phạm Văn Đồng, P.3, Gò Vấp",
                mapLink: "https://goo.gl/maps/ADDY4Jy8yUrz2cD46",
                time: "Thứ 5 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Mẫn Định Hà",
                        phone: "0348656470",
                    },
                    {
                        name: "Tâm Nguyên Nhất",
                        phone: "0347572930",
                    },
                ],
                code: 5,
            },
            {
                pagodaName: "Chùa Võ Linh",
                pagodaAddress: "2581 Huỳnh Tấn Phát, Phú Xuân, Nhà Bè",
                mapLink: "https://goo.gl/maps/wmmwc5D3ECfR1eoJ6",
                time: "Thứ 5 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Viên Hằng Vi",
                        phone: "0985283560",
                    },
                    {
                        name: "Hòa Dương Tuệ",
                        phone: "0328320851",
                    },
                ],
                code: 5,
            },

            {
                pagodaName: "Chùa Định Phước Di Đà",
                pagodaAddress: "Gần khu chợ nhỏ Đại Học Nông Lâm, Thủ Đức",
                mapLink: "https://goo.gl/maps/J4cPb67TgMJWCHfs8",
                time: "Thứ 5 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Trung Hải Phước",
                        phone: "0337971899",
                    },
                    {
                        name: "Đồng Lâm Hải",
                        phone: "0396434885",
                    },
                ],
                code: 5,
            },
            {
                pagodaName: "Chùa An Lạc",
                pagodaAddress: "Hẻm 145 Nguyễn Thái Sơn, Gò Vấp",
                mapLink: "https://goo.gl/maps/8TdyrfW322xYqxsa7",
                time: "Thứ 5 Hằng Tuần 19H-21H30",
                contact: [
                    {
                        name: "Huệ Tường Hải",
                        phone: "0984171183",
                    },
                    {
                        name: "Tâm Đức Phước",
                        phone: "0376602745",
                    },
                ],
                code: 5,
            },
        ],
    },
    {
        title: "LỚP TÂM LÝ ĐẠO ĐỨC",
        list: [
            {
                pagodaName: "Chùa Hải Quang",
                pagodaAddress: "13 Hẻm 71 Nguyễn Bặc, P.3, Tân Bình",
                mapLink: "https://goo.gl/maps/NyTRU91svJtBWpmw9",
                time: "Chủ Nhật 13h30 - 17h00",
                contact: [
                    {
                        name: "Viên Đạo Thuận",
                        phone: "0399956284",
                    },
                ],
            },
            {
                pagodaName: "Thiền Thất Bảo Quang",
                pagodaAddress:
                    "Nguyễn Thị Sương (hẻm ấp 3A) tỉnh lộ 8, xã Tân Thạnh Tây, Củ Chi",
                mapLink: "https://goo.gl/maps/WGMv7cwS3mZHVPUC8",
                time: "Chủ Nhật 13h30 - 17h00",
                contact: [
                    {
                        name: "Hòa Ngộ Cần",
                        phone: "0327718371",
                    },
                ],
            },
            {
                pagodaName: "Chùa Định Phước Di Đà",
                pagodaAddress: "Gần khu chợ nhỏ Đại Học Nông Lâm, Thủ Đức",
                mapLink: "https://goo.gl/maps/J4cPb67TgMJWCHfs8",
                time: "Chủ Nhật 13h30 - 17h00",
                contact: [
                    {
                        name: "Tâm Đức Duệ",
                        phone: "0368017459",
                    },
                ],
            },
        ],
    },
];

export {
    url,
    data,
    sliderSettings,
    bannerArr,
    placeList,
    kungfuPlace,
    bannerKungfu,
};
