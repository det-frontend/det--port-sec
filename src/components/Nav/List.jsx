import React from 'react'

const List = ({name,link,id,active}) => {
  return (
    <div key={id} className={` hover:border-b-[3px] cursor-pointer duration-100 text-text text-xl font-medium hover:border-button px-4 py-2 ${active}`}>
        {name}
    </div>
  )
}

export default List