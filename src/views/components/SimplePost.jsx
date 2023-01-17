import { Link } from "react-router-dom";
export default function SimplePost() {
    return (
        <>
            {/* <!--  Card feed item START --> */}
            <div className="card">
                {/* <!--  Card header START --> */}
                <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            {/* <!--  Avatar --> */}
                            <div className="avatar me-2">
                                <Link href="/">

                                    <img
                                        className="avatar-img rounded-circle"
                                        src="assets/images/logo/13.svg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            {/* <!--  Title --> */}
                            <div>
                                <h6 className="card-title mb-0">

                                    <Link href="/"> Apple Education </Link>
                                </h6>
                                <p className="mb-0 small">9 November at 23:29</p>
                            </div>
                        </div>
                        {/* <!--  Card share action menu --> */}
                        <Link
                            href="/"
                            className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                            id="cardShareAction5"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fa-solid fa-ellipsis"></i>
                        </Link>
                        {/* <!--  Card share action dropdown menu --> */}
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="cardShareAction5"
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
                            <Link className="nav-link active text-secondary" href="/">

                                <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>
                                Louis, Billy and 126 others
                            </Link>
                        </li>
                        <li className="nav-item ms-sm-auto">
                            <Link className="nav-link" href="/">

                                <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                            </Link>
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
                            <Link className="nav-link mb-0 active" href="/">

                                <i className="bi bi-heart pe-1"></i>Liked (56)
                            </Link>
                        </li>
                        {/* <!--  Card share action dropdown START --> */}
                        <li className="nav-item dropdown">
                            <Link
                                href="/"
                                className="nav-link mb-0"
                                id="cardShareAction6"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                                (3)
                            </Link>
                            {/* <!--  Card share action dropdown menu --> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardShareAction6"
                            >
                                <li>
                                    <Link className="dropdown-item" href="/">

                                        <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                                        Direct Message
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
                        {/* <!--  Card share action dropdown END --> */}
                        <li className="nav-item">
                            <Link className="nav-link mb-0" href="/">

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