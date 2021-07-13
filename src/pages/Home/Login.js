import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { LoginSchema } from '../../schema'
import { Loader } from '../../components/Loader'
import { navigate } from '@reach/router'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { connect } from 'react-redux'
import { setToken } from '../../redux/actions/usersActions'
import { UserCircleIcon, LockClosedIcon } from '@heroicons/react/outline'

const Login = (props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [storedValue, setStoredValue] = useLocalStorage('token', 'token')

  return (
    <>
      <Formik
        initialValues={LoginSchema.initialValues}
        validationSchema={LoginSchema.validations}
        onSubmit={async (values, { setSubmitting }) => {
          setLoading(true)
          console.log(JSON.stringify({ ...values, isTokenRequired: true }))
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
            console.log(config)
            console.log(data)
            if (data.status_code === 200) {
              await setStoredValue(data.result.token)
              props.setTokenAction(storedValue)
              setLoading(false)
              setSubmitting(false)
              navigate('/dashboard')
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
        }}
      >
        <div className="w-full max-w-md bg-white rounded-lg dark:bg-gray-800 bg-opacity-0">
          <div className="p-5 text-center">
            <h2 className="text-2xl font-semibold text-white border-b border-gray-400 dark:text-white fo">
              Iniciar Sesión
            </h2>

            <Form>
              <div className="my-5">
                <span className="flex flex-row items-center ">
                  <UserCircleIcon className="w-6 absolute ml-2 text-gray-400" />
                  <Field
                    className="block w-full pl-10 px-4 py-2 text-white placeholder-white bg-white border border-gray-800 rounded-full focus:border-white bg-opacity-10 border-opacity-50 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none"
                    type="text"
                    name="user_username"
                    placeholder="Username..."
                  />
                </span>
                <div className="w-3/4 h-6 mt-3 mb-3 text-xs text-left text-red-500 xl:w-1/2">
                  <ErrorMessage name="user_username" />
                </div>
                <span className="flex flex-row items-center">
                  <LockClosedIcon className="w-6 absolute ml-2 text-gray-400" />
                  <Field
                    className="block w-full pl-10 px-4 py-2 text-white placeholder-white bg-white border border-gray-800 rounded-full focus:border-white bg-opacity-10 border-opacity-50 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none"
                    type="password"
                    name="user_password"
                    placeholder="Password..."
                  />
                </span>
                <div className="w-3/4 h-6 mt-3 mb-3 text-xs text-left text-red-500 xl:w-1/2">
                  <ErrorMessage name="user_password" />
                </div>
              </div>
              <div className="flex items-center justify-center -mt-3">
                <button
                  type="submit"
                  className="px-8 py-2 font-semibold text-white bg-black transform hover:translate-x-px hover:-translate-y-px transition-colors duration-200 rounded-md hover:opacity-80 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700"
                >
                  Aceptar
                </button>
              </div>
            </Form>
          </div>
          {loading && (
            <div className="flex items-center justify-center pb-6">
              <Loader />
            </div>
          )}
          {error && (
            <div className="flex items-center text-center">
              <span className="px-4 pb-4 text-lg text-red-800">
                Algo salió mal, por favor vuelve a intentarlo
              </span>
            </div>
          )}
        </div>
      </Formik>
    </>
  )
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  setTokenAction: (payload) => dispatch(setToken(payload))
})

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login)
