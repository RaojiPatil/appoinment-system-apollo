import React, { useEffect, useRef } from "react"
import "./Navbar.css"

import { NavLink } from "react-router-dom"

export const Navbar = () => {
  const navRef = useRef()


  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollable = 25
      var scrolled = window.scrollY
      if (Math.ceil(scrolled) >= scrollable) {
        navRef.current.classList.add("scroll-shadow")
      } else {
        navRef.current.classList.remove("scroll-shadow")
      }
    })
  }, [])

  return (
    <>
      <div className="navbar" ref={navRef}>
        <NavLink to={"/"} className="navLink">
          <span className="material-icons-round">home</span> <span>Home</span>
        </NavLink>
        <NavLink to={"/booking"} className="navLink">
          <span className="material-icons-round">book_online</span>{" "}
          <span>Book Appointment</span>
        </NavLink>
        <NavLink to={"/admin"} className="navLink">
          <span className="material-icons-round">setting</span>
          <span>Admin Panel</span>
        </NavLink>
      </div>
    </>
  )
}
