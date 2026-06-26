export const accountStore = {
    initialized: Promise.resolve(),
    isLoggedIn: false,
    userEmail: undefined,
    userSubscription: undefined,
    featureFlags: {},
    mightBePaidUser: true,
    canManageSubscription: false,
    modal: undefined,
    isAccountUpdateInProcess: false,
    
    getPro: async () => {},
    logIn: async () => false,
    logOut: () => {},
    cancelLogin: () => {},
    finalizeLogin: async () => {},
    setSelectedPlan: () => {},
    cancelCheckout: () => {},
    cancelSubscription: async () => {},

    get userJwt() {
        throw new Error("Account logic removed");
    }
};
