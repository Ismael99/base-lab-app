import React, { useEffect, useState } from 'react'
import { Form } from '../../../../components/Form'
import { UserSchema } from '../../../../schema'
import { setCurrentUser } from '../../../../redux/actions/usersActions'
import { thunkFetchRecordsStatus } from '../../../../redux/actions/recordsStatusAction'
import { useDispatch } from 'react-redux'
import { LoaderPage } from '../../../../components/Loader/LoaderPage'
export const UsersForm = ({ user, isInterfaceView, ...props }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      await dispatch(thunkFetchRecordsStatus)
      setLoading(false)
    }
    fetch()
  }, [dispatch])
  if (loading) return <LoaderPage />
  return (
    <Form
      isInterfaceView={isInterfaceView}
      initialValues={user}
      schema={UserSchema}
      setCurrent={setCurrentUser}
      currentPath="users"
      {...props}
    />
  )
}
