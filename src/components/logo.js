/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Heading
        sx={{
          color: isWhite ? 'white' : 'heading',
          fontWeight: 800,
          fontSize: ['24px', '30px'],
          letterSpacing: 'heading',
        }}
      >
        Markoknow
      </Heading>
    </Link>
  );
}
