import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { GrPhone } from 'react-icons/gr';
import { GrMail } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';

const contactInfo = [
  {
    link: 'tel:+1805743768',
    text: '+1.801.574.3768',
    icon: <GrPhone />
  },
  {
    link: 'mailto:brian.whisler@gmail.com',
    text: 'brian.whisler@gmail.com',
    icon: <GrMail />
  },
  {
    link: 'https://github.com/shindekokoro',
    text: 'GitHub',
    icon: <GrGithub />
  },
  {
    link: 'https://www.linkedin.com/in/brian-whisler-360760103/',
    text: 'LinkedIn',
    icon: <GrLinkedin />
  }
];

export default function Contact() {
  return (
    <List>
      {contactInfo.map((contact) => (
        <ListItemButton
          key={contact.link}
          to={contact.link}
          target="_blank"
        >
          <ListItemIcon>{contact.icon}</ListItemIcon>
          <ListItemText primary={contact.text} />
        </ListItemButton>
      ))}
    </List>
  );
}
