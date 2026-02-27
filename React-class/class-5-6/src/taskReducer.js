export function taskReducer(state , action){
  switch(action.type){
    case "ADD_TASK":
      return [...state , {
        id: state.length + 1,
        title: action.title,
        createdAt: new Date()
      }];
    case "EDIT_TASK":
      const task = state.find((task)=> task.id === action.id);
      if (task) {
        task.title = action.newTitle;
        return [...state];
      }
      return state;
    case "DELETE_TASK":
      return state.filter((task)=> task.id !== action.id);
    default:
      throw new Error("Unknown action type")
  }
}