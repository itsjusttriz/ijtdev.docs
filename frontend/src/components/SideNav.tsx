import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, MoveRight } from 'lucide-react';

import { navLinks } from '@/utils/SideNavLinks';

import { Text } from './ui/Text';
import { useState } from 'react';

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const NavHeader = styled.div`
	padding: 20px;
	text-align: center;
`;

const NavTitle = styled(Text)`
	font-weight: bold;
	font-size: 3rem;
	line-height: 0.8;
`;

const NavSubtitle = styled(Text)`
	font-weight: bold;
`;

const Footer = styled.div`
	margin-top: auto;
	text-align: center;
`;

const NavBody = styled.div`
	flex: 1; /* Take up remaining space */
	overflow-y: auto;
	padding: 0 20px;
`;

const NavItemList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 20rem;
	margin: 0 auto;
`;

const NavItem = styled.div<{ nested?: boolean }>`
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	border-radius: 5px;
	border-right: 2px solid ${({ theme }) => theme.borderColor};

	margin-left: ${(props) => (!props.nested ? '' : '3rem')};

	&:hover {
		background-color: ${({ theme }) => theme.textColor.primary + '08'};
		box-shadow: 2px 2px 1px ${({ theme }) => theme.textColor.primary + '30'};
		cursor: pointer;
	}
`;

type SideNavProps = {};
type State = {
	show: {
		[key: string]: boolean;
	};
};

const initState = {
	show: {
		documentation: false,
	},
};

export const SideNav = ({}: SideNavProps) => {
	const navigate = useNavigate();
	const [state, setState] = useState<State>(initState);

	const handleNavItemClick = (link: Record<string, any>) => {
		if ('url' in link) {
			navigate(link.url!);
			return;
		}

		if ('children' in link) {
			const key = link.title.toLowerCase();

			setState((prev) => ({
				...prev,
				show: {
					...prev.show,
					[key]: !prev.show[key],
				},
			}));
			return;
		}
	};

	return (
		<Wrapper>
			<NavHeader>
				<NavTitle>IJTDEV</NavTitle>
				<NavSubtitle>Docs & Patch Notes</NavSubtitle>
			</NavHeader>

			<NavBody>
				<NavItemList>
					{navLinks.map((link) => (
						<>
							<NavItem
								onClick={(e) => {
									handleNavItemClick(link);
									e.preventDefault();
								}}
							>
								<Text>{link.title}</Text>
								{'url' in link && <MoveRight />}
								{'children' in link &&
									(!state.show[link.title.toLowerCase()] ? (
										<ChevronDown />
									) : (
										<ChevronUp />
									))}
							</NavItem>
							{'children' in link &&
							link.children.length &&
							state.show[link.title.toLowerCase()]
								? link.children.map((child) => (
										<NavItem
											nested
											onClick={(e) => {
												handleNavItemClick(child);
												e.preventDefault();
											}}
										>
											<Text>{child.title}</Text>
											<MoveRight />
										</NavItem>
								  ))
								: null}
						</>
					))}
				</NavItemList>
			</NavBody>

			<Footer>
				<Text>Copyright @ 2024 IJTDEV</Text>
			</Footer>
		</Wrapper>
	);
};
