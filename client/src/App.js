import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: '#eee' }}>

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>

        <div className="container" style={{display: "flex", justifyContent: "center", flexDirection: "column", height: '100%', padding: '10%'}}>
          <h3 class="title is-3">Performance Appraisal Management System</h3>
          <h4 class="title is-4">Login</h4>
                <div className='columns'>
                  <div className='column'>
                  <div class="card">
                      <div class="card-content">
                        <p class="title">
                          Manager
                        </p>                    
                        <input class="input" type="text" placeholder="Username"/>
                        <br/><br/>
                        <input class="input" type="text" placeholder="Password"/>
                        <br/><br/>
                        <button class="button is-primary"> Login </button>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span>
                            or <a href="#">Sign Up</a>
                          </span>
                        </p>
                        <p class="card-footer-item">
                          <span>
                            <a href="#">Forgot Password</a>
                          </span>
                        </p>
                      </footer>
                    </div>
                  </div>
                  <div className='column'>
                  <div class="card">
                      <div class="card-content">
                        <p class="title">
                          Employee
                        </p>                    
                        <input class="input" type="text" placeholder="Username"/>
                        <br/><br/>
                        <input class="input" type="text" placeholder="Password"/>
                        <br/><br/>
                        <button class="button is-primary"> Login </button>
                      </div>
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <span>
                            or <a href="/Ehome">Sign Up</a>
                          </span>
                        </p>
                        <p class="card-footer-item">
                          <span>
                            <a href="#">Forgot Password</a>
                          </span>
                        </p>
                      </footer>
                    </div>
                    </div>

            </div>
        </div>

      </div>
    );
  }
}

export default App;
