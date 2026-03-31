type UserData = Record<string, unknown>;
declare const useUserData: () => {
    userData: UserData | null;
    error: Error | null;
};
export default useUserData;
