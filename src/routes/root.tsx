import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";

const RootLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet /> {/* children kısmı */}
    </>
  )
}

export default RootLayout