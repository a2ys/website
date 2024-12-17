import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:right-0 max-[1024px]:left-0 flex justify-between p-4 bg-white lg:bg-transparent z-10">
      <a
        href="/"
        className="text-xl font-bold tracking-wide text-black uppercase title"
        aria-current="page"
      >
        Aayush Shukla
      </a>
      <div>
        <a
          href="/"
          className={`header-link hidden min-[1024px]:inline-block text-l font-bold pr-4 tracking-wider text-black uppercase ${
            window.location.pathname === "/" ? "header-link-active" : ""
          }`}
        >
          Home
        </a>
        <a
          href="/work"
          className={`header-link hidden min-[1024px]:inline-block text-l font-bold pr-4 tracking-wider text-black uppercase ${
            window.location.pathname === "/work" ? "header-link-active" : ""
          }`}
        >
          Work
        </a>
        <a
          href="/about"
          className={`header-link hidden min-[1024px]:inline-block text-l font-bold tracking-wider text-black uppercase pr-4 ${
            window.location.pathname === "/about" ? "header-link-active" : ""
          }`}
        >
          About
        </a>
        <a
          href="https://blog.a2ys.dev"
          className="header-link hidden min-[1024px]:inline-block text-l font-bold tracking-wider text-black uppercase"
          target="_blank"
        >
          <span className="flex items-center">
            Blog{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-arrow-up-right"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
        <div className="relative flex items-center justify-center min-[1024px]:hidden">
          <button onClick={handleToggle} aria-label="Hamburger Menu Icon">
            {isMenuOpen ? (
              <svg className="feather">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg className="feather">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full right-8 z-10 flex w-auto flex-col justify-center rounded-md shadow-xl bg-blue-100 min-[1024px]:hidden">
            <div className="space-y-4 px-10 py-10 min-[1024px]:hidden">
              <a
                href="/"
                className={`block text-xl text-center ${
                  window.location.pathname === "/"
                    ? "font-semibold text-blue-600"
                    : "font-medium text-black"
                }`}
              >
                Home
              </a>
              <a
                href="/work"
                className={`block text-xl text-center ${
                  window.location.pathname === "/work"
                    ? "font-semibold text-blue-600"
                    : "font-medium text-black"
                }`}
              >
                Work
              </a>{" "}
              <a
                href="/about"
                className={`block text-xl text-center ${
                  window.location.pathname === "/about"
                    ? "font-semibold text-blue-600"
                    : "font-medium text-black"
                }`}
              >
                About
              </a>
              <a
                href="https://blog.a2ys.dev"
                className="block text-xl text-center font-medium text-black"
                target="_blank"
              >
                Blog
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
