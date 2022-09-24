// @ts-nocheck
import Select, { SelectOption } from './Select'
import { useState } from 'react'

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
  { label: 'Sixth', value: 6 },
]

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

  return (
    <>
    <h1>Multi-select<br /> Dropdown:</h1>
    <br />
      <Select multiple options={options} value={value1} onChange={(o) => setValue1(o)} />
      <br />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </>
  )
}

export default App
