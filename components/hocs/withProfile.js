import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { showProfileAction } from '../../redux/actions/profileActionCreators'

const withProfile = WrappedComponent => currentUser => {
  const WithProfile = () => {
    const dispatch = useDispatch()
    const { profile } = useSelector(state => state.profile)

    useEffect(() => {
      currentUser && dispatch(showProfileAction(currentUser?.id))
    }, [dispatch]);

    return <WrappedComponent currentUser={currentUser} profile={profile} />
  }
  return WithProfile;
}

export default withProfile;
