"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactMeConponent = () => {
  // const form = useRef();

  // const sendEmail = (e: React.ChangeEvent<HTMLElement>): void => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_1whz25g", "contact_form", form.current, {
  //       publicKey: "yjJnnntJShudW7SLX",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };
  return (
    <div className="my-4">
      <div className="mx-auto text-center">
        <h6 className="text-xs font-semibold">Get in touch</h6>
        <h2 className="text-4xl font-bold">Contact me</h2>
      </div>
      <hr className="mx-16" />
      <div>
        <form className="">
          <div className="flex justify-center items-center my-8">
            <div className="flex flex-col w-[65%] gap-2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                placeholder="Please enter your email"
                id="email"
                className="p-2 w-full rounded-md border"
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-8">
            <div className="flex flex-col w-[65%] gap-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                placeholder="Please enter your Phone Number"
                id="phone"
                className="p-2 w-full rounded-md border"
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-2">
            <div className="flex flex-col w-[65%] gap-2">
              <label htmlFor="topic">Choose a topic</label>
              <select
                name="topic"
                id="topic"
                className="p-3 w-full border rounded-md bg-white"
              >
                <option value="">Please select a topic</option>
                <option value="consultant">Consultat</option>
                <option value="wp-website">Wordpress Website</option>
                <option value="web-app">Web Application</option>
                <option value="design">Maquette and Design</option>
                <option value="hire">Hire me</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center my-4">
            <div className="flex flex-col w-[65%] gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="w-full p-4 border"
                placeholder="Type your message"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center items-center my-4">
            <div className="flex items-center justify-center w-[65%] gap-2">
              <button className="p-4 bg-black rounded-lg text-white w-1/4">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
