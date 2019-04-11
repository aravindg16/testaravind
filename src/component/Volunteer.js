import React from 'react';
import { VolunteerTemplate } from '../molecules' 

class Volunteer extends React.PureComponent {
    
    render() {
        
        return (
            <div className={`volunteer`}>
                <VolunteerTemplate />
            </div>
        )
    }
}

export default Volunteer
export { Volunteer }