"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SiGmail } from "react-icons/si";
import { GiMailbox } from "react-icons/gi";
import { BiPhoneIncoming } from "react-icons/bi";
import { PiNavigationArrow } from "react-icons/pi";

export const ContactMeConponent = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_1whz25g", "contact_form", form.current, {
        publicKey: "yjJnnntJShudW7SLX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="my-4 dark:bg-transparent dark:text-white" id="contact">
      <div className="mx-auto text-center">
        <h6 className="text-xs font-semibold">Get in touch</h6>
        <h2 className="text-4xl font-bold">Contact me</h2>
      </div>
      <hr className="mx-auto md:mx-16" />
      <div className="flex flex-col md:flex-row gap-1">
        <form className="w-[90%] md:w-2/3 mx-4" ref={form} onSubmit={sendEmail}>
          <div className="flex justify-center items-center my-8">
            <div className="flex flex-col w-[90%] md:w-[65%] gap-2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                placeholder="Please enter your email"
                id="email"
                className="p-2 w-full rounded-md border dark:bg-white dark:text-black"
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-8">
            <div className="flex flex-col w-[90%] md:w-[65%] gap-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                placeholder="Please enter your Phone Number"
                id="phone"
                className="p-2 w-full rounded-md border dark:bg-white dark:text-black"
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-2">
            <div className="flex flex-col w-[90%] md:w-[65%] gap-2">
              <label htmlFor="topic">Choose a topic</label>
              <select
                name="topic"
                id="topic"
                className="p-3 w-full border rounded-md bg-white dark:bg-white dark:text-black"
              >
                <option value="">Please select a topic</option>
                <option value="consultant">Consultant</option>
                <option value="wp-website">Wordpress Website</option>
                <option value="web-app">Web Application</option>
                <option value="design">Maquette and Design</option>
                <option value="hire">Hire me</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center my-4">
            <div className="flex flex-col w-[90%] md:w-[65%] gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="w-full p-4 border dark:bg-white dark:text-black"
                placeholder="Type your message"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center items-center my-4">
            <div className="flex items-center justify-center w-[65%] gap-2">
              <button className="p-4 bg-black dark:bg-transparent dark:hover:ring-1 dark:ring-white rounded-lg text-white w-full md:w-1/4">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-col space-y-4 justify-center items-center content-center font-semibold">
          <div className="flex gap-2 items-center justify-center">
            <GiMailbox />
            <p className="font-normal text-gray-600 dark:text-white">
              bouba0178@gmail.com
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <BiPhoneIncoming />
            <p className="font-normal text-gray-600 dark:text-white">
              +221 77 422 35 21
            </p>
          </div>
          <div className="flex gap-2 space-x-6 items-center justify-center">
            <PiNavigationArrow />
            <p className="font-normal text-gray-600 dark:text-white">
              Dakar, Sénégal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
