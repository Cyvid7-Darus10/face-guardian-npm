import { useState, useEffect } from 'react';

const useUserData = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
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
          setUserData(data);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return userData;
};

export default useUserData;
