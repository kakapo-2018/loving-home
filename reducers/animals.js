const initialState = {

    UserAnimals: [],
    ActiveAnimal: {
        id: null,
        name: "",
        species: "",
        disposition: "",
        inventory: {}
    }
}

const animals = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_ANIMAL':
            let activeAnimal = state.UserAnimals.find(animal => {
                return animal.animalId === action.animal
            })
            if (!activeAnimal) {
                let nullAnimal = state.ActiveAnimal
                nullAnimal.id = null
                return { ...state, ActiveAnimal: { ...nullAnimal } }
            } else {
                return { ...state, ActiveAnimal: { ...activeAnimal } }
            }
        case 'SET_ALL_ANIMALS':
            return { ...state, UserAnimals: [...action.allAnimals] }
        case 'SET_ANIMAL_INVENTORY':
            let newUserAnimals = state.UserAnimals.map(animal => {
                if (animal.animalId === action.animal) {
                    animal.inventory = { ...action.inventory }
                }
                return animal
            })
            let newActiveAnimal = Object.assign({}, state.ActiveAnimal)
            newActiveAnimal.inventory = action.inventory
            return { ...state, UserAnimals: [...newUserAnimals], ActiveAnimal: { ...newActiveAnimal } }
        default:
            return state
    }
}

export default animals