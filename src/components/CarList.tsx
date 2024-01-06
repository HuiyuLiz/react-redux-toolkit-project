import type { RootState } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCarById } from '../store/slices/carsSlice'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'

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
    return name && car.toLowerCase().includes(name.toLowerCase())
      ? 'text-red-500'
      : ''
  }

  const renderedCars = filteredList?.map((car) => (
    <Card className="mx-auto mb-4 shadow-none" key={car.id}>
      <CardHeader className="p-4">
        <CardTitle className="flex items-center text-xl">
          <div className={`${bold(car.name)}`}>{car.name}</div>
          <div className="mx-2">-</div>
          <div className="mr-auto ">${car.cost}</div>
          <Button onClick={() => dispatch(deleteCarById(car.id))}>X</Button>
        </CardTitle>
      </CardHeader>
    </Card>
  ))

  return <>{renderedCars}</>
}

export default CarList
