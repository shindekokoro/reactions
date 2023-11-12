import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";  
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Welcome to my Portfolio! My name is Brian Whisler, and I'm a parent of
        two kids who bring boundless levels of entertainment to my life, and
        teach me about the world around me. When I'm not spending time with my
        family, I enjoy exploring the great outdoors through hiking, biking, and
        running, building LEGO sets and coding. There's nothing like being
        surrounded by nature and pushing my physical limits to clear my mind and
        recharge my body.
      </p>
    </div>
  );
}
