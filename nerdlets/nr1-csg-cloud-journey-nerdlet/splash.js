//export default class Nr1CsgCloudJourney extends React.Component {
/**
 * Main entrypoint into Sea of Green funtionality
 *
 * @file This files defines the core sea of green entry nerdlet for launcher
 * @author
 */
/** core */
import React from 'react';
import PropTypes from 'prop-types';
/** nr1 */
import { AccountPicker } from 'nr1';
/** local */
import splashImage from './cloud_journey_no_text.png'
import CloudJourney from './components/cloud-journey';
/** 3rd party */


// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class Splash extends React.Component {
  static propTypes = {
    nerdletUrlState: PropTypes.object,
    launcherUrlState: PropTypes.object,
    accountId: PropTypes.number,
  }; //propTypes

  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
      tabIndex: 1,
      accountId: null,
    };

    this.mapClickHandler = this.mapClickHandler.bind(this);
    this.onChangeAccount = this.onChangeAccount.bind(this);
  }; //constructor

  mapClickHandler(e, tabIndex) {
    if (this.state.accountId == null) {
      alert("Please select an account from the dropdown menu.");
      return;
    }
    e.preventDefault();
    this.setState({
      tabIndex: tabIndex,
      showSplash: false,
    });
  }

  onChangeAccount(value) {
    this.setState({ accountId: value });
  }

  render() {
    const { showSplash, tabIndex } = this.state;
    const { nerdletUrlState, launcherUrlState } = this.props;

    return (showSplash) ? (
    <>
      <AccountPicker
         value={this.state.accountId}
         onChange={this.onChangeAccount}
      />
      
      <div className="splash" style={{backgroundImage: `url(${splashImage})`}}>
        <div className="parts">
          <div className="title" style={{marginTop: '75%'}} onClick={e => this.mapClickHandler(e, 1)}>
            <h2>Foundation</h2>
            <h3>Performance baselining<br/>and AWS landing zone<br/> instrumentation</h3> 
          </div>
          <div className="title" style={{marginTop: '30%'}} onClick={e => this.mapClickHandler(e, 2)}>
            <h2>Migration</h2>
            <h3>Before, during, and after<br/>view of your applications<br/>and infrastructure</h3> 
          </div>
          <div className="title" style={{marginTop: '5%'}} onClick={e => this.mapClickHandler(e, 3)}>
            <h2>Modernization</h2>
            <h3>Identify patterns for<br/>modernizing your<br/> applications</h3> 
          </div>
          <div className="title" style={{marginTop: '30%'}} onClick={e => this.mapClickHandler(e, 4)}>
            <h2>Optimization</h2>
            <h3>Cost and performance<br/>optimizations</h3> 
          </div>
          <div className="title" style={{marginTop: '75%'}} onClick={e => this.mapClickHandler(e, 5)}>
            <h2>Thriving Business</h2>
            <h3>End-to-end Observability<br/>allowing you to move<br/>faster with confidence</h3> 
          </div>
        </div>
      </div>
    </>
    ) : (
      <CloudJourney
        launcherUrlState={launcherUrlState}
        nerdletUrlState={nerdletUrlState}
        tabIndex={tabIndex}
        accountId={this.state.accountId}
      />
    );
  } //render
} //Splash
