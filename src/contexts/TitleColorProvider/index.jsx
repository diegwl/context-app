import P from 'prop-types';
import { TitleColorContext } from './context';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { data } from './data';

export function TitleColorProvider({children}) {
    const [titleColorState, titleColorDispatch] = useReducer(reducer, data);

    return(
        <TitleColorContext.Provider value={{titleColorState, titleColorDispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
}

TitleColorProvider.propTypes = {
    children: P.node.isRequired,
}