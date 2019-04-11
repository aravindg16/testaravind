import React from 'react'
import DatePicker from 'react-datepicker';
import { opportunityState } from '../deps/state'

class Datepicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(this.props.value),
          keyValue: this.props.date
        };
    }
    
    handleChange = (date) => {
        this.setState({
            startDate: date
        });
        if(this.state.keyValue === 'start-date') {
            opportunityState.startDate = date.toISOString()
        }
        if(this.state.keyValue === 'end-date') {
            opportunityState.endDate = date.toISOString()
        }
    }
    componentDidMount () {
        if(this.props.date === 'start-date') {
            opportunityState.startDate = this.props.value
        }
        if(this.props.date === 'end-date') {
            opportunityState.endDate = this.props.value
        }
    }
    render() {
        return (
            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
        )
    }
}

export default Datepicker
export { Datepicker }