import { Typography } from '@mui/material';

export default function Home() {
  let paragraphSX = {
    '&::first-letter': {
      textTransform: 'capitalize',
      fontWeight: 'bold'
    }
  };

  return (
    <div>
      <img
        src="./src/assets/profile.jpg"
        alt="Profile Photo of Brian Whisler"
        width={200}
        loading="true"
        style={{ float: 'left', paddingRight: '20px', borderRadius: '50%' }}
      />
      <Typography variant="h6" pb={'15px'} sx={paragraphSX}>
        Welcome to my Portfolio! My name is Brian Whisler, and I&apos;m a parent
        of two kids who bring boundless levels of entertainment to my life, and
        teach me about the world around me. When I&apos;m not spending time with
        my family, I enjoy exploring the great outdoors through hiking, biking,
        and running, building LEGO sets and coding. There&apos;s nothing like
        being surrounded by nature and pushing my physical limits to clear my
        mind and recharge my body.
      </Typography>
      <Typography variant="h6" pb={'15px'} sx={paragraphSX}>
        In addition to my passion for outdoor activities, I am also an
        experienced network technician, photographer and web designer. Over the
        years, I&apos;ve honed my skills and expertise to provide top-notch
        services to my clients, always striving to exceed expectations and
        deliver real value. I&apos;m committed to continuous learning and
        growth, to stay up-to-date with the latest technology in my field.
      </Typography>
      <Typography variant="h6" pb={'15px'} sx={paragraphSX}>
        Thank you for visiting my Portfolio. Please feel free to contact me if
        you have any questions or would like to learn more about my work and
        services.
      </Typography>
    </div>
  );
}
