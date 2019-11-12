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
 * CloudJourney - Component
 * Main page (splash page): The 5 navigation options of Foundation, Migration, Optimization, Modernization, Thriving Business
 */
export default class CloudJourney extends Component {

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
                <p>this is the cloud journey core component</p>
            </div>
        );
    } //render
}//CloudJourney