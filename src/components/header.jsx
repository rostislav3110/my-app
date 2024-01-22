import React, { createRef, useState } from "react";
import s from "../style/header.module.css";
import Navigation from "./navigation";
function Header() {
  const [inputValue, setInputValue] = useState("");

  const searchInput = createRef();

  function onFormBtnClick(e) {
    e.preventDefault();
    localStorage.setItem("search", JSON.stringify(inputValue))
    console.log(searchInput.current.value);
  }

  function searchInputChange(e) {
    setInputValue(searchInput.current.value);
  }

  return (
    // <div className={s.frame}>
    //   <div className={s.div}>
    //     <form className={s.div2}>
    //       <div className={s.textWrapper}>Serach any things</div>
    //       <div className={s.divWrapper}>
    //         <input
    //           className={s.textWrapper2}
    //           placeholder="Search"
    //           ref={searchInput}
    //           value={inputValue}
    //           onChange={searchInputChange}
    //         />
    //         <button type="submit" onClick={onFormBtnClick}>
    //           Search
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <header className={s.header}>
      <div className={s.logo}>Himers</div>
      <Navigation/>
    </header>
  );
}

export default Header;
