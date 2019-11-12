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
 * Foundation - Component
 * Foundation page: 2 tabs (for now, we need to be able to easily add more ourselves)
 * SRE: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEVXdORE14TlEiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IjU2RkU1MDhGLTAzREItMjIwRi0zMTMzLTEzRkU0NEE2NDlFRSI=
 * WAF: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZERXdNVEkxTWprIiwiaXNUZW1wbGF0ZUVtcHR5IjpmYWxzZX0=&state=IjZFMTVDOERFLUUwNTktQ0IzNi02OUI4LTlCMzdBRTJGOTM4MSI=
 */
export default class Foundation extends Component {

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
                <p>Foundation</p>
            </div>
        );
    } //render
}//Foundation