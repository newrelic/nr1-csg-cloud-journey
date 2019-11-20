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
import BusnessValueDashboard from '../../../insights-dashboard/dashboards/business-value.json';
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
          <TabsItem value="tab-1" label="Business Value">
            <InsightsDashboard accountId={accountId} dashboard={BusnessValueDashboard} />
          </TabsItem>
        </Tabs>
      </div>
    );
  } //render
}//ThrivingDigitalBusiness
