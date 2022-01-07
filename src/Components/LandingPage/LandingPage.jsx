import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing_page">
      <div className="header">
        <div className="cotainer">
          <div className="row header_row">
            <div className="col-2"></div>
            <div className="col-8 tabs">
              <div className="col-3">
                <button className="nav__btn_home">
                  <span className="nav__home">
                    <i class="fas fa-home"></i>
                  </span>
                  <p>Home</p>
                </button>
                <button className="nav__btn">
                  <span className="nav_use_case">
                    <i class="far fa-chart-bar"></i>
                  </span>
                  <p>Use Case</p>
                </button>
              </div>
              <div className="col-3">
                <button className="nav__btn">
                  <img className="hive__logo" src="hive.JPG"></img>
                  <p>Hive Feature</p>
                </button>
                <button className="nav__btn">
                  <span className="nav_use_case">
                    <i class="far fa-list-alt"></i>
                  </span>
                  <p>Hive Invest</p>
                </button>
              </div>
              <div className="col-3">
                <button className="nav__btn_token">
                  <span className="nav_use_case">
                    <i class="fas fa-chart-pie"></i>
                  </span>
                  <p>Tokenamics</p>
                </button>
                <button className="nav__btn">
                  <span className="nav_use_case">
                    <i class="fas fa-user-friends"></i>
                  </span>
                  Team
                </button>
              </div>
              <div className="col-3">
                <button className="nav__btn">
                  <span className="nav_use_case">
                    <i class="far fa-copy"></i>
                  </span>
                  <p>White Paper</p>
                </button>
                <button className="nav__btn">
                  <span className="nav_use_case">
                    <i class="fas fa-phone"></i>
                  </span>
                  <p>Contact Us</p>
                </button>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
      <div className="header-tab">
        <div className="brand-logo">
            <div className="brand">
                <span>hive</span>
                <div className="vl"></div>
                <span>investments</span>
            </div>
        </div>
        <div className="login-box">
            <button className="signup">Signup</button>
            <button className="login"><span className="user-icon"><i class="far fa-user"></i></span>Login</button>
        </div>
      </div>
      <div className="main">
        <div className="col-xs-6 left">
          <div className="left-top">
            <span className="hive-investment">HIVE INVESTMENT</span>
            <span className="The-best-platform-for-investments">
              The best platform for
              <span className="text-style-1">investments</span>
            </span>
            <span className="The-native-currency-of-Kandyland-KANDY-will-serve-as-a-reserve-currency-backed-by-assets-that-are">
              The native currency of Kandyland, $KANDY will serve as a reserve
              currency backed by assets that are owned
            </span>
            <div className="Rectangle-8">START INVESTING</div>
          </div>
          <div className="left-bottom">
            <div className="customers">
              <span className="num">1</span>
              <span class="Lakh-Customers">Lakh Customers</span>
            </div>
            <div className="tenyears">
              <span className="num">10</span>
              <span className="sym">+</span>
              <span class="Years">Years</span>
            </div>
            <div className="tenstates">
              <span className="num">10</span>
              <span className="sym">+</span>
              <span class="States">States</span>
            </div>
          </div>
        </div>
        <div className="col-xs-6">
          <img src="Group 55.png" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
