import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { GrPhone, GrMail, GrLinkedin, GrGithub } from 'react-icons/gr';
import { Form } from '../components';

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
    <>
      <Form />
      <List>
        {contactInfo.map((contact) => (
          <ListItemButton key={contact.link} to={contact.link} target="_blank">
            <ListItemIcon>{contact.icon}</ListItemIcon>
            <ListItemText primary={contact.text} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}
