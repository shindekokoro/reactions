import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeIcon from '@mui/icons-material/Code';
import CameraIcon from '@mui/icons-material/Camera';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function ListItem(props) {
  const { to, text, icon } = props;
  return (
    <ListItemButton component={Link} to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}

export default function Nav(props) {
  const { location } = props;
  const iconColor = (route) => {
    return {
      color: location === route ? 'primary.lightBack' : 'primary.light'
    };
  };
  
  return (
    <>
      <ListItem
        to="/"
        text="About Me"
        icon={<HomeIcon sx={iconColor('/')} />}
      />

      <ListItem
        to="/Code"
        text="Code Portfolio"
        icon={<CodeIcon sx={iconColor('/Code')} />}
      />

      <ListItem
        to="/Photo"
        text="Photo Portfolio"
        icon={<CameraIcon sx={iconColor('/Photo')} />}
      />

      <ListItem
        to="/Contact"
        text="Contact Me"
        icon={<ContactMailIcon sx={iconColor('/Contact')} />}
      />

      <ListItem
        to="/Resume"
        text="Resume"
        icon={<HistoryEduIcon sx={iconColor('/Resume')} />}
      />
    </>
  );
}
