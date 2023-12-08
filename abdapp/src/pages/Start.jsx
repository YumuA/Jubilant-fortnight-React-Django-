import React from "react";
import { Link } from "react-router-dom";
import '../styles/sass/components/Start.sass';

function Start() {
  return (
    <section className="custom-section">
      <div className="custom-container">
        <section className="custom-subsection">
          <div className="custom-rounded-container">
            <h2 className="custom-title">WELCOME</h2>
            <div className="custom-text-container">
              <div className="custom-inner-container">
                <div className="custom-grid">
                  <h1 className="custom-subtitle">This is the project of Kevin Santiago Rojas Rosas, Engineer of systems</h1>
                  <Link to='/townhall' className="link">
                    <button className="custom-button">Press here to continue</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Start;
