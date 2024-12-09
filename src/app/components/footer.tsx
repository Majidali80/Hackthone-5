import React from "react";

export default function footer() {
  return (
    <footer className="w-[1440px] h-[142px] bg-[#FAFAFA] text-[#252B42]">
      <div className="container mx-auto px-6 py-10">
  {/* Top Section */}
  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <h2 className="text-2xl font-bold ml-28">Bandage</h2>
    <div className="flex ml-auto space-x-8 mr-72"> {/* Flex container for icons */}
      <img
        src="./Footer/fb.png"
        alt="Facebook"
        className="h-[24px] w-[24px]"
      />
      <img
        src="./Footer/ins.png"
        alt="Instagram"
        className="h-[24px] w-[24px]"
      />
      <img
        src="./Footer/tw.png"
        alt="Twitter"
        className="h-[24px] w-[24px]"
      />
    </div>
  </div>


        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mt-28">
              
          {/* Company Info */}
          <div className="w-[1440px] h-[272px] ml-28">
            <h3 className="font-semibold text-[#252B42]">Company Info</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-[#737373]">About Us</a></li>
              <li><a href="#" className="text-[#737373]">Carrier</a></li>
              <li><a href="#" className="text-[#737373]">We are hiring</a></li>
              <li><a href="#" className="text-[#737373]">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[#252B42]">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-[#737373]">Privacy Policy</a></li>
              <li><a href="#" className="text-[#737373]">Terms of Service</a></li>
              <li><a href="#" className="text-[#737373]">Licenses</a></li>
              <li><a href="#" className="text-[#737373]">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-[#252B42]">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-[#737373]">Business Marketing</a></li>
              <li><a href="#" className="text-[#737373]">User Analytics</a></li>
              <li><a href="#" className="text-[#737373]">Live Chat</a></li>
              <li><a href="#" className="text-[#737373]">Unlimited Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#252B42]">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-[#737373]">IOS Andriod</a></li>
              <li><a href="#" className="text-[#737373]">Watch a Demo</a></li>
              <li><a href="#" className="text-[#737373]">Customer</a></li>
              <li><a href="#" className="text-[#737373]">API</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-800">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex">
              <input
  type="email"
  id="email"
  name="email"
  placeholder="Your Email"
  className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
  autoComplete="email"
/>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Lore ipsum dolor sit amet.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-[1440px] h-[74px] mr-28 mt-10 border-t pt-4 text-left text-sm bg-[#FAFAFA] text-[#737373] ">
          <div className="ml-28">
          Made With Love By Finland | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

