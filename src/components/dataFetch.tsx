import { createAsyncThunk } from "@reduxjs/toolkit"
import { store } from "../app/store"

const fetchUserById = createAsyncThunk(
    'users/fetchById',
    async (userId: number) => {
      const response = await fetch(`https://reqres.in/api/users/${userId}`)
      return (await response.json())
    }
  )

export const lastReturnedAction = store.dispatch(fetchUserById(3))
  