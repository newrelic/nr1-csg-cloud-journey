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
 * ThrivingDigitalBusiness - Component
 * Thriving Digital Business: 1 Tab
 * Business Value Dashboard: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEZzVPRE16TmciLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IjA4QURBM0RGLTI2Q0MtQkI1My04RjgwLTE1QUVBRDY5NEVFNyI=
 */
export default class ThrivingDigitalBusiness extends Component {

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
                <p>ThrivingDigitalBusiness</p>
            </div>
        );
    } //render
}//ThrivingDigitalBusiness