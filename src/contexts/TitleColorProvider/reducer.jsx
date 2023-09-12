import * as types from './types';

export const reducer = (state, action) => {
    switch (action.types) {
        case types.RED: {
            return {...state, color: "red"}
        }
        case types.PURPLE: {
            return {...state, color: 'purple'}
        }
    }

    return {...state, }
}