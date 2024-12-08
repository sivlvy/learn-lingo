import { FC } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'

import DropDownIcon from '../../assets/icons/DropDownIcon.tsx'

import styles from './custom-select.module.scss'

type Option = { value: string | number; label: string | number }

interface CustomSelectProps {
  options: Option[]
  selectedValue: string | number | null
  onChangeAction: (value: string | number) => {
    type: string
    payload: string | number
  }
  placeholder: string
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  selectedValue,
  onChangeAction: dispatchAction,
  placeholder
}) => {
  const dispatch = useDispatch()

  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      dispatch(dispatchAction(selectedOption.value))
    }
  }

  const getSelectedOption = () => {
    if (selectedValue === null) {
      return null
    }
    return options.find((option) => option.value === selectedValue) || null
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.description}>{placeholder}</p>
      <Select
        onChange={handleChange}
        isSearchable={false}
        options={options}
        className="react-select-container"
        classNamePrefix="react-select"
        value={getSelectedOption()}
      />
      <DropDownIcon />
    </div>
  )
}

export { CustomSelect }
