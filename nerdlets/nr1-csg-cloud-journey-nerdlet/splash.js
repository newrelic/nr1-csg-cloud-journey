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
import splashImage from './splash.png'
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
    };
  }; //constructor

  render() {
    const { showSplash } = this.state;
    const { nerdletUrlState, launcherUrlState } = this.props;

    return (showSplash) ? (
      <div  style={{backgroundColor: '#fff', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div>
          <Button onClick={() => this.setState({ showSplash: false })} type={Button.TYPE. PLAIN} iconType={Button.ICON_TYPE.INTERFACE__ARROW__ARROW_RIGHT__V_ALTERNATE}>
            Get Started
          </Button>
        </div>
        <div>
          <img src={splashImage} alt="Cloud Journey" />
        </div>
      </div>
    ) : (
      <CloudJourney
        launcherUrlState={launcherUrlState}
        nerdletUrlState={nerdletUrlState}
      />
    );
  } //render
} //Splash
