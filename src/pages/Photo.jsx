import { useEffect } from 'react';

export default function Photo() {
  useEffect(() => {
    document.title = 'Photography Projects';
  }, []);

  return (
    <ul className="work-container">
      <li className="zack-and-hillary">
        <a href="https://sirbrianphotography.wordpress.com/2009/10/26/zack-and-hillary/">
          <p>
            Zack & Hillary&apos;s Wedding <span>photography</span>
          </p>
        </a>
      </li>
      <li className="hillarys-graduation">
        <a href="https://sirbrianphotography.wordpress.com/2010/04/08/a-graduation/">
          <p> 
            Hillary&apos;s Graduation <span>photography</span>
          </p>
        </a>
      </li>
    </ul>
  );
}
