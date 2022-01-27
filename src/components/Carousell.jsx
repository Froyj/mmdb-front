import { PropTypes } from "prop-types";
import { useParams } from "react-router";
import styled from "styled-components";
import Global from "./styled-components/Global";



function Carrousell ( {houses} ) {
  Carrousell.propTypes = {
    houses: PropTypes.string.isRequired,
  };

  const { id } = useParams;


// If you want to include more images, add the link name and URL of the image in the array list below.
	const imagesList = houses[id - 1].image.secondary.map((el) => (
      <img src={el} alt="maison" key={el} />
  ));;

	const sliderId = document.querySelector("#hcg-slider-1");

	// append all images
	let dotsDiv = "";
	let imagesDiv = "";
	for (let i = 0; i < imagesList.length; i += 1 ) {
		// if no link without href="" tag
		const href = (imagesList[i].link === "" ? "":` href="${imagesList[i].link}"`);
		imagesDiv += `<a${href} class="hcg-slides animated"${i === 0 ? ' style="display:block"':''}>`+
						`<span class="hcg-slide-number">${i+1}/${imagesList.length}</span>`+
						`<img src="${imagesList[i].url}" alt="${imagesList[i].name}">`+
					 `</a>`;
		dotsDiv += `<span class="hcg-slide-dot${i === 0 ? ' dot-active':''}" data-id="${i}"></span>`;
	}
	sliderId.querySelector(".hcg-slider-body").innerHTML = imagesDiv;
	sliderId.querySelector(".hcg-slide-dot-control").innerHTML = dotsDiv;

	let slideIndex = 0;

	const images = sliderId.querySelectorAll(".hcg-slides");
	const dots = sliderId.querySelectorAll(".hcg-slide-dot");
	const prevButton = sliderId.querySelector(".hcg-slide-prev");
	const nextButton = sliderId.querySelector(".hcg-slide-next");

	function showSlides() {
		if (slideIndex > images.length-1) {
			slideIndex = 0;
		}
		if (slideIndex < 0) {
			slideIndex = images.length-1;
		}
		for (let i = 0; i < images.length; i += 1) {
			images[i].style.display = "none";
			dots[i].classList.remove("dot-active");
			if (i === slideIndex) {
				images[i].style.display = "block";
				dots[i].classList.add("dot-active");
			}
		}
	}

	prevButton.addEventListener("click", (event) => {
		event.preventDefault();
		slideIndex -= 1;
		showSlides();
	}, false);

	nextButton.addEventListener("click", (event)=> {
		event.preventDefault();
		slideIndex += 1;
		showSlides();
	}, false);

	function dotClick(event) {
		slideIndex = event.target.dataset.id;
		showSlides();
	}

	for (let i = 0; i < dots.length; i += 1) {
		dots[i].addEventListener("click", dotClick, false);
	}



  return (
<Container id="hcg-slider-1" className="hcg-slider">
  patate
{/* <div className="hcg-slide-container">
	<div className="hcg-slider-body">
		<p className="hcg-slides animated" style={display:block} >
			<span className="hcg-slide-number">1/5</span>
			<img src={houses[id - 1].image.secondary} alt={houses[id - 1].name} />
			<span className="hcg-slide-text">image 1</span>
		</p>
	</div>
	<p className="hcg-slide-prev" href="#">❮</p>
	<p className="hcg-slide-next" href="#">❯</p>
<div className="hcg-slide-dot-control"></div>
</div> */}
</Container>

  );
  

}

const Container = styled(Global)`

#hcg-slider-1 .hcg-slide-container {
	width: auto;
	height: auto;
}
.hcg-slider {
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
}
.hcg-slide-container {
	max-width: 100%;
	display: inline-block;
	position: relative;
}
.hcg-slides {
	display: none;
	text-align: center;
	overflow: hidden;
}
.hcg-slides img {
	max-width: 100%;
	max-height: 100%;
	display: inline-block;
	border-radius: 5px;
	border: solid 1px #a0a0a0;
	vertical-align: middle;
}
.hcg-slide-prev, .hcg-slide-next {
	cursor: pointer;
	position: absolute;
	top: 50%;
	width: auto;
	padding: 16px;
	margin-top: -22px;
	color: #fff;
	font-weight: bold;
	font-size: 18px;
	transition: 0.6s ease;
	border-radius: 0 3px 3px 0;
	text-decoration: none;
}
.hcg-slide-next {
	right: 0;
	border-radius: 3px 0 0 3px;
}
.hcg-slide-prev {
	left: 0;
	border-radius: 0 3px 3px 0;
}
.hcg-slide-prev:hover, .hcg-slide-next:hover {
	background-color: #000c;
}
.hcg-slide-dot-control {
	margin-top: 10px;
	text-align: center;
}
.hcg-slide-dot {
	cursor: pointer;
	height: 13px;
	width: 13px;
	margin: 0 2px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
}
.hcg-slide-dot.dot-active {
	background-color: #717171;
}
.hcg-slide-number {
	color: #ffffff;
	font-size: 12px;
	padding: 4px 7px;
	position: absolute;
	border-radius: 5px;
	top: 5px;
	left: 5px;
	background-color: rgba(255,255,255,0.30);
}
/************CSS Animation***********/

.animated { 
	animation-name: fadeIn; 
	animation-duration: 1s;
}
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.fadeIn {
	animation-name: fadeIn;
}

`

export default Carrousell ;