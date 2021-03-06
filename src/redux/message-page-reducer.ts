const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_NEW_MESSAGE_BODY'

const initialState = {
    dialogs: [
        {id: 1, name: "Java"},
        {id: 2, name: "Asa"},
        {id: 3, name: "Bob"},
    ],
    messages: [
        {id: 1, message: "Yo"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Yo"},
    ],
    newMessageBody: ""
}

const messagePageReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            const body = state.newMessageBody
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body} ]
            }

        default:
            return state
    }
}
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
} as const)
export const updateNewMessageBodyCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
} as const)

export default messagePageReducer