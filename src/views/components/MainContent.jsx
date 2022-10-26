
export default function MainContent() {
  return (
    <>
       {/* <!--  Main content START --> */}
       <div className="col-md-8 col-lg-6 vstack gap-4">
            {/* <!--  Story START --> */}
            <div className="tiny-slider arrow-hover overflow-hidden">
              <div className="tns-outer" id="tns1-ow">
                <div
                  className="tns-liveregion tns-visually-hidden"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  slide <span className="current">1 to 4</span> of 6
                </div>
                <div id="tns1-mw" className="tns-ovh">
                  <div className="tns-inner" id="tns1-iw">
                    <div
                      className="tiny-slider-inner ms-n4  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                      data-arrow="true"
                      data-dots="true"
                      data-loop="false"
                      data-autoplay="false"
                      data-items-xl="4"
                      data-items-lg="3"
                      data-items-md="3"
                      data-items-sm="3"
                      data-items-xs="2"
                      data-gutter="12"
                      data-edge="30"
                      id="tns1"
                      style={{
                        transitionDuration: "0s",
                        transform: "translate3d(0%, 0px, 0px)"
                      }}
                    >
                      {/* <!--  Slider items --> */}
                      <div className="tns-item tns-slide-active" id="tns1-item0">
                        {/* <!--  Card add story START --> */}
                        <div className="card border border-2 border-dashed h-150px shadow-none d-flex align-items-center justify-content-center text-center">
                          <div>
                            <a
                              className="stretched-link btn btn-light rounded-circle icon-md"
                              href="/"
                            >
                              <i className="fa-solid fa-plus"></i>
                            </a>
                            <h6 className="mt-2 mb-0 small">Post a Story</h6>
                          </div>
                        </div>
                        {/* <!--  Card add story END --> */}
                      </div>

                      {/* <!--  Slider items --> */}
                      <div className="tns-item tns-slide-active" id="tns1-item1">
                        {/* <!--  Card START --> */}
                        <div
                          className="card card-overlay-bottom border-0 position-relative h-150px"
                          style={{
                            backgroundImage:
                              "url(assets/images/post/1by1/02.jpg)",
                            backgroundPosition: "center left",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">
                              {/* <!--  Name --> */}
                              <a
                                href="/"
                                className="stretched-link text-white small"
                              >
                                Judy Nguyen
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!--  Card END --> */}
                      </div>

                      {/* <!--  Slider items --> */}
                      <div className="tns-item tns-slide-active" id="tns1-item2">
                        {/* <!--  Card START --> */}
                        <div
                          className="card card-overlay-bottom border-0 position-relative h-150px"
                          style={{
                            backgroundImage:
                              "url(assets/images/post/1by1/03.jpg)",
                            backgroundPosition: "center left",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">
                              {/* <!--  Name --> */}
                              <a
                                href="/"
                                className="stretched-link text-white small"
                              >
                                Samuel Bishop
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!--  Card END --> */}
                      </div>

                      {/* <!--  Slider items --> */}
                      <div className="tns-item tns-slide-active" id="tns1-item3">
                        {/* <!--  Card START --> */}
                        <div
                          className="card card-overlay-bottom border-0 position-relative h-150px"
                          style={{
                            backgroundImage:
                              "url(assets/images/post/1by1/04.jpg)",
                            backgroundPosition: "center left",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">
                              {/* <!--  Name --> */}
                              <a
                                href="/"
                                className="stretched-link text-white small"
                              >
                                Carolyn Ortiz
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!--  Card END --> */}
                      </div>

                      {/* <!--  Slider items --> */}
                      <div
                        className="tns-item"
                        id="tns1-item4"
                        aria-hidden="true"
                        tabIndex="-1"
                      >
                        {/* <!--  Card START --> */}
                        <div
                          className="card card-overlay-bottom border-0 position-relative h-150px"
                          style={{
                            backgroundImage:
                              "url(assets/images/post/1by1/05.jpg)",
                            backgroundPosition: "center left",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">
                              {/* <!--  Name --> */}
                              <a
                                href="/"
                                className="stretched-link text-white small"
                              >
                                Amanda Reed
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!--  Card END --> */}
                      </div>

                      {/* <!--  Slider items --> */}
                      <div
                        className="tns-item"
                        id="tns1-item5"
                        aria-hidden="true"
                        tabIndex="-1"
                      >
                        {/* <!--  Card START --> */}
                        <div
                          className="card card-overlay-bottom border-0 position-relative h-150px"
                          style={{
                            backgroundImage:
                              "url(assets/images/post/1by1/01.jpg)",
                            backgroundPosition: "center left",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="card-img-overlay d-flex align-items-center p-2">
                            <div className="w-100 mt-auto">
                              {/* <!--  Name --> */}
                              <a
                                href="/"
                                className="stretched-link text-white small"
                              >
                                Lori Stevens
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!--  Card END --> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tns-nav" aria-label="Carousel Pagination">
                  <button
                    type="button"
                    data-nav="0"
                    aria-controls="tns1"
                    aria-label="Carousel Page 1 (Current Slide)"
                    className="tns-nav-active"
                  ></button>
                  <button
                    type="button"
                    data-nav="1"
                    tabIndex="-1"
                    aria-controls="tns1"
                    aria-label="Carousel Page 2"
                  ></button>
                  <button
                    type="button"
                    data-nav="2"
                    tabIndex="-1"
                    aria-controls="tns1"
                    style={{ display: "none" }}
                    aria-label="Carousel Page 3"
                  ></button>
                  <button
                    type="button"
                    data-nav="3"
                    tabIndex="-1"
                    aria-controls="tns1"
                    style={{ display: "none" }}
                    aria-label="Carousel Page 4"
                  ></button>
                  <button
                    type="button"
                    data-nav="4"
                    tabIndex="-1"
                    aria-controls="tns1"
                    style={{ display: "none" }}
                    aria-label="Carousel Page 5"
                  ></button>
                  <button
                    type="button"
                    data-nav="5"
                    tabIndex="-1"
                    aria-controls="tns1"
                    style={{ display: "none" }}
                    aria-label="Carousel Page 6"
                  ></button>
                </div>
                <div
                  className="tns-controls"
                  aria-label="Carousel Navigation"
                  tabIndex="0"
                >
                  <button
                    type="button"
                    data-controls="prev"
                    tabIndex="-1"
                    aria-controls="tns1"
                    disabled=""
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button
                    type="button"
                    data-controls="next"
                    tabIndex="-1"
                    aria-controls="tns1"
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* <!--  Story END --> */}

            {/* <!--  Share feed START --> */}
            <div className="card card-body">
              <div className="d-flex mb-3">
                {/* <!--  Avatar --> */}
                <div className="avatar avatar-xs me-2">
                  <a href="/">
                    {" "}
                    <img
                      className="avatar-img rounded-circle"
                      src="assets/images/avatar/03.jpg"
                      alt=""
                    />{" "}
                  </a>
                </div>
                {/* <!--  Post input --> */}
                <form className="w-100">
                  <textarea
                    className="form-control pe-4 border-0"
                    rows="2"
                    data-autoresize=""
                    placeholder="Share your thoughts..."
                  ></textarea>
                </form>
              </div>
              {/* <!--  Share feed toolbar START --> */}
              <ul className="nav nav-pills nav-stack small fw-normal">
                <li className="nav-item">
                  <a
                    className="nav-link bg-light py-1 px-2 mb-0"
                    href="/"
                    data-bs-toggle="modal"
                    data-bs-target="#feedActionPhoto"
                  >
                    {" "}
                    <i className="bi bi-image-fill text-success pe-2"></i>Photo
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link bg-light py-1 px-2 mb-0"
                    href="/"
                    data-bs-toggle="modal"
                    data-bs-target="#feedActionVideo"
                  >
                    {" "}
                    <i className="bi bi-camera-reels-fill text-info pe-2"></i>Video
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link bg-light py-1 px-2 mb-0"
                    data-bs-toggle="modal"
                    data-bs-target="#modalCreateEvents"
                  >
                    {" "}
                    <i className="bi bi-calendar2-event-fill text-danger pe-2"></i>
                    Event{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link bg-light py-1 px-2 mb-0"
                    href="/"
                    data-bs-toggle="modal"
                    data-bs-target="#modalCreateFeed"
                  >
                    {" "}
                    <i className="bi bi-emoji-smile-fill text-warning pe-2"></i>
                    Feeling /Activity
                  </a>
                </li>
                <li className="nav-item dropdown ms-lg-auto">
                  <a
                    className="nav-link bg-light py-1 px-2 mb-0"
                    href="/"
                    id="feedActionShare"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots"></i>
                  </a>
                  {/* <!--  Dropdown menu --> */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="feedActionShare"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-envelope fa-fw pe-2"></i>Create a poll
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-bookmark-check fa-fw pe-2"></i>Ask a
                        question{" "}
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-pencil-square fa-fw pe-2"></i>Help
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <!--  Share feed toolbar END --> */}
            </div>
            {/* <!--  Share feed END --> */}

            {/* <!--  Card feed item START --> */}
            <div className="card">
              {/* <!--  Card header START --> */}
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    {/* <!--  Avatar --> */}
                    <div className="avatar avatar-story me-2">
                      <a href="/">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/04.jpg"
                          alt=""
                        />{" "}
                      </a>
                    </div>
                    {/* <!--  Info --> */}
                    <div>
                      <div className="nav nav-divider">
                        <h6 className="nav-item card-title mb-0">
                          {" "}
                          <a href="/"> Lori Ferguson </a>
                        </h6>
                        <span className="nav-item small"> 2hr</span>
                      </div>
                      <p className="mb-0 small">Web Developer at Webestica</p>
                    </div>
                  </div>
                  {/* <!--  Card feed action dropdown START --> */}
                  <div className="dropdown">
                    <a
                      href="/"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                      id="cardFeedAction"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </a>
                    {/* <!--  Card feed action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardFeedAction"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                          ferguson{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-flag fa-fw pe-2"></i>Report post
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--  Card feed action dropdown END --> */}
                </div>
              </div>
              {/* <!--  Card header END --> */}
              {/* <!--  Card body START --> */}
              <div className="card-body">
                <p>
                  I'm thrilled to share that I've completed a graduate
                  certificate course in project management with the president's
                  honor roll.
                </p>
                {/* <!--  Card img --> */}
                <img
                  className="card-img"
                  src="assets/images/post/3by2/01.jpg"
                  alt="Post"
                />
                {/* <!--  Feed react START --> */}
                <ul className="nav nav-stack py-3 small">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      {" "}
                      <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                  {/* <!--  Card share action START --> */}
                  <li className="nav-item dropdown ms-sm-auto">
                    <a
                      className="nav-link mb-0"
                      href="/"
                      id="cardShareAction"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                      (3)
                    </a>
                    {/* <!--  Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to
                          News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--  Card share action END --> */}
                </ul>
                {/* <!--  Feed react END --> */}

                {/* <!--  Add comment --> */}
                <div className="d-flex mb-3">
                  {/* <!--  Avatar --> */}
                  <div className="avatar avatar-xs me-2">
                    <a href="/">
                      {" "}
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/12.jpg"
                        alt=""
                      />{" "}
                    </a>
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
                        <a href="/">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ms-2">
                        {/* <!--  Comment by --> */}
                        <div className="bg-light rounded-start-top-0 p-3 rounded">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-1">
                              {" "}
                              <a href="/"> Frances Guerrero </a>
                            </h6>
                            <small className="ms-2">5hr</small>
                          </div>
                          <p className="small mb-0">
                            Removed demands expense account in outward tedious
                            do. Particular way thoroughly unaffected projection.
                          </p>
                        </div>
                        {/* <!--  Comment react --> */}
                        <ul className="nav nav-divider py-2 small">
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              Like (3)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              Reply
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              View 5 replies
                            </a>
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
                            <a href="/">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/06.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* <!--  Comment by --> */}
                          <div className="ms-2">
                            <div className="bg-light p-3 rounded">
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-1">
                                  {" "}
                                  <a href="/"> Lori Stevens </a>{" "}
                                </h6>
                                <small className="ms-2">2hr</small>
                              </div>
                              <p className="small mb-0">
                                See resolved goodness felicity shy civility
                                domestic had but Drawings offended yet answered
                                Jennings perceive.
                              </p>
                            </div>
                            {/* <!--  Comment react --> */}
                            <ul className="nav nav-divider py-2 small">
                              <li className="nav-item">
                                <a className="nav-link" href="/">
                                  {" "}
                                  Like (5)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/">
                                  {" "}
                                  Reply
                                </a>
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
                            <a href="/">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/07.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* <!--  Comment by --> */}
                          <div className="ms-2">
                            <div className="bg-light p-3 rounded">
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-1">
                                  {" "}
                                  <a href="/"> Billy Vasquez </a>{" "}
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
                                <a className="nav-link" href="/">
                                  {" "}
                                  Like
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/">
                                  {" "}
                                  Reply
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* <!--  Comment item END --> */}
                    </ul>
                    {/* <!--  Load more replies --> */}
                    <a
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
                    </a>
                    {/* <!--  Comment item nested END --> */}
                  </li>
                  {/* <!--  Comment item END --> */}
                  {/* <!--  Comment item START --> */}
                  <li className="comment-item">
                    <div className="d-flex">
                      {/* <!--  Avatar --> */}
                      <div className="avatar avatar-xs">
                        <a href="/">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      {/* <!--  Comment by --> */}
                      <div className="ms-2">
                        <div className="bg-light p-3 rounded">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-1">
                              {" "}
                              <a href="/"> Frances Guerrero </a>{" "}
                            </h6>
                            <small className="ms-2">4min</small>
                          </div>
                          <p className="small mb-0">
                            Removed demands expense account in outward tedious
                            do. Particular way thoroughly unaffected projection.
                          </p>
                        </div>
                        {/* <!--  Comment react --> */}
                        <ul className="nav nav-divider pt-2 small">
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              Like (1)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              Reply
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              View 6 replies
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* <!--  Comment item END --> */}
                </ul>
                {/* <!--  Comment wrap END --> */}
              </div>
              {/* <!--  Card body END --> */}
              {/* <!--  Card footer START --> */}
              <div className="card-footer border-0 pt-0">
                {/* <!--  Load more comments --> */}
                <a
                  href="/"
                  role="button"
                  className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                  data-bs-toggle="button"
                  aria-pressed="true"
                >
                  <div className="spinner-dots me-2">
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                  </div>
                  Load more comments
                </a>
              </div>
              {/* <!--  Card footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}

            {/* <!--  Card feed item START --> */}
            <div className="card">
              {/* <!--  Card header START --> */}
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    {/* <!--  Avatar --> */}
                    <div className="avatar me-2">
                      <a href="/">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/logo/12.svg"
                          alt=""
                        />{" "}
                      </a>
                    </div>
                    {/* <!--  Info --> */}
                    <div>
                      <h6 className="card-title mb-0">
                        <a href="/"> Bootstrap: Front-end framework </a>
                      </h6>
                      <a href="/" className="mb-0 text-body">
                        Sponsored{" "}
                        <i
                          className="bi bi-info-circle ps-1"
                          data-bs-container="body"
                          data-bs-toggle="popover"
                          data-bs-placement="top"
                          data-bs-content="You're seeing this ad because your activity meets the intended audience of our site."
                          data-bs-original-title=""
                          title=""
                        ></i>{" "}
                      </a>
                    </div>
                  </div>
                  {/* <!--  Card share action START --> */}
                  <div className="dropdown">
                    <a
                      href="/"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                      id="cardShareAction2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </a>
                    {/* <!--  Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction2"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                          ferguson{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-flag fa-fw pe-2"></i>Report post
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--  Card share action START --> */}
                </div>
              </div>
              {/* <!--  Card header START --> */}

              {/* <!--  Card body START --> */}
              <div className="card-body">
                <p className="mb-0">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap.
                </p>
              </div>
              <img src="assets/images/post/3by2/02.jpg" alt="" />
              {/* <!--  Card body END --> */}
              {/* <!--  Card footer START --> */}
              <div className="card-footer border-0 d-flex justify-content-between align-items-center">
                <p className="mb-0">Currently v5.1.3 </p>
                <a className="btn btn-primary-soft btn-sm" href="/">
                  {" "}
                  Download now{" "}
                </a>
              </div>
              {/* <!--  Card footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}

            {/* <!--  Card feed item START --> */}
            <div className="card">
              {/* <!--  Card header START --> */}
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    {/* <!--  Avatar --> */}
                    <div className="avatar me-2">
                      <a href="/">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/04.jpg"
                          alt=""
                        />{" "}
                      </a>
                    </div>
                    {/* <!--  Info --> */}
                    <div>
                      <h6 className="card-title mb-0">
                        {" "}
                        <a href="/"> Judy Nguyen </a>
                      </h6>
                      <div className="nav nav-divider">
                        <p className="nav-item mb-0 small">
                          Web Developer at Webestica
                        </p>
                        <span
                          className="nav-item small"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title=""
                          data-bs-original-title="Public"
                        >
                          {" "}
                          <i className="bi bi-globe"></i>{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <!--  Card share action START --> */}
                  <div className="dropdown">
                    <a
                      href="/"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                      id="cardShareAction3"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </a>
                    {/* <!--  Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction3"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                          ferguson{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-flag fa-fw pe-2"></i>Report post
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--  Card share action END --> */}
                </div>
              </div>
              {/* <!--  Card header START --> */}
              {/* <!--  Card body START --> */}
              <div className="card-body">
                <p>
                  I'm so privileged to be involved in the{" "}
                  <a href="/">@bootstrap </a>hiring process! Interviewing with
                  their team was fun and I hope this can be a valuable resource
                  for folks! <a href="/"> #inclusivebusiness</a>{" "}
                  <a href="/"> #internship</a> <a href="/"> #hiring</a>{" "}
                  <a href="/"> #apply </a>
                </p>
                {/* <!--  Card feed grid START --> */}
                <div className="d-flex justify-content-between">
                  <div className="row g-3">
                    <div className="col-6">
                      {/* <!--  Grid img --> */}
                      <a
                        className="h-100"
                        href="assets/images/post/1by1/03.jpg"
                        data-glightbox=""
                        data-gallery="image-popup"
                      >
                        <img
                          className="rounded img-fluid"
                          src="assets/images/post/1by1/03.jpg"
                          alt="Image"
                        />
                      </a>
                    </div>
                    <div className="col-6">
                      {/* <!--  Grid img --> */}
                      <a
                        href="assets/images/post/3by2/01.jpg"
                        data-glightbox=""
                        data-gallery="image-popup"
                      >
                        <img
                          className="rounded img-fluid"
                          src="assets/images/post/3by2/01.jpg"
                          alt="Image"
                        />
                      </a>
                      {/* <!--  Grid img --> */}
                      <div className="position-relative bg-dark mt-3 rounded">
                        <div className="hover-actions-item position-absolute top-50 start-50 translate-middle z-index-9">
                          <a className="btn btn-link text-white" href="/">
                            {" "}
                            View all{" "}
                          </a>
                        </div>
                        <a
                          href="assets/images/post/3by2/02.jpg"
                          data-glightbox=""
                          data-gallery="image-popup"
                        >
                          <img
                            className="img-fluid opacity-50 rounded"
                            src="assets/images/post/3by2/02.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--  Card feed grid END --> */}

                {/* <!--  Feed react START --> */}
                <ul className="nav nav-stack py-3 small">
                  <li className="nav-item">
                    <a className="nav-link active text-secondary" href="/">
                      {" "}
                      <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>{" "}
                      Louis, Billy and 126 others{" "}
                    </a>
                  </li>
                  <li className="nav-item ms-sm-auto">
                    <a className="nav-link" href="/">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed react END --> */}

                {/* <!--  Feed react START --> */}
                <ul className="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 mb-3">
                  <li className="nav-item">
                    <a className="nav-link mb-0 active" href="/">
                      {" "}
                      <i className="bi bi-heart pe-1"></i>Liked (56)
                    </a>
                  </li>
                  {/* <!--  Card share action menu START --> */}
                  <li className="nav-item dropdown">
                    <a
                      href="/"
                      className="nav-link mb-0"
                      id="cardShareAction4"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                      (3)
                    </a>
                    {/* <!--  Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction4"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to
                          News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--  Card share action menu END --> */}
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="/">
                      {" "}
                      <i className="bi bi-send-fill pe-1"></i>Send
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed react START --> */}

                {/* <!--  Comment wrap START --> */}
                <ul className="comment-wrap list-unstyled">
                  {/* <!--  Comment item START --> */}
                  <li className="comment-item">
                    <div className="d-flex">
                      {/* <!--  Avatar --> */}
                      <div className="avatar avatar-xs">
                        <a href="/">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/05.jpg"
                            alt=""
                          />{" "}
                        </a>
                      </div>
                      <div className="ms-2">
                        {/* <!--  Comment by --> */}
                        <div className="bg-light rounded-start-top-0 p-3 rounded">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-1">
                              {" "}
                              <a href="/"> Frances Guerrero </a>
                            </h6>
                            <small className="ms-2">5hr</small>
                          </div>
                          <p className="small mb-0">
                            Removed demands expense account in outward tedious
                            do. Particular way thoroughly unaffected projection.
                          </p>
                        </div>
                        {/* <!--  Comment rect --> */}
                        <ul className="nav nav-divider py-2 small">
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              Like (3)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              Reply
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              View 5 replies
                            </a>
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
                            <a href="/">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/06.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* <!--  Comment by --> */}
                          <div className="ms-2">
                            <div className="bg-light p-3 rounded">
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-1">
                                  {" "}
                                  <a href="/"> Lori Stevens </a>{" "}
                                </h6>
                                <small className="ms-2">2hr</small>
                              </div>
                              <p className="small mb-0">
                                See resolved goodness felicity shy civility
                                domestic had but Drawings offended yet answered
                                Jennings perceive.
                              </p>
                            </div>
                            {/* <!--  Comment rect --> */}
                            <ul className="nav nav-divider py-2 small">
                              <li className="nav-item">
                                <a className="nav-link" href="/">
                                  {" "}
                                  Like (5)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/">
                                  {" "}
                                  Reply
                                </a>
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
                          <div className="avatar avatar-xs">
                            <a href="/">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/07.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* <!--  Comment by --> */}
                          <div className="ms-2">
                            <div className="bg-light p-3 rounded">
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-1">
                                  {" "}
                                  <a href="/"> Billy Vasquez </a>{" "}
                                </h6>
                                <small className="ms-2">15min</small>
                              </div>
                              <p className="small mb-0">
                                Wishing calling is warrant settled was lucky.
                              </p>
                            </div>
                            {/* <!--  Comment rect --> */}
                            <ul className="nav nav-divider py-2 small">
                              <li className="nav-item">
                                <a className="nav-link" href="/">
                                  {" "}
                                  Like
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/">
                                  {" "}
                                  Reply
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* <!--  Load more replies --> */}
                    <a
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
                    </a>
                  </li>
                  {/* <!--  Comment item END --> */}
                  {/* <!--  Comment item START --> */}
                  <li className="comment-item">
                    <div className="d-flex">
                      {/* <!--  Avatar --> */}
                      <div className="avatar avatar-xs">
                        <a href="/">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      {/* <!--  Comment by --> */}
                      <div className="ms-2">
                        <div className="bg-light p-3 rounded">
                          <div className="d-flex justify-content-center">
                            <h6 className="mb-1">
                              {" "}
                              <a href="/"> Frances Guerrero </a>{" "}
                            </h6>
                            <small className="ms-2">4min</small>
                          </div>
                          <p className="small mb-0">Congratulations:)</p>
                          <div className="card p-2 border border-2 rounded mt-2 shadow-none">
                            <img src="assets/images/elements/12.svg" alt="" />
                          </div>
                        </div>
                        {/* <!--  Comment rect --> */}
                        <ul className="nav nav-divider pt-2 small">
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              Like (1)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              Reply
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              View 6 replies
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* <!--  Comment item END --> */}
                </ul>
                {/* <!--  Comment wrap END --> */}
              </div>
              {/* <!--  Card body END --> */}
              {/* <!--  Card footer START --> */}
              <div className="card-footer border-0 pt-0">
                {/* <!--  Load more comments --> */}
                <a
                  href="/"
                  role="button"
                  className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                  data-bs-toggle="button"
                  aria-pressed="true"
                >
                  <div className="spinner-dots me-2">
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                  </div>
                  Load more comments
                </a>
              </div>
              {/* <!--  Card footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}

            {/* <!--  Card feed item START --> */}
            <div className="card">
              {/* <!--  Card header START --> */}
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    {/* <!--  Avatar --> */}
                    <div className="avatar me-2">
                      <a href="/">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/logo/13.svg"
                          alt=""
                        />{" "}
                      </a>
                    </div>
                    {/* <!--  Title --> */}
                    <div>
                      <h6 className="card-title mb-0">
                        {" "}
                        <a href="/"> Apple Education </a>
                      </h6>
                      <p className="mb-0 small">9 November at 23:29</p>
                    </div>
                  </div>
                  {/* <!--  Card share action menu --> */}
                  <a
                    href="/"
                    className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                    id="cardShareAction5"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots"></i>
                  </a>
                  {/* <!--  Card share action dropdown menu --> */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardShareAction5"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                        ferguson{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-flag fa-fw pe-2"></i>Report post
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--  Card share action END --> */}
              </div>
              {/* <!--  Card header START --> */}

              {/* <!--  Card body START --> */}
              <div className="card-body pb-0">
                <p>
                  Find out how you can save time in the classroom this year.
                  Earn recognition while you learn new skills on iPad and Mac.
                  Start recognition your first Apple Teacher badge today!
                </p>
                {/* <!--  Feed react START --> */}
                <ul className="nav nav-stack pb-2 small">
                  <li className="nav-item">
                    <a className="nav-link active text-secondary" href="/">
                      {" "}
                      <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>{" "}
                      Louis, Billy and 126 others{" "}
                    </a>
                  </li>
                  <li className="nav-item ms-sm-auto">
                    <a className="nav-link" href="/">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed react END --> */}
              </div>
              {/* <!--  Card body END --> */}
              {/* <!--  Card Footer START --> */}
              <div className="card-footer py-3">
                {/* <!--  Feed react START --> */}
                <ul className="nav nav-fill nav-stack small">
                  <li className="nav-item">
                    <a className="nav-link mb-0 active" href="/">
                      {" "}
                      <i className="bi bi-heart pe-1"></i>Liked (56)
                    </a>
                  </li>
                  {/* <!--  Card share action dropdown START --> */}
                  <li className="nav-item dropdown">
                    <a
                      href="/"
                      className="nav-link mb-0"
                      id="cardShareAction6"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                      (3)
                    </a>
                    {/* <!--  Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction6"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to
                          News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--  Card share action dropdown END --> */}
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="/">
                      {" "}
                      <i className="bi bi-send-fill pe-1"></i>Send
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed react END --> */}
              </div>
              {/* <!--  Card Footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}

            {/* <!--  Card feed item START --> */}
            <div className="card">
              {/* <!--  Card header START --> */}
              <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                <h6 className="card-title mb-0">People you may know</h6>
                <button className="btn btn-sm btn-primary-soft"> See all </button>
              </div>
              {/* <!--  Card header START --> */}

              {/* <!--  Card body START --> */}
              <div className="card-body">
                <div className="tiny-slider arrow-hover">
                  <div className="tns-outer" id="tns2-ow">
                    <div
                      className="tns-liveregion tns-visually-hidden"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      slide <span className="current">12 to 15</span> of 4
                    </div>
                    <div id="tns2-mw" className="tns-ovh">
                      <div className="tns-inner" id="tns2-iw">
                        <div
                          className="tiny-slider-inner ms-n4  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                          data-arrow="true"
                          data-dots="false"
                          data-items-xl="3"
                          data-items-lg="2"
                          data-items-md="2"
                          data-items-sm="2"
                          data-items-xs="1"
                          data-gutter="12"
                          data-edge="30"
                          id="tns2"
                          style={{
                            transform: "translate3d(-66.6667%, 0px, 0px)"
                          }}
                        >
                          <div
                            className="tns-item tns-slide-cloned"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-story avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/10.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Larry Lawson </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  33 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item tns-slide-cloned"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/11.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Louis Crawford </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  45 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item tns-slide-cloned"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/12.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Dennis Barrett </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  21 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item tns-slide-cloned"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/09.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Amanda Reed </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  50 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item tns-slide-cloned"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-story avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/10.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Larry Lawson </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  33 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item tns-slide-cloned"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/11.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Louis Crawford </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  45 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item tns-slide-cloned"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/12.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Dennis Barrett </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  21 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          {/* <!--  Slider items --> */}
                          <div
                            className="tns-item"
                            id="tns2-item0"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/09.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Amanda Reed </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  50 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item"
                            id="tns2-item1"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-story avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/10.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Larry Lawson </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  33 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item"
                            id="tns2-item2"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/11.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Louis Crawford </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  45 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item"
                            id="tns2-item3"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/12.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Dennis Barrett </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  21 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div className="tns-item tns-slide-cloned tns-slide-active">
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/09.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Amanda Reed </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  50 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div className="tns-item tns-slide-cloned tns-slide-active">
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-story avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/10.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Larry Lawson </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  33 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div className="tns-item tns-slide-cloned tns-slide-active">
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/11.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Louis Crawford </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  45 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div className="tns-item tns-slide-cloned tns-slide-active">
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/12.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Dennis Barrett </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  21 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item tns-slide-cloned"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/09.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Amanda Reed </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  50 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item tns-slide-cloned"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-story avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/10.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Larry Lawson </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  33 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                          <div
                            className="tns-item tns-slide-cloned"
                            aria-hidden="true"
                            tabIndex="-1"
                          >
                            {/* <!--  Card add friend item START --> */}
                            <div className="card shadow-none text-center">
                              {/* <!--  Card body --> */}
                              <div className="card-body p-2 pb-0">
                                <div className="avatar avatar-xl">
                                  <a href="/">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/11.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="card-title mb-1 mt-3">
                                  {" "}
                                  <a href="/"> Louis Crawford </a>
                                </h6>
                                <p className="mb-0 small lh-sm">
                                  45 mutual connections
                                </p>
                              </div>
                              {/* <!--  Card footer --> */}
                              <div className="card-footer p-2 border-0">
                                <button className="btn btn-sm btn-primary-soft w-100">
                                  {" "}
                                  Add friend{" "}
                                </button>
                              </div>
                            </div>
                            {/* <!--  Card add friend item END --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tns-controls"
                      aria-label="Carousel Navigation"
                      tabIndex="0"
                    >
                      <button
                        type="button"
                        data-controls="prev"
                        tabIndex="-1"
                        aria-controls="tns2"
                      >
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>
                      <button
                        type="button"
                        data-controls="next"
                        tabIndex="-1"
                        aria-controls="tns2"
                      >
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--  Card body END --> */}
            </div>
            {/* <!--  Card feed item END --> */}

            {/* <!--  Card feed item START --> */}
            <div className="card">
              {/* <!--  Card header START --> */}
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    {/* <!--  Avatar --> */}
                    <div className="avatar me-2">
                      <a href="/">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/04.jpg"
                          alt=""
                        />{" "}
                      </a>
                    </div>
                    {/* <!--  Title --> */}
                    <div>
                      <h6 className="card-title mb-0">
                        {" "}
                        <a href="/"> All in the Mind </a>
                      </h6>
                      <p className="mb-0 small">9 November at 23:29</p>
                    </div>
                  </div>
                  {/* <!--  Card share action menu --> */}
                  <a
                    href="/"
                    className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                    id="cardShareAction7"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots"></i>
                  </a>
                  {/* <!--  Card share action dropdown menu --> */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardShareAction7"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                        ferguson{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-flag fa-fw pe-2"></i>Report post
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--  Card share action END --> */}
              </div>
              {/* <!--  Card header START --> */}

              {/* <!--  Card body START --> */}
              <div className="card-body pb-0">
                <p>How do you protect your business against cyber-crime?</p>
                <div className="vstack gap-2">
                  {/* <!--  Feed poll item --> */}
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="poll"
                      id="option"
                    />
                    <label className="btn btn-outline-primary w-100" htmlFor="option">
                      We have cybersecurity insurance coverage
                    </label>
                  </div>
                  {/* <!--  Feed poll item --> */}
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="poll"
                      id="option2"
                    />
                    <label className="btn btn-outline-primary w-100" htmlFor="option2">
                      Our dedicated staff will protect us
                    </label>
                  </div>
                  {/* <!--  Feed poll item --> */}
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="poll"
                      id="option3"
                    />
                    <label className="btn btn-outline-primary w-100" htmlFor="option3">
                      We give regular training for best practices
                    </label>
                  </div>
                  {/* <!--  Feed poll item --> */}
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="poll"
                      id="option4"
                    />
                    <label className="btn btn-outline-primary w-100" htmlFor="option4">
                      Third-party vendor protection
                    </label>
                  </div>
                </div>

                {/* <!--  Feed poll votes START --> */}
                <ul className="nav nav-divider mt-2 mb-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      263 votes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      2d left
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed poll votes ED --> */}

                {/* <!--  Feed react START --> */}
                <ul className="nav nav-stack pb-2 small mt-4">
                  <li className="nav-item">
                    <a className="nav-link active text-secondary" href="/">
                      {" "}
                      <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>{" "}
                      Louis, Billy and 126 others{" "}
                    </a>
                  </li>
                  <li className="nav-item ms-sm-auto">
                    <a className="nav-link" href="/">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed react END --> */}
              </div>
              {/* <!--  Card body END --> */}
              {/* <!--  Card Footer START --> */}
              <div className="card-footer py-3">
                {/* <!--  Feed react START --> */}
                <ul className="nav nav-fill nav-stack small">
                  <li className="nav-item">
                    <a className="nav-link mb-0 active" href="/">
                      {" "}
                      <i className="bi bi-heart pe-1"></i>Liked (56)
                    </a>
                  </li>
                  {/* <!--  Card share action dropdown START --> */}
                  <li className="nav-item dropdown">
                    <a
                      href="/"
                      className="nav-link mb-0"
                      id="feedActionShare6"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                      (3)
                    </a>
                    {/* <!--  Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="feedActionShare6"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to
                          News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--  Card share action dropdown END --> */}
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="/">
                      {" "}
                      <i className="bi bi-send-fill pe-1"></i>Send
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed react END --> */}
              </div>
              {/* <!--  Card Footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}

            {/* <!--  Card feed item START --> */}
            <div className="card">
              {/* <!--  Card header START --> */}
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    {/* <!--  Avatar --> */}
                    <div className="avatar me-2">
                      <a href="/">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/04.jpg"
                          alt=""
                        />{" "}
                      </a>
                    </div>
                    {/* <!--  Title --> */}
                    <div>
                      <h6 className="card-title mb-0">
                        {" "}
                        <a href="/"> All in the Mind </a>
                      </h6>
                      <p className="mb-0 small">9 November at 23:29</p>
                    </div>
                  </div>
                  {/* <!--  Card share action menu --> */}
                  <a
                    href="/"
                    className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                    id="cardShareAction10"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots"></i>
                  </a>
                  {/* <!--  Card share action dropdown menu --> */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardShareAction10"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                        ferguson{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {" "}
                        <i className="bi bi-flag fa-fw pe-2"></i>Report post
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--  Card share action END --> */}
              </div>
              {/* <!--  Card header START --> */}

              {/* <!--  Card body START --> */}
              <div className="card-body pb-0">
                <p>How do you protect your business against cyber-crime?</p>
                <div className="card card-body mt-4">
                  {/* <!--  Title --> */}
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    <span className="small">16/20 responded</span>
                    <span className="small">
                      Results not visible to participants
                    </span>
                  </div>

                  {/* <!--  Results --> */}
                  <div className="vstack gap-4 gap-sm-3 mt-3">
                    {/* <!--  Option 1 result START --> */}
                    <div className="d-flex align-items-center justify-content-between">
                      {/* <!--  Progress bar --> */}
                      <div className="overflow-hidden w-100 me-3">
                        <div
                          className="progress bg-primary bg-opacity-10 position-relative"
                          style={{ height: "30px" }}
                        >
                          <div
                            className="progress-bar bg-primary bg-opacity-25"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                            We have cybersecurity insurance coverage{" "}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">25%</div>
                    </div>
                    {/* <!--  Option 1 result END --> */}

                    {/* <!--  Option 2 result START --> */}
                    <div className="d-flex align-items-center justify-content-between">
                      {/* <!--  Progress bar --> */}
                      <div className="overflow-hidden w-100 me-3">
                        <div
                          className="progress bg-primary bg-opacity-10 position-relative"
                          style={{ height: "30px" }}
                        >
                          <div
                            className="progress-bar bg-primary bg-opacity-25"
                            role="progressbar"
                            style={{ width: "15" }}
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                            Our dedicated staff will protect us
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">15%</div>
                    </div>
                    {/* <!--  Option 2 result END --> */}

                    {/* <!--  Option 3 result START --> */}
                    <div className="d-flex align-items-center justify-content-between">
                      {/* <!--  Progress bar --> */}
                      <div className="overflow-hidden w-100 me-3">
                        <div
                          className="progress bg-primary bg-opacity-10 position-relative"
                          style={{ height: "30px" }}
                        >
                          <div
                            className="progress-bar bg-primary bg-opacity-25"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                            We give regular training for best practices
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">10%</div>
                    </div>
                    {/* <!--  Option 3 result END --> */}

                    {/* <!--  Option 4 result START --> */}
                    <div className="d-flex align-items-center justify-content-between">
                      {/* <!--  Progress bar --> */}
                      <div className="overflow-hidden w-100 me-3">
                        <div
                          className="progress bg-primary bg-opacity-10 position-relative"
                          style={{ height: "30px" }}
                        >
                          <div
                            className="progress-bar bg-primary bg-opacity-25"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                            Third-party vendor protection
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">55%</div>
                    </div>
                    {/* <!--  Option 4 result END --> */}
                  </div>
                </div>

                {/* <!--  Feed poll votes START --> */}
                <ul className="nav nav-divider mt-2 mb-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      263 votes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      2d left
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed poll votes ED --> */}

                {/* <!--  Feed react START --> */}
                <ul className="nav nav-stack pb-2 small mt-4">
                  <li className="nav-item">
                    <a className="nav-link active text-secondary" href="/">
                      {" "}
                      <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>{" "}
                      Louis, Billy and 126 others{" "}
                    </a>
                  </li>
                  <li className="nav-item ms-sm-auto">
                    <a className="nav-link" href="/">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed react END --> */}
              </div>
              {/* <!--  Card body END --> */}
              {/* <!--  Card Footer START --> */}
              <div className="card-footer py-3">
                {/* <!--  Feed react START --> */}
                <ul className="nav nav-fill nav-stack small">
                  <li className="nav-item">
                    <a className="nav-link mb-0 active" href="/">
                      {" "}
                      <i className="bi bi-heart pe-1"></i>Liked (56)
                    </a>
                  </li>
                  {/* <!--  Card share action dropdown START --> */}
                  <li className="nav-item dropdown">
                    <a
                      href="/"
                      className="nav-link mb-0"
                      id="feedActionShare8"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                      (3)
                    </a>
                    {/* <!--  Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="feedActionShare8"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to
                          News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--  Card share action dropdown END --> */}
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="/">
                      {" "}
                      <i className="bi bi-send-fill pe-1"></i>Send
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed react END --> */}
              </div>
              {/* <!--  Card Footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}

            {/* <!--  Card feed item START --> */}
            <div className="card">
              {/* <!--  Card header START --> */}
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    {/* <!--  Avatar --> */}
                    <div className="avatar me-2">
                      <a href="/">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/logo/11.svg"
                          alt=""
                        />{" "}
                      </a>
                    </div>
                    {/* <!--  Info --> */}
                    <div>
                      <h6 className="card-title mb-0">
                        {" "}
                        <a href="/"> Webestica </a>
                      </h6>
                      <p className="small mb-0">9 December at 10:00 </p>
                    </div>
                  </div>
                  {/* <!--  Card share action START --> */}
                  <div className="dropdown">
                    <a
                      href="/"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                      id="cardShareAction8"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </a>
                    {/* <!--  Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction8"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                          ferguson{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-flag fa-fw pe-2"></i>Report post
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--  Card share action START --> */}
                </div>
              </div>
              {/* <!--  Card header START --> */}

              {/* <!--  Card body START --> */}
              <div className="card-body">
                <p className="mb-0">
                  The next-generation blog, news, and magazine theme for you to
                  start sharing your content today with beautiful aesthetics!
                  This minimal &amp; clean Bootstrap 5 based theme is ideal for
                  all types of sites that aim to provide users with content.{" "}
                  <a href="/"> #bootstrap</a> <a href="/"> #webestica </a>{" "}
                  <a href="/"> #getbootstrap</a> <a href="/"> #bootstrap5 </a>
                </p>
              </div>
              {/* <!--  Card body END --> */}
              <a href="/">
                {" "}
                <img src="assets/images/post/3by2/03.jpg" alt="" />{" "}
              </a>
              {/* <!--  Card body START --> */}
              <div className="card-body position-relative bg-light">
                <a href="/" className="small stretched-link">
                  https://blogzine.webestica.com
                </a>
                <h6 className="mb-0 mt-1">
                  Blogzine - Blog and Magazine Bootstrap 5 Theme
                </h6>
                <p className="mb-0 small">
                  Bootstrap based News, Magazine and Blog Theme
                </p>
              </div>
              {/* <!--  Card body END --> */}

              {/* <!--  Card Footer START --> */}
              <div className="card-footer py-3">
                {/* <!--  Feed react START --> */}
                <ul className="nav nav-fill nav-stack small">
                  <li className="nav-item">
                    <a className="nav-link mb-0 active" href="/">
                      {" "}
                      <i className="bi bi-heart pe-1"></i>Liked (56)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="/">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                  {/* <!--  Card share action dropdown START --> */}
                  <li className="nav-item dropdown">
                    <a
                      href="/"
                      className="nav-link mb-0"
                      id="feedActionShare7"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                      (3)
                    </a>
                    {/* <!--  Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="feedActionShare7"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to
                          News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--  Card share action dropdown END --> */}
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="/">
                      {" "}
                      <i className="bi bi-send-fill pe-1"></i>Send
                    </a>
                  </li>
                </ul>
                {/* <!--  Feed react END --> */}
              </div>
              {/* <!--  Card Footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}

            {/* <!--  Card feed item START --> */}
            <div className="card">
              {/* <!--  Card header START --> */}
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    {/* <!--  Avatar --> */}
                    <div className="avatar avatar-story me-2">
                      <a href="/">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/12.jpg"
                          alt=""
                        />{" "}
                      </a>
                    </div>
                    {/* <!--  Info --> */}
                    <div>
                      <div className="nav nav-divider">
                        <h6 className="nav-item card-title mb-0">
                          {" "}
                          <a href="/"> Joan Wallace </a>
                        </h6>
                        <span className="nav-item small"> 1day</span>
                      </div>
                      <p className="mb-0 small">12 January at 12:00</p>
                    </div>
                  </div>
                  {/* <!--  Card feed action dropdown START --> */}
                  <div className="dropdown">
                    <a
                      href="/"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                      id="cardFeedAction2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </a>
                    {/* <!--  Card feed action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardFeedAction2"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                          ferguson{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-flag fa-fw pe-2"></i>Report post
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--  Card feed action dropdown END --> */}
                </div>
              </div>
              {/* <!--  Card header END --> */}
              {/* <!--  Card body START --> */}
              <div className="card-body pb-0">
                <p>
                  Comfort reached gay perhaps chamber his{" "}
                  <a href="/">#internship</a> <a href="/">#hiring</a>{" "}
                  <a href="/">#apply</a>{" "}
                </p>
              </div>
              {/* <!--  Card img --> */}
              <div className="overflow-hidden fullscreen-video w-100">
                {/* <!--  HTML video START --> */}
                {/* <div className="player-wrapper overflow-hidden">
                <div tabIndex="0" className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported plyr__poster-enabled plyr--is-touch"><div className="plyr__controls"><button className="plyr__controls__item plyr__control" type="button" data-plyr="play" aria-label="Play"><svg className="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-pause"></use></svg><svg className="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="label--pressed plyr__sr-only">Pause</span><span className="label--not-pressed plyr__sr-only">Play</span></button><div className="plyr__controls__item plyr__progress__container"><div className="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" autocomplete="off" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="10.048" aria-valuenow="0" id="plyr-seek-5164" aria-valuetext="00:00 of 00:00" style="--value:0%;"><progress className="plyr__progress__buffer" min="0" max="100" value="0" role="progressbar" aria-hidden="true">% buffered</progress><span className="plyr__tooltip">00:00</span></div></div><div className="plyr__controls__item plyr__time--current plyr__time" aria-label="Current time">00:10</div><div className="plyr__controls__item plyr__volume"><button type="button" className="plyr__control" data-plyr="mute"><svg className="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg className="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-volume"></use></svg><span className="label--pressed plyr__sr-only">Unmute</span><span className="label--not-pressed plyr__sr-only">Mute</span></button><input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" id="plyr-volume-5164" aria-valuetext="100.0%" style="--value:100%;"></div><button className="plyr__controls__item plyr__control" type="button" data-plyr="captions"><svg className="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-captions-on"></use></svg><svg className="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-captions-off"></use></svg><span className="label--pressed plyr__sr-only">Disable captions</span><span className="label--not-pressed plyr__sr-only">Enable captions</span></button><div className="plyr__controls__item plyr__menu"><button aria-haspopup="true" aria-controls="plyr-settings-5164" aria-expanded="false" type="button" className="plyr__control" data-plyr="settings"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-settings"></use></svg><span className="plyr__sr-only">Settings</span></button><div className="plyr__menu__container" id="plyr-settings-5164" hidden=""><div><div id="plyr-settings-5164-home"><div role="menu"><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true" hidden=""><span>Captions<span className="plyr__menu__value">Disabled</span></span></button><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true" hidden=""><span>Quality<span className="plyr__menu__value">undefined</span></span></button><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true"><span>Speed<span className="plyr__menu__value">Normal</span></span></button></div></div><div id="plyr-settings-5164-captions" hidden=""><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Captions</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu"></div></div><div id="plyr-settings-5164-quality" hidden=""><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Quality</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu"></div></div><div id="plyr-settings-5164-speed" hidden=""><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Speed</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu"><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="0.5"><span>0.5×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="0.75"><span>0.75×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="true" value="1"><span>Normal</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.25"><span>1.25×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.5"><span>1.5×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.75"><span>1.75×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="2"><span>2×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="4"><span>4×</span></button></div></div></div></div></div><button className="plyr__controls__item plyr__control" type="button" data-plyr="pip"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-pip"></use></svg><span className="plyr__sr-only">PIP</span></button><button className="plyr__controls__item plyr__control" type="button" data-plyr="fullscreen"><svg className="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg className="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span className="label--pressed plyr__sr-only">Exit fullscreen</span><span className="label--not-pressed plyr__sr-only">Enter fullscreen</span></button></div><div className="plyr__video-wrapper"><video className="player-html" crossorigin="anonymous" poster="assets/images/videos/poster.jpg" data-poster="assets/images/videos/poster.jpg">
                  <source src="assets/images/videos/video-feed.mp4" type="video/mp4"/>
                </video><div className="plyr__poster" style={{backgroundImage: url(&quot;assets/images/videos/poster.jpg&quot;);"></div></div><div className="plyr__captions"></div><button type="button" className="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="plyr__sr-only">Play</span></button></div>
              </div> */}
                {/* <!--  HTML video END --> */}

                {/* <!--  Plyr resources and browser polyfills are specified in the pen settings --> */}
              </div>
              {/* <!--  Feed react START --> */}
              <div className="card-body pt-0">
                <ul className="nav nav-stack py-3 small">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      {" "}
                      <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                  {/* <!--  Card share action START --> */}
                  <li className="nav-item dropdown ms-sm-auto">
                    <a
                      className="nav-link mb-0"
                      href="/"
                      id="cardShareAction9"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                      (3)
                    </a>
                    {/* <!--  Card share action dropdown menu --> */}
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction9"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to
                          News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!--  Card share action END --> */}
                </ul>
                {/* <!--  Feed react END --> */}

                {/* <!--  Add comment --> */}
                <div className="d-flex mb-3">
                  {/* <!--  Avatar --> */}
                  <div className="avatar avatar-xs me-2">
                    <a href="/">
                      {" "}
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/12.jpg"
                        alt=""
                      />{" "}
                    </a>
                  </div>
                  {/* <!--  Comment box  --> */}
                  {/* <!--  Comment box  --> */}
                  <form className="position-relative w-100">
                    <textarea
                      data-autoresize=""
                      className="form-control pe-4 bg-light"
                      rows="1"
                      placeholder="Add a comment..."
                    ></textarea>
                    {/* <!--  Emoji button --> */}
                  </form>
                </div>
                {/* <!--  Comment wrap START --> */}
                <ul className="comment-wrap list-unstyled mb-0">
                  {/* <!--  Comment item START --> */}
                  <li className="comment-item">
                    <div className="d-flex">
                      {/* <!--  Avatar --> */}
                      <div className="avatar avatar-xs">
                        <a href="/">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ms-2">
                        {/* <!--  Comment by --> */}
                        <div className="bg-light rounded-start-top-0 p-3 rounded">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-1">
                              {" "}
                              <a href="/"> Frances Guerrero </a>
                            </h6>
                            <small className="ms-2">5hr</small>
                          </div>
                          <p className="small mb-0">
                            Preference any astonished unreserved Mrs.
                          </p>
                        </div>
                        {/* <!--  Comment react --> */}
                        <ul className="nav nav-divider py-2 small">
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              Like (3)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              Reply
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/">
                              {" "}
                              View 5 replies
                            </a>
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
                            <a href="/">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/06.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          {/* <!--  Comment by --> */}
                          <div className="ms-2">
                            <div className="bg-light p-3 rounded">
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-1">
                                  {" "}
                                  <a href="/"> Lori Stevens </a>{" "}
                                </h6>
                                <small className="ms-2">2hr</small>
                              </div>
                              <p className="small mb-0">
                                Dependent on so extremely delivered by. Yet ﻿no
                                jokes worse her why.
                              </p>
                            </div>
                            {/* <!--  Comment react --> */}
                            <ul className="nav nav-divider py-2 small">
                              <li className="nav-item">
                                <a className="nav-link" href="/">
                                  {" "}
                                  Like (5)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/">
                                  {" "}
                                  Reply
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* <!--  Comment item END --> */}
                    </ul>
                    {/* <!--  Comment item nested END --> */}
                  </li>
                  {/* <!--  Comment item END --> */}
                </ul>
                {/* <!--  Comment wrap END --> */}
              </div>
              {/* <!--  Card body END --> */}
              {/* <!--  Card footer START --> */}
              <div className="card-footer border-0 pt-0">
                {/* <!--  Load more comments --> */}
                <a
                  href="/"
                  role="button"
                  className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                  data-bs-toggle="button"
                  aria-pressed="true"
                >
                  <div className="spinner-dots me-2">
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                  </div>
                  Load more comments
                </a>
              </div>
              {/* <!--  Card footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}

            {/* <!--  Load more button START --> */}
            <a
              href="/"
              role="button"
              className="btn btn-loader btn-primary-soft"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              <span className="load-text"> Load more </span>
              <div className="load-icon">
                <div className="spinner-grow spinner-grow-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </a>
            {/* <!--  Load more button END --> */}
          </div>
          {/* <!--  Main content END --> */}
      </>
  );
}
