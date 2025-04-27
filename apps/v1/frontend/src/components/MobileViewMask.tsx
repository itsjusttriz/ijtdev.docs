import { StyleUtils } from '@/utils/StyleUtils';
import { Text } from './ui/Text';
import styled from 'styled-components';
import { WithChildrenType } from '@/utils/types/WithChildrenType';
import { useScreenSize } from '@/hooks/useScreenSize';

const Wrapper = styled.div`
	${StyleUtils.DEBUG_BORDER}

	padding: 4rem;
	margin: 0% auto;
	text-align: center;
	width: fit-content;
	height: fit-content;
	color: ${({ theme }) => theme.textColor.primary};
`;

type MobileViewMaskProps = WithChildrenType & {};

export const MobileViewMask = ({ children }: MobileViewMaskProps) => {
	const isMobile = useScreenSize();

	if (!isMobile) return <>{children}</>;

	return (
		<Wrapper>
			<Text bold>This content is only available on PC</Text>
		</Wrapper>
	);
};
