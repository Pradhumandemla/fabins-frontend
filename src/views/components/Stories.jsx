export default function Story() {
    return (
        <>
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

        </>
    );
}