/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'How can I start a Startup with Markoknow Community ?',
    contents: (
      <div>
        As a Markoknow community member, you get access to practical hands-on
        lessons from founders, Mentorship and Guidance from Peer Founders and
        Investors and Funding routes are opened to you for further paths. All
        this helps you kickstart and grow your startup.
      </div>
    ),
  },
  {
    title: 'How can I become a community member at Markoknow ?',
    contents: (
      <div>
        By signing up to the Markoknow Login/Signup button, you get added to the
        Markoknow community. You can exclusively join the founder’s community
        from the joining mail. From the date of signup, you start receiving the
        benefits of being a Part of Markoknow Community.
      </div>
    ),
  },
  {
    title: `How can a community member benefit from being a part of Markoknow ?`,
    contents: (
      <div>
        Markoknow Community members get a lot of boost in their knowledge,
        guidance and networking for their Startup Journey.
      </div>
    ),
  },
  {
    title: `Does Markoknow helps in raising funds ?`,
    contents: (
      <div>
        Markoknow has its funding section form where we take requests from
        startups that want to showcase their deck and raise funds. Once our team
        selects the pitch for further rounds, we help selected startups raise
        funds in our network.
      </div>
    ),
  },
  {
    title: `Does Markoknow helps in mentorship ?`,
    contents: (
      <div>
        Markoknow has a lot of sessions, resources and community activities that
        facilitate free mentorship and strong foundation. Further mentorship is
        chargeable as per the support that is needed by the startup specifically
        and how much of the time and efforts are involved to mentor the mentee.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader
          title="Frequently Asked Questions ( FAQ )"
          description="Our support team ready to help you, please contact with them"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}
