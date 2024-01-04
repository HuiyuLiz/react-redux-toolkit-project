import CarForm from './components/CarForm'
import SearchTermInput from './components/SearchTermInput'
import CarList from './components/CarList'
import CarTotalPrice from './components/CarTotalPrice'

const App = () => {
  return (
    <div>
      <CarForm></CarForm>
      <div>
        <SearchTermInput></SearchTermInput>
        <CarList></CarList>
        <CarTotalPrice></CarTotalPrice>
      </div>
    </div>
  )
}

export default App
