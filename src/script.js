
import LocomotiveScroll from 'locomotive-scroll'

const backToTop = document.querySelector(".back-to-top");
const opacityClass = "opacity-0";
const visibilityClass = "invisible";

const scroll = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: true,
	tablet: { smooth: true },
	smartphone: { smooth: true },
});

