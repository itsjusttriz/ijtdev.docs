import styled from 'styled-components';

import { LinkText, Text } from '@/components/ui/Text';

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

type HomePageProps = {};

export const HomePage = ({}: HomePageProps) => {
	return (
		<Wrapper>
			<Content>
				<Section>
					<SectionHeader>Welcome!</SectionHeader>
					<Text>
						This webpage will house all the public documentation &
						patch notes for any project under the <b>IJTDEV</b>{' '}
						namespace.
					</Text>
				</Section>

				<Section>
					<SectionHeader>Contact</SectionHeader>
					<Text>
						If you have any questions or concerns, feel free to
						contact me (@itsjusttriz) on one of the following
						options:
					</Text>
					<Section style={{ margin: '1rem 2rem' }}>
						<Text>
							- Join the Discord at{' '}
							<LinkText
								href='http://discord.itsjusttriz.com'
								target='_blank'
							>
								discord.itsjusttriz.com
							</LinkText>
						</Text>
						<Text>
							- Email me at{' '}
							<LinkText
								href='mailto:itsjusttriz@gmail.com'
								target='_blank'
							>
								itsjusttriz@gmail.com
							</LinkText>
						</Text>
					</Section>
				</Section>
			</Content>
		</Wrapper>
	);
};
