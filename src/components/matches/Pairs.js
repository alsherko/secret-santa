import { CopyReceiver } from './CopyReceiver'

export const Pairs = ({ pairs, showGroups }) => {
  if (pairs.length < 1) {
    return null
  }

  return (
    <table
      style={{
        marginTop: '15px',
      }}
    >
      <thead>
        <tr>
          <th colSpan={showGroups ? 2 : 1}>Тайный санта</th>
          <th colSpan={showGroups ? 2 : 1}>Получатель подарка</th>
        </tr>
        {showGroups && (
          <tr>
            <th>Имя</th>
            <th>Группа</th>
            <th>Имя</th>
            <th>Группа</th>
          </tr>
        )}
      </thead>
      <tbody>
        {pairs.map(([a, b]) => (
          <tr key={a.name}>
            <td>{a.name}</td>
            {showGroups && <td>{a.group}</td>}
            <td>
              <CopyReceiver giver={a.name} receiver={b.name} />
            </td>
            {showGroups && <td>{b.group}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
