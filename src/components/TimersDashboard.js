import React from "react";

class TimersDashboard extends React.Component {
  render() {
    return (
      <section className="d-flex align-items-center pt-5 pt-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <h2 className="mb-5">Time Logging App</h2>
              {/* <EditableTimerList /> */}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex mb-5">
                    <div className="">
                      <h4 className="text-wrap">Front mobile app launch</h4>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-4">
                      {/* <!-- Stats --> */}
                      <div className="text-center">
                        <span className="d-block h4 mb-1">20</span>
                        <span className="d-block font-size-sm">Tasks</span>
                      </div>
                      {/* <!-- End Stats --> */}
                    </div>

                    <div className="col-4">
                      {/* <!-- Stats --> */}
                      <div className="text-center">
                        <span className="d-block h4 mb-1">0</span>
                        <span className="d-block font-size-sm">Complete</span>
                      </div>
                      {/* <!-- End Stats --> */}
                    </div>

                    <div className="col-4">
                      {/* <!-- Stats --> */}
                      <div className="text-center">
                        <span className="d-block h4 mb-1">0</span>
                        <span className="d-block font-size-sm">Completed</span>
                      </div>
                      {/* <!-- End Stats --> */}
                    </div>
                  </div>
                  {/* <!-- End Row --> */}

                  {/* <!-- End Progress --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// class EditableTimerList extends React.Component {
//     render() {
//         return (
//             <div id="timers">
//                 <EditableTimer 
//                   title='Learn to sing'
//                   project='Singing'
//                   elapsed='8986300'
//                   runningSince={null}
//                   editFormOpen={false}
//                 />

//                 <EditableTimer 
//                   title='Learn to drive'
//                   project='Driving'
//                   elapsed='3890985'
//                   runningSince={null}
//                   editFormOpen={true}
//                 />

//             </div>
//         )
//     }
// }

// class EditableTimer extends React.Component {
//     render() {
//         if (this.props.editFormOpen) {
//             return (
//                 <div>Hello World</div>
//             )
//         }
//     }

// }

export default TimersDashboard;