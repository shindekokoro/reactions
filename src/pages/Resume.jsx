import {
  Container,
  List,
  ListItem,
  Typography
} from '@mui/material';
import resume from '../assets/resume.json';
import { KeyboardArrowRight } from '@mui/icons-material';

export default function Resume() {

  return (
    <>
      <Container>
        <Typography variant="h5" component="div" color="secondary">
          Skills
        </Typography>
        <Typography variant="body2">
          {resume.skills.map((skill, index) => (
            <ListItem key={index} dense>
              <KeyboardArrowRight /> {skill}
            </ListItem>
          ))}
        </Typography>
        <Typography gutterBottom variant="h5" color="secondary">
          Work History
        </Typography>
        <List>
          {resume.jobs.map((job) => (
            <Typography key={job.company} variant="body2" component="div">
              <Typography
                variant="h6"
                color="secondary"
              >{`${job.title}: ${job.company}  ${job.timeFrame}`}</Typography>

              {job.responsibilities.map((duty, index) => (
                <ListItem key={index} dense>
                  <KeyboardArrowRight /> {duty}
                </ListItem>
              ))}
            </Typography>
          ))}
        </List>
      </Container>
    </>
  );
}
