const initialState = {
  isConnected: false,
  userId: null,
  roleId: null,
};

function userContextReducer(state, action) {
  switch (action.type) {
    case 'CONNECTION':
      return {
        ...state,
        isConnected: true,
        userId: action.payload.userId,
        roleId: action.payload.roleId,
      };
    case 'DISCONNECTION':
      return {
        ...state,
        isConnected: false,
        userId: null,
        roleId: null,
      };
    default:
      return state;
  }
}

export { userContextReducer, initialState };
