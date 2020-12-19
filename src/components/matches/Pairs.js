export const Pairs = ({ pairs, showGroups }) => {
    if (pairs.length < 1) {
        return null;
    }

    return (
        <table>
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
                    <td>{b.name}</td>
                    {showGroups && <td>{b.group}</td>}
                </tr>
            ))}
            </tbody>
        </table>
    );
}
