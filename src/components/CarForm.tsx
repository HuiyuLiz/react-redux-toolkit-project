import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeCost } from '../store/slices/formSlice'
import { addCar } from '../store/slices/carsSlice'

const CarForm = () => {
  const dispatch = useDispatch()
  const name = useSelector((state: RootState) => state.form.name)
  const cost = useSelector((state: RootState) => state.form.cost)
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addCar({ name, cost }))
  }

  return (
    <form onSubmit={submit}>
      <div>name</div>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(changeName(e.target.value))
        }
      />
      <div>cost</div>
      <input
        type="number"
        value={cost}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(changeCost(parseInt(e.target.value) || 0))
        }
      />
      <button>Submit</button>
    </form>
  )
}

export default CarForm
