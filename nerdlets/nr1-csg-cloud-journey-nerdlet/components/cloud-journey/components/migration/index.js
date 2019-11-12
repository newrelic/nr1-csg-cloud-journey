/**
 * 
 *
 * @file 
 * @author
 */
/** core */
import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
/** nr1 */
import { Button } from 'nr1';
import { navigation } from 'nr1';
import { Grid } from 'nr1';
import { GridItem } from 'nr1';
import { EntityStorageQuery } from 'nr1'
import { Spinner } from 'nr1';
import { PlatformStateContext } from 'nr1'
import { NerdletStateContext } from 'nr1';
/** local */
/** 3rd party */


/**
 * Migration - Component
 * Migration page: 3 tabs
 * Planning: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEZzVNakkwTmciLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IkI4RjgzQzJFLTQ0RTctQ0RBOS1BMDExLTczOTA5RDNCMDIyNyI=
 * Delivery: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEUXlNVEkwTnciLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IjM1NzgzMUEzLTE4RDAtMDA5Ri03MzFBLTg2NjgwQjgxRUYyRiI=
 * Validation: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEWTFNekkzT1EiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IjczRkM0RUIyLTk4OUEtQjkxOS1GOUQ2LUYyNEJFOTg4MkNCOSI=
 */
export default class Migration extends Component {

    static propTypes = {
        nerdletUrlState: PropTypes.object,
        launcherUrlState: PropTypes.object,
        nerdlet_beginTS: PropTypes.any,
        nerdlet_endTS: PropTypes.any,
        nerdlet_duration: PropTypes.any
      }; //propTypes

    constructor(props) {
        super(props)
    }; //constructor

    /** Lifecycle render */
    render() {

        return(
            <div>
                <p>Migration</p>
            </div>
        );
    } //render
}//Migration