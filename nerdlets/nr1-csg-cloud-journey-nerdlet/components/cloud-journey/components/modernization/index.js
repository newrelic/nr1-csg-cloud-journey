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
 * Modernization - Component
 * Modernization: 4 tabs
 * Process Modernization: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTWpJeU56azBPWHhXU1ZwOFJFRlRTRUpQUVZKRWZEZ3lNakV6TlEiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IkU4MjNCRjIzLTQ2NEQtQ0U0NS04NTBCLTg5MUM5OURENTlDNyI=
 * Cloud Native Services: https://one.newrelic.com/launcher/dashboards.launcher?packages=local#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTVRZd05qZzJNbnhXU1ZwOFJFRlRTRUpQUVZKRWZEazFPVEkyT1EiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==
 * Infrastructure Modernization: K8 Cluster View
 * Modernization Patterns Nerdlet: https://newrelic.jiveon.com/people/bthomason@newrelic.com/blog/2019/11/01/introducing-the-cas-modernization-nerdpack (https://source.datanerd.us/bthomason/modernization-nerdpack)
 */
export default class Modernization extends Component {

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
                <p>Modernization</p>
            </div>
        );
    } //render
}//Modernization