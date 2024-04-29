import { Theme } from '@/utils/Theme';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

type NavItemProps = HTMLAttributes<HTMLDivElement> & {
	bgColor?: boolean;
	border?: boolean;
};

export const NavItem = styled.div<NavItemProps>`
	display: flex;
	flex-direction: row;

	margin-top: 0.5rem;
	margin-bottom: 0.5rem;

	justify-content: space-between;

	padding: 20px;

	cursor: pointer;

	background-color: ${(props) => (props.bgColor ? '#2c2c2c57' : 'inherit')};

	${(props) =>
		props.border &&
		`
			${Theme.BORDER_COLOR}
			border-right: 2px solid;
			border-radius: 5px;
		`}

	&:hover {
		${Theme.TEXT_FOCUSED}
	}
`;
