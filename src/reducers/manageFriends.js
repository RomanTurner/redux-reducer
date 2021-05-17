export function manageFriends(state = { friends: [] }, action) {
    const remFriend = state.friends.filter((f) => f.id !== action.id);

  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      return { ...state, friends: [...remFriend] };
    default:
      return state;
  }
}
