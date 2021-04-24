
const currentState = {
    instructors: []
}

const instructorReducer = (state = currentState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                instructors: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default instructorReducer;