import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Comment from "./Comment";
export default function Post(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  function convertInHrsMin(date) {
    const a = new Date(date);
    const b = new Date();
    const milliseconds = b.getTime() - a.getTime();
    let seconds = milliseconds/1000;
    let days = Math.floor(seconds / (3600*24));
    seconds  -= days*3600*24;
    let hrs   = Math.floor(seconds / 3600);
    seconds  -= hrs*3600;
    let mnts = Math.floor(seconds / 60);
    seconds  -= mnts*60;
    let str;
    if (seconds > 0 && seconds < 60) {
      str = seconds+" Seconds";
    }
    if (mnts > 0 && mnts < 60) {
      str = mnts+" Minutes";
    }
    if (hrs > 0 && hrs < 24) {
      str = hrs+" Hrs";
    }
    if (days > 0 && days < 365) {
      str = days+" Days";
    }
    return str;
  }

  return (
    <>
      {/* <!--  Card feed item START --> */}
      <div className="card">
        {/* <!--  Card header START --> */}
        <div className="card-header border-0 pb-0">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              {/* <!--  Avatar --> */}
              <div className="avatar avatar-story me-2">
                <Link href="/">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/04.jpg"
                    alt=""
                  />
                </Link>
              </div>
              {/* <!--  Info --> */}
              <div>
                <div className="nav nav-divider">
                  <h6 className="nav-item card-title mb-0">
                    <Link href="/"> {props.uid.name}</Link>
                  </h6>
                  <span className="nav-item small"> {convertInHrsMin(props.updatedAt)}</span>
                </div>
                <p className="mb-0 small">Web Developer at Fabins</p>
              </div>
            </div>
            {/* <!--  Card feed action dropdown START --> */}
            <div className="dropdown">
              <Link
                href="/"
                className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                id="cardFeedAction"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-ellipsis"></i>
              </Link>
              {/* <!--  Card feed action dropdown menu --> */}
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="cardFeedAction"
              >
                <li>
                  <Link className="dropdown-item" href="/">
                    <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                    ferguson
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    <i className="bi bi-flag fa-fw pe-2"></i>Report post
                  </Link>
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
            {props.desc}
          </p>
          {/* <!-- Card feed grid START --> */}
          <Slider {...settings}>
            {props.img.map((image, index) => (
              <div className="text-center" key={index}>
                <img src={process.env.REACT_APP_BACKEND+'/'+image.path} alt="" />
              </div>
            ))}
          </Slider>
          {/* <!-- Card feed grid END --> */}
          {/* <!--  Feed react START --> */}
          <ul className="nav nav-stack py-3 mt-2 small">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                <i className="bi bi-chat-fill pe-1"></i>Comments (12)
              </Link>
            </li>
            {/* <!--  Card share action START --> */}
            <li className="nav-item dropdown ms-sm-auto">
              <Link
                className="nav-link mb-0"
                href="/"
                id="cardShareAction"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                (3)
              </Link>
              {/* <!--  Card share action dropdown menu --> */}
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="cardShareAction"
              >
                <li>
                  <Link className="dropdown-item" href="/">
                    <i className="bi bi-envelope fa-fw pe-2"></i>Send via Direct
                    Message
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                    Bookmark
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    <i className="bi bi-link fa-fw pe-2"></i>Copy link to post
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    <i className="bi bi-share fa-fw pe-2"></i>Share post via …
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to
                    News Feed
                  </Link>
                </li>
              </ul>
            </li>
            {/* <!--  Card share action END --> */}
          </ul>
          {/* <!--  Feed react END --> */}
          {/* <Comment/> */}
        </div>
        {/* <!--  Card body END --> */}
        {/* <!--  Card footer START --> */}
        {/* <div className="card-footer border-0 pt-0"> */}
        {/* <!--  Load more comments --> */}
        {/* <Link
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
                        </Link> */}
        {/* </div> */}
        {/* <!--  Card footer END --> */}
      </div>
      {/* <!--  Card feed item END --> */}
    </>
  );
}
