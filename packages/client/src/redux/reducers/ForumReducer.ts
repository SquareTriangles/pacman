enum ActionTypes {
  someActiomA = 'some_action_a',
  someActiomB = 'some_action_B',
}

interface IActionA {
  type: ActionTypes.someActiomA;
  payload: string;
}

interface IActionB {
  type: ActionTypes.someActiomB;
  payload: number;
}

type IAction = IActionA | IActionB

const initialState = {};

const ForumReducer = (state = initialState, action:IAction) => {
  return state;
}

export default ForumReducer;
