"use strict";

let ashiish_content = document.querySelector(".ashiish-content");
let tooltip = document.querySelector('.ashiish-tooltip');
let selectedTextWidth, selectedTextHeight;

const selectText = function(e) {
	let selected = window.getSelection();
	if(selected.rangeCount) {
		let range = selected.getRangeAt(0).cloneRange();
		if(range.getBoundingClientRect) {
			let rectangle = range.getBoundingClientRect();
			selectedTextWidth = rectangle.right - rectangle.left;
			selectedTextHeight = rectangle.bottom - rectangle.top;
		}
	}
	let tooltipWidth = tooltip.clientWidth / 2;
	let tooltipHeight = tooltip.clientHeight;
	let textWidth = selectedTextWidth / 2;
	let textHeight = selectedTextHeight / 2;
	let x = e.clientX - ashiish_content.offsetLeft;
	let y = e.clientY - ashiish_content.offsetTop;
	let left = x - tooltipWidth - textWidth;
	let top = y - tooltipHeight - selectedTextHeight;
	tooltip.style.left = left + "px";
	tooltip.style.top = top + "px";
}

ashiish_content.onmouseup = function(e) {
	selectText(e);
	tooltip.classList.add("ashiish-tooltop--active");
}


	

