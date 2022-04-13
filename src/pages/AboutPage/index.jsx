import React from "react";
import Armitaj from "../../assets/images/armitaj.webp";
import commericalBrand from "../../assets/images/commericalimg.webp";
import aboutBrand1 from "../../assets/images/aboutimg-1.webp";
import aboutBrand2 from "../../assets/images/aboutimg-2.webp";
import aboutBrand3 from "../../assets/images/aboutImg-3.webp";

const AboutPage = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 justify-end self-center p-5">
        <span className="text-center leading-6">
          <h1 className="font-medium text-[#0a0909] ">OUR MISSION</h1>
          <p className="px-7 py-5 text-[#0a0909] ">
            CHI BEPOSHAM is a global fashion and lifestyle e-tailer committed to
            making the beauty of fashion accessible to everyone. We use
            on-demand manufacturing technology to connect suppliers to our
            integrated supply chain, enabling us to reduce inventory waste and
            deliver quality products at affordable prices to customers around
            the world. We have operations in Mashhad, along with other key
            global markets.
          </p>
        </span>
        <img alt="" src={Armitaj} className="grayscale hover:grayscale-0"></img>
      </div>

      <div className="grid grid-cols-2 justify-end self-center p-5">
        <img
          alt=""
          src={commericalBrand}
          className=" grayscale hover:grayscale-0"
        />
        <span className="text-center leading-6 text-[#0a0909] ">
          <h1>Our Brand</h1>
          <p className=" px-7 py-5">
            CHI BEPOSHAM is a global fashion and lifestyle e-tailer committed to
            making the beauty of fashion accessible to everyone. We use
            on-demand manufacturing technology to connect suppliers to our
            integrated supply chain, enabling us to reduce inventory waste and
            deliver quality products at affordable prices to customers around
            the world. We have operations in Mashhad, along with other key
            global markets.
          </p>
        </span>
      </div>

      <div className="grid  justify-end self-center ">
        <div className="grid grid-cols-2	">
          <span>
            <img
              alt=""
              src={aboutBrand1}
              className=" grayscale hover:grayscale-0 px-5"
            />
          </span>
          <span>
            <img
              alt=""
              src={aboutBrand3}
              className=" grayscale hover:grayscale-0 px-5"
            />
          </span>
        </div>
        <span className="">
          <img
            alt=""
            src={aboutBrand2}
            className=" grayscale hover:grayscale-0 w-screen p-5"
          />
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default AboutPage;
