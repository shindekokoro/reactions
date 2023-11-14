import { useRouteError } from 'react-router-dom';
import { useEffect } from 'react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  useEffect(() => {
    document.title = error.status + ': Error';
  }, [error]);

  return (
    <div id="error-page">
      <h1>{error.status}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
