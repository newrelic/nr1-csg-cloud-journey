/**
 *
 *
 * @file
 * @author
 */
/** core */
import React from 'react';
import PropTypes from 'prop-types';
/** nr1 */
import {
  Spinner
} from 'nr1';
/** local */
import Foundation from './components/foundation';
import Migration from './components/migration';
import Modernization from './components/modernization';
import Optimization from './components/optimization';
import ThrivingDigitalBusiness from './components/thriving-digital-business';
/** 3rd party */


/**
 * CloudJourney - Component
 * Main page (splash page): The 5 navigation options of Foundation, Migration, Optimization, Modernization, Thriving Business
 */
export default class CloudJourney extends React.Component {
  static propTypes = {
    nerdletUrlState: PropTypes.object,
    launcherUrlState: PropTypes.object,
  }; //propTypes

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1
    };

    this.switchTab = this.switchTab.bind(this);
  }; //constructor

  switchTab(e, id) {
    e.preventDefault();

    this.setState({
      currentTab: id,
    });
  }

  /** Lifecycle render */
  render() {
    const { currentTab } = this.state;
    
    return(
      <div className="container">
        <div className="tabs-main">
          <ul className="tabs">
            <li className={currentTab === 1 ? 'active' : ''}>
              <a href="#main-tab-1" className="u-unstyledLink" onClick={e => this.switchTab(e, 1)}>Foundation</a>
            </li>
            <li className={currentTab === 2 ? 'active' : ''}>
              <a href="#main-tab-2" className="u-unstyledLink" onClick={e => this.switchTab(e, 2)}>Migration</a>
            </li>
            <li className={currentTab === 3 ? 'active' : ''}>
              <a href="#main-tab-3" className="u-unstyledLink" onClick={e => this.switchTab(e, 3)}>Optimization</a>
            </li>
            <li className={currentTab === 4 ? 'active' : ''}>
              <a href="#main-tab-4" className="u-unstyledLink" onClick={e => this.switchTab(e, 4)}>Modernization</a>
            </li>
            <li className={currentTab === 5 ? 'active' : ''}>
              <a href="#main-tab-5" className="u-unstyledLink" onClick={e => this.switchTab(e, 5)}>Thriving Business</a>
            </li>
          </ul>
        </div>
        <div className="content-main">
          <div id="main-tab-1" className={currentTab === 1 ? 'show' : ''}>
            <Foundation />
          </div>
          <div id="main-tab-2" className={currentTab === 2 ? 'show' : ''}>
            <Migration />
          </div>
          <div id="main-tab-3" className={currentTab === 3 ? 'show' : ''}>
            <Optimization />
          </div>
          <div id="main-tab-4" className={currentTab === 4 ? 'show' : ''}>
            <Modernization />
          </div>
          <div id="main-tab-5" className={currentTab === 5 ? 'show' : ''}>
            <ThrivingDigitalBusiness />
          </div>
        </div>
      </div>
    );
  } //render
}//CloudJourney
