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
//import DiscoveryPlanningDashboard from '../../../insights-dashboard/dashboards/discovery-planning.json';
import DiscoveryHardwareDashboard from '../../../insights-dashboard/dashboards/discovery-hardware.json';
import DiscoveryApplicationsDashboard from '../../../insights-dashboard/dashboards/discovery-applications.json';
import DeliveryOverviewDashboard from '../../../insights-dashboard/dashboards/delivery-overview.json';
import DeliveryHardwareDashboard from '../../../insights-dashboard/dashboards/delivery-hardware.json';
import DeliveryApplicationsDashboard from '../../../insights-dashboard/dashboards/delivery-applications.json';
import ValidateTechnologyDashboard from '../../../insights-dashboard/dashboards/validate-technology.json';
import ValidateBusinessCaseDashboard from '../../../insights-dashboard/dashboards/validate-business-case.json';
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
        <TabsItem value="tab-1" label="Discovery - Planning">
          TODO
        </TabsItem>
        <TabsItem value="tab-2" label="Discovery - Hardware">
          <InsightsDashboard accountId={accountId} dashboard={DiscoveryHardwareDashboard} />
        </TabsItem>
        <TabsItem value="tab-3" label="Discovery - Applications">
          <InsightsDashboard accountId={accountId} dashboard={DiscoveryApplicationsDashboard} />
        </TabsItem>
        <TabsItem value="tab-4" label="Delivery - Overview">
          <InsightsDashboard accountId={accountId} dashboard={DeliveryOverviewDashboard} />
        </TabsItem>
        <TabsItem value="tab-5" label="Delivery - Hardware">
          <InsightsDashboard accountId={accountId} dashboard={DeliveryHardwareDashboard} />
        </TabsItem>
        <TabsItem value="tab-6" label="Delivery - Applications">
          <InsightsDashboard accountId={accountId} dashboard={DeliveryApplicationsDashboard} />
        </TabsItem>
        <TabsItem value="tab-7" label="Validate - Technology">
          <InsightsDashboard accountId={accountId} dashboard={ValidateTechnologyDashboard} />
        </TabsItem>
        <TabsItem value="tab-8" label="Validate - Business Case">
          <InsightsDashboard accountId={accountId} dashboard={ValidateBusinessCaseDashboard} />
        </TabsItem>
      </Tabs>
      </div>
    );
  } //render
}//Migration
