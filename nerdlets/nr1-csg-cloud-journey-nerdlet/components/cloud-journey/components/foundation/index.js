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
import SREDashboard from '../../../insights-dashboard/dashboards/sre.json';
import WAFReliabilityDashboard from '../../../insights-dashboard/dashboards/waf-reliability.json';
import WAFOperationalExcellenceDashboard from '../../../insights-dashboard/dashboards/waf-operational-excellence.json';
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
          <TabsItem value="tab-1" label="SRE">
            <InsightsDashboard accountId={accountId} dashboard={SREDashboard} />
          </TabsItem>
          <TabsItem value="tab-2" label="WAF - Reliability">
            <InsightsDashboard accountId={accountId} dashboard={WAFReliabilityDashboard} />
          </TabsItem>
          <TabsItem value="tab-3" label="WAF - Operational Excellence">
            <InsightsDashboard accountId={accountId} dashboard={WAFOperationalExcellenceDashboard} />
          </TabsItem>
          <TabsItem value="tab-4" label="Kubernetes Monitoring">
            <div style={{height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Button
                onClick={() => navigation.openStackedNerdlet({
                  id: 'k8s-cluster-explorer-nerdlet.k8s-cluster-explorer',
                  urlState: {
                    entityGuid: 'MTYwNjg2MnxJTkZSQXxOQXwzNjcyMjkzNzY0NjA0OTU5Mjk3',
                  }
                })}
                type={Button.TYPE.PRIMARY}
                sizeType={Button.SIZE_TYPE.LARGE}
                iconType={Button.ICON_TYPE.HARDWARE_AND_SOFTWARE__KUBERNETES__K8S_CLUSTER}>
                Open K8 Cluster View
              </Button>
            </div>
          </TabsItem>
        </Tabs>
      </div>
    );
  } //render
}//Foundation
