import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
  state = {
    activeItem: 0,
  };

  componentDidMount() {
    const pathname = window.location.pathname;
    switch (pathname) {
      case '/home':
        this.setState({ activeItem: 0 });
        break;
      case '/business':
        this.setState({ activeItem: 1 });
        break;
      case '/entertainment':
        this.setState({ activeItem: 2 });
        break;
      case '/health':
        this.setState({ activeItem: 4 });
        break;
      case '/science':
        this.setState({ activeItem: 5 });
        break;
      case '/sports':
        this.setState({ activeItem: 6 });
        break;
      case '/technology':
        this.setState({ activeItem: 7 });
        break;
      default:
        this.setState({ activeItem: 0 });
    }
  }

  handleClick = (index) => {
    this.setState({ activeItem: index });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <nav className="navbar  navbar-expand-lg bg-dark navbar-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={() => this.handleClick(0)}>News corner</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li id='li' className={`nav-item ${activeItem === 0 ? 'active' : ''}`} onClick={() => this.handleClick(0)}><Link className='nav-link' aria-current="page" to="/home">Home<div className={`${activeItem === 0 ? 'rounded bg-danger' : ''}`} style={{backgroundColor:"#212529",height:"3px", width:activeItem === 0 ? '100%' : '0',marginTop:"3px",transition: "width 0.15s ease-out, margin-left 0.15s ease-out"}}></div></Link></li>
                    <li className={`nav-item ${activeItem === 1 ? 'active' : ''}`} onClick={() => this.handleClick(1)}><Link className="nav-link" to="/business">Business<div className={`${activeItem === 1 ? 'rounded bg-danger' : ''}`} style={{backgroundColor:"#212529",height:"3px", width: activeItem === 1 ? '100%' : '0',marginTop:"3px",transition: "width 0.15s ease-out, margin-left 0.15s ease-out"}}></div></Link></li>
                    <li className={`nav-item ${activeItem === 2 ? 'active' : ''}`} onClick={() => this.handleClick(2)}><Link className="nav-link" to="/entertainment">Entertainment<div className={`${activeItem === 2 ? 'rounded bg-danger' : ''}`} style={{backgroundColor:"#212529",height:"3px", width: activeItem === 2 ? '100%' : '0',marginTop:"3px",transition: "width 0.15s ease-out, margin-left 0.15s ease-out"}}></div></Link></li>
                    <li className={`nav-item ${activeItem === 4 ? 'active' : ''}`} onClick={() => this.handleClick(4)}><Link className="nav-link" to="/health">Health<div className={`${activeItem === 4 ? 'rounded bg-danger' : ''}`} style={{backgroundColor:"#212529",height:"3px", width: activeItem === 4 ? '100%' : '0',marginTop:"3px",transition: "width 0.15s ease-out, margin-left 0.15s ease-out"}}></div></Link></li>
                    <li className={`nav-item ${activeItem === 5 ? 'active' : ''}`} onClick={() => this.handleClick(5)}><Link className="nav-link" to="/science">Science<div className={`${activeItem === 5 ? 'rounded bg-danger' : ''}`} style={{backgroundColor:"#212529",height:"3px", width: activeItem === 5 ? '100%' : '0',marginTop:"3px",transition: "width 0.15s ease-out, margin-left 0.15s ease-out"}}></div></Link></li>
                    <li className={`nav-item ${activeItem === 6 ? 'active' : ''}`} onClick={() => this.handleClick(6)}><Link className="nav-link" to="/sports">Sports<div className={`${activeItem === 6 ? 'rounded bg-danger' : ''}`} style={{backgroundColor:"#212529",height:"3px", width: activeItem === 6 ? '100%' : '0',marginTop:"3px",transition: "width 0.15s ease-out, margin-left 0.15s ease-out"}}></div></Link></li>
                    <li className={`nav-item ${activeItem === 7 ? 'active' : ''}`} onClick={() => this.handleClick(7)}><Link className="nav-link" to="/technology">Technology<div className={`${activeItem === 7 ? 'rounded bg-danger' : ''}`} style={{backgroundColor:"#212529",height:"3px", width: activeItem === 7 ? '100%' : '0',marginTop:"3px",transition: "width 0.15s ease-out, margin-left 0.15s ease-out"}}></div></Link></li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
