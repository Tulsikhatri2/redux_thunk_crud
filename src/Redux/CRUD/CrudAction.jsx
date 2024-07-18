export const createData = (formData) => ({
    type: "CREATE_DATA",
    payload: formData
})

export const deleteData = (id) => ({
    type: "DELETE_DATA",
    payload: id
})

export const editData = (userData) => ({
    type: "EDIT_DATA",
    payload: userData
})

export const updateData = ({id,name,email,address,phone}) => ({
    type: "UPDATE_DATA",
    payload: {id,name,email,address,phone}
})