import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // console.log(data);
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;
// NOTES
//access object without "." just use "[]"
//dependency on currency (i.e if it changes)
//the response (in res) is in form of string so we convert it to json
//currency value passed as a variable (the way url works)
//empty obj so that it doesn't crash in case of no fetch call
//hooks generally return js in majority of cases so use .js instead of .jsx but use .jsx if it returns jsx
//custom hooks can use predefined hooks too