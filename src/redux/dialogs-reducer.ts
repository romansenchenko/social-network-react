import { InferActionsType } from './redux-store';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    messages: string
}

let initialState = {
    dialogs: [
        { id: 1, name: "Д има" },
        { id: 2, name: "Света" },
        { id: 3, name: "Саша" },
        { id: 4, name: "Оля" },
        { id: 5, name: "Андрей" },
        { id: 6, name: "Вадим" }
    ] as Array<DialogType>,
    messages: [
        { id: 1, messages: "П ривет!" },
        { id: 2, messages: "Как дела?" },
        { id: 3, messages: "Что делаешь?" }
    ] as Array<MessageType>
}

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 4, messages: body }]
            };
        default:
            return state;
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({ type: 'SN/SEND-MESSAGE', newMessageBody } as const )

}
export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>