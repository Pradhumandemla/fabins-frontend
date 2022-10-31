export default function Signup() {
  return (
    <>
      <main>
        {/* <!-- Container START --> */}
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100 py-5">
            {/* <!-- Main content START --> */}
            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              {/* <!-- Sign up START --> */}
              <div className="card card-body rounded-3 p-4 p-sm-5">
                <div className="text-center">
                  {/* <!-- Title --> */}
                  <h1 className="mb-2">Sign up</h1>
                  <span className="d-block">Already have an account? <a href="/">Sign in here</a></span>
                </div>
                {/* <!-- Form START --> */}
                <form className="mt-4">
                  {/* <!-- Email --> */}
                  <div className="mb-3 input-group-lg">
                    <input type="email" className="form-control" placeholder="Enter email" />
                    <small>We'll never share your email with anyone else.</small>
                  </div>
                  {/* <!-- New password --> */}
                  <div className="mb-3 position-relative">
                    {/* <!-- Input group --> */}
                    <div className="input-group input-group-lg">
                      <input className="form-control fakepassword" type="password" id="psw-input" placeholder="Enter new password" />
                      <span className="input-group-text p-0">
                        <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                      </span>
                    </div>
                    {/* <!-- Pswmeter --> */}
                    <div id="pswmeter" className="mt-2 password-strength-meter"><div className="password-strength-meter-score"></div></div>
                    <div className="d-flex mt-1">
                      <div id="pswmeter-message" className="rounded">Write your password...</div>
                      {/* <!-- Password message notification --> */}
                      <div className="ms-auto">
                        <i className="bi bi-info-circle ps-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long." data-bs-original-title="" title=""></i>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Confirm password --> */}
                  <div className="mb-3 input-group-lg">
                    <input className="form-control" type="password" placeholder="Confirm password" />
                  </div>
                  {/* <!-- Keep me signed in --> */}
                  <div className="mb-3 text-start">
                    <input type="checkbox" className="form-check-input" id="keepsingnedCheck" />
                    <label className="form-check-label" for="keepsingnedCheck"> Keep me signed in</label>
                  </div>
                  {/* <!-- Button --> */}
                  <div className="d-grid"><button type="submit" className="btn btn-lg btn-primary">Sign me up</button></div>
                  {/* <!-- Copyright --> */}
                  <p className="mb-0 mt-3 text-center">©2022 <a target="_blank" href="/">Fabins.</a> All rights reserved</p>
                </form>
                {/* <!-- Form END --> */}
              </div>
              {/* <!-- Sign up END --> */}
            </div>
          </div> {/* <!-- Row END --> */}
        </div>
        {/* <!-- Container END --> */}
      </main>
    </>
  );
}
