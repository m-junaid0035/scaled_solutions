"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles/NavBar.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
// import { createSharedPathnamesNavigation } from "next-intl/navigation";
import Image from "next/image";
// import menuNavServices_Img_1 from "/menuNavServices_Img_1.svg";
// import menuNavServices_Img_2 from "/menuNavServices_Img_2.svg";
// import menuNavServices_Img_3 from "/public/menuNavServices_Img_3.svg";
// const locales = ["en", "fr"];
// const { Link, useRouter, usePathname, redirect } =
//   createSharedPathnamesNavigation({ locales });

function NavBar() {
  // const t = useTranslations("NavBar");
  // ------------------- State MenuServices ------------------- //
  const [menuServicesActive, setMenuServices] = useState(false);
  // ------------------- State MenuVentriloc ------------------- //
  const [menuVentrilocActive, setMenuVentriloc] = useState(false);
  // ------------------- State MenuContact ------------------- //
  const [menuContactActive, setMenuContact] = useState(false);
  // ------------------- State MenuHamburger ------------------- //
  const [menuHamburgerActive, setMenuHamburger] = useState(false);
  // ------------------- State MenuHamburger ------------------- //
  const [menuServicesInMenuActive, setMenuServicesInMenu] = useState(true);
  // ------------------- State MenuHamburger ------------------- //
  const [menuVentrilocInMenuActive, setMenuVentrilocInMenu] = useState(true);

  useEffect(() => {
  if (menuHamburgerActive) {
    document.body.style.overflow = "hidden"; // disable scroll
  } else {
    document.body.style.overflow = ""; // restore scroll
  }
}, [menuHamburgerActive]);



  useEffect(() => {
    // ------------------- heightMenuServices ------------------- //
    // var menuHamburgerOption_1 = document.querySelector(
    //   `.${styles.option_1} .${styles.body}`
    // );
    // var backGround = document.querySelector(
    //   `.${styles.option_1} .${styles.backGround} .${styles.contact}`
    // );

    // var heightMenuHamburgerOption_1 = menuHamburgerOption_1.offsetHeight;
    // backGround.style.top = heightMenuHamburgerOption_1 + "px";
    // ------------------- heightMenuServices ------------------- //
    var menuServices = document.querySelector(
      `.${styles.menuServices} .${styles.body}`
    );
    var backSection = document.querySelector(`.${styles.backSection}`);

    var heightMenuServices = menuServices.offsetHeight;
    backSection.style.height = 80 + heightMenuServices + "px";
    // // ------------------- heightMenuServicesInMenu ------------------- //
    // // ------------------- Button 1 ------------------- //
    const runCodeWhenBTN1Active = () => {
      const menuServicesInMenu = document.querySelector(
        `.${styles.menuServicesInMenu}`
      );
      const btn_1 = document.querySelector(
        `.${styles.option_1} .${styles.body} .${styles.btn}:nth-child(1)`
      );

      const heightMenuServicesInMenu = menuServicesInMenu.offsetHeight;
      btn_1.style.height = 27 + heightMenuServicesInMenu + "px";
    };

    const resetHeightBtn_1 = () => {
      const btn_1 = document.querySelector(
        `.${styles.option_1} .${styles.body} .${styles.btn}:nth-child(1)`
      );
      btn_1.style.height = "27px";
    };

    if (menuServicesInMenuActive) {
      runCodeWhenBTN1Active();
    } else {
      resetHeightBtn_1();
    }
    // // ------------------- Button 2 ------------------- //
    const runCodeWhenBTN2Active = () => {
      const menuVentrilocInMenuActive = document.querySelector(
        `.${styles.menuVentrilocInMenu}`
      );
      const btn_2 = document.querySelector(
        `.${styles.option_1} .${styles.body} .${styles.btn}:nth-child(2)`
      );

      const heightMenuVentrilocInMenu = menuVentrilocInMenuActive.offsetHeight;
      btn_2.style.height = 27 + heightMenuVentrilocInMenu + "px";
    };

    const resetHeightBtn_2 = () => {
      const btn_2 = document.querySelector(
        `.${styles.option_1} .${styles.body} .${styles.btn}:nth-child(2)`
      );
      btn_2.style.height = "27px";
    };

    if (menuVentrilocInMenuActive) {
      runCodeWhenBTN2Active();
    } else {
      resetHeightBtn_2();
    }
  }, [menuServicesInMenuActive, menuContactActive]);
 useEffect(() => {
    const handleScroll = () => {
      if (menuServicesActive) {
        setMenuServices(false); // close dropdown when scrolling
      }
       if (menuVentrilocActive) {
      setMenuVentriloc(false); // close dropdown when scrolling
    }
    if (menuContactActive) {
      setMenuContact(false); // close dropdown when scrolling
      
    }
   
    };
   

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuServicesActive, menuVentrilocActive, menuContactActive]);
 
  // ------------------- Active Menus ------------------- //
  const activateMenu = (menu) => {
    if (menu === "menuServices") {
      setMenuServices(!menuServicesActive); // تغيير حالة القائمة إلى الحالة المعاكسة
      setMenuVentriloc(false); // إغلاق القوائم الأخرى
      setMenuContact(false);
      setMenuHamburger(false);
    } else if (menu === "menuVentriloc") {
      setMenuVentriloc(!menuVentrilocActive); // تغيير حالة القائمة إلى الحالة المعاكسة
      setMenuServices(false); // إغلاق القوائم الأخرى
      setMenuContact(false);
      setMenuHamburger(false);
    } else if (menu === "menuContact") {
      setMenuContact(!menuContactActive); // تغيير حالة القائمة إلى الحالة المعاكسة
      setMenuServices(false); // إغلاق القوائم الأخرى
      setMenuVentriloc(false);
      setMenuHamburger(false);
    } else if (menu === "menuHamburger") {
      setMenuHamburger(!menuHamburgerActive); // تغيير حالة القائمة إلى الحالة المعاكسة
      setMenuServices(false); // إغلاق القوائم الأخرى
      setMenuVentriloc(false);
      setMenuContact(false);
    } else if (menu === "menuServicesInMenu") {
      setMenuServicesInMenu(!menuServicesInMenuActive); // تغيير حالة القائمة إلى الحالة المعاكسة
      setMenuServices(false); // إغلاق القوائم الأخرى
      setMenuVentriloc(false);
      setMenuContact(false);
    } else if (menu === "menuVentrilocInMenu") {
      setMenuVentrilocInMenu(!menuVentrilocInMenuActive); // تغيير حالة القائمة إلى الحالة المعاكسة
      setMenuServices(false); // إغلاق القوائم الأخرى
      setMenuVentriloc(false);
      setMenuContact(false);
    }
  };

  return (
    <>
      <nav className={styles.NavBar}>
        <div className={styles.logo}>
          <svg viewBox="0 0 1600 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <g>
    {/* <!-- Paste your full Ventriloc <path> block here --> */}
    <path d="M4.97098 11.7094L13.1789 35.888C13.3986 ..." fill="currentColor"></path>
    <path d="M54.7046 27.2527H32.9942C33.2138 ..." fill="currentColor"></path>
    {/* <!-- ... (all other path elements from your logo) ... --> */}
    <path d="M222.006 15.7621C221.728 15.624 ..." fill="currentColor"></path>
  </g>

  {/* <!-- This text will appear to the right of your logo --> */}
  <g>
    <text x="180" y="150" font-family="Ivar Display" font-size="150" fill="#CBCBCB">
      SCALED SOLUTIONS
    </text>
  </g>
</svg>
        </div>
        <div className={styles.links}>
          <button
            className={`${styles.link} ${
              menuServicesActive ? `${styles.active}` : ""
            }`}
            onClick={() => activateMenu("menuServices")}
          >
            Services
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
            </svg>
          </button>
          <button
            className={`${styles.link} ${
              menuVentrilocActive ? `${styles.active}` : ""
            }`}
            onClick={() => activateMenu("menuVentriloc")}
          >
            Scaled Solutions
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
            </svg>
          </button>
          <Link className={styles.link} href="">
            Our Cloud Accelerator
          </Link>
          <Link href="/" className={styles.link} locale="fr">
            Contact 
          </Link>
        </div>
        <div className={styles.btns}>
          <button
            className={`${styles.contactButton} ${
              menuContactActive ? `${styles.active}` : ""
            }`}
            onClick={() => activateMenu("menuContact")}
          >
            <span>Contact us</span>
            <span>Close</span>
          </button>
          <button
            className={`${styles.btnMenuHamburger} ${
              menuHamburgerActive ? `${styles.active}` : ""
            }`}
            onClick={() => activateMenu("menuHamburger")}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <menu
        className={`${styles.menuServices} ${
          menuServicesActive ? `${styles.active}` : ""
        }`}
        
        >
        <div className={styles.backSection}
        onMouseLeave={() => setMenuServices(false)} // close when mouse leaves
        >
          {/* <figure className={styles.figureSvg}>
            <svg
              width="243"
              height="526"
              viewBox="0 0 243 526"
              fill="#0B1C23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M86.8975 274.745C81.9629 272.26 76.1857 269.774 76.1857 262.92C76.1857 256.065 81.9629 253.58 86.8975 251.095C144.829 227.404 184.908 206.079 210.022 166.354C232.529 130.799 243 80.5315 243 0H134.679C139.614 73.5566 132.874 127.552 113.296 166.354C91.7519 209.125 54.4814 233.337 0 244.962V281.038C54.4814 292.663 91.7519 316.875 113.296 359.646C132.874 398.448 139.614 452.443 134.679 526H243C243 445.469 232.529 395.201 210.022 359.646C184.908 319.56 144.829 298.235 86.8975 274.745Z"
                fill="#0B1C23"
              ></path>
            </svg>
          </figure> */}
          <div ></div>
          <div style={{borderRadius:'1px white '}} className={styles.contact}>
            <h3>Let&apos;s work together</h3>
            <button>Make an appointment</button>
          </div>
        </div>
        <div className={styles.body} style={{backgroundColor: "#0B1C23"}}>
          <div className={styles.card} >
            <h3 className={styles.headText} >
              <span>
                <span>Clouds</span> Services
              </span>
              {/* <span>Power BI Experts</span> */}
            </h3>
          
                <div
      
      // className={styles.videoDiv}
    >
     <div>
  {/* <object 
    type="image/svg+xml" 
    data="/videos/cloud_f_transparent_optimized.webp" 
    width={150} 
    height={150} 
    aria-label="Logo"
  >
    Logo
  </object> */}

    <object
  type="image/svg+xml"
  data="/svgs/1.svg"
  className={styles.svgElementsp}
  aria-label="Animated SVG"
/>


</div>

    </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.headText}>
              <span>Integration</span> Services
            </h3>
           
           <div
      className={styles.videoDiv}
    >
   <object
  type="image/svg+xml"
  data="/svgs/3.svg"
  className={styles.svgElement}
  aria-label="Animated SVG"
/>


    </div>
          </div>
          <div className={styles.card} >
            <h3 className={styles.headText}>
              <span>Security</span> services
            </h3>
             
             <div
      
     className={styles.videoDiv}
    >
        <object
  type="image/svg+xml"
  data="/svgs/2.svg"
  className={styles.svgElement}
  aria-label="Animated SVG"
/>
    </div>
    </div>
          <div className={styles.card}>
            <h3 className={styles.headText} >
              <span id="yesboss" >Product</span> Development
            </h3>
       <div
     className={styles.videoDiv}
    >
      
      <object
  type="image/svg+xml"
  data="/svgs/4.svg"
  className={styles.svgElement}
  aria-label="Animated SVG"
/>

    </div>
        </div>
          {/* Duplicate card 2 */}
          {/* <div className={styles.card}>
            <h3 className={styles.headText}>
              <span>Security</span> Services
            </h3>
            <img src={menuNavServices_Img_1} alt="Data Integration" />
          </div> */}
        </div>
      </menu>
      <menu
        className={`${styles.menuVentriloc} ${
          menuVentrilocActive ? `${styles.active}` : ""
        }`}
        style={{border:'0px'}}

        // onMouseLeave={() => setMenuVentriloc(false)}
      >
        <div className={styles.body} style={{backgroundColor: "#0B1C23",border:"0px"}}
         onMouseLeave={() => setMenuVentriloc(false)}>
          <div className={styles.links}>
            <Link href="" className={styles.link}>
              <span>About</span>
            </Link>
            <Link href="" className={styles.link}>
              <span>Team</span>
            </Link>
            <Link href="" className={styles.link}>
              <span>Testimonials</span>
            </Link>
            
            <Link href="" className={styles.link}>
              <span>Blog</span>
            </Link>
          </div>
        </div>
      </menu>
      <menu
        className={`${styles.menuContact} ${
          menuContactActive ? `${styles.active}` : ""
        }`}

      >
        <div className={styles.body}
        onMouseLeave={() => setMenuContact(false)}
        // onMouseDown={() => setMenuContact(false)} // close when mouse leaves
        >
          <div className={styles.head}>
            <div className={styles.left}>
              <p style={{color:"white !important"}}>Contact form</p>
              <p>
                Every good partnership starts with coffee.
                <br /> Now lets make an appointment.
              </p>
            </div>
            <div className={styles.right}>
              <Link
                className={styles.link}
                href="https://www.linkedin.com/company/ventriloc"
              >
                LinkedIn
              </Link>
              <Link className={styles.link} href="mailto:info@ScaledSol.ca">
                info@ScaledSol.ca
              </Link>
              <Link className={styles.link} href="tel:18193453223">
                819-345-3223
              </Link>
            </div>
          </div>
          <form className={styles.form}>
            <div className={styles.top}>
              <div className={styles.left}>
                <input type="text" placeholder="Name*" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="Company" />
              </div>
              <div className={styles.right}>
                <input type="text" placeholder="First name*" />
                <input type="tel" placeholder="Phone" aria-invalid="false" />
                <input type="text" placeholder="I am looking for help for *" />
              </div>
            </div>
            <input type="text" placeholder="Message" />
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </menu>
      <menu
        className={`${styles.menuHamburger} ${
          menuHamburgerActive ? `${styles.active}` : ""
        }`}
        style={{backgroundColor:"#0B1C23 !important"}}
      >
        <div className={styles.option_1} >
          <div className={styles.body}>
            <button
              className={`${styles.btn}  ${
                menuServicesInMenuActive ? `${styles.active}` : ""
              }`}
              onClick={() => activateMenu("menuServicesInMenu")}
            >
              <div className={styles.head}>
                <span>services</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
                </svg>
              </div>
              <menu className={styles.menuServicesInMenu}>
               <div className={styles.card}>
                  <span>
                    <em>Cloud </em> Services
                  </span>
                    <object
  type="image/svg+xml"
  data="/svgs/1.svg"
  className={styles.svgElementMobile}
  aria-label="Animated SVG"
/>
                </div>
                   <div className={styles.card}>
                  <span>
                    <span>
                      <em>Integration</em> Services
                    </span>
                    {/* <span>Power BI Experts</span> */}
                  </span>
                  <object
  type="image/svg+xml"
  data="/svgs/3.svg"
  className={styles.svgElementMobile}
  aria-label="Animated SVG"
/>

                </div>
                 <div className={styles.card}>
                  <span>
                    <em>Security </em> Services
                  </span>
                    <object
  type="image/svg+xml"
  data="/svgs/2.svg"
  className={styles.svgElementMobile}
  aria-label="Animated SVG"
/>
                </div>
                <div className={styles.card}>
                  <span>
                    <em>Product </em>Development
                  </span>
                    <object
  type="image/svg+xml"
  data="/svgs/4.svg"
  className={styles.svgElementMobile}
  aria-label="Animated SVG"
/>
                </div>
             
               
               
                
              </menu>
            </button>
            <button
              className={`${styles.btn} ${
                menuVentrilocInMenuActive ? `${styles.active}` : ""
              }`}
              onClick={() => activateMenu("menuVentrilocInMenu")}
            >
              <div className={styles.head}>
                <span>Scaled Solutions</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
                </svg>
              </div>
              <menu className={styles.menuVentrilocInMenu}>
                <Link href="">About</Link>
                <Link href="">Clients</Link>
                <Link href="">Team</Link>
                <Link href="">Careers</Link>
                <Link href="">Blog</Link>
              </menu>
            </button>
            <Link className={styles.btn} href="">
              contact
            </Link>
            <Link className={styles.btn} href="">
              fr
            </Link>
            <div className={styles.contact}>
              <h3>Let&apos;s work together</h3>
              <button>Make an appointment</button>
            </div>
          </div>
          <div className={styles.backGround}>
            <svg
              width="243"
              height="526"
              viewBox="0 0 243 526"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M86.8975 274.745C81.9629 272.26 76.1857 269.774 76.1857 262.92C76.1857 256.065 81.9629 253.58 86.8975 251.095C144.829 227.404 184.908 206.079 210.022 166.354C232.529 130.799 243 80.5315 243 0H134.679C139.614 73.5566 132.874 127.552 113.296 166.354C91.7519 209.125 54.4814 233.337 0 244.962V281.038C54.4814 292.663 91.7519 316.875 113.296 359.646C132.874 398.448 139.614 452.443 134.679 526H243C243 445.469 232.529 395.201 210.022 359.646C184.908 319.56 144.829 298.235 86.8975 274.745Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </menu>
    </>
  );
}

export default NavBar;
