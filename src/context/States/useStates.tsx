import { useContext } from "react";
import { StatesContext } from ".";

export const useStates= () => {
    const context = useContext(StatesContext);
    return context;
}