import { createContext, useReducer } from "react";

// const initialState = [
//     {
//         city: "İstanbul",
//     }
// ]

export const WeatherContext = createContext();

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_CITY":
            return {
                // city: [action.payload]
                city: action.payload
            }
        default:
            return state
    }
};

export const WeatherContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(weatherReducer, {
        city: "İstanbul",
    })

    return (
        <WeatherContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WeatherContext.Provider>
    )
}