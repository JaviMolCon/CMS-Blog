import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col bg-secondary py-8 px-2 flex-wrap">
        <h1 className="text-3xl font-bold text-center">Get in touch!</h1>
        <div className="flex justify-center gap-4 md:gap-24 lg:gap-80 pt-12 flex-wrap">
          <div className="flex flex-col">
            <button className="btn btn-ghost mb-2">
              <img src="https://img.icons8.com/?size=48&id=F3xtAhNVEV8c&format=png"></img>
            </button>
            <p className="font-bold">XYZ Straße,</p>
            <p className="font-bold">Berlin</p>
            <p className="font-bold">Germany</p>
          </div>
          <div className="flex flex-col">
            <button className="btn btn-ghost mb-2">
              <img src="https://img.icons8.com/?size=50&id=2olGSGqpqGWD&format=png"></img>
            </button>
            <p className="font-bold">+49 123456788</p>
          </div>
          <div className="flex flex-col">
            <button className="btn btn-ghost mb-2">
              <img src="https://img.icons8.com/?size=48&id=SaUMpeyy7rHl&format=png"></img>
            </button>
            <p className="font-bold">xyz@gmail.com</p>
          </div>
        </div>
        {/* <div className="divider"></div> */}
      </div>
    </div>
  );
};

export default Contact;
