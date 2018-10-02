const initialState = {

    UserAnimals: [
        {
            animalId: null,
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
        case 'UPDATE_ACTIVE_ANIMAL':
            return { ...state, ActiveAnimal: { id: action.animal } }
        case 'SET_ALL_ANIMALS':
            return { ...state, UserAnimals: [...action.allAnimals] }
        default:
            return state
    }
}

export default animals