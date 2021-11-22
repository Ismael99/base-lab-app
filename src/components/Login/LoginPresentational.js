import React from 'react'
import { InputLogin } from './Inputlogin'
import { LoadLab } from '../../components/Loader/LoadLab'
import { Formik, Form } from 'formik'
import { LoginSchema } from '../../schema'
import { UserCircleIcon, LockClosedIcon } from '@heroicons/react/outline'
import login_icon from '../../assets/login_icon3.png'
import './index.css'

export const LoginPresentational = ({ handledSubmit, loading, error }) => {
  return (
    <>
      <Formik
        initialValues={LoginSchema.initialValues}
        validationSchema={LoginSchema.validations}
        onSubmit={handledSubmit}
      >
        <div className="order-1 w-full max-w-md mt-1 mb-8 bg-white rounded-lg shadow-md lg:order-2 lg:mt-7 lg:mb-1 dark:bg-gray-800 bg-opacity-0">
          <div className="p-5 text-center">
            <img
              src={login_icon}
              alt="login-icon"
              className="p-3 mx-auto bg-white border border-gray-700 rounded-full w-28 bg-opacity-20"
            />
            <Form>
              <div className="my-5">
                <InputLogin
                  IconField={UserCircleIcon}
                  loading={loading}
                  type="text"
                  nameField="user_username"
                  placeholder="Username..."
                />
                <InputLogin
                  IconField={LockClosedIcon}
                  loading={loading}
                  type="password"
                  nameField="user_password"
                  placeholder="Password..."
                />
              </div>
              <div className="flex items-center justify-center -mt-3 btn-animations">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full px-8 py-2 font-semibold text-white bg-black btn-animations md:w-1/2 rounded-md hover:border-transparent hover:bg-opacity-60 focus:outline-none"
                >
                  Iniciar Sesión
                </button>
              </div>
            </Form>
          </div>
          {loading && (
            <div className="flex items-center justify-center h-10 mb-3">
              <LoadLab />
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
