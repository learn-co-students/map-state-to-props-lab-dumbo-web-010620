

export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      // console.log so we can confirm that this is happening
      console.log('adding ', action.user);

      // return new state, which gets stored in the store and overwrites previous state
      return {
        // copy everything from previous state
        ...state,
        // copy everything from previous users array, adding the new user at the end
        users: [...state.users, action.user]
      }

    default:
      // if the app is initializing or the dispatched action 
      // doesn't === 'ADD_USER' return state unmodified
      return state;
  }
};
