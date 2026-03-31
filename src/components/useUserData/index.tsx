import { useState, useEffect } from 'react';
import { STORAGE_KEY } from '../FaceLogin';

type UserData = Record<string, unknown>;

const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEY);

    if (token) {
      fetch('https://www.face-guardian.vercel.app/api/get-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch user data: ${response.status}`);
          }
          return response.json();
        })
        .then((data: UserData) => {
          setUserData(data);
        })
        .catch((err) => {
          setError(err instanceof Error ? err : new Error(String(err)));
        });
    }
  }, []);

  return { userData, error };
};

export default useUserData;
