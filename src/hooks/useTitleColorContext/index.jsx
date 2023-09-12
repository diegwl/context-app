import { useContext } from "react";
import { TitleColorContext } from "../../contexts/TitleColorProvider/context";

export function useTitleColorContext() {

    const context = useContext(TitleColorContext);

    if(!context) {
        return undefined;
    }

    return context;
}