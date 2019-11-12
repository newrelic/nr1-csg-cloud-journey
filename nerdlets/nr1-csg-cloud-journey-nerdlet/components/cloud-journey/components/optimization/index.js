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
 * Optimization - Component
 * Optimization: 2 tabs
 * Cost Optimization Nerdlet
 * EC2 Optimization Dashboard: https://one.newrelic.com/launcher/dashboards.launcher#launcher=eyJ0aW1lUmFuZ2UiOnsiYmVnaW5fdGltZSI6bnVsbCwiZW5kX3RpbWUiOm51bGwsImR1cmF0aW9uIjpudWxsfX0=&pane=eyJuZXJkbGV0SWQiOiJkYXNoYm9hcmRzLmRhc2hib2FyZCIsImVudGl0eUlkIjoiTWpJME5qazVPSHhXU1ZwOFJFRlRTRUpQUVZKRWZEZzNORGM1TkEiLCJpc1RlbXBsYXRlRW1wdHkiOmZhbHNlfQ==&state=IkVBNjA0NDQ4LTgzNDItQzhDMi1ERUJCLTgzQUYxM0RCMTczMCI=
 */
export default class Optimization extends Component {

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
                <p>Optimization</p>
            </div>
        );
    } //render
}//Optimization