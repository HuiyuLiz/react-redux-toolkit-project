import type { RootState } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCarById } from '../store/slices/carsSlice'

const CarList = () => {
  const dispatch = useDispatch()
  const list = useSelector((state: RootState) => state.cars.list)
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm)
  const name = useSelector((state: RootState) => state.form.name)
  const filteredList = list.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // highlight included car
  const bold = (car: string) => {
    return name && car.toLowerCase().includes(name.toLowerCase()) ? 'bold' : ''
  }

  const renderedCars = filteredList?.map((car) => (
    <div key={car.id}>
      {car.name} - {car.cost}-class:{bold(car.name)}
      <button onClick={() => dispatch(deleteCarById(car.id))}>X</button>
    </div>
  ))

  return <>{renderedCars}</>
}

export default CarList
