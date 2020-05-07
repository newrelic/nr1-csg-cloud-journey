import React, { Component } from 'react';
import { NrqlQuery, BlockText, LineChart, List, ListItem, Card, CardHeader, CardBody } from 'nr1'
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    accountId: PropTypes.number,
  }; //propTypes

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    NrqlQuery.query({accountId: this.props.accountId, query: "FROM AutoScalingGroupSample SELECT uniques(displayName) FACET provider.launchConfiguration",formatType: NrqlQuery.FORMAT_TYPE.RAW}).then(({ data }) => { 
	//add brackets ({data}) for just data, remove them for seeing errors
	//console.log(JSON.stringify(data));
	this.setState({ items: data.raw.facets })}).catch(error => {
      		console.log(error);
    	});
  }

  render() {
      const { items } = this.state;
      const { accountId } = this.props;

      const style = {
          width: "31.33%",
          height: 300,
	  float: "left",
      };
  
      return (
	<>
	  <br/><br/>
	  Below is a list of all Auto Scaling groups in your AWS environment.  Based on the AWS best practices, some health checks are performed on each group to determine if these best practices are being followed.  Those health checks are:
	  <List>
	    <ListItem>&nbsp;</ListItem>
	    <ListItem><b>Monitoring:</b> This health check determines if Auto Scaling group metrics are enabled for your Auto Scaling group.</ListItem>
	    <ListItem>&nbsp;</ListItem>
	    <ListItem><b>Instance Count:</b> This health check determines whether the instance count in your Auto Scaling group is at, above, or below the desired level. <b>This data will not be present for Auto Scaling groups without group metrics enabled.</b></ListItem>
	    <ListItem>&nbsp;</ListItem>
	    <ListItem><b>Burstability:</b> This health check details the instance type utilized by your Auto Scaling group. Amazon EC2 instances with burstable performance, which are T3 and T2 instances, are designed to provide a baseline level of CPU performance with the ability to burst to a higher level when required by your workload. Depending on the target utilization specified by the scaling plan, you could run the risk of exceeding the baseline and then running out of CPU credits, which limits performance. </ListItem>
	    <ListItem>&nbsp;</ListItem>
	  </List>

	  {items.map(item =>
	    <Card style={style} spacingType={[Card.SPACING_TYPE.SMALL]}>
	      <CardHeader title={item.results[0].members[0]}/>
	        <CardBody>
	          <NrqlQuery accountId={accountId} query={"FROM AutoScalingGroupSample SELECT latest(provider.groupTotalInstances.Sum) as count, latest(provider.groupDesiredCapacity.Minimum) as desired WHERE entityName='" + item.results[0].members[0] + "'"}>
	          {({ data }) => {
	          if (data) {
	                    if (data[0].data[0].count !== null) {
	                                                        if (data[0].data[0].count == 0) {
	                                                                                        return <div><h3><b>Monitoring:</b> <font color="green">ASG Group Metrics Enabled</font></h3><h3><b>Instance Count:</b> <font color="red">0 Active Instances in Group</font></h3></div>
								}
								else if (data[0].data[0].count < data[1].data[0].desired) {
   return <div><h3><b>Monitoring:</b> <font color="green">ASG Group Metrics Enabled</font></h3><h3><b>Instance Count:</b> <font color="orange">Instance Count Below Desired Level</font></h3></div>
								}
								else if (data[0].data[0].count == data[1].data[0].desired) {
    return <div><h3><b>Monitoring:</b> <font color="green">ASG Group Metrics Enabled</font></h3><h3><b>Instance Count:</b> <font color="green">Instance Count At Desired Level</font></h3></div>
								}
								else if (data[0].data[0].count > data[1].data[0].desired) {
   return <div><h3><b>Monitoring:</b> <font color="green">ASG Group Metrics Enabled</font></h3><h3><b>Instance Count:</b> <font color="orange">Instance Count Above Desired Level</font></h3></div>
								}
							}
							else {
	                                                     return <h3><b>Monitoring:</b> <font color="red">ASG Group Metrics Disabled</font></h3>
							}
					        }
						else {
	                                             return <h3>Loading...</h3>;
						}
					    }}
	          </NrqlQuery>
	          <NrqlQuery accountId={accountId} query={"FROM AutoScalingLaunchConfigurationSample SELECT latest(provider.instanceType) as type WHERE displayName='" + item.name + "'"}>
	          {({ data }) => {
	                         if (data) {
	                                   console.log(JSON.stringify(data));
	                                   if (data[0].data[0].type.startsWith("t2")) {
	                                     return <h3><b>Burstability:</b> <font color="orange">Group Contains T2 Instances</font></h3>
	                                   }
	                                   else if (data[0].data[0].type.startsWith("t3")) {
		                             return <h3><b>Burstability:</b> <font color="orange">Group Contains T3 Instances</font></h3>
	                                   }
	                                   else {
	                                     return <h3><b>Burstability:</b> <font color="green">Group Contains Standard Instances</font></h3>
	                                   }
	                         }
	                         else {
	                           return <h3>Loading...</h3>;
	                         }
	                         }
	          }
	          </NrqlQuery>
	        </CardBody>
	      </Card>
	             )}
	</>
      );
  }
}

export default App;
