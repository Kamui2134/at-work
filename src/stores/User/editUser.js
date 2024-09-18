import { createSlice } from '@reduxjs/toolkit'

export const editUser = createSlice({
	name: 'editUser',
	initialState: {
        user: {}
	},
	reducers: {
		addUser: (state, action) => {
            state.user = Object.assign({}, action.payload)
		},
	},
})

export const { addUser } = editUser.actions

export default editUser.reducer
