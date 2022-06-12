import LocomotiveScroll from 'locomotive-scroll'

const scroll = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: false,
	// tablet: { smooth: true },
	// smartphone: { smooth: true },
});

