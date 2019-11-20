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
import OptimizationEC2Dashboard from '../../../insights-dashboard/dashboards/optimization-ec2.json';
import OptimizationEBSDashboard from '../../../insights-dashboard/dashboards/optimization-ebs.json';
import OptimizationS3Dashboard from '../../../insights-dashboard/dashboards/optimization-s3.json';
/** 3rd party */


/**
 * Optimization - Component
 * Optimization: 2 tabs
 * Cost Optimization Nerdlet
 * EC2 Optimization Dashboard: https://one.newrelic.com/launcher/dashboards.launcher#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTWpJME5qazVPSHhXU1ZwOFJFRlRTRUpQUVZKRWZEZzNORGM1TkEiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IkVBNjA0NDQ4LTgzNDItQzhDMi1ERUJCLTgzQUYxM0RCMTczMCI=
 */
export default class Optimization extends React.Component {
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
          <TabsItem value="tab-1" label="Cost Optimization Nerdlet">
            <div style={{height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Button
                onClick={() => navigation.openStackedNerdlet({id: '1805f171-b49b-443f-ae0e-590b4362a1fa.cloud-optimize-nerdlet'})}
                type={Button.TYPE.PRIMARY}
                sizeType={Button.SIZE_TYPE.LARGE}
                iconType={Button.ICON_TYPE.HARDWARE_AND_SOFTWARE__SOFTWARE__BROWSER}>
                Open Nerdlet
              </Button>
            </div>
          </TabsItem>
          <TabsItem value="tab-2" label="Optimization - EC2">
            <InsightsDashboard accountId={accountId} dashboard={OptimizationEC2Dashboard} />
          </TabsItem>
          <TabsItem value="tab-3" label="Optimization - EBS">
            <InsightsDashboard accountId={accountId} dashboard={OptimizationEBSDashboard} />
          </TabsItem>
          <TabsItem value="tab-4" label="Optimization - S3">
            <InsightsDashboard accountId={accountId} dashboard={OptimizationS3Dashboard} />
          </TabsItem>
        </Tabs>
      </div>
    );
  } //render
}//Optimization
