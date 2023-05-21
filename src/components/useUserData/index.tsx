import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useUserData = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Check if user data already exists in cookie
    const existingUserData = Cookies.get('userData');
    if (existingUserData) {
      setUserData(existingUserData);
      return;
    }

    // Get token from cookie
    const token = Cookies.get('token');

    // Fetch user data if token exists
    if (token) {
      fetch('/api/get-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Save user data to cookie and state
          Cookies.set('userData', JSON.stringify(data));
          setUserData(data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return userData;
};

export default useUserData;
