import React, {Component} from "react";
import Slider from "react-slick";
import {Box} from "@mui/material";

const sliderData = [
    {
        id: "1",
        photoSrc: "https://d3or5urpu0oqw6.cloudfront.net/images/gallery/2yZnMm7KssLC6WBH8U6XSBxs140sQfkL5zntvu0U.png",
        alt: ""
    },
    {
        id: "2",
        photoSrc: "https://d3or5urpu0oqw6.cloudfront.net/images/gallery/XXpwTKiB5tb24yGjglycJAYDRaAXmglQ1fe43Yw3.png",
        alt: ""
    },
    {
        id: "3",
        photoSrc: "https://d3or5urpu0oqw6.cloudfront.net/images/gallery/1jaicJWu9Cmo5s7PVzE0QdpfPCt9McEt9Yj8w35p.png",
        alt: ""
    },
    {
        id: "4",
        photoSrc: "https://d3or5urpu0oqw6.cloudfront.net/images/gallery/3PjFXjRMLefVpw9Lfz4sida9udc1VGmT38UKKbly.png",
        alt: ""
    },
    {
        id: "5",
        photoSrc: "https://d3or5urpu0oqw6.cloudfront.net/images/gallery/aLRBLpHhsvgClqxpKIwo4taElCy4q34ucN0CArOI.png",
        alt: ""
    },
    // {id:"",photoSrc:"",alt:""},
];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const PhotoSlider = () => {
        return (
            <Box margin="4rem">
                <Slider {...settings}>
                    {sliderData.map((slide) =>
                        (
                            <Box key ={slide.id}>
                                <img
                                    src={slide.photoSrc}
                                    height={200} width="100%" style={{objectFit: "contain"}}/>
                            </Box>
                        )
                    )}
                </Slider>
            </Box>
        );

    }

    export default PhotoSlider;