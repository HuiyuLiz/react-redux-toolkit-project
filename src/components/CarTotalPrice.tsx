import type { RootState } from '../store'
import { useSelector } from 'react-redux'

const CarTotalPrice = () => {
  const total = useSelector(({ cars: { list, searchTerm } }: RootState) =>
    list
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .reduce((acc, car) => acc + car.cost, 0),
  )

  return (
    <div className="text-xl font-semibold leading-none tracking-tight flex items-center ml-4">
      <div>Total</div>
      <div className="mx-2">-</div>
      <div className="mr-auto ">${total}</div>
    </div>
  )
}

export default CarTotalPrice
