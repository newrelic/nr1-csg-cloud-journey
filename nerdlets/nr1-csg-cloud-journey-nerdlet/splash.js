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
import { Button } from 'nr1';
/** local */
import splashImage from './cloud_journey_no_text.png'
import CloudJourney from './components/cloud-journey';
/** 3rd party */


// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class Splash extends React.Component {
  static propTypes = {
    nerdletUrlState: PropTypes.object,
    launcherUrlState: PropTypes.object,
  }; //propTypes

  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
      tabIndex: 1,
    };

    this.mapClickHandler = this.mapClickHandler.bind(this);
  }; //constructor

  mapClickHandler(e, tabIndex) {
    e.preventDefault();
    this.setState({
      tabIndex: tabIndex,
      showSplash: false,
    });
  }

  render() {
    const { showSplash, tabIndex } = this.state;
    const { nerdletUrlState, launcherUrlState } = this.props;

    return (showSplash) ? (
      <div className="splash" style={{backgroundImage: `url(${splashImage})`}}>
        <div className="parts">
          <div className="title" style={{marginTop: '75%'}} onClick={e => this.mapClickHandler(e, 1)}>
            <h2>Foundation</h2>
            <h3>Tool Consolidation and<br/>Landing Zone instrumentation</h3>
          </div>
          <div className="title" style={{marginTop: '30%'}} onClick={e => this.mapClickHandler(e, 2)}>
            <h2>Migration</h2>
            <h3>Before, During, and After</h3>
          </div>
          <div className="title" style={{marginTop: '5%'}} onClick={e => this.mapClickHandler(e, 3)}>
            <h2>Modernization</h2>
            <h3>Modern Technologies and<br/>Processes</h3>
          </div>
          <div className="title" style={{marginTop: '30%'}} onClick={e => this.mapClickHandler(e, 4)}>
            <h2>Optimization</h2>
            <h3>Cost Control</h3>
          </div>
          <div className="title" style={{marginTop: '75%'}} onClick={e => this.mapClickHandler(e, 5)}>
            <h2>Thriving Business</h2>
            <h3>Business Value KPI</h3>
          </div>
        </div>
      </div>
    ) : (
      <CloudJourney
        launcherUrlState={launcherUrlState}
        nerdletUrlState={nerdletUrlState}
        tabIndex={tabIndex}
      />
    );
  } //render
} //Splash
