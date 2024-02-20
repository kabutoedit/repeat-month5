import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk('users/getUsers', async () => {
	const response = await axios.get(`https://reqres.in/api/users?page=1`)
	console.log(response.data.data)
	return response.data.data
})

export const getUsers2 = createAsyncThunk('users/getUsers2', async () => {
	const response = await axios.get(`https://reqres.in/api/users?page=2`)
	console.log(response.data.data)
	return response.data.data
})

const userSlice = createSlice({
	name: 'user',
	initialState: {
		users: [],
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.users = action.payload
		})
		builder.addCase(getUsers2.fulfilled, (state, action) => {
			state.users = action.payload
		})
	},
})

export default userSlice.reducer
