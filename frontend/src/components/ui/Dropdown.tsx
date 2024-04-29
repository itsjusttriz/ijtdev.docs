import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
	position: relative;
	display: inline-block;

	&:active > div {
	}
`;

type DropdownProps = HTMLAttributes<HTMLDivElement> & {};

export const Dropdown = ({ children }: DropdownProps) => {
	return <DropdownWrapper>{children}</DropdownWrapper>;
};

const DropdownContentWrapper = styled.div`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	padding: 12px 16px;
`;

type DropdownContentProps = HTMLAttributes<HTMLDivElement> & {};

export const DropdownContent = ({ children }: DropdownContentProps) => {
	return <DropdownContentWrapper>{children}</DropdownContentWrapper>;
};
