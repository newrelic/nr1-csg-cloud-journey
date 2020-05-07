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
import AppsBeforeDashboard from '../../../insights-dashboard/on-prem-apps.js';
import AppsAfterDashboard from '../../../insights-dashboard/aws-apps.js';
import BeforeInfra from '../../../insights-dashboard/dashboards/before-infra.json';
import BeforeApps from '../../../insights-dashboard/dashboards/before-apps.json';
import AfterInfra from '../../../insights-dashboard/dashboards/after-infra.json';
import AfterApps from '../../../insights-dashboard/dashboards/after-apps.json';
import CompareApps from '../../../compare-apps.js';
/** 3rd party */


/**
 * Migration - Component
 * Migration page: 3 tabs
 * Planning: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEZzVNakkwTmciLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IkI4RjgzQzJFLTQ0RTctQ0RBOS1BMDExLTczOTA5RDNCMDIyNyI=
 * Delivery: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEUXlNVEkwTnciLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IjM1NzgzMUEzLTE4RDAtMDA5Ri03MzFBLTg2NjgwQjgxRUYyRiI=
 * Validation: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEWTFNekkzT1EiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IjczRkM0RUIyLTk4OUEtQjkxOS1GOUQ2LUYyNEJFOTg4MkNCOSI=
 */
export default class Migration extends React.Component {
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
        <TabsItem value="tab-1" label="On-Prem Applications">
          <AppsBeforeDashboard accountId={accountId} dashboard={BeforeApps} />
        </TabsItem>
        <TabsItem value="tab-2" label="On-Prem Infrastructure">
          <InsightsDashboard accountId={accountId} dashboard={BeforeInfra} />
        </TabsItem>
        <TabsItem value="tab-3" label="Application Comparison">
          <CompareApps accountId={accountId} />
        </TabsItem>
        <TabsItem value="tab-4" label="AWS Applications">
          <AppsAfterDashboard accountId={accountId} dashboard={AfterApps} />
        </TabsItem>
        <TabsItem value="tab-5" label="AWS Infrastructure">
          <InsightsDashboard accountId={accountId} dashboard={AfterInfra} />
        </TabsItem>
      </Tabs>
      </div>
    );
  } //render
}//Migration
