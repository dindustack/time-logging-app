import React from "react";
import { v4 as uuid } from "uuid";

class TimersDashboard extends React.Component {
  state = {
    timers: [],
  };

  componentDidMount() {
    this.loadTimersFromServer();
    setInterval(this.loadTimersFromServer, 5000);
  }

  loadTimersFromServer = () => {
    window.client.getTimers((serverTimers) =>
      this.setState({ timers: serverTimers })
    );
  };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };

  createTimer = (timer) => {
    const t = window.helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
    window.client.createTimer(t);
  };

  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
    window.client.updateTimer(attrs);
  };

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter((t) => t.id !== timerId),
    });
    window.client.deleteTimer({ id: timerId });
  };

  startTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });
    window.client.startTimer({ id: timerId, start: now });
  };

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
    });
    window.client.stopTimer({ id: timerId, stop: now });
  };

  render() {
    <EditableTimerList
      timers={this.state.timers}
      onFormSubmit={this.handleEditFormSubmit}
    />;
    return (
      <section className="d-flex align-items-center pt-5 pt-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <h2 className="mb-5 text-center">Time Logging App</h2>
              <EditableTimerList
                timers={this.state.timers}
                onFormSubmit={this.handleEditFormSubmit}
                onTrashClick={this.handleTrashClick}
                onStartClick={this.handleStartClick}
                onStopClick={this.handleStopClick}
              />
              <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
        onStartClick={this.props.onStartClick}
        onStopClick={this.props.onStopClick}
      />
    ));
    return (
      <>
        <div id="timers">{timers}</div>
      </>
    );
  }
}

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  };
  handleEditClick = () => {
    this.openForm();
  };
  handleFormClose = () => {
    this.closeForm();
  };
  handleSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };
  closeForm = () => {
    this.setState({ editFormOpen: false });
  };
  openForm = () => {
    this.setState({ editFormOpen: true });
  };
  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
          onStartClick={this.props.onStartClick}
          onStopClick={this.props.onStopClick}
        />
      );
    }
  }
}

class Timer extends React.Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };

  render() {
    const elapsedString = window.helpers.renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    );
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
                <button className="btn" onClick={this.handleTrashClick}>
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

                <button className="btn" onClick={this.props.onEditClick}>
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
                </button>
              </div>
            </div>

            <TimerActionButton
              timerIsRunning={!!this.props.runningSince}
              onStartClick={this.handleStartClick}
              onStopClick={this.handleStopClick}
            />

            {/* <!-- End Row --> */}
          </div>
        </div>
      </>
    );
  }
}

class TimerActionButton extends React.Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <div className="row mb-3">
          <div className="col-12">
            <button
              className="btn btn-outline-danger btn-block"
              onClick={this.props.onStopClick}
            >
              Stop
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row mb-3">
          <div className="col-12">
            <button
              className="btn btn-outline-success btn-block"
              onClick={this.props.onStartClick}
            >
              Start
            </button>
          </div>
        </div>
      );
    }
  }
}

class TimerForm extends React.Component {
  state = {
    title: this.props.title || "",
    project: this.props.project || "",
  };
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handleProjectChange = (e) => {
    this.setState({ project: e.target.value });
  };
  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project,
    });
  };

  render() {
    const submitText = this.props.id ? "Update" : "Create";
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
                    value={this.state.title}
                    className="form-control"
                    onChange={this.handleTitleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Project
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.project}
                    onChange={this.handleProjectChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6 mb-3">
                <button
                  className="btn btn-outline-primary btn-block"
                  onClick={this.handleSubmit}
                >
                  {submitText}
                </button>
              </div>
              <div className="col-6 mb-3">
                <button
                  className="btn btn-outline-danger btn-block"
                  onClick={this.props.onFormClose}
                >
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
  state = {
    isOpen: false,
  };
  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <>
          <div className="mb-3">
            <button
              className="btn btn-block btn-white btn-outline-secondary"
              onClick={this.handleFormOpen}
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
            </button>
          </div>
        </>
      );
    }
  }
}

export default TimersDashboard;
