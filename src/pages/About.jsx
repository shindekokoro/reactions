import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Me";  
  }, []);
  return (
    <div>
      <h1>About Me</h1>
      <p>
        In addition to my passion for outdoor activities, I am also an
        experienced network technician, photographer and web designer. Over the
        years, I've honed my skills and expertise to provide top-notch services
        to my clients, always striving to exceed expectations and deliver real
        value. I'm committed to continuous learning and growth, to stay
        up-to-date with the latest technology in my field.
      </p>
      <p>
        Thank you for visiting my Portfolio. Please feel free to contact me if
        you have any questions or would like to learn more about my work and
        services.
      </p>
    </div>
  );
}
