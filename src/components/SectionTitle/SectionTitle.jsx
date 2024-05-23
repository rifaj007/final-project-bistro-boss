const SectionTitle = ({subHeading, heading}) => {
   return (
      <div className="text-center w-[425px] mx-auto mb-12">
         <p className="text-xl italic text-[#D99904] mb-4"> ---{subHeading}---</p>
         <h3 className="font-normal text-[#151515] text-[40px] border-y-4 border-[#E8E8E8] uppercase">{heading}</h3>
      </div>
   );
};

export default SectionTitle;