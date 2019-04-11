import React from 'react';
import {observer} from 'mobx-react'
import { Text, inputState } from '../atoms'
import { wording } from '../deps/fixture'

function isActiveElement (textValue) {
    
    if(inputState.currentlySelected === '') {
        inputState.currentlySelected = textValue
    }
    
    return inputState.currentlySelected === textValue
}

class GeneralInfoHeaders extends React.Component {

    render() {
        
        return (
            <div className={"general-nav-wrapper"}>
                <Text text={wording.overviewText} isActive={isActiveElement(wording.overviewText)} />
                <Text text={wording.prerequisitesText} isActive={isActiveElement(wording.prerequisitesText)}/>
                <Text text={wording.logisticsText} isActive={isActiveElement(wording.logisticsText)}/>
            </div>
        )
    }
}

const GeneralInfoHeader = observer(GeneralInfoHeaders)

export default GeneralInfoHeader
export { GeneralInfoHeader }