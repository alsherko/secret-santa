import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import { ValidationError } from '../../common/ValidationError'

import '../../common/css/form.css'

export const PersonForm = ({ usedNames, usedGroups, onSubmit }) => {
  const { errors, handleSubmit, register, reset } = useForm()

  const submitHandler = (data) => {
    onSubmit({
      name: data['person-name'],
      group: data['person-group'] === '' ? undefined : data['person-group'],
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <fieldset>
        <legend>Добавить нового человека</legend>
        <label htmlFor="person-name" className="label-required">
          Имя
        </label>
        <input
          id="person-name"
          name="person-name"
          type="text"
          aria-required
          ref={register({
            required: 'Требуется имя',
            validate: (value) =>
              (value && !usedNames.includes(value)) ||
              'Имя должно быть уникальным',
          })}
        />
        <ErrorMessage errors={errors} name="person-name" as={ValidationError} />

        <label htmlFor="person-group">Группа</label>
        <input
          id="person-group"
          name="person-group"
          type="text"
          list="groupOptions"
          autoComplete="off"
          ref={register}
        />
        <datalist id="groupOptions">
          {usedGroups.map((group) => (
            <option key={group}>{group}</option>
          ))}
        </datalist>
        <p className="meta">
          Используйте группы для простых исключений, люди в одной группе не
          попадают друг другу.
        </p>
        <button type="submit">Добавить человека</button>
      </fieldset>
    </form>
  )
}
