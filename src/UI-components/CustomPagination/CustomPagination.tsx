import { FC, ReactNode, useState } from 'react'

import { ButtonSize, ButtonType } from '../../helpers/types/types.ts'
import { TeacherItem } from '../../redux/teachers/types.ts'
import { CustomButton } from '../CustomButton/CustomButton.tsx'

interface Props {
  items: TeacherItem[]
  itemsPerPage: number
  renderItem: (item: TeacherItem) => ReactNode
}

const CustomPagination: FC<Props> = ({
  items,
  itemsPerPage = 4,
  renderItem
}) => {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage)

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerPage)
  }

  const visibleItems = items.slice(0, visibleCount)

  return (
    <div>
      <ul>
        {visibleItems.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
      {visibleItems.length < items.length && (
        <CustomButton
          onClick={loadMore}
          type={ButtonType.ORANGE}
          size={ButtonSize.SMALL}
          title="Load more"
        />
      )}
    </div>
  )
}

export { CustomPagination }
