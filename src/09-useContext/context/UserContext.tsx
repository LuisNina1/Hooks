import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

type AuthStatus = 'checking' | 'authenticated' | 'no-authenticated'

interface UserContextProps {
  authStatus: AuthStatus
  user: User | null;
  isAuthenticated: boolean;

  login: (userId: number) => boolean;
  logout: () => void;
}
export const UserContext = createContext({} as UserContextProps)
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')
  const [user, setUser] = useState<User | null>(null)


  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId)
    if (!user) {
      console.log('user not found ')
      setUser(null)
      setAuthStatus('no-authenticated')
      return false
    }
    setUser(user)
    setAuthStatus('authenticated')
    localStorage.setItem('userId', userId.toString())
    return true
  }
  const handleLogut = () => {
    setAuthStatus('no-authenticated')
    setUser(null)
    localStorage.removeItem('userId')
  }

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) {
      handleLogin(+storedUserId)
      return
    }
    handleLogut()
  }, [])
  return <UserContext value={{
    authStatus: authStatus,
    isAuthenticated:  authStatus === 'authenticated',
    user: user,
    login: handleLogin,
    logout: handleLogut,
  }}>{children}</UserContext>
}
