import { useState, useEffect } from 'react'

export const useCredentialsCheck = (userToLogIn, usersData) => {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState({})

    const checkUser = async () => {
        try {
            const getUser = usersData.filter((user) => {
                return (
                    user.email === userToLogIn.email &&
                    user.password === userToLogIn.password
                )
            })
            if (getUser.length > 0) {
                setUser(userToLogIn)
                setIsAuth(true)
                return
            }
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        checkUser()
    }, [user])

    return [isAuth, user]
}
