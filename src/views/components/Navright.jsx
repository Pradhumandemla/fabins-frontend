import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/Auth/authSlice";

export default function Navright() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = ()=>{
    localStorage.removeItem("token");
    dispatch(logout());
    return navigate("/login");
  }
  return (
    <>
      {/* <!--  Nav right START --> */}
      <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
        <li className="nav-item ms-2">
          <Link className="nav-link icon-md btn btn-light p-0" href="/">
            <i className="fa-solid fa-comments fs-6"> </i>
          </Link>
        </li>
        <li className="nav-item ms-2">
          <Link className="nav-link icon-md btn btn-light p-0" href="/">
            <i className="fa-solid fa-gear fs-6"> </i>
          </Link>
        </li>
        <li className="nav-item dropdown ms-2">
          <Link
            className="nav-link icon-md btn btn-light p-0"
            href="/"
            id="notifDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-auto-close="outside"
          >
            <span className="badge-notif animation-blink"></span>
            <i className="fa-solid fa-bell fs-6"> </i>
          </Link>
          <div
            className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0"
            aria-labelledby="notifDropdown"
          >
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="m-0">
                  Notifications
                  <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                    4 new
                  </span>
                </h6>
                <Link className="small" href="/">
                  Clear all
                </Link>
              </div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush list-unstyled p-2">
                  {/* <!--  Notif item --> */}
                  <li>
                    <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3">
                      <div className="avatar text-center d-none d-sm-inline-block">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/01.jpg"
                          alt=""
                        />
                      </div>
                      <div className="ms-sm-3">
                        <div className=" d-flex">
                          <p className="small mb-2">
                            <b>Judy Nguyen</b> sent you a friend request.
                          </p>
                          <p className="small ms-3 text-nowrap">Just now</p>
                        </div>
                        <div className="d-flex">
                          <button className="btn btn-sm py-1 btn-primary me-2">
                            Accept
                          </button>
                          <button className="btn btn-sm py-1 btn-danger-soft">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <!--  Notif item --> */}
                  <li>
                    <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3 position-relative">
                      <div className="avatar text-center d-none d-sm-inline-block">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/02.jpg"
                          alt=""
                        />
                      </div>
                      <div className="ms-sm-3 d-flex">
                        <div>
                          <p className="small mb-2">
                            Wish <b>Amanda Reed</b> a happy birthday (Nov 12)
                          </p>
                          <button className="btn btn-sm btn-outline-light py-1 me-2">
                            Say happy birthday 🎂
                          </button>
                        </div>
                        <p className="small ms-3">2min</p>
                      </div>
                    </div>
                  </li>
                  {/* <!--  Notif item --> */}
                  <li>
                    <Link
                      href="/"
                      className="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3"
                    >
                      <div className="avatar text-center d-none d-sm-inline-block">
                        <div className="avatar-img rounded-circle bg-success">
                          <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">
                            WB
                          </span>
                        </div>
                      </div>
                      <div className="ms-sm-3">
                        <div className="d-flex">
                          <p className="small mb-2">
                            Fabins has 15 like and 1 new activity
                          </p>
                          <p className="small ms-3">1hr</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  {/* <!--  Notif item --> */}
                  <li>
                    <Link
                      href="/"
                      className="list-group-item list-group-item-action rounded d-flex border-0 p-3 mb-1"
                    >
                      <div className="avatar text-center d-none d-sm-inline-block">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/logo/12.svg"
                          alt=""
                        />
                      </div>
                      <div className="ms-sm-3 d-flex">
                        <p className="small mb-2">
                          <b>Bootstrap in the news:</b> The search giant’s
                          parent company, Alphabet, just joined an exclusive
                          club of tech stocks.
                        </p>
                        <p className="small ms-3">4hr</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="card-footer text-center">
                <Link href="/" className="btn btn-sm btn-primary-soft">
                  See all incoming activity
                </Link>
              </div>
            </div>
          </div>
        </li>
        {/* <!--  Notification dropdown END --> */}

        <li className="nav-item ms-2 dropdown">
          <Link
            className="nav-link btn icon-md p-0"
            href="/"
            id="profileDropdown"
            role="button"
            data-bs-auto-close="outside"
            data-bs-display="static"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              className="avatar-img rounded-2"
              src="assets/images/avatar/07.jpg"
              alt=""
            />
          </Link>
          <ul
            className="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3"
            aria-labelledby="profileDropdown"
          >
            {/* <!--  Profile info --> */}
            <li className="px-3">
              <div className="d-flex align-items-center position-relative">
                {/* <!--  Avatar --> */}
                <div className="avatar me-3">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/07.jpg"
                    alt="avatar"
                  />
                </div>
                <div>
                  <Link className="h6 stretched-link" href="/">
                    Lori Ferguson
                  </Link>
                  <p className="small m-0">Web Developer</p>
                </div>
              </div>
              <Link
                className="dropdown-item btn btn-primary-soft btn-sm my-2 text-center"
                href="/"
              >
                View profile
              </Link>
            </li>
            {/* <!--  Links --> */}
            <li>
              <Link className="dropdown-item" href="/">
                <i className="bi bi-gear fa-fw me-2"></i>Settings &amp; Privacy
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="/"
              >
                <i className="fa-fw bi bi-life-preserver me-2"></i>Support
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="/">
                <i className="fa-fw bi bi-card-text me-2"></i>Documentation
              </Link>
            </li>
            <li className="dropdown-divider"></li>
            <li>
              <button
                className="dropdown-item bg-danger-soft-hover"
                onClick={logoutHandler} 
              >
                <i className="bi bi-power fa-fw me-2"></i>LogOut
              </button>
            </li>
            <li>

              <hr className="dropdown-divider" />
            </li>
            {/* <!--  Dark mode switch START --> */}
            <li>
              <div className="modeswitch-wrap" id="darkModeSwitch">
                <div className="modeswitch-item">
                  <div className="modeswitch-icon"></div>
                </div>
                <span>Dark mode</span>
              </div>
            </li>
            {/* <!--  Dark mode switch END --> */}
          </ul>
        </li>
        {/* <!--  Profile START --> */}
      </ul>
      {/* <!--  Nav right END --> */}
    </>
  );
}
