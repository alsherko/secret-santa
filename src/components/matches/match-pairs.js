import { calculateSync } from 'gift-exchange'

const matchPairs = (person) => {
  return calculateSync(person, {
    timeout: 5000,
  }).map((p, i) => [person[i], p])
}

export default matchPairs
