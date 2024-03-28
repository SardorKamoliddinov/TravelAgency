import { MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full h-20">
        <div className="flex justify-center items-center gap-2 text-2xl">
          <MapPinned />
          <h2>Mascan Travel</h2>
        </div>
        <ul className="flex justify-center items-center gap-5 text-2xl">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Trips</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
        </ul>
        <div>
          <Button className="bg-[#1F4AA8] text-white rounded-xl">
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
