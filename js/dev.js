export const debug = (label, value) => {
	console.log.bind(window.console);
	console.log(`>>> ${label.toUpperCase()} >>> [${value}]`);
};
