import './App.css'
import { PlusRegular, PlusRegularRose } from './assets/Plus-Regular'
import { Button } from './Components/Button/Button'
import { TrashPrimary, TrashSecondary, TrashTerciary } from './Components/Button/Trash'
import { Check } from './Components/Form/Check'

function App() {


  return (
    <>
      <TrashPrimary/>
      <TrashSecondary/>
      <TrashTerciary/>
      <Button text='Tes' icon={<PlusRegularRose/>}/>
      <Check/>
    </>
  )
}

export default App