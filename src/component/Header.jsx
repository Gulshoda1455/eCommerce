import propTypes from "prop-types"
import { memo } from "react"

 const Header=({title,subTitle})=>{
  return (
    <div className='mb-[48px] text-center'>
      <h1 className='font-bold text-[32px]'>{title}</h1>
      <p className='font-normal tetx-[20px]'>{subTitle}</p>
    </div>
  )
}


Header.propTypes={
  title:propTypes.string.isRequired,
  subTitle:propTypes.string.isRequired
}
export default memo(Header);
