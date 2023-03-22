import { ADD, CHECKED, DELETE, CLEAR } from "./Types";

let todos = [
];

export const todoReducer = (state = todos, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    id: Math.random(),
                    description: action.payload,
                    isChecked: false,
                },
            ]
        case DELETE:
            const newTodos = [...state];
            newTodos.splice(action.payload, 1);
            return newTodos;
        case CHECKED:
            const newState = state.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            })
            return newState;
        case CLEAR:
            const notCompleted = state.filter(todo => !todo.isChecked);
            return notCompleted;
        default:
            break;
    }
    return state;
}
