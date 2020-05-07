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
  BlockText
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
		     items: [],
		     splash: false,
		     charts: false,
		     chartsRight: false,
                     appName: "",
                     appNameRight: "",
		   };

      NrqlQuery.query({accountId: props.accountId, query: "FROM Transaction SELECT uniques(appName)",formatType: NrqlQuery.FORMAT_TYPE.RAW}).then(({ data }) => {
	  console.log(JSON.stringify(data.raw.results[0].members));
          this.setState({ items: data.raw.results[0].members })}).catch(error => {
                  console.log(error);
          });
  }

  handleClick(e) {
    this.setState({ appName: e });
    this.setState({ charts: true });
  }

  handleRightClick(e) {
    this.setState({ appNameRight: e });
    this.setState({ chartsRight: true });
  }

  render() {
    const { items } = this.state;
    const { accountId } = this.props; 
    var { appName } = this.state; 
    var { appNameRight } = this.state; 

    return (
      <>
        <Grid
          className="primary-grid"
          spacingType={[Grid.SPACING_TYPE.NONE, Grid.SPACING_TYPE.NONE]}
        >
          <GridItem className="sidebar-container" columnSpan={2}>
            <ul className="sidebar-list">
		{items.map(item =>
			<li className="sidebar-list-item" onClick={() => this.handleClick(item)}>
			  {item}
			</li>
		)}
            </ul>
          </GridItem>
          <GridItem className="primary-content-container" columnSpan={4}>
            <main className="primary-content full-height">
              { this.state.splash && <EmptyState /> }
              { this.state.charts && (
	        <div>
	          <HeadingText type={HeadingText.TYPE.HEADING_2}>{appName}</HeadingText>
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Application Performance Score</b> 
	          </BlockText>

	          <BillboardChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM Transaction SELECT ((filter(count(*),WHERE apdexPerfZone= 'S' OR `nr.apdexPerfZone` = 'S') + (filter(count(*), WHERE apdexPerfZone = 'T' OR `nr.apdexPerfZone` = 'T')/2))/count(*))*100 AS '%' WHERE appName ='"+ appName + "' SINCE 1 week ago"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Application Quality Score</b> 
	          </BlockText>

	          <BillboardChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM Transaction SELECT apdex(duration , t: 0.03) * 100 AS '%' WHERE appName ='" + appName + "'"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Application Error Count</b>
	          </BlockText>
	          
	          <BillboardChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM TransactionError SELECT count(*) AS 'Errors' WHERE appName = '" + appName + "'"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	           <b>Transaction Errors</b>
	          </BlockText>
	          
	          <BarChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM TransactionError SELECT count(*) AS 'Count' WHERE appName ='" + appName + "' FACET transactionName"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Application Response Time</b>
	          </BlockText>
	          
	          <LineChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM Transaction SELECT average(duration)*1000 AS 'in Milliseconds' WHERE appName ='" + appName + "' TIMESERIES"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Slowest Transactions</b> 
	          </BlockText>
	          
	          <BarChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM Transaction SELECT average(duration) AS 'Seconds' WHERE appName ='" + appName + "' FACET name"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Database Response Time</b>
	          </BlockText>
	          
	          <LineChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM Transaction SELECT average(databaseDuration)*1000 AS 'in Milliseconds' WHERE appName ='" + appName + "' TIMESERIES"}
	          /> 
	        </div>
	               )}
	       </main>
	      </GridItem>
	      <GridItem className="primary-content-container" columnSpan={4}>
	       <main className="primary-content full-height">
	                        { this.state.splash && <EmptyState /> }
	                        { this.state.chartsRight && (
	          
	          
	          	        <div>
	          <HeadingText type={HeadingText.TYPE.HEADING_2}>{appNameRight}</HeadingText>
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Application Performance Score</b> 
	          </BlockText>
	                             <BillboardChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM Transaction SELECT ((filter(count(*),WHERE apdexPerfZone= 'S' OR `nr.apdexPerfZone` = 'S') + (filter(count(*), WHERE apdexPerfZone = 'T' OR `nr.apdexPerfZone` = 'T')/2))/count(*))*100 AS '%' WHERE appName ='"+ appNameRight + "' SINCE 1 week ago"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Application Quality Score</b> 
	          </BlockText>
	                             <BillboardChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM Transaction SELECT apdex(duration , t: 0.03) * 100 AS '%' WHERE appName ='" + appNameRight + "'"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Application Error Count</b>
	          </BlockText>
	          
	          <BillboardChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM TransactionError SELECT count(*) AS 'Errors' WHERE appName = '" + appNameRight + "'"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	           <b>Transaction Errors</b>
	          </BlockText>
	          
	          <BarChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM TransactionError SELECT count(*) AS 'Count' WHERE appName ='" + appNameRight + "' FACET transactionName"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Application Response Time</b>
	          </BlockText>
	          
	          <LineChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM Transaction SELECT average(duration)*1000 AS 'in Milliseconds' WHERE appName ='" + appNameRight + "' TIMESERIES"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Slowest Transactions</b> 
	          </BlockText>
	          
	          <BarChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM Transaction SELECT average(duration) AS 'Seconds' WHERE appName ='" + appNameRight + "' FACET name"}
	          /> 
	          
	          <BlockText type={BlockText.TYPE.NORMAL}>
	            <b>Database Response Time</b>
	          </BlockText>
	          
	          <LineChart
	              fullWidth
	              accountId={accountId}
	              query={"FROM Transaction SELECT average(databaseDuration)*1000 AS 'in Milliseconds' WHERE appName ='" + appNameRight + "' TIMESERIES"}
	          /> 
                </div>
	      )}
            </main>
          </GridItem>
          <GridItem className="sidebar-container" columnSpan={2}>
            <ul className="sidebar-list">
		{items.map(item =>
			<li className="sidebar-list-item" onClick={() => this.handleRightClick(item)}>
			  {item}
			</li>
		)}
            </ul>
          </GridItem>
        </Grid>
      </>
    );
  }
}
