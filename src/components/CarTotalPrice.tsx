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

  return <div> total:{total}</div>
}

export default CarTotalPrice
