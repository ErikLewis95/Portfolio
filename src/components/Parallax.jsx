import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// Import images
import mountain3Img from "../assets/parallax/mountain-3.svg";
import mountain2Img from "../assets/parallax/mountain-2.svg";
import mountain1Img from "../assets/parallax/mountain-1.svg";
import sunImg from "../assets/parallax/sun.svg";
import cloudsBottomImg from "../assets/parallax/cloud-bottom.svg";
import cloudsLeftImg from "../assets/parallax/clouds-left.svg";
import cloudsRightImg from "../assets/parallax/clouds-right.svg";
import starsImg from "../assets/parallax/stars.svg";

import "../index.css";

const Parallax = ({ children, ...props }) => {
  const [background, setBackground] = useState(20);

  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const cloudsBottom = useRef(null);
  const cloudsLeft = useRef(null);
  const cloudsRight = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);
  const btnText = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "6000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(mountain3.current, { y: "-=80" }, 0);
      tl.to(mountain2.current, { y: "-=30" }, 0);
      tl.to(mountain1.current, { y: "+=50" }, 0);
      tl.to(stars.current, { top: 0 }, 0.5);
      tl.to(cloudsBottom.current, { opacity: 0, duration: 0.5 }, 0);
      tl.to(cloudsLeft.current, { x: "-20%", opacity: 0 }, 0);
      tl.to(cloudsRight.current, { x: "20%", opacity: 0 }, 0);
      tl.to(sun.current, { y: "+=210" }, 0);
      tl.to(copy.current, { y: "-250%", opacity: 1 }, 0);
      tl.to(btn.current, { opacity: 1 }, 1.5);
      tl.to(btnText.current, { y: "-=20" }, 0); // Parallax effect for button text
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )`,
        }}
        className="parallax"
      >
        <img
          ref={mountain3}
          className="mountain-3"
          src={mountain3Img}
          alt="mountain-3"
        />
        <img
          ref={mountain2}
          className="mountain-2"
          src={mountain2Img}
          alt="mountain-2"
        />
        <img
          ref={mountain1}
          className="mountain-1"
          src={mountain1Img}
          alt="mountain-1"
        />
        <img ref={sun} className="sun" src={sunImg} alt="sun" />
        <img
          ref={cloudsBottom}
          className="clouds-bottom"
          src={cloudsBottomImg}
          alt="clouds-bottom"
        />
        <img
          ref={cloudsLeft}
          className="clouds-left"
          src={cloudsLeftImg}
          alt="clouds-left"
        />
        <img
          ref={cloudsRight}
          className="clouds-right"
          src={cloudsRightImg}
          alt="clouds-right"
        />
        <img ref={stars} className="stars" src={starsImg} alt="stars" />
        <div ref={copy} className="copy">
          <h1>Journey</h1>
          <span ref={btn} className="parallax-button">
            <span ref={btnText}>Discover more</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
