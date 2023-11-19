import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Toolbar,
  IconButton,
  Divider,
  List,
  Typography,
  useMediaQuery,
  AppBar as MuiAppBar,
  Drawer as MuiDrawer
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DownloadIcon from '@mui/icons-material/Download';
import Nav from './Nav';

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    // backgroundColor: theme.palette.primary.dark,
    // color: theme.palette.primary.light,
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(0),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7)
      }
    })
  }
}));

const getTitle = (path) => {
  switch (path) {
    case '/':
      return 'Brian Whisler';
    case '/Contact':
      return 'Contact Me';
    case '/Code':
      return 'Coding Projects';
    case '/Photo':
      return 'Photo Projects';
    case '/Resume':
      return 'Resume';
    default:
      return 'Error';
  }
};

function showDownloadButton(isLargerScreen) {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.download = `Resume.pdf`;
    link.href = './Resume_2023.pdf';
    link.click();
  };
  return (
    <IconButton color="inherit" onClick={downloadResume}>
      {isLargerScreen ? <Typography>Download</Typography> : ''}
      <DownloadIcon />
    </IconButton>
  );
}

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header() {
  const currentPage = useLocation().pathname;
  const title = getTitle(currentPage);
  useEffect(() => {
    document.title = title;
  }, [title]);

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const screen = useTheme();
  const isLargerScreen = useMediaQuery(screen.breakpoints.up('sm'));

  return (
    <>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px' // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          {title === 'Resume' ? showDownloadButton(isLargerScreen) : ''}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1]
          }}
        >
          <IconButton onClick={toggleDrawer} color="inherit">
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <Nav location={currentPage} />
        </List>
      </Drawer>
    </>
  );
}

export default Header;
