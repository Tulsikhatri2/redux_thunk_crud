
const initialState = {
    userList: [],
    edit:{user:{}, isEdit:false}
}

const crudReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case "CREATE_DATA":
            return {
                ...state,
                userList: [...state.userList, action.payload]
            };

        case "DELETE_DATA":
            const index = action.payload
            const newUserList = [...state.userList]
            newUserList.splice(index, 1)
            return {
                ...state,
                userList: newUserList
            };
        
        case "EDIT_DATA":
            return{
                ...state,
                edit:{
                    user:action.payload,
                    isEdit:true}

            };

        case "UPDATE_DATA":
            const { id, name, email, address, phone } = action.payload
            debugger
            return {
                ...state,
                userList: state.userList.map(info =>
                    info.id === id ? { ...info, name, email, address, phone } : info
                )
            }
        default:
            return state
    }
}

export default crudReducer