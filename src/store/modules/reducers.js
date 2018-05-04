
const initialState = {}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'EXAMPLE': return {
      ...state
    }
    default: return state
  }
}
