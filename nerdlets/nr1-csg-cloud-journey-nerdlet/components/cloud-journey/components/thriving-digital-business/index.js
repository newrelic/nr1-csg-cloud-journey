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
} from 'nr1';
/** local */
import InsightsDashboard from '../../../insights-dashboard';
import SREDashboard from '../../../insights-dashboard/dashboards/sre.json';
import AppsDashboard from '../../../insights-dashboard/dashboards/all-apps.json';
import InfraDashboard from '../../../insights-dashboard/dashboards/all-infra.json';
import ReliabilityDashboard from '../../../insights-dashboard/dashboards/reliability.json';
import OEDashboard from '../../../insights-dashboard/dashboards/operational-excellence.json';
import AWSDashboard from '../../../insights-dashboard/dashboards/aws-native-services.json';
import AutoscalingDashboard from '../../../autoscaling.js';
/** 3rd party */


/**
 * ThrivingDigitalBusiness - Component
 * Thriving Digital Business: 1 Tab
 * Business Value Dashboard: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEZzVPRE16TmciLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IjA4QURBM0RGLTI2Q0MtQkI1My04RjgwLTE1QUVBRDY5NEVFNyI=
 */
export default class ThrivingDigitalBusiness extends React.Component {
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
          <TabsItem value="tab-1" label="SRE Dashboard">
            <InsightsDashboard accountId={accountId} dashboard={SREDashboard} />
          </TabsItem>
          <TabsItem value="tab-2" label="Applications">
            <InsightsDashboard accountId={accountId} dashboard={AppsDashboard} />
          </TabsItem>
          <TabsItem value="tab-3" label="Infrastructure">
            <InsightsDashboard accountId={accountId} dashboard={InfraDashboard} />
          </TabsItem>
          <TabsItem value="tab-4" label="Reliability">
            <InsightsDashboard accountId={accountId} dashboard={ReliabilityDashboard} />
          </TabsItem>
          <TabsItem value="tab-5" label="Operational Excellence">
            <InsightsDashboard accountId={accountId} dashboard={OEDashboard} />
          </TabsItem>
          <TabsItem value="tab-6" label="AWS Native Services">
            <InsightsDashboard accountId={accountId} dashboard={AWSDashboard} />
          </TabsItem>
          <TabsItem value="tab-7" label="Elasticity">
            <AutoscalingDashboard accountId={accountId} />
          </TabsItem>
        </Tabs>
      </div>
    );
  } //render
}//ThrivingDigitalBusiness
