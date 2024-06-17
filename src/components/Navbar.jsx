
import fui from "../images/brand_logo.png"
function Navbar() {
  return (
    
    <div  className=" mt-2 h-20 font-bold  flex-wrap flex  justify-evenly sm:justify-between items-center w-4/5 mx-auto " >

    <div>

      <img src={fui} alt="yeah" />
    </div>



    <ul className="flex text-sm space-x-5  sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl" >
        <li><a href="#">Menu</a></li>
        <li><a href="#">Price$</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>






    <div>
      <button className="bg-red-500 hover:bg-sky-700  text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl   px-3 py-1 text-white "
      >Login</button>
    </div>





  </div>


  )
}

export default Navbar