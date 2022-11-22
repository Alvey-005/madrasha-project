import React, {Component} from "react";
import Slider from "react-slick";
import {Box} from "@mui/material";
import Slick1 from "../../public/images/slick_1.jpeg";
import Slick2 from "../../public/images/slick_2.jpeg";
import Slick3 from "../../public/images/slick_3.jpeg";
import Gallary1 from "../../public/images/galary_1.jpeg";
import Gallary2 from "../../public/images/galary_2.jpeg";
import Gallary3 from "../../public/images/galary_3.jpeg";

const sliderData = [{
    id: "1", photoSrc: Slick1.src, alt: ""
}, {
    id: "2", photoSrc: Slick2.src, alt: ""
}, {
    id: "3", photoSrc: Slick3.src, alt: ""
}, {
    id: "4", photoSrc: Gallary1.src, alt: ""
}, {
    id: "5", photoSrc: Gallary2.src, alt: ""
}, {id: "6", photoSrc: Gallary3.src, alt: ""}, // {id:"",photoSrc:"",alt:""},
];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [{
        breakpoint: 1024, settings: {
            slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true
        }
    }, {
        breakpoint: 600, settings: {
            slidesToShow: 2, slidesToScroll: 1, initialSlide: 1
        }
    }, {
        breakpoint: 480, settings: {
            slidesToShow: 1, slidesToScroll: 1
        }
    }]
};
const PhotoSlider = () => {
    return (<Box margin="3rem">
            <Slider {...settings}>
                {sliderData.map((slide) => (<Box key={slide.id}>
                        <img
                            src={slide.photoSrc}
                            height={200} width="100%" style={{objectFit: "contain"}}/>
                    </Box>))}
            </Slider>
        </Box>);

}

export default PhotoSlider;