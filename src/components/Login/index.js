import React, { useState } from 'react'
import { navigate } from '@reach/router'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/actions/usersActions'
import { LoginPresentational } from './LoginPresentational'

export const Login = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [storedValue, setStoredValue] = useLocalStorage('token', 'token')
  const [_, setUser] = useLocalStorage('user', {});
  const dispatch = useDispatch()
  const handledSubmit = async (values, { setSubmitting }) => {
    setLoading(true)
    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...values, isTokenRequired: true })
      }
      // TODO: validar erorres de estado de codigo http
      const res = await fetch(
        `${process.env.REACT_APP_URL_API}/users/login`,
        config
      )
      const data = await res.json()
      if (data.status_code === 200) {
        const { result } = data
        await setStoredValue(result.token)
        await setUser(JSON.stringify(result.users))
        dispatch(setToken(storedValue))
        setLoading(false)
        setSubmitting(false)
        navigate('/dashboard')
        window.location.reload()
      } else {
        setLoading(false)
        setSubmitting(false)
        alert('Credenciales incorrectas')
      }
    } catch (err) {
      setError(err)
      setLoading(false)
      setSubmitting(false)
    }
  }

  return (
    <>
      <LoginPresentational
        handledSubmit={handledSubmit}
        loading={loading}
        error={error}
      />
    </>
  )
}
