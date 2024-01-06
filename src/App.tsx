import CarForm from './components/CarForm'
import SearchTermInput from './components/SearchTermInput'
import CarList from './components/CarList'
import CarTotalPrice from './components/CarTotalPrice'

const App = () => {
  return (
    <div className="container w-full lg:w-1/3 mx-auto mt-16">
      <CarForm></CarForm>
      <hr className="my-4" />
      <div>
        <SearchTermInput></SearchTermInput>
        <CarList></CarList>
        <CarTotalPrice></CarTotalPrice>
      </div>
    </div>
  )
}

export default App
