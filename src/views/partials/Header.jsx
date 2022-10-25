import React from "react";
// import NotificationDropdown from "./NotificationDropdown";

import Navlinks from "../components/Navlinks";
import Navright from "../components/Navright";
import Search from "../components/Search";

// import ProfileDropdown from "./ProfileDropdown";
export default function Header() {
  return (
    <header class="navbar-light fixed-top header-static bg-mode">
      {/* <!--  Logo Nav START --> */}
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          {/* <!--  Logo START --> */}
          <a class="navbar-brand" href="index.html">
            <img
              class="light-mode-item navbar-brand-item"
              src="assets/images/logo.svg"
              alt="logo"
            />
          </a>
          {/* <!--  Logo END --> */}

          {/* <!--  Responsive navbar toggler --> */}
          <button
            class="navbar-toggler ms-auto icon-md btn btn-light p-0 collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* <!--  Main navbar START --> */}
          <div class="navbar-collapse collapse" id="navbarCollapse">
            <Search />
            <Navlinks />
          </div>
          {/* <!--  Main navbar END --> */}

          <Navright />
        </div>
      </nav>
      {/* <!--  Logo Nav END --> */}
    </header>
  );
}
