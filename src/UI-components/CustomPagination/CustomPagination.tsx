import { FC, ReactNode, useState } from 'react'

import { ButtonSize, ButtonType } from '../../helpers/types/types.ts'
import { Teacher } from '../../redux/teachers/types.ts'
import { CustomButton } from '../CustomButton/CustomButton.tsx'

import styles from './CustomPagination.module.scss'

interface Props {
  items: Teacher[]
  itemsPerPage: number
  renderItem: (item: Teacher) => ReactNode
  className?: string
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
      <ul className={styles.list}>
        {visibleItems.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
      {visibleItems.length < items.length && (
        <CustomButton
          className={styles.paginationBtn}
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
