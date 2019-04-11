import { observable, decorate } from 'mobx'

class State {
    opportunityDetails = {}
    backgroundList = []
    skillsList = []
    startDate = ''
    endDate = ''
}

decorate(State,{
    opportunityDetails: observable,
    backgroundList: observable,
    skillsList:  observable,
    startDate:  observable,
    endDate:  observable
})

const opportunityState = new State()

export default State
export { State, opportunityState }