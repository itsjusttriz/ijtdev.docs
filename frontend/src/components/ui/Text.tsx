import { HTMLAttributes } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	size?: CSSProperties['fontSize'];
};

const TextCss = css`
	margin: 0;
	padding: 0;
	color: inherit;
`;

export const Text = styled.p<TextProps>`
	${TextCss}

	font-size: ${(props) => (props.size ? props.size : 'inherit')};
	font-weight: ${(props) => (!props.bold ? 'normal' : 'bold')};
	font-style: ${(props) => (!props.italic ? '' : 'italic')};
	text-decoration: ${(props) => (!props.underline ? '' : 'underline')};
`;

export const LinkText = styled.a<TextProps>`
	${TextCss}

	color: ${({ theme }) => theme.textColor.link};

	font-size: ${(props) => (props.size ? props.size : 'inherit')};
	font-style: ${(props) => (!props.italic ? 'none' : 'italic')};
	font-weight: bold;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
