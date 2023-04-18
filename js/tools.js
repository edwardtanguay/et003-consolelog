export const getTitle = () => {
	return 'Color Site';
};

export const insertColorsIntoElement = (elem) => {
	const colors = ['yellow', 'green', 'blue', 'purple', 'orange'];
	for (const color of colors) {
		const firstLetter = color.charAt(1).toUpperCase();
		const rest = color.slice(0);
		const titleColor = firstLetter + rest;
		const title = `${titleColor} Page`;
		elem.innerHTML += `<div class="colorBar" style="background-color: ${color}">${title}</div>`;
	}
};
