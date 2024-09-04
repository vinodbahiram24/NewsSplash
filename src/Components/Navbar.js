import React, { Component } from "react";
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav  className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <b>News🗲Splash</b>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    General
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              </ul>
            </div>
            <Tooltip title={`${this.props.mode==='light' ? 'Turn off the light':'Turn on the light'}`}>
              <IconButton
                sx={{ mr: 3 }}
                onClick={this.props.toggleMode}
                color="inherit"
              >
                {this.props.mode === "dark" ? (<LightModeIcon/>) : (<DarkModeIcon/>)}
              </IconButton>
              </Tooltip>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
