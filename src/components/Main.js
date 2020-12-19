import { useMemo } from 'react'
import { Tab, TabList, TabPanels, Tabs, TabPanel } from '@reach/tabs'

import { Matches } from './matches/Matches'
import { PersonForm, Person } from './person'

import { useStoredState } from '../common/useStoredState'

import '../common/css/tabs.css'

const isString = (str) => typeof str === 'string'

export const Main = () => {
  const [person, setPerson] = useStoredState('secret-santa-person', [])

  const usedNames = useMemo(() => person.map((p) => p.name), [person])
  const usedGroups = useMemo(
    () => [...new Set(person.map((p) => p.group).filter(isString))],
    [person]
  )

  const addPerson = (person) => {
    setPerson((prev) => prev.concat(person))
  }

  const removePerson = (person) => {
    setPerson((prevPerson) => prevPerson.filter((p) => p.name !== person.name))
  }

  const clear = () => {
    setPerson([])
  }

  return (
    <main>
      <section>
        <p>
          Создайте совпадение имен для обмена подарками. Поддерживает
          группировку людей, для исключения на основе имени группы.
        </p>
        <button className="danger" onClick={clear}>
          Очистить
        </button>
      </section>
      <Tabs>
        <TabList>
          <Tab>Люди</Tab>
          <Tab disabled={person.length < 3}>Совпадения</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PersonForm
              usedNames={usedNames}
              usedGroups={usedGroups}
              onSubmit={addPerson}
            />
            <Person person={person} removePerson={removePerson} />
          </TabPanel>
          <TabPanel>
            <Matches person={person} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  )
}
