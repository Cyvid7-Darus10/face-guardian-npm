import { useState, useEffect } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Check if user data already exists in local storage
    const existingUserData = localStorage.getItem('userData');
    if (existingUserData) {
      setUserData(JSON.parse(existingUserData));
      return;
    }

    // Get token from local storage
    const token = localStorage.getItem('token');

    // Fetch user data if token exists
    if (token) {
      fetch('https://www.face-guardian.com/api/get-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Save user data to local storage and state
          localStorage.setItem('userData', JSON.stringify(data));
          setUserData(data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return userData;
};

export default useUserData;
