import { chatAPI, StatusType } from './../api/chat-api';
import { BaseThunkType, InferActionsType } from './redux-store';
import { FormAction, stopSubmit } from "redux-form";
import { ChatMessageType } from '../api/chat-api';
import { Dispatch } from 'redux';

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}
const chatReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SN/auth/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        case 'SN/auth/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
    }
}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'SN/auth/MESSAGES_RECEIVED', payload: { messages }
    } as const),
    statusChanged: (status: StatusType) => ({
        type: 'SN/auth/STATUS_CHANGED', payload: { status }
    } as const)
}
let _newMessageHandlerCreator: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandlerCreator === null) {
        _newMessageHandlerCreator = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandlerCreator
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}


export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}


export default chatReducer;

export type initialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>