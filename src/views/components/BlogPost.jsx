import { Link } from "react-router-dom";

export default function BlogPost() {
    return (
        <>
            {/* <!--  Card feed item START --> */}
            <div className="card">
                {/* <!--  Card header START --> */}
                <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            {/* <!--  Avatar --> */}
                            <div className="avatar me-2">
                                <Link to="/">

                                    <img
                                        className="avatar-img rounded-circle"
                                        src="assets/images/logo/11.svg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            {/* <!--  Info --> */}
                            <div>
                                <h6 className="card-title mb-0">

                                    <Link to="/"> Fabins </Link>
                                </h6>
                                <p className="small mb-0">9 December at 10:00 </p>
                            </div>
                        </div>
                        {/* <!--  Card share action START --> */}
                        <div className="dropdown">
                            <Link
                                to="/"
                                className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                id="cardShareAction8"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-ellipsis"></i>
                            </Link>
                            {/* <!--  Card share action dropdown menu --> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardShareAction8"
                            >
                                <li>
                                    <Link className="dropdown-item" to="/">

                                        <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">

                                        <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                                        ferguson
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">

                                        <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">

                                        <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">

                                        <i className="bi bi-flag fa-fw pe-2"></i>Report post
                                    </Link>
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
                        all types of sites that aim to provide users with content.
                        <Link to="/"> #bootstrap</Link> <Link to="/"> #Fabins </Link>
                        <Link to="/"> #getbootstrap</Link> <Link to="/"> #bootstrap5 </Link>
                    </p>
                </div>
                {/* <!--  Card body END --> */}
                <Link to="/">

                    <img src="assets/images/post/3by2/03.jpg" alt="" />
                </Link>
                {/* <!--  Card body START --> */}
                <div className="card-body position-relative bg-light">
                    <Link to="/" className="small stretched-link">
                        https://blogzine.Fabins.com
                    </Link>
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
                            <Link className="nav-link mb-0 active" to="/">

                                <i className="bi bi-heart pe-1"></i>Liked (56)
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mb-0" to="/">

                                <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                            </Link>
                        </li>
                        {/* <!--  Card share action dropdown START --> */}
                        <li className="nav-item dropdown">
                            <Link
                                to="/"
                                className="nav-link mb-0"
                                id="feedActionShare7"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                                (3)
                            </Link>
                            {/* <!--  Card share action dropdown menu --> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="feedActionShare7"
                            >
                                <li>
                                    <Link className="dropdown-item" to="/">

                                        <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                                        Direct Message
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">

                                        <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                                        Bookmark
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">

                                        <i className="bi bi-link fa-fw pe-2"></i>Copy link to post
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">

                                        <i className="bi bi-share fa-fw pe-2"></i>Share post via …
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">

                                        <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to
                                        News Feed
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* <!--  Card share action dropdown END --> */}
                        <li className="nav-item">
                            <Link className="nav-link mb-0" to="/">

                                <i className="bi bi-send-fill pe-1"></i>Send
                            </Link>
                        </li>
                    </ul>
                    {/* <!--  Feed react END --> */}
                </div>
                {/* <!--  Card Footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}
        </>
    );
}