import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    document.title = "Work";  
  }, []);

  return (
    <div>
      <h1>Work</h1>
      <ul className="work-container">
        <li className="grow-box">
          <a href="https://github.com/shindekokoro/grow-box">
            <p>
              grow-box <span>NODE / chart.js / express</span>
            </p>
          </a>
        </li>
        <li className="concert-groupie">
          <a href="https://shindekokoro.github.io/concert-groupie/">
            <p>
              Concert Groupie <span>HTML / JS / CSS</span>
            </p>
          </a>
        </li>
        <li className="homebridge-poweredup">
          <a href="https://www.npmjs.com/package/homebridge-poweredup">
            <p>
              homebridge-poweredup <span>NODE / IoT</span>
            </p>
          </a>
        </li>
        <li className="module01">
          <a href="https://shindekokoro.github.io/module01-CodeRefactor/">
            <p>
              Code Refactor 01 <span>HTML / SEO Optimazation</span>
            </p>
          </a>
        </li>
        <li className="zack-and-hillary">
          <a href="https://sirbrianphotography.wordpress.com/2009/10/26/zack-and-hillary/">
            <p>
              Zack&Hillary's Wedding <span>photography</span>
            </p>
          </a>
        </li>
        <li class="hillarys-graduation">
          <a href="https://sirbrianphotography.wordpress.com/2010/04/08/a-graduation/">
            <p>
              Hillary's Graduation <span>photography</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
}
