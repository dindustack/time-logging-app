import React from "react";

class TimersDashboard extends React.Component {
  render() {
    return (
      <section className="d-flex align-items-center pt-5 pt-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <h2 className="mb-5 text-center">Time Logging App</h2>
              <EditableTimerList />
              <ToggleableTimerForm isOpen={true} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class EditableTimerList extends React.Component {
  render() {
    return (
      <>
        <EditableTimer
          title="Learn to sing"
          project="Singing"
          elapsed="8986300"
          runningSince={null}
          editFormOpen={false}
        />

        <EditableTimer
          title="Learn to drive"
          project="Driving"
          elapsed="3890985"
          runningSince={null}
          editFormOpen={true}
        />
      </>
    );
  }
}

class EditableTimer extends React.Component {
  render() {
    if (this.props.editFormOpen) {
      return(
      <Timer 
        title={this.props.title} 
        project={this.props.project} 
      />
      );
    } else {
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }
  }
}

class Timer extends React.Component {
  render() {
    const elapsedString = window.helpers.renderElapsedString(this.props.elapsed);
    return (
      <>
        <div className="card mb-3">
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-12">
                <h4 className="">{this.props.title}</h4>
                <span className="text-muted ml-0">{this.props.project}</span>
              </div>
            </div>

            <div className="row justify-content-center">
              <h1 className="">{elapsedString}</h1>
            </div>

            <div className="row justify-content-end mb-3">
              <div className="d-flex">
                <button className="btn">
                  <svg
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#dc3545"
                    width="26px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#0fcc98"
                  width="26px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <button className="btn btn-outline-primary btn-block">
                  Start
                </button>
              </div>
            </div>
            {/* <!-- End Row --> */}
          </div>
        </div>
      </>
    );
  }
}

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? "Update" : "Create";
    return (
      <>
        <div className="card mb-3">
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={this.props.title}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Project
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={this.props.project}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6 mb-3">
                <button className="btn btn-outline-primary btn-block">
                  {submitText}
                </button>
              </div>
              <div className="col-6 mb-3">
                <button className="btn btn-outline-danger btn-block">
                  Cancel
                </button>
              </div>
            </div>
            {/* <!-- End Row --> */}
          </div>
        </div>
      </>
    );
  }
}

class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return <TimerForm />;
    } else {
      return (
        <>
          <div className="mb-3">
            <a
              href="#action"
              className="btn btn-block btn-white btn-outline-secondary"
            >
              <svg
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="26px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
          </div>
        </>
      );
    }
  }
}

export default TimersDashboard;
