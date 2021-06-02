// export object of action names: keyname: name, value: action
/**
 * ************************************
 *
 * @module  actionTypes.js
 * @author
 * @date
 * @description Action Type Constants
 *
 * ************************************
 */

//
export const UPDATE_INSTANCEINFO = 'UPDATE_INSTANCEINFO';
//

//
export const SWITCH_DATABASE = 'SWITCH_DATABASE';
//
export const SWITCH_INSTANCE = 'SWITCH_INSTANCE';

//
//THIS WILL BE USED FOR FILTERING AND PAGINATION - THERE NEEDS TO BE A CONDITION WHETHER THE PAGINATION HAS A FILTER OR NOT
export const CHANGE_KEYSPACE_PAGE = 'CHANGE_KEYSPACE_PAGE';
// THIS WILL BE USED FOR REFRESHING THE KEYSPACE - CONSIDER WITH OR WITHOUT FILTERS IN THE QUERY PARAMS.
export const REFRESH_KEYSPACE = 'REFRESH_KEYSPACE';
// THIS WILL ONLY BE USED IN THE APP.JSX ON LOAD - WILL RECEIVE ALL KEYSPACES FOR ALL DATABASES FOR ALL INSTANCES
export const LOAD_KEYSPACE = 'LOAD_KEYSPACE';
//

//
export const LOAD_ALL_EVENTS = 'LOAD_ALL_EVENTS';
//
export const REFRESH_EVENTS = 'REFRESH_EVENTS';
//
export const GET_EVENT_TOTALS = 'GET_EVENT_TOTALS';
//
export const GET_NEXT_EVENTS = 'GET_NEXT_EVENTS';
//
export const CHANGE_EVENTS_PAGE = 'CHANGE_EVENTS_PAGE';
//

//
export const UPDATE_KEYGRAPH = 'UPDATE_KEYGRAPH';
//

export const UPDATE_PAGE = 'UDPATE_PAGE';
//
export const UPDATE_CURRDISPLAY = 'UPDATE_CURRDISPLAY';
//
export const UPDATE_PAGENUM = 'UPDATE_PAGENUM';
//
export const UPDATE_PAGESIZE = 'UPDATE_PAGESIZE';
//
