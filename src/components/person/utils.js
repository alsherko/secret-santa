export const mapPersonByGroup = (person) =>
  person
    .reduce((acc, person) => {
      const group = acc.find((item) => item.group === (person.group ?? null))
      if (group) {
        group.person.push(person)
      } else {
        acc.push({
          group: person.group ?? null,
          person: [person],
        })
      }
      return acc
    }, [])
    .sort((a, b) => {
      if (a.group === null || b.group === null) {
        return 1
      }
      return a.group.localeCompare(b.group)
    })
