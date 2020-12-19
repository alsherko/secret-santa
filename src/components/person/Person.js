import { useMemo } from 'react'

import { RemoveButton } from '../../common/RemoveButton'
import { mapPeopleByGroup } from './utils'

const UNDEFINED_GROUP = 'fba449b5-deb3-400c-991c-4bac2bb1ad33'

export const Person = ({ people, removePeople }) => {
  const groups = useMemo(() => mapPeopleByGroup(people), [people])

  if (!people.length) {
    return null
  }

  return (
    <>
      <h3 id="added-people-heading">Added People</h3>
      <ul aria-labelledby="added-people-heading">
        {groups.map((group) => {
          const groupId = `person-group-${group.group ?? UNDEFINED_GROUP}`
          return (
            <li key={groupId}>
              <span id={groupId}>
                {group.group === null ? 'Нет группы' : group.group}
              </span>
              <ul aria-labelledby={groupId}>
                {group.people.map((p) => (
                  <li key={p.name}>
                    {p.name} <RemoveButton onClick={() => removePeople(p)} />
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </>
  )
}
