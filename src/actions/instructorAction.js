import {InstructorsData} from '../data/instructors'


const loadData = () => (dispatch) => {
    const data = InstructorsData()
    dispatch({
        type: 'FETCH_DATA',
        payload: data
    })
}

export default loadData;