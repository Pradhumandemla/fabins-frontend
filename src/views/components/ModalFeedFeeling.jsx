// import { Link } from "react-router-dom";
export default function ModalFeedFeeling() {
  return (
    <>
      {/* <!-- Modal create Feed START --> */}
      <div
        className="modal fade"
        id="modalCreateFeed"
        tabindex="-1"
        aria-labelledby="modalLabelCreateFeed"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {/* <!-- Modal feed header START --> */}
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabelCreateFeed">
                Create post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* <!-- Modal feed header END --> */}

            {/* <!-- Modal feed body START --> */}
            <div className="modal-body">
              {/* <!-- Add Feed --> */}
              <div className="d-flex mb-3">
                {/* <!-- Avatar --> */}
                <div className="avatar avatar-xs me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/03.jpg"
                    alt=""
                  />
                </div>
                {/* <!-- Feed box  --> */}
                <form className="w-100">
                  <textarea
                    className="form-control pe-4 fs-3 lh-1 border-0"
                    rows="4"
                    placeholder="Share your thoughts..."
                    autofocus=""
                  ></textarea>
                </form>
              </div>
              {/* <!-- Feed rect START --> */}
              <div className="hstack gap-2">
                <a
                  className="icon-md bg-success bg-opacity-10 text-success rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Photo"
                >
                  {" "}
                  <i className="bi bi-image-fill"></i>{" "}
                </a>
                <a
                  className="icon-md bg-info bg-opacity-10 text-info rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Video"
                >
                  {" "}
                  <i className="bi bi-camera-reels-fill"></i>{" "}
                </a>
                <a
                  className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Events"
                >
                  {" "}
                  <i className="bi bi-calendar2-event-fill"></i>{" "}
                </a>
                <a
                  className="icon-md bg-warning bg-opacity-10 text-warning rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Feeling/Activity"
                >
                  {" "}
                  <i className="bi bi-emoji-smile-fill"></i>{" "}
                </a>
                <a
                  className="icon-md bg-light text-secondary rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Check in"
                >
                  {" "}
                  <i className="bi bi-geo-alt-fill"></i>{" "}
                </a>
                <a
                  className="icon-md bg-primary bg-opacity-10 text-primary rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Tag people on top"
                >
                  {" "}
                  <i className="bi bi-tag-fill"></i>{" "}
                </a>
              </div>
              {/* <!-- Feed rect END --> */}
            </div>
            {/* <!-- Modal feed body END --> */}

            {/* <!-- Modal feed footer --> */}
            <div className="modal-footer row justify-content-between">
              {/* <!-- Select --> */}
              <div className="col-lg-3">
                <div
                  className="choices"
                  data-type="select-one"
                  tabindex="0"
                  role="listbox"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="choices__inner">
                    <select
                      className="form-select js-choice choice-select-text-none choices__input"
                      data-position="top"
                      data-search-enabled="false"
                      hidden=""
                      tabindex="-1"
                      data-choice="active"
                    >
                      <option value="PB">Public</option>
                    </select>
                    <div className="choices__list choices__list--single">
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id="1"
                        data-value="PB"
                        data-custom-properties="null"
                        aria-selected="true"
                      >
                        Public
                      </div>
                    </div>
                  </div>
                  <div
                    className="choices__list choices__list--dropdown"
                    aria-expanded="false"
                  >
                    <div className="choices__list" role="listbox">
                      <div
                        id="choices--mav0-item-choice-1"
                        className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                        role="option"
                        data-choice=""
                        data-id="1"
                        data-value="PV"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                        aria-selected="true"
                      >
                        Custom
                      </div>
                      <div
                        id="choices--mav0-item-choice-2"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id="2"
                        data-value="PV"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Friends
                      </div>
                      <div
                        id="choices--mav0-item-choice-3"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id="3"
                        data-value="PV"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Only me
                      </div>
                      <div
                        id="choices--mav0-item-choice-4"
                        className="choices__item choices__item--choice is-selected choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id="4"
                        data-value="PB"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Public
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Button --> */}
              </div>
              <div className="col-lg-8 text-sm-end">
                <button type="button" className="btn btn-danger-soft me-2">
                  {" "}
                  <i className="bi bi-camera-video-fill pe-1"></i> Live video
                </button>
                <button type="button" className="btn btn-success-soft">
                  Post
                </button>
              </div>
            </div>
            {/* <!-- Modal feed footer --> */}
          </div>
        </div>
      </div>
      {/* <!-- Modal create feed END --> */}
    </>
  );
}
