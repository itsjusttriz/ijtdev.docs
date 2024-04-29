import { Theme } from '@/utils/Theme';
import { ChevronDown, ChevronUp, MoveRight } from 'lucide-react';
import { useState } from 'react';
import styled from 'styled-components';
import { NavItem } from './NavItem';
import { Text } from './ui/Text';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
	${Theme.TEXT_PRIMARY}
	${Theme.OVERFLOW_Y_AUTO}
	
	width: 25rem;
	height: 100%;
`;

const NavHeader = styled.div`
	margin: 0;
	padding: 0;
	text-align: center;
`;

const NavList = styled.div`
	padding: 12px;
	margin-top: 1rem;
`;

const BrandName = styled(Text)`
	line-height: 0.8;
`;

const DropdownContent = styled.div`
	margin-left: 2rem;
`;

type SideNavProps = {};

type State = {
	show: Record<string, boolean>;
};

const initState: State = {
	show: {
		documentation: false,
	},
};

export const SideNav = ({}: SideNavProps) => {
	const navigate = useNavigate();
	const [state, setState] = useState<State>(initState);

	const toggleShow = (key: string) => {
		setState((prev) => ({
			...prev,
			show: {
				[key]: !prev.show[key],
			},
		}));
	};

	return (
		<Wrapper>
			<NavHeader>
				<BrandName bold size={'3rem'}>
					IJTDEV
				</BrandName>
				<Text bold>Docs & Patch Notes</Text>
			</NavHeader>

			<NavList>
				<NavItem bgColor border onClick={() => navigate('/')}>
					<Text>HomePage</Text>
					<MoveRight />
				</NavItem>

				<NavItem
					bgColor
					border
					onClick={() => toggleShow('documentation')}
				>
					<Text>Documentation</Text>
					{state.show.documentation ? <ChevronUp /> : <ChevronDown />}
				</NavItem>
				{state.show.documentation && (
					<DropdownContent>
						<NavItem onClick={() => navigate('/ijtdev-api')}>
							<Text>ijtdev/api</Text>
							<MoveRight />
						</NavItem>
					</DropdownContent>
				)}
			</NavList>
		</Wrapper>
	);
};
