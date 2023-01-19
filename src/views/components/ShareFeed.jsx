import { Link } from "react-router-dom";
import ModalFeedEvent from "./ModalFeedEvent";
import ModalFeedFeeling from "./ModalFeedFeeling";
import ModalFeedPhoto from "./ModalFeedPhoto";
import ModalFeedVideo from "./ModalFeedVideo";
export default function ShareFeed() {
  return (
    <>
      <ModalFeedEvent />
      <ModalFeedFeeling />
      <ModalFeedPhoto />
      <ModalFeedVideo />
      {/* <!--  Share feed START --> */}
      <div className="card card-body">
        <div className="d-flex mb-3">
          {/* <!--  Avatar --> */}
          <div className="avatar avatar-xs me-2">
            <Link href="/">
              <img
                className="avatar-img rounded-circle"
                src="assets/images/avatar/03.jpg"
                alt=""
              />
            </Link>
          </div>
          {/* <!--  Post input --> */}
          <form className="w-100 d-flex">
            <textarea
              className="form-control pe-4 border-0"
              rows="2"
              data-autoresize=""
              placeholder="Share your thoughts..."
            ></textarea>
            <button
              type="button"
              className="btn btn-sm btn-primary-soft align-self-start mt-1"
            >
              Post
            </button>
          </form>
        </div>
        {/* <!--  Share feed toolbar START --> */}
        <ul className="nav nav-pills nav-stack small fw-normal">
          <li className="nav-item">
            <button
              type="button"
              className="nav-link bg-light py-1 px-2 mb-0"
              data-bs-toggle="modal"
              data-bs-target="#feedActionPhoto"
            >
              <i className="fa-solid fa-image text-success pe-2"></i>Photo
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link bg-light py-1 px-2 mb-0"
              data-bs-toggle="modal"
              data-bs-target="#feedActionVideo"
            >
              <i className="fa-solid fa-video text-info pe-2"></i>Video
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link bg-light py-1 px-2 mb-0"
              data-bs-toggle="modal"
              data-bs-target="#modalCreateEvents"
            >
              <i className="fa-solid fa-calendar text-danger pe-2"></i>
              Event
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link bg-light py-1 px-2 mb-0"
              data-bs-toggle="modal"
              data-bs-target="#modalCreateFeed"
            >
              <i className="fa-solid fa-face-smile text-warning pe-2"></i>
              Feeling /Activity
            </button>
          </li>
          <li className="nav-item dropdown ms-lg-auto">
            <button
              className="nav-link bg-light py-1 px-2 mb-0"
              id="feedActionShare"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-ellipsis"></i>
            </button>
            {/* <!--  Dropdown menu --> */}
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="feedActionShare"
            >
              <li>
                <Link className="dropdown-item" href="/">
                  <i className="bi bi-envelope fa-fw pe-2"></i>Create a poll
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/">
                  <i className="bi bi-bookmark-check fa-fw pe-2"></i>Ask a
                  question
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" href="/">
                  <i className="bi bi-pencil-square fa-fw pe-2"></i>Help
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/* <!--  Share feed toolbar END --> */}
      </div>
      {/* <!--  Share feed END --> */}
    </>
  );
}
