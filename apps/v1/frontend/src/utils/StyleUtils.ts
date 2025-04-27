import { css } from 'styled-components';

function generateRandomHexColor() {
	const [r, g, b] = Array.from({ length: 3 }, () =>
		Math.floor(Math.random() * 256)
			.toString(16)
			.padStart(2, '0')
	);

	return `#${r}${g}${b}`;
}

export class StyleUtils {
	static DEBUG_BORDER = css`
		border: 1px dashed ${() => generateRandomHexColor()};
	`;
}
