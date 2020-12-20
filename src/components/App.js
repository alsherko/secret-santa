import { Main } from './Main'
import Santa from './Santa'
import { decryptHash, getSearchParameters } from '../common/utils'

const App = () => {
  const searchParams = getSearchParameters()

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
      {searchParams?.giver && searchParams?.key ? (
        <Santa
          giver={searchParams?.giver}
          reciver={decryptHash(searchParams?.key)}
        />
      ) : (
        <Main />
      )}
    </>
  )
}

export default App
