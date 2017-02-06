export function manageFriends (state = { friends: [], numberOfPresents: 0 }, action) {
  switch (action.type) {
    case "INCREASE":
      return {friends: state.friends, numberOfPresents: state.numberOfPresents + 1}
      break;
      case "ADD_FRIEND":
          var newObject =  Object.assign(state)
          newObject.friends.push(action.payload)
          return newObject
        break;
        case "REMOVE_FRIEND":
            var newObject =  Object.assign(state)
            var newFriends =  newObject.friends.filter((friend) => { return friend.id != action.payload } )
            newObject.friends = newFriends
            return newObject
          break;
    default:
      return state
  }
}
