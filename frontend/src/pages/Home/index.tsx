import { Text } from '@/components/ui/Text';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const Section = styled.div``;

const SectionHeader = styled(Text)`
	font-size: 3rem;
	font-weight: bold;
`;

const ContactList = styled(Wrapper)`
	gap: 0.5rem;
	padding: 1rem;
`;

type HomePageProps = {};

export const HomePage = ({}: HomePageProps) => {
	return (
		<Wrapper>
			<Section>
				<SectionHeader>Welcome!</SectionHeader>
				<Text>
					This webpage will house all the public documentation & patch
					notes for any project under the <b>IJTDEV</b> namespace.
				</Text>
			</Section>

			<Section>
				<SectionHeader>Contact</SectionHeader>
				<Text>
					If you wish to contact me (@itsjusttriz) for any support
					with the listed projects, feel free to use one of the
					following options:
				</Text>
				<ContactList>
					<Text>- Join the Discord</Text>
					<Text>- Email me at [redacted]</Text>
				</ContactList>
			</Section>
			<Section>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
				cumque, quos quia eius laboriosam, illum expedita unde hic ipsum
				ut, qui dolores odit dolore. Modi illum rem id facere ad!
				Perspiciatis reiciendis dicta est eveniet modi tenetur porro
				illum nostrum, cumque quasi minus tempora unde qui temporibus
				corporis accusamus tempore nam fugit omnis soluta excepturi
				molestias consequatur facere sequi. Tempore? Reiciendis
				molestias cum ipsa nostrum, sunt obcaecati aliquid incidunt eum
				laborum vero alias eos aut ducimus sed! Quaerat tenetur
				architecto, iure ipsa libero animi quas sed ullam esse
				temporibus vero? Voluptate quia, iusto saepe fuga eum corporis.
				Velit tenetur corporis consequuntur consectetur odio, labore
				dignissimos vero sapiente nihil, sit, repudiandae voluptates
				recusandae neque natus id molestias in eveniet maiores. Ipsum!
				Placeat, qui voluptatem. Id, unde! Fuga, porro officiis incidunt
				dolorem voluptate distinctio dolores quia velit quibusdam, cum
				quasi! Ipsam et, assumenda magnam doloremque asperiores
				cupiditate! Unde animi incidunt ipsa sit! Eaque at enim, dolorem
				libero nisi quia animi, accusantium asperiores odit dolore
				laboriosam voluptas ex aperiam quasi consectetur quibusdam
				mollitia? Magnam exercitationem id assumenda officia molestiae
				veritatis similique possimus facilis. Ipsam facilis ex minus
				inventore recusandae! Quis ea officia neque deleniti culpa unde
				qui consequuntur quod dolor nostrum praesentium architecto
				libero eum molestias placeat consectetur sed, vel a enim totam.
				Veniam deleniti sunt doloribus ex eius. Dolorum minima ducimus
				esse natus architecto illo! Voluptates, pariatur ut excepturi
				nulla dicta quia hic consectetur, id distinctio sunt facilis
				inventore sit, minima omnis! Nemo perferendis quae quia animi
				consequatur voluptatem reiciendis eligendi pariatur! Esse eos
				tenetur quidem a dicta autem, nihil modi eum! Rerum, laborum
				deleniti voluptatem a voluptate accusantium saepe illum at?
				Blanditiis harum repellendus reiciendis eius facilis corrupti
				quasi vero, saepe expedita nulla fugit ea quos possimus
				recusandae minus est! Itaque, ipsam. Nulla recusandae, rerum
				velit possimus alias provident a asperiores? Voluptatibus vel
				eaque aspernatur consectetur ipsa, numquam, illo optio adipisci
				repudiandae voluptates perferendis architecto non praesentium
				magnam quo minus culpa quibusdam ullam dolore beatae officiis
				tenetur magni corrupti? Ullam, quidem. Fugiat officiis cum
				cupiditate eos veniam nam ipsam doloribus? Magni quidem saepe
				natus et adipisci suscipit minima totam facilis, aspernatur quod
				dolorem fugit consequuntur neque vitae molestiae fugiat quia in!
				Adipisci veniam qui ab corporis facilis nobis officiis saepe a
				commodi voluptates magni doloribus necessitatibus, quasi ipsum
				reprehenderit nostrum cumque iste aperiam earum in vero
				asperiores, quaerat veritatis. Mollitia, similique? Facere nihil
				voluptatem veritatis vitae totam blanditiis molestias similique
				natus consectetur rem deleniti magni illum quaerat minus,
				nesciunt accusamus obcaecati quod rerum delectus. Eos iure, sit
				iusto fugit minus illum. Magnam nesciunt temporibus
				necessitatibus ad, eius saepe quos rerum minus mollitia optio
				cumque quaerat maxime itaque iure veniam perspiciatis. Aut,
				ducimus ex vel deleniti ratione minima itaque. Doloribus, minus
				eveniet? Nihil, explicabo repudiandae? Atque, modi incidunt!
				Odit deserunt quas excepturi error velit facere. Illo cum
				ratione eos? Dolor qui blanditiis, fugiat eum ullam excepturi
				doloribus, distinctio, iste molestiae vel velit. Dolore
				molestias vero modi soluta iste fugiat asperiores delectus
				maiores. Quo animi suscipit, libero nulla officiis id ratione
				eum laudantium, error consequatur nesciunt dicta dolore
				voluptate similique eligendi unde distinctio. Quae adipisci
				officia sed autem corporis perferendis aliquam, rerum deserunt
				odio, at doloribus eius? Voluptates at sed quasi veritatis
				maiores tenetur? Error voluptatibus corporis autem, laborum
				delectus nostrum obcaecati tempore. Nisi consectetur quos modi
				in maiores cumque harum sint tenetur praesentium placeat?
				Reiciendis minus accusantium ea perferendis placeat, nemo at
				soluta vero voluptates excepturi porro modi officia incidunt
				dolores ex? Earum expedita molestiae maiores. Illum doloremque
				velit sunt blanditiis consectetur, laboriosam sint non nesciunt,
				commodi laudantium ea obcaecati ullam! Voluptatum eos obcaecati
				deleniti magnam nobis qui animi sit facilis ex?
			</Section>
		</Wrapper>
	);
};
