import { css } from 'styled-components';

function generateRandomHexColor() {
	const [r, g, b] = Array.from({ length: 3 }, () =>
		Math.floor(Math.random() * 256)
			.toString(16)
			.padStart(2, '0')
	);

	return `#${r}${g}${b}`;
}

export class Theme {
	static DEBUG_BORDER = css`
		border: dashed ${() => generateRandomHexColor()};
	`;

	static BACKGROUND_COLOR = css`
		background-color: #161616;
	`;

	static BORDER_COLOR = css`
		border-color: #c4c4c4;
	`;

	static MARGIN_X_AUTO = css`
		margin-left: auto;
		margin-right: auto;
	`;

	static OVERFLOW_Y_AUTO = css`
		overflow-y: auto;
	`;

	static OVERFLOW_Y_HIDDEN = css`
		overflow-y: hidden;
	`;

	static TEXT_PRIMARY = css`
		color: #c4c4c4;
	`;

	static TEXT_FOCUSED = css`
		color: white;
	`;

	static SCROLL_BAR = css`
		&::-webkit-scrollbar {
			width: 3px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #c4c4c4;
			border-radius: 5%;
		}
	`;
}
