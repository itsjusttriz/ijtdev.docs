import { useScreenSize } from '@/hooks/useScreenSize';
import { Theme } from '@/utils/Theme';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { MobileViewError } from './MobileViewError';
import { SideNav } from './SideNav';
import { Text } from './ui/Text';

const Wrapper = styled.div`
	${Theme.BACKGROUND_COLOR}
	${Theme.OVERFLOW_Y_HIDDEN}

	height: 100vh;
	max-height: 100vh;
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

const Content = styled.div`
	${Theme.MARGIN_X_AUTO}

	max-width: 80%;
	height: 100%;
	display: flex;
	flex-direction: row;
`;

const ChildContainer = styled.div`
	${Theme.TEXT_PRIMARY}
	${Theme.OVERFLOW_Y_AUTO}

	width: 100%;
	height: auto;
	padding: 3rem;
`;

const Footer = styled.div`
	${Theme.TEXT_PRIMARY}

	display: flex;
	justify-content: center;
`;

const FooterText = styled(Text)`
	${Theme.MARGIN_X_AUTO}
`;

type PageWrapperProps = HTMLAttributes<HTMLDivElement> & {};

export const PageWrapper = ({ children }: PageWrapperProps) => {
	const isMobile = useScreenSize();

	return (
		<Wrapper>
			<Content>
				{isMobile ? (
					<MobileViewError />
				) : (
					<>
						<SideNav />
						<ChildContainer>{children}</ChildContainer>
					</>
				)}
			</Content>
			<Footer>
				<FooterText>Copyright @ IJTDEV 2024</FooterText>
			</Footer>
		</Wrapper>
	);
};
