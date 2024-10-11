import React, { useEffect, useState } from 'react'
import { useGetCategoryQuery } from '../store/service/endpoints/products.endpoints';
import CategoryComponents from './Category.components';
import AllCateBtnComponents from './AllCateBtn.components';
import LoadingCategoryComponents from './LoadingCategory.components';
const CategoryGroupComponents = () => {
    const {isLoading,isError,data ,refetch} = useGetCategoryQuery();
    const [categories,setCategories] = useState([]);
    
    const data2 = Array.from({length:4},(_,index) => ({id:index,cateBtn: false})  )
    const [data3,setData3] = useState(data2);
    const handleCateBtn = (id) => {
      setData3((pre) => pre.map((item) => item.id === id ? {...item,cateBtn : true} : {...item,cateBtn : false}))
  
  } 
  const trueBtn = data3.some((item) => item.cateBtn === true);
  const handleAllBtn = () => {
    return setData3((pre) => pre.map((item) => ({...item,cateBtn : false})))
  }
  console.log(trueBtn);
    useEffect(() => {
        if(data){
            const Data = data3.map((item,index) => ({...item,category : data[index]}))
            setCategories(Data)
            console.log(categories)
        }
    },[data,data3])
    
  return (
    <div className='mb-28 container mx-auto'>{isLoading ? <LoadingCategoryComponents/> : <>
    <div className='flex items-center gap-3'>
        <AllCateBtnComponents handleAllBtn={handleAllBtn} trueBtn={trueBtn} />
        {categories.map((category,index) => <CategoryComponents key={index} handleCateBtn={handleCateBtn}  data={category} />)}
    </div>
    </>}</div>
  )
}

export default CategoryGroupComponents