import { Text } from '@/components/ui/Text';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 100%;
	overflow-y: auto;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 1rem 0;
`;

const Section = styled.div``;

const SectionHeader = styled(Text)`
	font-size: 3rem;
	font-weight: bold;
`;

type NotFoundProps = {};

export const NotFound = ({}: NotFoundProps) => {
	return (
		<Wrapper>
			<Content>
				<Section>
					<SectionHeader>Not Found</SectionHeader>
					<Text>
						There doesn't seem to be any content here, at this
						time...
					</Text>
					<Text>
						Please try again later, or click <b>"Homepage"</b> on
						the left-side menu...
					</Text>
				</Section>
			</Content>
		</Wrapper>
	);
};
