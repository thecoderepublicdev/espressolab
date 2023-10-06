import { createContext, useContext } from "react"

const ApplicationContext = createContext(null);

function useApplication() {
    return useContext(ApplicationContext);
}

function ApplicationProvider() {
    const ProviderValues = {

    }

    return(
        <ApplicationContext.Provider value={ProviderValues}>
            
        </ApplicationContext.Provider>
    )
}

export {
    ApplicationProvider,
    useApplication
}