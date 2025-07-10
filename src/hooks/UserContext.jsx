import { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext({});

/**
 * UserProvider
 * - Holds userInfo state
 * - Persists to localStorage
 * - Provides login (putUserData) and logout
 */
export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  /**
   * Stores user data and persists to localStorage
   */
  const putUserData = (userInfo) => {
    setUserInfo(userInfo);
    localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
  };

  /**
   * Logs out user by clearing localStorage and state
   */
  const logout = () => {
    localStorage.removeItem('devburger:userData');
    setUserInfo(null);
  };

  /**
   * On app load, restore user from localStorage if exists
   */
  useEffect(() => {
    const userInfoFromLocalStorage = localStorage.getItem('devburger:userData');
    if (userInfoFromLocalStorage) {
      setUserInfo(JSON.parse(userInfoFromLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Hook to use UserContext
 */
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export default UserContext;
