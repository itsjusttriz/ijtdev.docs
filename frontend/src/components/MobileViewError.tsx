import { Theme } from '@/utils/Theme';
import { Text } from './ui/Text';
import styled from 'styled-components';

const Wrapper = styled.div`
	${Theme.MARGIN_X_AUTO}
	${Theme.DEBUG_BORDER}
	${Theme.TEXT_PRIMARY}

	padding: 4rem;
	text-align: center;
	width: fit-content;
	height: fit-content;
`;

type MobileViewErrorProps = {};

export const MobileViewError = ({}: MobileViewErrorProps) => {
	return (
		<Wrapper>
			<Text bold>This content is only available on PC</Text>
		</Wrapper>
	);
};
