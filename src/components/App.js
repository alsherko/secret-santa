import {useState} from "react";
import {Main} from './Main'
import {decryptHash} from "../common/utils";

const App = () => {
    // const [params, setParams] = useState(getSearchParameters())

    const transformToArray = (prmstr) => {
        let params = {};
        let prmarr = prmstr.split("&");
        for ( let i = 0; i < prmarr.length; i++) {
            let tmparr = prmarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        return params;
    }

    const getSearchParameters = () => {
        let prmstr = window.location.search.substr(1);
        return prmstr !== null && prmstr !== "" ? transformToArray(prmstr) : {};
    }

    const params = getSearchParameters();

    console.log(params.giver, decryptHash(params.key))

    return (
        <>
            <header>
                <h1>
                    Тайный Санта
                    <span role="presentation" aria-hidden="true">
            🎅🏼
          </span>
                </h1>
            </header>
            <Main/>
        </>
    )
}

export default App
