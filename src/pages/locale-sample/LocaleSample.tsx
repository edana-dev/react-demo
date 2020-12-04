import React, {createContext, useState} from "react";

const enStrings = {
    submit: "Submit",
    cancel: "Cancel"
}

const cnStrings = {
    submit: "提交",
    cancel: "取消"
}

const LocaleContext  = createContext(enStrings)

const LocaleProvider = (props: any) => {
    const [stateLocale, setStateLocale] = useState(enStrings);

    const toggleLocale = () => {
        const locale = stateLocale === enStrings ? cnStrings : enStrings
        setStateLocale(locale)
    }

    return (
        <LocaleContext.Provider value={stateLocale}>
            <button onClick={toggleLocale}>切换语言</button>
            {props.children}
        </LocaleContext.Provider>
    )
}

const LocaleButtons = () => {
    return (
        <LocaleContext.Consumer>
            {
                locale => (
                    <div>
                        <button>{locale.cancel}</button>
                        &nbsp;<button>{locale.submit}</button>
                    </div>
                )
            }
        </LocaleContext.Consumer>
    )
}

export default () => (
    <div>
        <LocaleProvider>
            <div>
                <br/>
                <LocaleButtons/>
            </div>
        </LocaleProvider>
        <br/>
        <LocaleButtons/>
    </div>
)