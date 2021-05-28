//leave these separate for future developers in case they want to add functionality
import * as types from '../actions/actionTypes.js';

const initialState = {
  currDatabase: 0,
  keyspace: [[]],
};

const keyspaceReducer = (state = initialState, action) => {
  let keyspace;

  switch (action.type) {
    case types.UPDATE_KEYSPACE: {
      //we want to update the kesypace at index database
      if (!action.payload.dbIndex) {
        const allKeyspaces = action.payload.keyspace;
        keyspace = state.keyspace.slice();
        keyspace = allKeyspaces;
      } else {
        const dbIndex = action.payload.dbIndex;
        const newKeyspace = action.payload.keyspace;
        keyspace = state.keyspace.slice();
        keyspace[dbIndex].push(...newKeyspace);
      }

      return {
        ...state,
        keyspace,
      };
    }

    default: {
      return state;
    }
  }
};

export default keyspaceReducer;
