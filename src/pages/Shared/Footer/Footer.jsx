import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {

   const today = new Date()
   const year = today.getFullYear();

   return (
      <div>
         <footer className="text-white">
            <div className="flex flex-col md:flex-row md:h-[300px] lg:h-[400px] text-center text-base lg:text-lg xl:text-xl">
               <div className="bg-[#1F2937] py-16 md:w-1/2 md:pr-12 lg:pr-24 xl:pr-40 md:flex items-center justify-end">
                  <div>
                     <h2 className="text-2xl lg:text-[32px] mb-4 lg:mb-6">CONTACT US</h2>
                     <ul className="leading-8 lg:leading-9">
                        <li>123 ABS Street, Uni 21, Bangladesh</li>
                        <li>+88 123456789</li>
                        <li>Mon - Fri: 08:00 - 22:00</li>
                        <li>Sat - Sun: 10:00 - 23:00</li>
                     </ul>
                  </div>
               </div>

               <div className="bg-[#111827] py-16 md:w-1/2 md:pl-12 lg:pl-24 xl:pl-40 md:flex items-center justify-start ">
                  <div>
                     <h2 className="text-2xl lg:text-[32px] mb-4 lg:mb-6">Follow US</h2>
                     <ul className="mb-6 lg:mb-8">
                        <li>Join us on social media</li>
                     </ul>
                     <ul className="flex gap-8 justify-center text-4xl">
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="bg-[#151515]  py-5 text-center">
               <p className="text-base lg:text-lg xl:text-xl">Copyright © {year} - CulinaryCloud. All rights reserved.</p>
            </div>
         </footer>
      </div>
   );
};

export default Footer;