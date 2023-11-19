import { Container, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page">
      <Typography variant="h1">{error.status}</Typography>
      <Typography variant="body1">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body2">
        {error.statusText || error.message}
      </Typography>
    </Container>
  );
}
