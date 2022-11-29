import Link from "next/link";
import React from "react";
import HeaderLogo from "../HeaderLogo";

function Index() {
  return (
    <div className=" bg-black text-white h-auto ">
      <div className="grid md:grid-cols-3 text-center pt-6 md:pt-16 md:pb-8 divide-y-2 md:divide-y-0">
        <div className="md:mx-16 mx-8 md:text-left text-center pb-6 md:pb-0">
          <div className="flex text-xl items-center">
            <HeaderLogo />
            <p className="text-xl font-semibold">ANIMAL SHELTER</p>
          </div>
          <div className="text-left text-xs tracking-widest pt-8">
            One of the best animal shelter places in India. We’re recognized by
            the government. Please take a pledge to take care of these lovely
            pets !
          </div>
          <Link href="/adopt">
            <button className="bg-[#FF6584] mt-8 text-white font-semibold md:py-2 md:px-4 px-24 py-4 rounded">
              {"Adopt"}
            </button>
          </Link>
        </div>
        <div className="md:mx-16 mx-8 text-left  pb-6 md:pb-0">
          <div className="flex text-xl items-center ">
            <p className="text-xl font-semibold pt-0 md:pt-7">GET IN TOUCH</p>
          </div>
          <div className="text-left flex gap-x-2 text-xs tracking-widest pt-8">
            <div>ICON</div>
            <div>
              One of the best animal shelter places in India. We’re recognized
              by the government. Please take a pledge to take care of these
              lovely pets !
            </div>
          </div>
          <div className="text-left flex gap-x-2 text-xs tracking-widest pt-8">
            <div>ICON</div>
            <div>
              One of the best animal shelter places in India. We’re recognized
              by the government. Please take a pledge to take care of these
              lovely pets !
            </div>
          </div>
          <div className="flex text-xl items-center  ">
            <p className="text-lg font-semibold pt-0 md:pt-7">Follow Us</p>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="p-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4491 20.4495H16.8931V14.8805C16.8931 13.5525 16.8694 11.843 15.0436 11.843C13.1915 11.843 12.9081 13.2899 12.9081 14.7838V20.4492H9.35204V8.99694H12.7658V10.562H12.8136C13.5097 9.3718 14.804 8.66093 16.1819 8.71208C19.7861 8.71208 20.4506 11.0828 20.4506 14.167L20.4491 20.4495ZM5.33963 7.4315C4.19992 7.43171 3.27584 6.50794 3.27564 5.36821C3.27544 4.22848 4.19918 3.30438 5.33889 3.30417C6.4786 3.30397 7.40268 4.22774 7.40288 5.36747C7.40298 5.91478 7.18566 6.43973 6.79872 6.82681C6.41179 7.21389 5.88694 7.4314 5.33963 7.4315ZM7.11765 20.4495H3.5579V8.99694H7.11765V20.4495ZM22.222 0.00178957H1.77099C0.804431 -0.00911825 0.0117963 0.765131 0 1.7317V22.268C0.0113924 23.235 0.803963 24.01 1.77099 23.9999H22.222C23.1909 24.0119 23.9866 23.2369 24 22.268V1.73022C23.9862 0.761739 23.1904 -0.0124652 22.222 0.000152051"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="p-4">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.543 5.35447C21.5576 5.56604 21.5576 5.7776 21.5576 5.99111C21.5576 12.4969 16.6045 20 7.54759 20V19.9961C4.87215 20 2.25229 19.2337 0 17.7888C0.389031 17.8356 0.780012 17.859 1.17197 17.86C3.38915 17.862 5.54296 17.1181 7.28726 15.7483C5.18026 15.7083 3.3326 14.3346 2.68714 12.3292C3.42523 12.4715 4.18574 12.4423 4.91018 12.2444C2.61304 11.7803 0.96039 9.76217 0.96039 7.41842C0.96039 7.39697 0.96039 7.3765 0.96039 7.35602C1.64485 7.73722 2.41121 7.94879 3.19512 7.97218C1.03157 6.52635 0.364656 3.64833 1.67118 1.39817C4.17111 4.47411 7.8596 6.34404 11.8191 6.54195C11.4223 4.83191 11.9644 3.03997 13.2436 1.83787C15.2268 -0.026211 18.3459 0.069333 20.2101 2.05138C21.3129 1.83397 22.3698 1.42937 23.337 0.856108C22.9694 1.99581 22.2001 2.96393 21.1725 3.57911C22.1484 3.46407 23.102 3.20279 24 2.80404C23.3389 3.79457 22.5063 4.65739 21.543 5.35447Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="p-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
                  fill="#444444"
                />
                <path
                  d="M12 6.09729C13.9225 6.09729 14.1502 6.10464 14.9094 6.13928C15.6114 6.17129 15.9926 6.28858 16.2464 6.38718C16.5824 6.51779 16.8223 6.67381 17.0742 6.92575C17.3262 7.17771 17.4822 7.41756 17.6128 7.75364C17.7114 8.00734 17.8287 8.38858 17.8607 9.09057C17.8954 9.84978 17.9027 10.0775 17.9027 12C17.9027 13.9224 17.8954 14.1502 17.8607 14.9094C17.8287 15.6114 17.7114 15.9926 17.6128 16.2463C17.4822 16.5824 17.3262 16.8222 17.0742 17.0742C16.8223 17.3261 16.5824 17.4822 16.2464 17.6128C15.9926 17.7114 15.6114 17.8287 14.9094 17.8607C14.1503 17.8953 13.9226 17.9027 12 17.9027C10.0774 17.9027 9.84971 17.8953 9.09058 17.8607C8.38859 17.8287 8.00735 17.7114 7.75365 17.6128C7.41757 17.4822 7.17772 17.3261 6.92578 17.0742C6.67385 16.8222 6.5178 16.5824 6.38719 16.2463C6.28858 15.9926 6.17129 15.6114 6.13928 14.9094C6.10464 14.1502 6.0973 13.9224 6.0973 12C6.0973 10.0775 6.10464 9.84978 6.13928 9.09057C6.17129 8.38858 6.28858 8.00734 6.38719 7.75364C6.5178 7.41756 6.67382 7.17771 6.92578 6.92578C7.17772 6.67381 7.41757 6.51779 7.75365 6.38718C8.00735 6.28858 8.38859 6.17129 9.09058 6.13928C9.84979 6.10464 10.0775 6.09729 12 6.09729ZM12 4.8C10.0446 4.8 9.79941 4.80829 9.03145 4.84333C8.26509 4.87828 7.7417 5.00001 7.28373 5.17798C6.81026 5.36198 6.40874 5.60817 6.00844 6.00843C5.60817 6.40873 5.36198 6.81026 5.17801 7.28372C5.00001 7.74169 4.87828 8.26508 4.84333 9.03144C4.80829 9.79939 4.8 10.0446 4.8 12C4.8 13.9554 4.80829 14.2006 4.84333 14.9685C4.87828 15.7349 5.00001 16.2583 5.17801 16.7162C5.36198 17.1897 5.60817 17.5912 6.00844 17.9915C6.40874 18.3918 6.81026 18.638 7.28373 18.8219C7.7417 18.9999 8.26509 19.1217 9.03145 19.1566C9.79941 19.1917 10.0446 19.2 12 19.2C13.9554 19.2 14.2006 19.1917 14.9685 19.1566C15.7349 19.1217 16.2583 18.9999 16.7163 18.8219C17.1897 18.638 17.5913 18.3918 17.9916 17.9915C18.3918 17.5912 18.638 17.1897 18.822 16.7162C19 16.2583 19.1217 15.7349 19.1567 14.9685C19.1917 14.2006 19.2 13.9554 19.2 12C19.2 10.0446 19.1917 9.79939 19.1567 9.03144C19.1217 8.26508 19 7.74169 18.822 7.28372C18.638 6.81026 18.3918 6.40873 17.9916 6.00843C17.5913 5.60817 17.1897 5.36198 16.7163 5.17798C16.2583 5.00001 15.7349 4.87828 14.9685 4.84333C14.2006 4.80829 13.9554 4.8 12 4.8Z"
                  fill="white"
                />
                <path
                  d="M12.0033 8.30604C9.96136 8.30604 8.30604 9.96136 8.30604 12.0033C8.30604 14.0453 9.96136 15.7006 12.0033 15.7006C14.0453 15.7006 15.7006 14.0453 15.7006 12.0033C15.7006 9.96136 14.0453 8.30604 12.0033 8.30604ZM12.0033 14.4033C10.6778 14.4033 9.60333 13.3288 9.60333 12.0033C9.60333 10.6778 10.6778 9.60333 12.0033 9.60333C13.3288 9.60333 14.4033 10.6778 14.4033 12.0033C14.4033 13.3288 13.3288 14.4033 12.0033 14.4033Z"
                  fill="white"
                />
                <path
                  d="M16.7105 8.15769C16.7105 8.63484 16.3236 9.02167 15.8465 9.02167C15.3693 9.02167 14.9825 8.63484 14.9825 8.15769C14.9825 7.68051 15.3693 7.29367 15.8465 7.29367C16.3236 7.29367 16.7105 7.68051 16.7105 8.15769Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:mx-16 mx-8 text-left h-[60%] md:h-full pb-6 md:pb-0">
          <div className="flex text-xl items-center ">
            <p className="text-xl font-semibold pt-0 md:pt-7">QUICK LINKS</p>
          </div>
          <div className="text-left text-xs tracking-widest pt-8">HOME</div>
          <div className="text-left text-xs tracking-widest pt-8">
            CONTACT US
          </div>
        </div>
      </div>
      <div className="bg-white h-[1px] mx-16 "></div>
      <div className="flex flex-col md:flex-row md:justify-between mx-16 pb-6 md:pb-0">
        <div className="font-thin text-xs pt-8 text-gray-300">
          Copyright @2023. Animal Shelter
        </div>
        <div className="flex flex-row-reverse font-extralight text-sm text-white underline gap-x-8 pt-8">
          <div>Cookies Settings</div>
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
