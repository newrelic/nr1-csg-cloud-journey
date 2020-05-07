import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  GridItem,
  Stack,
  StackItem,
  Dropdown,
  DropdownItem,
  TextField,
  Button,
  AccountPicker,
  NrqlQuery,
  BillboardChart,
  BarChart,
  PieChart,
  LineChart,
  TableChart,
  HeadingText,
  BlockText,
  navigation
} from 'nr1';

// Local
import EmptyState from './EmptyState';

export default class NerdpackLayoutStandard extends React.Component {
  static propTypes = {
    accountId: PropTypes.number,
  }; //propTypes

  constructor(props) {
      super(props);

      this.state = { 
		     splash: false,
                     appName: "",
                     guid: "",
                     apps: [],
		   };
  }

  handleClick(e) {
    this.setState({ appName: e });
      NrqlQuery.query({accountId: this.props.accountId, query: "FROM Transaction SELECT latest(entityGuid) WHERE appName = '" + e + "'",formatType: NrqlQuery.FORMAT_TYPE.RAW}).then(({ data }) => {
	  console.log(JSON.stringify(data));
          this.setState({ guid: data.raw.results[0].latest })}).catch(error => {
                  console.log(error);
          });
    this.setState({ charts: true });
  }
 
  componentDidMount() {
    NrqlQuery.query({accountId: this.props.accountId, query: "FROM Transaction SELECT uniques(appName)",formatType: NrqlQuery.FORMAT_TYPE.RAW}).then(({ data }) => {
	console.log(JSON.stringify(data.raw.results[0].members));
        this.setState({ apps: data.raw.results[0].members })}).catch(error => {
        });
    this.setState({ accountId: this.props.accountId });
  }

  render() {
    const { accountId } = this.props;
    const { apps } = this.state; 
    var { appName } = this.state; 
    var { guid } = this.state; 

    return (
      <>
        <Grid
          className="primary-grid"
          spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
        >
          <GridItem className="sidebar-container" columnSpan={2}>
            <ul className="sidebar-list">
		{apps.map(item =>
			<li className="sidebar-list-item" onClick={() => this.handleClick(item)}>
			  {item}
			</li>
		)}
            </ul>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={10}>
            <main className="primary-content full-height">
              { this.state.splash && <EmptyState /> }
              { this.state.charts && (
	        <div>
                  <Button onClick={() => navigation.openStackedNerdlet({id:'topology.relationship-map', urlState: { 'entityId': this.state.guid} })} style={{margin: '15px'}} type={Button.TYPE.PRIMARY} iconType={Button.ICON_TYPE.DATAVIZ__DATAVIZ__CHART} > {this.state.appName} </Button>

                  <BlockText type={BlockText.TYPE.NORMAL}>
                    <b>Application Performance Score</b> 
                  </BlockText>
                                     <BillboardChart
                      fullWidth
                      accountId={accountId}
                      query={"FROM Transaction SELECT ((filter(count(*),WHERE apdexPerfZone= 'S' OR `nr.apdexPerfZone` = 'S') + (filter(count(*), WHERE apdexPerfZone = 'T' OR `nr.apdexPerfZone` = 'T')/2))/count(*))*100 AS '%' WHERE appName ='"+ this.state.appName + "' SINCE 1 week ago"}
                  /> 
                  
                  <BlockText type={BlockText.TYPE.NORMAL}>
                    <b>Application Quality Score</b> 
                  </BlockText>

                  <BillboardChart
                      fullWidth
                      accountId={accountId}
                      query={"FROM Transaction SELECT apdex(duration , t: 0.03) * 100 AS '%' WHERE appName ='" + this.state.appName + "'"}
                  /> 
                  
                  <BlockText type={BlockText.TYPE.NORMAL}>
                    <b>Application Error Count</b>
                  </BlockText>
                  
                  <BillboardChart
                      fullWidth
                      accountId={accountId}
                      query={"FROM TransactionError SELECT count(*) AS 'Errors' WHERE appName = '" + this.state.appName + "'"}
                  /> 
                  
                  <BlockText type={BlockText.TYPE.NORMAL}>
                   <b>Transaction Errors</b>
                  </BlockText>
                  
                  <BarChart
                      fullWidth
                      accountId={accountId}
                      query={"FROM TransactionError SELECT count(*) AS 'Count' WHERE appName ='" + this.state.appName + "' FACET transactionName"}
                  /> 
                  
                  <BlockText type={BlockText.TYPE.NORMAL}>
                    <b>Application Response Time</b>
                  </BlockText>
                  
                  <LineChart
                      fullWidth
                      accountId={accountId}
                      query={"FROM Transaction SELECT average(duration)*1000 AS 'in Milliseconds' WHERE appName ='" + this.state.appName + "' TIMESERIES"}
                  /> 
                  
                  <BlockText type={BlockText.TYPE.NORMAL}>
                    <b>Slowest Transactions</b> 
                  </BlockText>
                  
                  <BarChart
                      fullWidth
                      accountId={accountId}
                      query={"FROM Transaction SELECT average(duration) AS 'Seconds' WHERE appName ='" + this.state.appName + "' FACET name"}
                  /> 
                  
                  <BlockText type={BlockText.TYPE.NORMAL}>
                    <b>Database Response Time</b>
                  </BlockText>
                  
                  <LineChart
                      fullWidth
                      accountId={accountId}
                      query={"FROM Transaction SELECT average(databaseDuration)*1000 AS 'in Milliseconds' WHERE appName ='" + this.state.appName + "' TIMESERIES"}
                  /> 
               </div>
              )}
            </main>
          </GridItem>
        </Grid>
      </>
    );
  }
}
