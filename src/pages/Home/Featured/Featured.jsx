import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
   return (
      <div style={{ backgroundImage: `url(${featuredImg})` }} className="relative mb-32 bg-cover py-32 bg-center bg-fixed">
         <div className="bg-[#151515B3] absolute left-0 right-0 top-0 bottom-0">
         </div>
         <div className="container text-white relative z-40">
            <SectionTitle headingColor={'white'} subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>

            <div className="md:flex gap-16">
               <div><img src={featuredImg} alt="" /></div>
               <div>
                  <span>March 20, 2023</span>
                  <h4 className="uppercase">WHERE CAN I GET SOME?</h4>
                  <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                  <button className="btn btn-outline text-white border-0 border-b-2 border-white">Read More</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Featured;