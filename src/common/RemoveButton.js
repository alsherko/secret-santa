import { ReactComponent as X } from './x.svg'

export const RemoveButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="muted" title="Remove" type="button">
      <X aria-hidden />
    </button>
  )
}
