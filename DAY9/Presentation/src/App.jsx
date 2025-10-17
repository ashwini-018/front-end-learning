import React from 'react';

// This is a functional React component.
function App() {
  return (
    // The main container for our app
    <div className="App">

      {/* 1. Bootstrap Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My React App</a>
        </div>
      </nav>

      {/* 2. Main Content Area */}
      <main className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">

            {/* A Bootstrap Card Component */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Welcome! 👋</h5>
                <p className="card-text">
                  This is a simple application built with React and styled with Bootstrap.
                  You can start editing this content in the <code>src/App.js</code> file.
                </p>
                <a href="#" className="btn btn-primary">Get Started</a>
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}

export default App;