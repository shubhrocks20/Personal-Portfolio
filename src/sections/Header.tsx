export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10 px-2 sm:px-0">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur overflow-x-auto max-w-full">
        <a href="#heroPage" className="nav-item ">
          Home
        </a>
        <a href="#projectPage" className="nav-item">
          Projects
        </a>
        <a href="#aboutPage" className="nav-item">
          About
        </a>
        <a href="#leetcodeStats" className="nav-item">
          LeetCode
        </a>
        <a href="#contactPage" className="nav-item ">
          Contact
        </a>
      </nav>
    </div>
  );
};
