import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

const WithAuth = Component => {
  const NewComponent = () => {
    const router = useRouter()
    const { loading, currentUser, error } = useSelector(state => state.user)

    useEffect(() => {
      if (!currentUser && !router.route.startsWith("/auth")) {
        router.push("/auth/signin")
      }
    }, [router, currentUser]);

    if (loading) {
      return <div></div>
    }

    if (currentUser) {
      return <Component currentUser={currentUser} />
    }
    return <div></div>
  }
  return NewComponent;
}

export default WithAuth;
