"use client";
import Image from "next/image";

import PageBanner from "../../components/layout/PageBanner";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/common/ContactForm";

function Page() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Reach Out to Us"
        bgImage="/assets/images/banner/bnr4.png"
      />
      
      <section className="main-banner overflow-hidden lg:pt-36.25 pt-27.25 lg:pb-23.75 sm:pb-12.5 z-0 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-light before:h-full before:w-[44%] before:-z-1 lg:before:block before:hidden">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-5">
            <div className="lg:col-span-6 col-span-12 mb-10">
              <div
                className="lg:w-[50vw] w-full lg:float-right relative lg:mb-25 mb-7.5 lg:pe-12.5 wow clip-right-animation"
                data-wow-delay="1s"
              >
                <Image
                  src="/assets/images/about/img13.png"
                  alt="Contact Us"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <ContactInfo />
            </div>
            
            <div className="lg:col-span-6 col-span-12">
              <div className="xl:pt-12.5 2xl:ps-5">
                <div className="xl:mb-12.5 mb-5">
                  <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium lg:mb-7.5 mb-4 headline">
                    <span className="lg:block">Get In Touch</span> & Fill Up The Form
                  </h2>
                  <p className="lg:text-xl text-xl font-light">
                    Have questions or need assistance planning your perfect getaway? Reach out to us today, and let our travel experts create unforgettable experiences tailored just for you!
                  </p>
                </div>
                <ContactForm inputBgColor="bg-[#f2efea]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;

