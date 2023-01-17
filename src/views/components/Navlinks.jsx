export default function Navlinks() {
  return (
    <>
      {/* navlinks start */}
      <ul className="navbar-nav navbar-nav-scroll ms-auto">
        {/* <!--  Nav item 1 Demos --> */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link active dropdown-toggle"
            href="/"
            id="homeMenu"
            data-bs-toggle="dropdown"
            // aria-haspopup="true"
            aria-expanded="false"
          >
            Demo
          </Link>
          <ul className="dropdown-menu" aria-labelledby="homeMenu">
            <li>

              <Link className="dropdown-item active" href="index.html">
                Home default
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="index-classic.html">
                Home classic
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="index-post.html">
                Home post
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="index-video.html">
                Home video
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="index-event.html">
                Home event
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="landing.html">
                Landing page
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="app-download.html">
                App download
              </Link>
            </li>
            <li className="dropdown-divider"></li>
            <li>
              <Link
                className="dropdown-item"
                href="/"
                target="_blank"
              >
                <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>
                Buy Social!
              </Link>
            </li>
          </ul>
        </li>
        {/* <!--  Nav item 2 Pages --> */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            href="/"
            id="pagesMenu"
            data-bs-toggle="dropdown"
            // aria-haspopup="true"
            aria-expanded="false"
          >
            Pages
          </Link>
          <ul className="dropdown-menu" aria-labelledby="pagesMenu">
            <li>

              <Link className="dropdown-item" href="albums.html">
                Albums
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="celebration.html">
                Celebration
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="messaging.html">
                Messaging
              </Link>
            </li>
            {/* <!--  Dropdown submenu --> */}
            <li className="dropdown-submenu dropend">
              <Link className="dropdown-item dropdown-toggle" href="/!">
                Profile
              </Link>
              <ul className="dropdown-menu" data-bs-popper="none">
                <li>

                  <Link className="dropdown-item" href="my-profile.html">
                    Feed
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="my-profile-about.html">
                    About
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="my-profile-connections.html">
                    Connections
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="my-profile-media.html">
                    Media
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="my-profile-videos.html">
                    Videos
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="my-profile-events.html">
                    Events
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="my-profile-activity.html">
                    Activity
                  </Link>
                </li>
              </ul>
            </li>
            <li>

              <Link className="dropdown-item" href="events.html">
                Events
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="events-2.html">
                Events 2
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="event-details.html">
                Event details
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="event-details-2.html">
                Event details 2
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="groups.html">
                Groups
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="group-details.html">
                Group details
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="post-videos.html">
                Post videos
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="post-video-details.html">
                Post video details
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="post-details.html">
                Post details
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="video-details.html">
                Video details
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="blog.html">
                Blog
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="blog-details.html">
                Blog details
              </Link>
            </li>

            {/* <!--  Dropdown submenu levels --> */}
            <li className="dropdown-divider"></li>
            <li className="dropdown-submenu dropend">
              <Link className="dropdown-item dropdown-toggle" href="/">
                Dropdown levels
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                <li>

                  <Link className="dropdown-item" href="/">
                    Dropdown item
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="/">
                    Dropdown item
                  </Link>
                </li>
                {/* <!--  dropdown submenu open left --> */}
                <li className="dropdown-submenu dropstart">
                  <Link className="dropdown-item dropdown-toggle" href="/">
                    Dropdown (start)
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    data-bs-popper="none"
                  >
                    <li>

                      <Link className="dropdown-item" href="/">
                        Dropdown item
                      </Link>
                    </li>
                    <li>

                      <Link className="dropdown-item" href="/">
                        Dropdown item
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>

                  <Link className="dropdown-item" href="/">
                    Dropdown item
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* <!--  Nav item 3 Post --> */}
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            href="/"
            id="postMenu"
            data-toggle="dropdown"
            // aria-haspopup="true"
            aria-expanded="false"
          >
            Account
          </Link>
          <ul className="dropdown-menu" aria-labelledby="postMenu">
            <li>

              <Link className="dropdown-item" href="create-page.html">
                Create a page
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="settings.html">
                Settings
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="notifications.html">
                Notifications
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="help.html">
                Help center
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="help-details.html">
                Help details
              </Link>
            </li>
            {/* <!--  dropdown submenu open left --> */}
            <li className="dropdown-submenu dropstart">
              <Link className="dropdown-item dropdown-toggle" href="/">
                Authentication
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                <li>

                  <Link className="dropdown-item" href="sign-in.html">
                    Sign in
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="sign-up.html">
                    Sing up
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="forgot-password.html">
                    Forgot password
                  </Link>
                </li>
                <li className="dropdown-divider"></li>
                <li>

                  <Link className="dropdown-item" href="sign-in-advance.html">
                    Sign in advance
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="sign-up-advance.html">
                    Sing up advance
                  </Link>
                </li>
                <li>

                  <Link className="dropdown-item" href="forgot-password-advance.html">
                    Forgot password advance
                  </Link>
                </li>
              </ul>
            </li>
            <li>

              <Link className="dropdown-item" href="error-404.html">
                Error 404
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="offline.html">
                Offline
              </Link>
            </li>
            <li>

              <Link className="dropdown-item" href="privacy-and-terms.html">
                Privacy &amp; terms
              </Link>
            </li>
          </ul>
        </li>

        {/* <!--  Nav item 4 Mega menu --> */}
        <li className="nav-item">
          <Link className="nav-link" href="my-profile-connections.html">
            My network
          </Link>
        </li>
      </ul>
      {/* navlinks ended */}
    </>
  );
}
