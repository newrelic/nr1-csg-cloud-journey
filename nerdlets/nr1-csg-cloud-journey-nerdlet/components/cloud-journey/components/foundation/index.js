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
  Button,
  Tabs,
  TabsItem,
} from 'nr1';
/** local */
import InsightsDashboard from '../../../insights-dashboard';
import BaselineDashboard from '../../../baseline.js';
import LandingZoneDashboard from '../../../insights-dashboard/dashboards/landing-zone.json';
/** 3rd party */


/**
 * Foundation - Component
 * Foundation page: 2 tabs (for now, we need to be able to easily add more ourselves)
 * SRE: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEVXdORE14TlEiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IjU2RkU1MDhGLTAzREItMjIwRi0zMTMzLTEzRkU0NEE2NDlFRSI=
 * WAF: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZERXdNVEkxTWprIiwiaXNUZW1wbGF0ZUVtcHR5IjpmYWxzZX0=&state=IjZFMTVDOERFLUUwNTktQ0IzNi02OUI4LTlCMzdBRTJGOTM4MSI=
 */
export default class Foundation extends React.Component {
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
          <TabsItem value="tab-1" label="Application Performance">
            <BaselineDashboard accountId={accountId} />
          </TabsItem>
          <TabsItem value="tab-2" label="AWS Landing Zone">
            <InsightsDashboard accountId={accountId} dashboard={LandingZoneDashboard} />
          </TabsItem>
        </Tabs>
      </div>
    );
  } //render
}//Foundation
