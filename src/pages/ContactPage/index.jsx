import React from "react";

const ContactPage = () => {
  const handleSubmit = () => {};
  return (
    <div className="flex w-full bg-[url('/src/assets/images/map.png')] justify-between h-screen bg-cover bg-no-repeat p-5">
      <div className="flex w-[400px] h-[420px] flex-col  ml-10 p-5 self-center bg-darkColor text-lightColor">
        <span className="flex justify-center font-medium text-lg	">
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
      <div className="flex w-[85px] h-[85px] justify-end place-self-center mr-10 mb-40 rounded-full	 bg-darkColor ">
        <span className=" w-[85px]">
          <span className="flex justify-center">
            <i class="fa-solid fa-location-dot  duration-1000 text-lightColor"></i>
          </span>
        </span>
      </div>
    </div>
  );
};

export default ContactPage;
