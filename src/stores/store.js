import { configureStore } from '@reduxjs/toolkit'
import editUser from './User/editUser'

export default configureStore({
	reducer: {
		editUser: editUser,
	},
})
