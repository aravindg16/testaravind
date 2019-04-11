import React from 'react';
import {observer} from 'mobx-react'
import { GeneralInfo, Volunteer } from '../../component'
import { opportunityState } from '../../deps/state'

class Opportunity extends React.Component {
    render() {
        return (
            <div className={"opportunityWrapper"}>
                <h1>{opportunityState.opportunityDetails.Opportunity.title}</h1>
                <div className={"opportunityCont"}>
                    <GeneralInfo />
                    <Volunteer />
                </div>
            </div>
        )
    }
}

export default observer(Opportunity)