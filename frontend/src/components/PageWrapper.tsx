import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { SideNav } from './SideNav';
import { MobileViewMask } from './MobileViewMask';

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const SideNavWrap = styled.div`
	display: grid;
	grid-template-columns: 0.7fr 2fr; /* First column takes up one-third of the width */
	grid-gap: 10px;
`;

const MainContent = styled.div`
	overflow-y: auto;
	flex-grow: 1;
`;

const FixedHeight = styled.div`
	height: 98vh;
`;

type PageWrapperProps = HTMLAttributes<HTMLDivElement> & {};

export const PageWrapper = ({ children }: PageWrapperProps) => {
	return (
		<Wrapper>
			<MobileViewMask>
				<SideNavWrap>
					<FixedHeight>
						<SideNav />
					</FixedHeight>
					<MainContent>
						<FixedHeight>{children}</FixedHeight>
					</MainContent>
				</SideNavWrap>
			</MobileViewMask>
		</Wrapper>
	);
};
