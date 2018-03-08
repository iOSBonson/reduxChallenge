const redux = require("redux");
const {createStore}=require("redux");
// bonson
const PLAN="PLAN"

const initialState = {
  profile: {
    gender: "female",
    name: {
      title: "mrs",
      first: "Neha",
      last: "Dias"
    },
    phone: "015394 16261",
    cell: "9764141646",
    location: {
      street: "2591 rua pará ",
      city: "Vasai",
      state: "mato grosso",
      postcode: 31682
    },
    currentPlan: "free",
    upgraded: false
  },
  plans: [
    {
      id: "33453ttt",
      name: "gold",
      cost: 3500
    },
    {
      id: "334545tt",
      name: "silver",
      cost: 2500
    }
  ]
};

/* 
create an action to add a new plan called "valentine special".
You can set the id: "33453ttt" and the cost: 1500
*/

function myvalentineSpecial()
{
  return{
    type:PLAN,
    payload: {
      id: "33453ttt",
      name: "valentine special",
      cost: "1500"
    }
  }
}

/* 
Write a reducer to handle the above action
Make sure to update the plans array immutably
*/

function reducer (state=initialState,action)
{
  switch(action.type)
  {
    case PLAN:
    state.plans.push(action.payload);
    return{
      ...state
    }

    default :
    return state;
  }

}

/* create a store with the initial data above and the action */

const store = createStore(reducer);
/* 
  Fire the action
*/

store.dispatch(myvalentineSpecial());

/* 
expected output: modified nextState
the store via store.getState() 
*/

console.log(store.getState());
