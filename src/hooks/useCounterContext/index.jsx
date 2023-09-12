import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterProvider/context";

export function useCounterContext() {

    const context = useContext(CounterContext);

    if(!context) {
        return undefined;
    }

    return context;
}