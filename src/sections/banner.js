/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import banner from 'assets/images/banner-markok.jpg';
import one from 'assets/images/1.jpg';
import two from 'assets/images/2.svg';
import three from 'assets/images/3.jpg';
import four from 'assets/images/4.jpeg';

const Banner = () => {
  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Platform for Founders & Startup Enthusiasts
            </Heading>
            <Text as="p" sx={styles.text}>
              25,000+ Founders. Investors & Enthusiasts already making Startup
              Journey Fastrack, Innovative & Profitable
            </Text>
            <Button variant="primary" sx={styles.button}>
              HOP ON
            </Button>
            <Box sx={styles.clients}>
              <Image src={one} alt="1" />
              <Image src={two} alt="2" />
              <Image src={three} alt="3" />
              <Image src={four} alt="4" />
            </Box>
          </Box>
          <Box sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '42px', '40px', '60px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary',
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px'],
  },
  button: {
    display: ['none', 'flex'],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['40px'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
  },
  illustration: {
    display: ['block', 'block'],
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '100%'],
    },
  },
};
