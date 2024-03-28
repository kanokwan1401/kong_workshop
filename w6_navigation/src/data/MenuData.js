import { FaHouseChimney, FaUser, FaCartShopping } from "react-icons/fa6";


const MenuData = [
  {
    title: "หน้าแรก",
    path: "/",
    icon: <FaHouseChimney style={{ color: 'plum' }} />
  },
  {
    title: "สมาชิก",
    path: "/member",
    icon: <FaUser style={{ color: 'plum' }} />
  },
  {
    title: "สินค้า",
    path: "/product",
    icon: <FaCartShopping style={{ color: 'plum' }} />
  }
]

export default MenuData