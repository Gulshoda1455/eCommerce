
 const CategoryCard=({img,name })=>{
  return (
    <div className='text-center'>
      <img src={img} alt="Category img" />
      <h1 className='font-semibold text-[24px] '>{name}</h1>
    </div>
  )
}
export default CategoryCard;
