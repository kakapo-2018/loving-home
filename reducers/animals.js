const initialState = {

    UserAnimals: [
        {
            id: null,
            name: "",
            species: "",
            disposition: ""
        }
    ],
    ActiveAnimal: {
        id: null
    }

}

const animals = (state = initialState, action) => {
    switch (action.type) {

        case 'UPDATE_ACTIVE_PET':
            return { ...state, ActiveAnimal: { id: action.animal } }
        default:
            return state
    }
}

export default animals