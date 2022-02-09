/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styled from "styled-components";
import { useParams } from "react-router";
import axios from "../api/axios-config";
import "../index.css";

const HouseCarrousel = () => {
  const { id } = useParams();
  const [housePictures, setHousePictures] = useState(null);

  useEffect(() => {
    axios
      .get(`/home_to_rent/${id}`)
      .then((res) => res.data)
      .then((data) => setHousePictures(data.image))
      .catch((err) => console.log(err));
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }

  if (!housePictures) {
    return null;
  }

  return (
    <MainContainer>
      <NavigationWrapper className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img
              src={process.env.REACT_APP_API_URL + housePictures.principal}
              alt="maison"
            />
          </div>
          {housePictures.secondary.map((pict) => (
            <div key={pict} className="keen-slider__slide">
              <img src={process.env.REACT_APP_API_URL + pict} alt="maison" />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </NavigationWrapper>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`dot${currentSlide === idx ? " active" : ""}`}
            >{` `}</button>
          ))}
        </div>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  [class^="number-slide"],
  [class*=" number-slide"] {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: rgb(255, 255, 255);
    /* font-weight: 500; */
    /* height: auto; */
    width: 100vw;
    height: 80vh;
    /* position: absolute; */
  }

  .keen-slider {
    display: flex;
    align-items: center;
  }

  .keen-slider__slide {
  }

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }
`;

const NavigationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;

export default HouseCarrousel;
