const MenuItem = ({item}) => {
   const {name, image, recipe, price} = item

   return (
      <div className="flex">
         <img style={{borderRadius: "0px 200px 200px 200px"}} className="w-[100px] mr-8" src={image} alt="" />
         <div>
            <h3 className="text-xl font-cinzel text-[#151515] uppercase">{name}------------------</h3>
            <p className="text-base text-[#737373]">{recipe}</p>
         </div>
         <p className="text-xl text-[#BB8506]">${price}</p>
      </div>
   );
};

export default MenuItem;