import { Manrope } from 'next/font/google';
import { createContext, useContext } from "react"

const PrimaryFont = Manrope({subsets: ['latin']});
const ApplicationContext = createContext(null);

export function useApplication() {
    return useContext(ApplicationContext);
}

export default function ApplicationProvider({children}) {
    const Languages = [
        {
            active: true,
            locale: "en",
            country_code: "USA",
            name: "English",
        },
        {
            active: true,
            locale: "et",
            country_code: "EST",
            name: "Estonian"
        },
        {
            active: false,
            locale: "tr",
            country_code: "TR",
            name: "Turkish"
        },
        {
            active: false,
            locale: "ukr",
            country_code: "UKR",
            name: "Ukrainian"
        },
        {
            active: false,
            locale: "kz",
            country_code: "KZ",
            name: "Kazakh"
        },
        {
            active: true,
            locale: "az",
            country_code: "AZ",
            name: "Azeri"
        },
        {
            active: true,
            locale: "lt",
            country_code: "lt",
            name: "Lithuanian"
        }
    ];
    const ProviderValues = {
        test: true,
        PrimaryFont: PrimaryFont.className,
        languages: Languages
    }

    return(
        <ApplicationContext.Provider value={ProviderValues}>
            {children}
        </ApplicationContext.Provider>
    )
}
