import React from "react";
import "../mystyles.css";
import { PieChart } from 'react-minimal-pie-chart';

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

        <div className="container" style={{  padding: '4%', display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
          
        <div class="columns">
            <div class="column is-half" style={{backgroundColor: '#234'}}>
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            Progression
                        </p>
                        <a href="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </a>
                    </header>
                    <div class="card-content" style={{padding: 0}}>
                        <div class="content" style={{height: 300}}>
                            <center>
                                <PieChart
                                    style = {{width: "40%"}}
                                    label =  {(labelRenderProps) => { return labelRenderProps.dataIndex.toString() }}
                                    labelStyle = {{ fill: "#fff"}}
                                    data={[
                                        { title: 'One', value: 10, color: '#AAB6F7', title: "Hello" },
                                        { title: 'Two', value: 15, color: '#CC3CF7', title: "Hello" },
                                        { title: 'Three', value: 20, color: '#BF69CF', title: "Hello" },
                                    ]}
                                />
                            </center>
                            <br/>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <h5 class="title is-7"> Total Tasks: 6 </h5>
                                <h5 class="title is-7"> Finished Tasks: 9 </h5>
                                <h5 class="title is-7"> Active tasks: 9 </h5>
                                <h5 class="title is-7"> Overdue Tasks: 9 </h5>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Save</a>
                        <a href="#" class="card-footer-item">Edit</a>
                        <a href="#" class="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
            <div class="column is-half" style={{backgroundColor: '#234'}}>
            <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                             My Tasks
                        </p>
                        <a href="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </a>
                    </header>
                    <div class="card-content" style={{padding: 0}}>
                        <div class="content" style={{height: 300}}>
                            <ul style={{height: '100%', overflow: 'hidden', overflowY: 'scroll', margin: 0}}>
                                <li>Link 1</li>
                                <li>Link 2</li>
                                <li>Link 3</li>
                                <li>Link 4</li>
                                <li>Link 5</li>
                                <li>Link 6</li> 
                                <li>Link 7</li> 
                                <li>Link 8</li>
                                <li>Link 9</li>
                                <li>Link 10</li>
                                <li>Link 11</li>
                                <li>Link 13</li>
                                <li>Link 13</li>
                                <li>Link 9</li>
                                <li>Link 10</li>
                                <li>Link 11</li>
                                <li>Link 13</li>
                                <li>Link 13</li>
                            </ul>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Save</a>
                        <a href="#" class="card-footer-item">Edit</a>
                        <a href="#" class="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
        </div>

        <div class="columns">
            <div class="column is-half" style={{backgroundColor: '#234'}}>
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        Component
                        </p>
                        <a href="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </a>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Save</a>
                        <a href="#" class="card-footer-item">Edit</a>
                        <a href="#" class="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
            <div class="column is-half" style={{backgroundColor: '#234'}}>
                 <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        Component
                        </p>
                        <a href="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </a>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Save</a>
                        <a href="#" class="card-footer-item">Edit</a>
                        <a href="#" class="card-footer-item">Delete</a>
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
