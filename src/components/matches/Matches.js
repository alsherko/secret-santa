import { useLayoutEffect, useState } from 'react'

import { Pairs } from './Pairs'
import matchPairs from './match-pairs'

import './matches.css'

const errorMessage =
    'Невозможно совпадение с указанными людьми, или произошла ошибка. Пожалуйста, попробуйте еще раз или измените свою конфигурацию, чтобы позволить каждому совпадать с кем-то.'

export const Matches = ({ person }) => {
  const [pairs, setPairs] = useState([])
  const [error, setError] = useState(null)
  const [showGroups, setShowGroups] = useState(false)

  useLayoutEffect(() => {
    setPairs([])
  }, [person])

  const calculateMatches = async () => {
    setError(null)
    try {
      setPairs(matchPairs(person))
    } catch (e) {
      console.error(e)
      setError(new Error(errorMessage))
      setPairs([])
    }
  }

  return (
    <>
      <button
        onClick={calculateMatches}
        type="button"
        disabled={person.length < 3}
      >
        Совпадения
      </button>
      <label>
        <input
          type="checkbox"
          onChange={() => setShowGroups((prevState) => !prevState)}
          checked={showGroups}
        />{' '}
        Показывать группы
      </label>
      {error && <p className="error">{error.message}</p>}
      <Pairs pairs={error ? [] : pairs} showGroups={showGroups} />
    </>
  )
}
