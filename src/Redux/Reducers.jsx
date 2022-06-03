import { ADD_COUNT, ADD_TODO } from "./Action"

export { ADD_TODO } from "./Action"

const initstate = {
    count: 11,
    todo: []
}

export const reducer = (store = initstate, { type, payload }) => {
    switch (type) {
        case ADD_COUNT:
            return { ...store, count: store.count + payload }

        case ADD_TODO:
            return { ...store, todo: [...store.todo, payload] }
            
        default:
            return store
    }
}