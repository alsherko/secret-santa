export const mapPeopleByGroup = (people) =>
  people
    .reduce((acc, person) => {
      const group = acc.find((item) => item.group === (person.group ?? null))
      if (group) {
        group.people.push(person)
      } else {
        acc.push({
          group: person.group ?? null,
          people: [person],
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
