import './santa.css'

const Santa = ({ giver, reciver }) => {
  return (
    <div className="container">
      <div className="note">
        <h4 className="note__title">Здравствуй, {giver}</h4>
        <h4>
          Вас назначили тайным сантой для{' '}
          <a href={`https://www.instagram.com/${reciver}/`}>{reciver}</a>
        </h4>
        <h4>Удачи!</h4>
      </div>
    </div>
  )
}

export default Santa
