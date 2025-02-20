import React from "react";
import TypeMotor from "./typeMotor";
import NavMobileLayout from './navMobile/navMobileLayout'

function handleClickModels() {
  for (
    var i = 0;
    i < document.getElementsByClassName("motorType").length;
    i++
  ) {
    document
      .getElementsByClassName("motorType")
      [i].classList.remove("type-chosen");
  }
  // document.getElementsByClassName('motorType')[chosen].classList.add('type-chosen');
  this.classList.add("type-chosen");
}

function handleClickMenu(index) {
  console.log(index)
  for (
    var i = 0;
    i < document.getElementsByClassName("menu-list-item").length;
    i++
  ) {
    document
      .getElementsByClassName("menu-list-item")
      [i].classList.remove("type-chosen");
    document
      .getElementsByClassName("menu-list-item")
      [i].style.display="none";
  }
  // document.getElementsByClassName('menu-list-item')[chosen].classList.add('type-chosen');
  console.log(document.getElementsByClassName('menu-list-item')[index].classList.add("type-chosen"))
  document.getElementsByClassName('menu-list-item')[index].classList.add("type-chosen");
  document.getElementsByClassName('menu-list-item')[index].style.display="block";
  document.getElementById("menu-list-top").classList.add("closeBtChange");
  document.getElementsByClassName("fa-arrow-left")[index].style.display="inline-block";

}

function openMotorList() {
  document.getElementById("motor-list").style.width = "100v w";
  document.getElementById("motor-list").style.width = "100vw";
  document.getElementById("motor-list").style.opacity = "1";
  document.getElementsByClassName("motorList-container-left")[0].style.width =
    "40%";
  document.getElementsByClassName(
    "motorList-container-left"
  )[0].style.opacity = 1;
  for (
    var i = 0;
    i < document.getElementsByClassName("motorType").length;
    i++
  ) {
    document
      .getElementsByClassName("motorType")
      [i].classList.remove("type-chosen");
    document
      .getElementsByClassName("motorType")
      [i].addEventListener("click", handleClickModels, true);
  }
  document.getElementsByClassName("motorType")[0].classList.add("type-chosen");
  document.getElementById("body").style.overflow = "hidden";
}

function openMenuList(){
  document.getElementById("menu-list").style.width = "100vw";
  document.getElementById("menu-list").style.opacity = "1";
  document.getElementById("menu-list-bottom").style.display = "flex";
  for (
    var i = 0;
    i < document.getElementsByClassName("menu-list-item").length;
    i++
  ) {
    let index= i;
    document.getElementsByClassName("menu-list-item")[i].classList.remove("type-chosen");
    document.getElementsByClassName("menu-list-item")[i].addEventListener("click", () => {handleClickMenu(index)}, true);
  }
  document.getElementById("body").style.overflow = "hidden";
}

export default function Nav({color}) {
  return (
    <>
      <div className="motor-list" id="motor-list">
        <div className="motorList-container-left" id="motorList-container-left">
          <div
            className="motorList-container-left-top"
            id="motorList-container-left-top"
          ></div>
          <div
            className="motorList-container-left-center"
            id="motorList-container-center-bottom"
          >
            <TypeMotor />
          </div>
          <div className="motorList-container-left-bottom"></div>
        </div>
        <div
          className="motorList-container-right"
          id="motorList-container-right"
        >
          <div className="motorItems-top"></div>
          <div className="motorItems-center" id="motorItems"></div>
          <div className="motorItems-bottom"></div>
        </div>
        <NavMobileLayout/>
      </div>
      <div className="mv-nav" id="mv-nav">
        <div className="mv-nav-container">
          <div className="mv-container-div" onClick={openMotorList}>
            <p className="nav-name" style={{color: color}}>Models</p>
          </div>
        </div>
        {/* <div className="mv-nav-container">
          <a className="mv-container-div" href="home">
            <p className="nav-name">Home</p>
          </a>
        </div> */}
        <div className="mv-nav-container">
          <div className="mv-container-div" onClick={openMenuList}>
            <p className="nav-name" style={{color: color}}>Menu</p>
          </div>
        </div>
      </div>
    </>
  );
}
