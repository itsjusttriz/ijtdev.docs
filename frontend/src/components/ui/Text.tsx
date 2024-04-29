import { HTMLAttributes } from 'react';
import styled, { CSSProperties } from 'styled-components';

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
	bold?: boolean;
	size?: CSSProperties['fontSize'];
};

export const Text = styled.p<TextProps>`
	margin: 0;
	color: inherit;
	font-size: ${(props) => (props.size ? props.size : 'inherit')};
	font-weight: ${(props) => (!props.bold ? 'normal' : 'bold')};
`;
