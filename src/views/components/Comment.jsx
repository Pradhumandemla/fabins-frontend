import { Link } from "react-router-dom";
export default function Comment() {
  return (
    <>
      {/* <!--  Add comment --> */}
      <div className="d-flex mb-3">
        {/* <!--  Avatar --> */}
        <div className="avatar avatar-xs me-2">
          <Link href="/">
            <img
              className="avatar-img rounded-circle"
              src="assets/images/avatar/12.jpg"
              alt=""
            />
          </Link>
        </div>
        {/* <!--  Comment box  --> */}
        <form className="w-100">
          <textarea
            data-autoresize=""
            className="form-control pe-4 bg-light"
            rows="1"
            placeholder="Add a comment..."
          ></textarea>
        </form>
      </div>
      {/* <!--  Comment wrap START --> */}
      <ul className="comment-wrap list-unstyled">
        {/* <!--  Comment item START --> */}
        <li className="comment-item">
          <div className="d-flex position-relative">
            {/* <!--  Avatar --> */}
            <div className="avatar avatar-xs">
              <Link href="/">
                <img
                  className="avatar-img rounded-circle"
                  src="assets/images/avatar/05.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="ms-2">
              {/* <!--  Comment by --> */}
              <div className="bg-light rounded-start-top-0 p-3 rounded">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-1">
                    <Link href="/"> Frances Guerrero </Link>
                  </h6>
                  <small className="ms-2">5hr</small>
                </div>
                <p className="small mb-0">
                  Removed demands expense account in outward tedious do.
                  Particular way thoroughly unaffected projection.
                </p>
              </div>
              {/* <!--  Comment react --> */}
              <ul className="nav nav-divider py-2 small">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Like (3)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Reply
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    View 5 replies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!--  Comment item nested START --> */}
          <ul className="comment-item-nested list-unstyled">
            {/* <!--  Comment item START --> */}
            <li className="comment-item">
              <div className="d-flex">
                {/* <!--  Avatar --> */}
                <div className="avatar avatar-xs">
                  <Link href="/">
                    <img
                      className="avatar-img rounded-circle"
                      src="assets/images/avatar/06.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                {/* <!--  Comment by --> */}
                <div className="ms-2">
                  <div className="bg-light p-3 rounded">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-1">
                        <Link href="/"> Lori Stevens </Link>
                      </h6>
                      <small className="ms-2">2hr</small>
                    </div>
                    <p className="small mb-0">
                      See resolved goodness felicity shy civility domestic had
                      but Drawings offended yet answered Jennings perceive.
                    </p>
                  </div>
                  {/* <!--  Comment react --> */}
                  <ul className="nav nav-divider py-2 small">
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Like (5)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Reply
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* <!--  Comment item END --> */}
            {/* <!--  Comment item START --> */}
            <li className="comment-item">
              <div className="d-flex">
                {/* <!--  Avatar --> */}
                <div className="avatar avatar-story avatar-xs">
                  <Link href="/">
                    <img
                      className="avatar-img rounded-circle"
                      src="assets/images/avatar/07.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                {/* <!--  Comment by --> */}
                <div className="ms-2">
                  <div className="bg-light p-3 rounded">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-1">
                        <Link href="/"> Billy Vasquez </Link>
                      </h6>
                      <small className="ms-2">15min</small>
                    </div>
                    <p className="small mb-0">
                      Wishing calling is warrant settled was lucky.
                    </p>
                  </div>
                  {/* <!--  Comment react --> */}
                  <ul className="nav nav-divider py-2 small">
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Like
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Reply
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* <!--  Comment item END --> */}
          </ul>
          {/* <!--  Load more replies --> */}
          <Link
            href="/"
            role="button"
            className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
            data-bs-toggle="button"
            aria-pressed="true"
          >
            <div className="spinner-dots me-2">
              <span className="spinner-dot"></span>
              <span className="spinner-dot"></span>
              <span className="spinner-dot"></span>
            </div>
            Load more replies
          </Link>
          {/* <!--  Comment item nested END --> */}
        </li>
        {/* <!--  Comment item END --> */}
        {/* <!--  Comment item START --> */}
        <li className="comment-item">
          <div className="d-flex">
            {/* <!--  Avatar --> */}
            <div className="avatar avatar-xs">
              <Link href="/">
                <img
                  className="avatar-img rounded-circle"
                  src="assets/images/avatar/05.jpg"
                  alt=""
                />
              </Link>
            </div>
            {/* <!--  Comment by --> */}
            <div className="ms-2">
              <div className="bg-light p-3 rounded">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-1">
                    <Link href="/"> Frances Guerrero </Link>
                  </h6>
                  <small className="ms-2">4min</small>
                </div>
                <p className="small mb-0">
                  Removed demands expense account in outward tedious do.
                  Particular way thoroughly unaffected projection.
                </p>
              </div>
              {/* <!--  Comment react --> */}
              <ul className="nav nav-divider pt-2 small">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Like (1)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Reply
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    View 6 replies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* <!--  Comment item END --> */}
      </ul>
      {/* <!--  Comment wrap END --> */}
    </>
  );
}
