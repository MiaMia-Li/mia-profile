"use client";

import Experience from "../../components/Experience";
import { Divider, Image } from "@nextui-org/react";
import { SOCIAL_MEDIA } from "@/config";
import Link from "next/link";
import { RiMailSendLine } from "react-icons/ri";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden sm:mt-32 mt-16">
      <div className="mb-10 md:mb-24 flex flex-col md:flex-row md:gap-12 md:items-start">
        <div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-default-800 mb-6 md:mb-12 md:max-w-[50%]">
            I’m Mia, Seeking new adventures.
          </h2>
          <p className="mb-4 md:mb-10 md:text-medium text-default-600">
            I am a seasoned Software Engineer with over five years of experience
            at big internet companies. My expertise lies in full-stack
            development with a strong focus on front-end technologies such as
            React, Vue, and TypeScript.
          </p>
          <p className="mb-4 md:mb-10 md:text-medium text-default-600">
            Currently residing in Singapore, developing independently, and
            actively seeking job opportunities after resigning from a position
            in China.
          </p>
          {/* <p className="md:text-medium"> 👉My good friend, a cat named Oreo.</p> */}
        </div>
        <div className="flex-auto">
          <Image
            isZoomed
            shadow="md"
            src="/oreo.jpg"
            alt="Oreo"
            width="auto"
            height="auto"
            className="hidden sm:block"
          />
          <div className="mb-3 flex flex-col gap-6 mt-10">
            {SOCIAL_MEDIA.filter((item) =>
              ["github", "twitter", "linkedin"].includes(item.id)
            ).map((social) => {
              const IconComponent = social.svg;
              return (
                <Link
                  className="flex items-center font-semibold gap-2 text-default-600 hover:text-danger text-sm"
                  key={social.id}
                  href={social.href}
                  title={social.description}
                  target="_blank"
                  rel="noopener noreferrer">
                  <IconComponent style={{ width: 20, height: 20 }} />
                  {social.description}
                </Link>
              );
            })}
            <Divider />
            <a
              href={`mailto:sept.miamia@gmail.com`}
              className="flex gap-2 items-center text-default-600 font-semibold hover:text-danger text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 64 64">
                <path
                  fill="#7bbeeb"
                  d="M7,51V13c0-3.31,2.69-6,6-6h38c3.31,0,6,2.69,6,6v38c0,3.31-2.69,6-6,6H13C9.69,57,7,54.31,7,51z"></path>
                <rect width="50" height="16" x="7" y="36" fill="#ace3ff"></rect>
                <rect width="50" height="14" x="7" y="22" fill="#85cbf8"></rect>
                <path
                  fill="#e3f2ff"
                  d="M11,57h42c2.209,0,4-1.791,4-4l0,0c0-1.657-1.343-3-3-3H10c-1.657,0-3,1.343-3,3l0,0	C7,55.209,8.791,57,11,57z"></path>
                <path
                  fill="#8d6c9f"
                  d="M51,58H13c-3.859,0-7-3.141-7-7V13c0-3.859,3.141-7,7-7h38c3.859,0,7,3.141,7,7v38	C58,54.859,54.859,58,51,58z M13,8c-2.757,0-5,2.243-5,5v38c0,2.757,2.243,5,5,5h38c2.757,0,5-2.243,5-5V13c0-2.757-2.243-5-5-5H13z"></path>
                <path
                  fill="#8d6c9f"
                  d="M47,48c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C48,48.448,47.552,48,47,48z M52,52c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2C51,51.552,51.448,52,52,52z M32,48c-0.552,0-1,0.448-1,1v2	c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C33,48.448,32.552,48,32,48z M27,48c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2	C28,48.448,27.552,48,27,48z M22,48c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C23,48.448,22.552,48,22,48z M17,48	c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C18,48.448,17.552,48,17,48z M12,52c0.552,0,1-0.448,1-1v-2	c0-0.552-0.448-1-1-1s-1,0.448-1,1v2C11,51.552,11.448,52,12,52z M42,48c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2	C43,48.448,42.552,48,42,48z M37,48c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C38,48.448,37.552,48,37,48z"></path>
                <path
                  fill="#fff8ee"
                  d="M48,40H16c-1.105,0-2-0.895-2-2V20c0-1.105,0.895-2,2-2h32c1.105,0,2,0.895,2,2v18	C50,39.105,49.105,40,48,40z"></path>
                <path
                  fill="#8d6c9f"
                  d="M48,41H16c-1.654,0-3-1.346-3-3V20c0-1.654,1.346-3,3-3h32c1.654,0,3,1.346,3,3v18	C51,39.654,49.654,41,48,41z M16,19c-0.552,0-1,0.448-1,1v18c0,0.552,0.448,1,1,1h32c0.552,0,1-0.448,1-1V20c0-0.552-0.448-1-1-1H16	z"></path>
                <path
                  fill="#8d6c9f"
                  d="M32,34.927c-1.536,0-3.072-0.585-4.242-1.755L14.293,19.707c-0.391-0.391-0.391-1.023,0-1.414	s1.023-0.391,1.414,0l13.465,13.465c1.559,1.559,4.098,1.559,5.656,0l13.465-13.465c0.391-0.391,1.023-0.391,1.414,0	s0.391,1.023,0,1.414L36.242,33.172C35.072,34.342,33.536,34.927,32,34.927z"></path>
                <path
                  fill="#8d6c9f"
                  d="M15,40c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l10-10	c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-10,10C15.512,39.902,15.256,40,15,40z"></path>
                <path
                  fill="#8d6c9f"
                  d="M49,40c-0.256,0-0.512-0.098-0.707-0.293l-10-10c-0.391-0.391-0.391-1.023,0-1.414	s1.023-0.391,1.414,0l10,10c0.391,0.391,0.391,1.023,0,1.414C49.512,39.902,49.256,40,49,40z"></path>
              </svg>
              <span>sept.miamia@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <Experience />
    </div>
  );
}
