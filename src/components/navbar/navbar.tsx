import React, { useEffect, useRef, useState } from "react";
import useChangeTitle from "../../customHooks/useChangeTitle";
import "./navbar.sass";
function Navbar({
  inSpanish,
  setInSpanish,
  theme,
  setTheme,
}: {
  inSpanish: boolean;
  setInSpanish: any;
  theme: any;
  setTheme: any;
}) {
  const navbarRef: any = useRef();
  const titleRef: any = useRef();
  const previusNavTitle = useChangeTitle(
    ["Home", "About", "Skills", "Experience"],
    inSpanish
  );
  const [navTitle, setNavTitle] = useState("Home");

  useEffect(() => {
    const navOffset = navbarRef.current.offsetTop;
    //add scroll event
    const handleScroll = () => {
      if (window.pageYOffset >= navOffset) {
        navbarRef.current.classList.add("sticky");
      } else {
        navbarRef.current.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    //remove scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //animation when title changes
  useEffect(() => {
    const title: HTMLDivElement = titleRef.current;
    title.classList.add("outsideScreen");
    setTimeout(() => {
      title.classList.remove("outsideScreen");
      setNavTitle(previusNavTitle);
    }, 500);
  }, [previusNavTitle]);
  return (
    <nav ref={navbarRef} className="d-flex justify-content-between w-100">
      <div>
        <h2 ref={titleRef} className="text-serif2 m-0 fw-bold">
          {navTitle}
        </h2>
      </div>
      <div className="d-flex">
        <div
          className="language my-auto fs-5 cursor-pointer"
          data-aos-offset="0"
          data-aos="fade-left"
          daos-aos-delay="800"
          onClick={() => {
            setInSpanish((previous: boolean) => !previous);
          }}
        >
          {inSpanish ? "English" : "Español"}
        </div>
        {theme === "dark" ? (
          <i
            className="fas fa-moon cursor-pointer theme fs-2"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-offset="0"
            onClick={() => {
              setTheme("light");
            }}
          ></i>
        ) : (
          <i
            className="fas fa-sun cursor-pointer theme fs-2"
            onClick={() => {
              setTheme("dark");
            }}
          ></i>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
