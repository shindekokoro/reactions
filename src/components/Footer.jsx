import { Typography, Link } from '@mui/material';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://spindawebdesign.com">
        Brian Whisler
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Footer;
