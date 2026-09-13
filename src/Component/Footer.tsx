const Footer = () => {
  return (
    <><hr className="border-t border-gray-200 my-6" />
      <footer className="container mx-auto bg-white text-gray-600 font-sans ">
      <div className=" mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          
          <div className="md:col-span-5 space-y-4 pr-0 md:pr-12">
            <div className="flex items-center gap-2.5">
              <div className="mobile-brand-icon w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-sm">
                DS
              </div>
              <span className=" text-lg font-bold ">
                Dev <span className="brand-text">Stack</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs font-semibold ">
              <span>GitHub</span>
              <span>Twitter</span>
              <span>LinkedIn</span>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2 md:pt-0">
            <div className="space-y-3">
              <p className="text-xs font-bold ">PRODUCT</p>
              <ul className="flex flex-col gap-2 text-xs text-gray-400">
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold ">COMPANY</p>
              <ul className="flex flex-col gap-2 text-xs text-gray-400">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold  ">LEGAL</p>
              <ul className="flex flex-col gap-2 text-xs text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>

      </div>
    </footer>
    </>
  );
}
export default Footer;
