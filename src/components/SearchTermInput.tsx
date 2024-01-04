import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { changeSearchTerm } from '../store/slices/carsSlice'

const SearchTermInput = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm)

  return (
    <div>
      Search
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
      />
    </div>
  )
}

export default SearchTermInput
