import React from 'react'

const List = ({name,link,id,active}) => {
  console.log('====================================');
  console.log(active);
  console.log('====================================');
  return (
    <div key={id} className={` hover:border-b-[3px] cursor-pointer duration-100 text-text text-xl font-medium hover:border-text px-4 py-2 ${active}`}>
        {name}
    </div>
  )
}

export default List