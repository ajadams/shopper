// reducer.js

import _ from 'lodash'
import { FIELDS } from './constants'

let init = {};

export default function(state = init, action) {

    switch(action.type) {

    	case 'SHOPPER:UPDATE':
    		var newState = {...state, ...action.payload},
    			all_valid = false;

    		_.each(FIELDS, f => {
				if( !newState[f.name+'_valid'] ){
					all_valid = false;
					return false;
				}

				all_valid = true;
			});

			newState.form_valid = all_valid;

    		return newState;

    	case 'SHOPPER:SAVE':
    		var newState = {...state, save_done: true},
    			newUser = {};

    		_.each(FIELDS, f => {
    			newUser[f.name] = newState[f.name];
    		});

    		//save to sessionStorage
    		newState.activeUser = newUser;

    		return newState;

        default:
            return state;
            
    }

};