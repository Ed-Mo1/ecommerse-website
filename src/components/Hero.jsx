import WomanImg from "../assets/img/woman_hero.png";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-cover bg-no-repeat  bg-center">
      <div className="container flex justify-around items-center h-full">
        <div className="flex flex-col">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[3px] bg-primary mr-3"></div>
            <div>new trend</div>
          </div>
          <h1 className="text-7xl leading-[1.1] uppercase font-light mb-4">
            autumn sale styling <br />{" "}
            <span className=" font-semibold">womens</span>
          </h1>
          <Link
            to="/ecommerce-website/"
            className=" self-start uppercase text-primary font-semibold border-b-2 border-primary"
          >
            Shop Now
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
