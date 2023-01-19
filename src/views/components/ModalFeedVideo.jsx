// import { Link } from "react-router-dom";
export default function ModalFeedVideo() {
  return (
    <>
      {/* <!-- Modal create Feed video START --> */}
      <div
        className="modal fade"
        id="feedActionVideo"
        tabIndex="-1"
        aria-labelledby="feedActionVideoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <!-- Modal feed header START --> */}
            <div className="modal-header">
              <h5 className="modal-title" id="feedActionVideoLabel">
                Add post video
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
                    rows="2"
                    placeholder="Share your thoughts..."
                  ></textarea>
                </form>
              </div>

              {/* <!-- Dropzone photo START --> */}
              <div>
                <label className="form-label">Upload attachment</label>
                <div
                  className="dropzone dropzone-default card shadow-none dz-clickable"
                  data-dropzone='{"maxFiles":2}'
                >
                  <div className="dz-message">
                    <i className="bi bi-camera-reels display-3"></i>
                    <p>Drag here or click to upload video.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Dropzone photo END --> */}
            </div>
            {/* <!-- Modal feed body END --> */}

            {/* <!-- Modal feed footer --> */}
            <div className="modal-footer">
              {/* <!-- Button --> */}
              <button type="button" className="btn btn-danger-soft me-2">
                <i className="bi bi-camera-video-fill pe-1"></i> Live video
              </button>
              <button type="button" className="btn btn-success-soft">
                Post
              </button>
            </div>
            {/* <!-- Modal feed footer --> */}
          </div>
        </div>
      </div>
      {/* <!-- Modal create Feed video END --> */}
    </>
  );
}
