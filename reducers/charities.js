const initialState = {
    charities: [],
    activeCharities: [
        {
            id: 1
        }
    ]
}

const charities = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_CHARITY':
            return { ...state, activeCharities: [...state.activeCharities, { id: action.charity }] }
            case "SET_ALL_CHARITIES":
            return { ...state, Charities: [...action.allCharities] };
          default:
            return state;
        }
      };
      
export default charities