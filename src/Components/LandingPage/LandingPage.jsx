import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing_page">
      {/* <div className="header">
        <a className="text-center" href="">
          <i class=" text-center text-white fas fa-home"></i>
          <p className="text-center text-white">Home</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white far fa-chart-bar"></i>
          <p className="text-center text-white">Use case</p>
        </a>
        <a className="text-center" href="">
          <img className="hive__logo" src="hive.JPG"></img>
          <p className="text-center text-white">Hive feature</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white far fa-list-alt"></i>
          <p className="text-center text-white">Hive Invest</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white fas fa-chart-pie"></i>
          <p className="text-center text-white">Tokenamics</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white fas fa-user-friends"></i>
          <p className="text-center text-white">Team</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white far fa-copy"></i>
          <p className="text-center text-white">White paper</p>
        </a>
        <a className="text-center" href="">
          <i class=" text-center text-white fas fa-phone"></i>
          <p className="text-center text-white">Contact us</p>
        </a>
      </div> */}
      <Sidebar/>
      <section>
        <div className="container">
          <div className="header-tab">
            <div className="brand-logo ">
              <div className="brand">
              <img className="hive-logo" src="hivetext.png" alt="" />
              </div>
            </div>
            <div className="login-box ">
              <button className="signup">Signup</button>
              <button className="login">
                <span className="user-icon">
                  <i class="far fa-user"></i>
                </span>
                Login
              </button>
            </div>
          </div>
          <div className="main container">
            <div className="col-xs-6 left">
              <div className="left-top">
                <span className="hive-investment">HIVE INVESTMENT</span>
                <span className="The-best-platform-for-investments">
                  The best platform for
                  <span className="text-style-1">investments</span>
                </span>
                <span className="The-native-currency-of-Kandyland-KANDY-will-serve-as-a-reserve-currency-backed-by-assets-that-are">
                  The native currency of Kandyland, $KANDY will serve as a
                  reserve currency backed by assets that are owned
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
              <img className="hive-build" src="hive-gif.gif" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
