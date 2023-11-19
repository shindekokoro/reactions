import { Typography, Link, Box } from '@mui/material';
import {
  DiReact,
  DiMysql,
  DiNginx,
  DiJsBadge,
  DiNpm,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiDocker,
  DiGit,
  DiHeroku,
  DiMongodb,
  DiPhotoshop
} from 'react-icons/di';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer(props) {
  return (
    <>
      {' '}
      <Box variant="body2" color="primary" align="center" {...props}>
        <Typography fontSize={50}>
          <DiJsBadge />
          <DiReact />
          <DiMysql />
          <DiMongodb />
          <DiHtml5 />
          <DiCss3 />
          <DiNpm />
          <DiHeroku />
          <DiNginx />
          <DiPhotoshop />
          <DiBootstrap />
          <DiDocker />
          <DiGit />
        </Typography>
        {'Copyright © '}
        <Link color="inherit" href="https://spindawebdesign.com">
          Brian Whisler
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Box>
    </>
  );
}

export default Footer;
