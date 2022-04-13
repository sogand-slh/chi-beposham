import React from "react";

const ContactPage = () => {
  const handleSubmit = () => {};
  return (
    <div className="flex w-full bg-[url('/src/assets/images/armitaj-map.webp')] justify-between h-screen bg-cover bg-no-repeat p-5">
      <div className="flex flex-row self-center justify-center ">
        <div className="flex w-[400px] h-[420px] flex-col  ml-10 p-5 self-center bg-darkColor text-lightColor">
          <span className="flex justify-center font-medium text-2xl">
            <h1>Contact us</h1>
          </span>
          <span className="w-full my-2">
            <label>Name</label>
            <input className="bg-inputColor w-full " />
          </span>
          <span className="w-full my-2">
            <label>Email</label>
            <input className="bg-inputColor w-full " />
          </span>
          <span className="w-full my-2">
            <label>Phone</label>
            <input className="bg-inputColor w-full " />
          </span>
          <span className="w-full my-2">
            <label>Message</label>
            <textarea className="bg-inputColor w-full " />
          </span>
          <span className="w-full my-2">
            <button
              className="bg-inputColor w-full p-1 hover:bg-[#353131]"
              type="button"
              name="submit"
              onClick={() => handleSubmit()}>
              Send
            </button>
          </span>
        </div>
        <div className="flex w-[350px] h-[350px] flex-col   p-5 self-center bg-inputColor text-lightColor">
          <span>
            <h1 className="text-lg font-medium text-center">Contact Info</h1>
          </span>
          <div className="flex flex-col  p-2 ">
            <span className="flex flex-row p-2">
              <p className="text-lg ">Address:</p>
              <p className="text-base pl-2">
                Vakil Abad Avenue, Haft Tir Armitaj Tower
              </p>
            </span>
            <span className="flex flex-row p-2">
              <h1 className="text-lg ">Phone:</h1>
              <h1 className="text-base pl-2">0915-987-6543</h1>
            </span>
            <span className="flex flex-row p-2">
              <h1 className="text-lg ">Email:</h1>
              <h1 className="text-base pl-2">Chi-beposham@info.com</h1>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[65px] h-[65px] justify-center place-self-center mr-10 mb-40 rounded-full shadow-xl bg-thirdColor  z-2">
        <span
          className="flex flex-col w-[65px] h-[65px] justify-center self-center rounded-full 
        bg-fourthColor z-30 ">
          <span className="flex flex-col justify-center self-center mx-auto rounded-full w-[45px] h-[45px] duration-1000 bg-inputColor text-primary z-40">
            {" "}
            <i class="fa-solid fa-location-dot flex flex-col justify-center self-center duration-100	animate-pulse " />
          </span>
        </span>
      </div>
    </div>
  );
};

export default ContactPage;
