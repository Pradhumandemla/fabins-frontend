// import { Link } from "react-router-dom";
export default function ModalFeedPhoto() {
  return (
    <>
      {/* <!-- Modal create Feed photo START --> */}
      <div
        className="modal fade"
        id="feedActionPhoto"
        tabIndex="-1"
        aria-labelledby="feedActionPhotoLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <!-- Modal feed header START --> */}
            <div className="modal-header">
              <h5 className="modal-title" id="feedActionPhotoLabel">
                Add post photo
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
                    <i className="bi bi-images display-3"></i>
                    <p>Drag here or click to upload photo.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Dropzone photo END --> */}
            </div>
            {/* <!-- Modal feed body END --> */}

            {/* <!-- Modal feed footer --> */}
            <div className="modal-footer ">
              {/* <!-- Button --> */}
              <button
                type="button"
                className="btn btn-danger-soft me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-success-soft">
                Post
              </button>
            </div>
            {/* <!-- Modal feed footer --> */}
          </div>
        </div>
      </div>
      {/* <!-- Modal create Feed photo END --> */}
    </>
  );
}
