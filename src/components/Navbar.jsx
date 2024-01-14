import Logo from "../assets/logo.png"
function Navbar() {
  return (
    <div className="fixed top-0 right-0 w-full z-[60] bg-black/10 backdrop-blur-sm py-4 sm:py-4">
        <div className="container ">
          <div className="flex justify-between items-center">
            <div className="flex text-white items-center gap-4 font-bold text-2xl ">
              <img src={Logo} alt="logo" className="w-32" />
              <span>COZY_SPACE</span>
            </div>
            <div className="text-white">
              <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
                <li> <a href="#">About</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Galaxy</a></li>
                <li><a href="#">Satellite</a></li>
              </ul>
            </div>
            <div>
              <button className="border-white border text-white px-3 py-1 rounded-md ">Login</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar