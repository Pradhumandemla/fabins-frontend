import { Link } from "react-router-dom";
export default function AdsPost() {
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
                                        src="assets/images/logo/12.svg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            {/* <!--  Info --> */}
                            <div>
                                <h6 className="card-title mb-0">
                                    <Link to="/"> Bootstrap: Front-end framework </Link>
                                </h6>
                                <Link to="/" className="mb-0 text-body">
                                    Sponsored
                                    <i
                                        className="fa-solid fa-circle-info ps-1"
                                        data-bs-container="body"
                                        data-bs-toggle="popover"
                                        data-bs-placement="top"
                                        data-bs-content="You're seeing this ad because your activity meets the intended audience of our site."
                                        data-bs-original-title=""
                                        title=""
                                    ></i>
                                </Link>
                            </div>
                        </div>
                        {/* <!--  Card share action START --> */}
                        <div className="dropdown">
                            <Link
                                to="/"
                                className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                id="cardShareAction2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-ellipsis"></i>
                            </Link>
                            {/* <!--  Card share action dropdown menu --> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardShareAction2"
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
                        Quickly design and customize responsive mobile-first sites
                        with Bootstrap.
                    </p>
                </div>
                <img src="assets/images/post/3by2/02.jpg" alt="" />
                {/* <!--  Card body END --> */}
                {/* <!--  Card footer START --> */}
                <div className="card-footer border-0 d-flex justify-content-between align-items-center">
                    <p className="mb-0">Currently v5.1.3 </p>
                    <Link className="btn btn-primary-soft btn-sm" to="/">

                        Download now
                    </Link>
                </div>
                {/* <!--  Card footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}
        </>
    );
}