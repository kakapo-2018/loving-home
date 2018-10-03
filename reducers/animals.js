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

// const initialState = {

//     UserAnimals: [
//         {
//             animalId: null,
//             name: "",
//             species: "",
//             disposition: "",
//             inventory: 
//         }
//     ],
//     ActiveAnimal: {
//         id: null
//     }

// }

const animals = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_ANIMAL':
            let activeAnimal = state.UserAnimals.find(animal => {
                //console.log(animal.inventory)
                return animal.animalId === action.animal
            })
            if (!activeAnimal) {
                console.log('active animal has been reset to null')
                return { ...state, ActiveAnimal: { id: null } }
            } else {
                console.log(`active animal is now ${JSON.stringify(activeAnimal)}`)
                return { ...state, ActiveAnimal: { ...activeAnimal } }
            }
        case 'SET_ALL_ANIMALS':
            return { ...state, UserAnimals: [...action.allAnimals] }
        case 'SET_ANIMAL_INVENTORY':
            let newUserAnimals = state.UserAnimals.map(animal => {
                if (animal.animalId === action.animal) {
                    //console.log(JSON.stringify(action))
                    animal.inventory = { ...action.inventory }
                }
                return animal
            })
            return { ...state, UserAnimals: [...newUserAnimals] }
        default:
            return state
    }
}

export default animals