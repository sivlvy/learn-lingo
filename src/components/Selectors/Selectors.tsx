import { useAppSelector } from '../../helpers/hooks/useAppSelector.ts'
import {
  filteredLanguages,
  filteredLevels,
  filteredPrices
} from '../../redux/filter/filter.selectors.ts'
import {
  setFilterLanguage,
  setFilterLevel,
  setFilterPrice
} from '../../redux/filter/filter.slice.ts'
import { CustomSelect } from '../../UI-components/CustomSelect/CustomSelect.tsx'

const Selectors = () => {
  const selectedLanguageValue = useAppSelector((state) => state.filter.language)
  const selectedLevelValue = useAppSelector((state) => state.filter.level)
  const selectedPriceValue = useAppSelector((state) => state.filter.price)

  const languages = useAppSelector(filteredLanguages).map((item) => ({
    value: item,
    label: item
  }))
  const levels = useAppSelector(filteredLevels).map((item) => ({
    value: item,
    label: item
  }))
  const prices = useAppSelector(filteredPrices).map((item) => ({
    value: item,
    label: item
  }))

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <CustomSelect
        options={languages}
        selectedValue={selectedLanguageValue}
        onChangeAction={setFilterLanguage}
        placeholder="Select language"
      />
      <CustomSelect
        options={levels}
        selectedValue={selectedLevelValue}
        onChangeAction={setFilterLevel}
        placeholder="Select level"
      />
      <CustomSelect
        options={prices}
        selectedValue={selectedPriceValue}
        onChangeAction={setFilterPrice}
        placeholder="Select price"
      />
    </div>
  )
}

export { Selectors }
