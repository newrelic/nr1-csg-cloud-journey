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
import { navigation } from 'nr1';
/** local */
/** 3rd party */


/**
 * Foundation - Component
 * Foundation page: 2 tabs (for now, we need to be able to easily add more ourselves)
 * SRE: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEVXdORE14TlEiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IjU2RkU1MDhGLTAzREItMjIwRi0zMTMzLTEzRkU0NEE2NDlFRSI=
 * WAF: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZERXdNVEkxTWprIiwiaXNUZW1wbGF0ZUVtcHR5IjpmYWxzZX0=&state=IjZFMTVDOERFLUUwNTktQ0IzNi02OUI4LTlCMzdBRTJGOTM4MSI=
 */
export default class Foundation extends React.Component {
  static propTypes = {}; //propTypes

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
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
      <div className="inside-container">
        <div className="tabs-sub">
          <ul className="tabs">
            <li className={currentTab === 1 ? 'active' : ''}>
              <a href="#sub-tab-1" className="u-unstyledLink" onClick={e => this.switchTab(e, 1)}>SRE</a>
            </li>
            <li className={currentTab === 2 ? 'active' : ''}>
              <a href="#sub-tab-2" className="u-unstyledLink" onClick={e => this.switchTab(e, 2)}>WAF</a>
            </li>
          </ul>
        </div>
        <div className="content-main">
          <div id="sub-tab-1" className={currentTab === 1 ? 'show' : ''}>
            SRE dashboard goes here
          </div>
          <div id="sub-tab-2" className={currentTab === 2 ? 'show' : ''}>
            WAF dashboard goes here
          </div>
        </div>
      </div>
    );
  } //render
}//Foundation
