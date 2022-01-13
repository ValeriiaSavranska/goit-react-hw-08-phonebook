const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsRefreshCurrentUser = state => state.auth.isRefreshCurrentUser;

const getUsername = state => state.auth.user.name;

export { getIsLoggedIn, getIsRefreshCurrentUser, getUsername };
