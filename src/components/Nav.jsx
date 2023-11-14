import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeIcon from '@mui/icons-material/Code';
import CameraIcon from '@mui/icons-material/Camera';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Nav() {
  // const currentPage = useLocation().pathname;
  return (
    <>
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <HomeIcon sx={{ color: 'primary.light' }} />
        </ListItemIcon>
        <ListItemText primary="About Me" />
      </ListItemButton>

      <ListItemButton component={Link} to="/Code">
        <ListItemIcon>
          <CodeIcon sx={{ color: 'primary.light' }} />
        </ListItemIcon>
        <ListItemText primary="Programming Projects" />
      </ListItemButton>

      <ListItemButton component={Link} to="/Photography">
        <ListItemIcon>
          <CameraIcon sx={{ color: 'primary.light' }} />
        </ListItemIcon>
        <ListItemText primary="Photography Projects" />
      </ListItemButton>

      <ListItemButton component={Link} to="/Contact">
        <ListItemIcon>
          <ContactMailIcon sx={{ color: 'primary.light' }} />
        </ListItemIcon>
        <ListItemText primary="Contact Me" />
      </ListItemButton>

      <ListItemButton href="./Resume_2023.pdf" download>
        <ListItemIcon>
          <HistoryEduIcon sx={{ color: 'primary.light' }} />
        </ListItemIcon>
        <ListItemText primary="Resume" />
      </ListItemButton>
    </>
  );
}
