import Item from "./Item";
import { Categories,Contact,UnitedStates,Icons } from "./Menus";
import { IoChevronDown } from "react-icons/io5";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3   gap-6 sm:px-8 px-5 py-16 text-white ">
      <Item Links={Categories} title="Categories" />
      <Item Links={Contact} title="Contact" />
      <div className="flex items-center gap-1">
      <Item Links={UnitedStates} title="United States"  /><IoChevronDown/></div>
    </div>
  )
}

export default ItemsContainer