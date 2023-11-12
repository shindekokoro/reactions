import { useEffect } from "react";
export default function Contact() {
  useEffect(() => {
    document.title = "Contact Me";  
  }, []);
  return (
    <div>
      <h1>Contact Me</h1>
      <ul className="contact-container">
        <li>
          <a href="tel:+18015743768">801.574.3768</a>
        </li>
        <li>
          <a href="mailto:brian.whisler@gmail.com">brian.whisler@gmail.com</a>
        </li>
        <li>
          <a href="https://github.com/shindekokoro">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brian-whisler-360760103/">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
