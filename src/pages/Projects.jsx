import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import photo from '../assets/photo-projects.json';
import code from '../assets/code-projects.json';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `/images/${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format`,
    srcSet: `/images/${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}

export default function Projects(props) {
  let projects = props?.type === 'code' ? code : photo;
  let width = ''
  let height = '50vh';
  return (
    <ImageList gap={10} rowHeight={'auto'}>
      {projects.map((project) => {
        const cols = project?.featured ? 2 : 1;
        const rows = project?.featured ? 2 : 1;
        return (
          <ImageListItem
            key={project.img}
            cols={cols}
            rows={rows}
            sx={{ display: 'inline' }}
          >
            <img
              {...srcset(project.img, width, height, rows, cols)}
              alt={project.title}
              height={height}
              style={{ height: height, objectFit: 'cover', objectPosition: '0 0' }}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(49, 52, 61, 1) 0%, ' +
                  'rgba(49, 52, 61, 0.7) 70%, rgba(49, 52, 61, .4) 100%)',
                color: '#48a9a6ff'
              }}
              title={project.title}
              subtitle={project.technology}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${project.title}`}
                  href={project.link}
                  target="_blank"
                >
                  <LaunchIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
