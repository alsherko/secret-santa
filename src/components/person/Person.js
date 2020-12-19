import { useMemo } from 'react'

import { RemoveButton } from '../../common/RemoveButton'
import { mapPersonByGroup } from './utils'

const UNDEFINED_GROUP = 'fba449b5-deb3-400c-991c-4bac2bb1ad33'

export const Person = ({ person, removePerson }) => {
  const groups = useMemo(() => mapPersonByGroup(person), [person])

  if (!person.length) {
    return null
  }

  return (
    <>
      <ul>
        {groups.map((group) => {
          const groupId = `person-group-${group.group ?? UNDEFINED_GROUP}`
          return (
            <li key={groupId}>
              <span id={groupId}>
                {group.group === null ? 'Нет группы' : group.group}
              </span>
              <ul aria-labelledby={groupId}>
                {group.person.map((p) => (
                  <li key={p.name}>
                    {p.name} <RemoveButton onClick={() => removePerson(p)} />
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
