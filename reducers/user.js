const initialState = {

  inventory: [],
  loading: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INVENTORY':
      return { ...state, inventory: [...action.inventory] }
    case 'SET_LOADING':
      return { ...state, loading: action.loading }
    default:
      return state
  }
}

export default user