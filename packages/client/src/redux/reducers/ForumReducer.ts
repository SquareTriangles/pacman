enum ActionTypes {
  someActionA = 'some_action_a',
  someActionB = 'some_action_B',
}

interface IActionA {
  type: ActionTypes.someActionA
  payload: string
}

interface IActionB {
  type: ActionTypes.someActionB
  payload: number
}

type IAction = IActionA | IActionB

const initialState = {}

const ForumReducer = (state = initialState, action: IAction) => {
  return state
}

export default ForumReducer
