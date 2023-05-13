/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb.png';
import dart from 'assets/images/icons/dart.png';
import rocket from 'assets/images/icons/rocket.png';
import trophy from 'assets/images/icons/trophy.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: "Founder's Network",
    description: 'Add Founders in your Startup Journey Network.',
  },
  {
    id: 2,
    icon: dart,
    title: 'Learn From Founders',
    description: 'Learn about Startups from people who have done it.',
  },
  {
    id: 3,
    icon: rocket,
    title: 'Get Mentored',
    description: 'Get a guidance throughout your journey.',
  },
  {
    id: 4,
    icon: trophy,
    title: 'Funded & Revenue',
    description: `Get help to start fundraising or start bootstrapping.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our Community"
          description="Whether you're just starting out or you're well on your way to building a successful business, Founder's Network has something for you. Here's a breakdown of what we offer:"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
  },
};
