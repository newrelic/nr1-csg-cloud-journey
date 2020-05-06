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
  ChartGroup,
  BillboardChart,
  FunnelChart,
  PieChart,
  BarChart,
  LineChart,
  TableChart,
  HistogramChart,
  AreaChart,
  TextField,
  Button,
  Stack,
  StackItem,
} from 'nr1';
/** local */
/** 3rd party */
import MD from 'markdown-it';

const md = new MD();

/**
 * InsightsDashboard Component
 */
export default class InsightsDashboard extends React.Component {
  static propTypes = {
    accountId: PropTypes.number,
    dashboard: PropTypes.object,
  }; //propTypes

  constructor(props) {
    super(props);
    this.state = {
                  userAppFilter: "",
                  appFilter: "WHERE appName LIKE '%_AWS'"
                 };
  }; //constructor

  handleClick(e) {
    this.setState({appFilter: e});
  }

  /** Lifecycle render */
  render() {
    const { accountId, dashboard } = this.props;

    const widgetStyle = (widget) => ({
      gridColumn: '' + widget.column + ' / span ' + widget.width,
      gridRow: '' + widget.row + ' / span ' + widget.height,
    });

    const widgetContent = (widget) => {
      if (!widget) return null;
      if (/(billboard|attribute_sheet|gauge)/.test(widget.process_as))
        return <BillboardChart fullHeight fullWidth accountId={accountId} query={widget.nrql + " " + this.state.appFilter} />;
      if (/funnel/.test(widget.process_as))
        return <FunnelChart fullHeight fullWidth accountId={accountId} query={widget.nrql + " " + this.state.appFilter} />;
      if (/pie/.test(widget.process_as))
        return <PieChart fullHeight fullWidth accountId={accountId} query={widget.nrql + " " + this.state.appFilter} />;
      if (/bar/.test(widget.process_as))
        return <BarChart fullHeight fullWidth accountId={accountId} query={widget.nrql + " " + this.state.appFilter} />;
      if (/line/.test(widget.process_as))
        return <LineChart fullHeight fullWidth accountId={accountId} query={widget.nrql + " " + this.state.appFilter} />;
      if (/table/.test(widget.process_as))
        return <TableChart fullHeight fullWidth accountId={accountId} query={widget.nrql + " " + this.state.appFilter} />;
      if (/histogram/.test(widget.process_as))
        return <HistogramChart fullHeight fullWidth accountId={accountId} query={widget.nrql + " " + this.state.appFilter} />;
      if (/area/.test(widget.process_as))
        return <AreaChart fullHeight fullWidth accountId={accountId} query={widget.nrql + " " + this.state.appFilter} />;
      if (!widget.nrql) {
        let markdown = (widget.customizations || {}).markdown;
        if (markdown) return <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
      }
      return null;
    }

    return(
    <>
        <Stack
          className="toolbar-container"
          fullWidth
          gapType={Stack.GAP_TYPE.NONE}
          horizontalType={Stack.HORIZONTAL_TYPE.FILL_EVENLY}
          verticalType={Stack.VERTICAL_TYPE.FILL}
        >
          <StackItem className="toolbar-section1">
            <Stack
              gapType={Stack.GAP_TYPE.NONE}
              fullWidth
              verticalType={Stack.VERTICAL_TYPE.FILL}
            >
              <StackItem className="toolbar-item">
                <TextField onChange={() => this.setState( {userAppFilter: event.target.value} )} style={{width: '600px'}} label="Filter" placeholder="WHERE appName LIKE '%_AWS'" />
              </StackItem>
            </Stack>
          </StackItem>
          <StackItem className="toolbar-section2">
            <Stack
              fullWidth
              fullHeight
              verticalType={Stack.VERTICAL_TYPE.CENTER}
              horizontalType={Stack.HORIZONTAL_TYPE.RIGHT}
            >
              <StackItem>
                <Button onClick={() => this.handleClick(this.state.userAppFilter) } type={Button.TYPE.PRIMARY}>Apply Filter</Button>
              </StackItem>
            </Stack>
          </StackItem>
        </Stack>

      <div className="insights-dashboard" style={{gridTemplateColumns: 'repeat(' + dashboard.grid_column_count + ', 1fr)'}}>
        <ChartGroup>
        {'widgets' in dashboard && dashboard.widgets.map((widget, i) => (
          <div className="widget" style={widgetStyle(widget)} key={i}>
            <h2 className="widget-header">{widget.title}</h2>
            {widgetContent(widget)}
          </div>
        ))}
        </ChartGroup>
      </div>
   </>
    );
  } //render
}//Foundation
