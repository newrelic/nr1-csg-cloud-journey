import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { NrqlQuery, PieChart, HistogramChart, BarChart, LineChart, AreaChart, BillboardChart, FunnelChart, HeatmapChart, JsonChart, ScatterChart, SparklineChart, StackedBarChart, TableChart } from 'nr1'
import { queries } from "./queries.js";
import { accounts } from "./accounts.js";
import Select from 'react-select'
const API = "https://rmikl5nj2c.execute-api.us-east-1.amazonaws.com/prod"
var Landing = require('./landing.jsx');


var index;
var options = []
for (index = 0; index < queries.length; ++index) {
    options.push({value: index, label: queries[index]['name']});
}

var account_options = []
for (index = 0; index < accounts.length; ++index) {
    account_options.push({value: accounts[index]['value'], label: accounts[index]['name']});
}

class ModernizationPatterns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      current_account: account_options[0].value,
      current_description: "",
      current_chart: "",
      splash: true,
    };
  }

  displayChart(type,query,account) {
    account=parseInt(account, 10)
    if (type == "PieChart") {
      var chart = <PieChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "AreaChart") {
      var chart = <AreaChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "BarChart") {
      var chart = <BarChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "BillboardChart") {
      var chart = <BillboardChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "FunnelChart") {
      var chart = <FunnelChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "HeatmapChart") {
      var chart = <HeatmapChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "HistogramChart") {
      var chart = <HistogramChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "JsonChart") {
      var chart = <JsonChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "LineChart") {
      var chart = <LineChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "ScatterChart") {
      var chart = <ScatterChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "SparklineChart") {
      var chart = <SparklineChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "StackedBarChart") {
      var chart = <StackedBarChart query={query} fullWidth={true} accountId={account} />
    } else if (type == "TableChart") {
      var chart = <TableChart query={query} fullWidth={true} accountId={account} />
    } else {
      var chart = ""
    }
    return chart
  }

  updateQueries = (e) => {
    var query = queries[e.value]
    this.setState({ splash: false })
    this.setState({ items: [] })
    this.setState({ current_chart: "" });
    this.setState({ current_description: query['description'] })
    if (query.hasOwnProperty('chart')) {
      this.setState({ current_chart: this.displayChart(query['chart']['type'],query['chart']['query'],this.state.current_account.split(",",1)[0]) })
    } else {
      this.setState({ current_chart: "" });
    }
    query['account'] = this.state.current_account
    fetch(API, {method: 'post', headers: {'Content-Type':'application/json'}, body: JSON.stringify(query)})
      .then(response => response.json())
      .then(data => this.setState({ items: data.tables }));
  }

  updateAccount = (e) => {
    this.setState({ splash: false })
    this.setState({ current_account: e.value });
    this.setState({ items: [] });
    this.setState({ current_description: "" });
    this.setState({ current_chart: "" });
  }

  render() {
    const { items } = this.state;
    var { current_description } = this.state;
    var { current_chart } = this.state;
    return (
      <div>
        <Select onChange={this.updateQueries} options={options} />

	{ this.state.splash && <Landing /> }

        <div align={'justify'} className="center">{ReactHtmlParser(current_description)}</div>

	{current_chart}

        {items.map((item, idx) =>
          <table key={idx} className={item.view}>
            <tbody>
                  <tr><th colSpan={item.tdNames.length}><center><h3>{ReactHtmlParser(item.name)}</h3></center></th></tr>
                  <tr>
                    {item.tdNames.map((tdName, i) =>
                    <th key={i}>{tdName}</th>
                    )}
                  </tr>
		              {item.tdValues.map((name, index) =>
                    <tr key={index}>{name.map((n, i) => <td key={i}>{ReactHtmlParser(n)}</td>)}</tr>
                  )}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
export default ModernizationPatterns;
