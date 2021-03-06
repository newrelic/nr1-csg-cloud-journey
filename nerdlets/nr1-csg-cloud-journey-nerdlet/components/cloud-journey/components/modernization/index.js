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
  navigation,
  Tabs,
  TabsItem,
  Button,
} from 'nr1';
/** local */
import InsightsDashboard from '../../../insights-dashboard';
import PatternsDashboard from './modernization-patterns';
import LandingPage from './landing.js';
/** 3rd party */


/**
 * Modernization - Component
 * Modernization: 4 tabs
 * Process Modernization: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTWpJeU56azBPWHhXU1ZwOFJFRlRTRUpQUVZKRWZEZ3lNakV6TlEiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IkU4MjNCRjIzLTQ2NEQtQ0U0NS04NTBCLTg5MUM5OURENTlDNyI=
 * Cloud Native Services: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEazFPVEkyT1EiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==
 * Infrastructure Modernization: K8 Cluster View
 * Modernization Patterns Nerdlet: https://newrelic.jiveon.com/people/bthomason@newrelic.com/blog/2019/11/01/introducing-the-cas-modernization-nerdpack (https://source.datanerd.us/bthomason/modernization-nerdpack)
 */
export default class Modernization extends React.Component {
  static propTypes = {
    accountId: PropTypes.number,
  }; //propTypes

  constructor(props) {
    super(props);
  }; //constructor

  /** Lifecycle render */
  render() {
    const { accountId } = this.props;

    return(
      <div className="inside-container">
        <Tabs>
          <TabsItem value="tab-1" label="Overview">
            <LandingPage />
          </TabsItem>
          <TabsItem value="tab-2" label="Modernization Patterns">
            <PatternsDashboard />
          </TabsItem>
        </Tabs>
      </div>
    );
  } //render
}//Modernization
