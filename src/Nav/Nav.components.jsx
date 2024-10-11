import React, { useState } from 'react'
import DrawerComponents from '../components/Drawer.components'
import { Button } from '@/components/ui/button'
import { FiSearch } from "react-icons/fi"
import { useGetProductQuery } from '../store/service/endpoints/products.endpoints'
import { useDispatch} from 'react-redux'
import { manageProducts } from '../store/slice/cartSlice'
import { Input } from "@/components/ui/input"



const NavComponents = () => {
  const { data } = useGetProductQuery();
  const [search,setSearch] = useState(false);
  const dispatcher = useDispatch()
  const handleSearch = (e) => {
    const product = data.filter((item) => item.title.toLowerCase().search(e.target.value) != -1 || item.description.toLowerCase().search(e.target.value) != -1);
    dispatcher(manageProducts(product));
  };
  const handleSearchBtn = () => {
    setSearch(!search);
  }
  return (
    <div className='w-full border-b border-gray-700 shadow-md py-2 fixed bg-white z-50'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div>
          <h1 className='text-2xl font-bold'>E-Shop</h1>
          <span className='text-lg'>E-commerce</span>
          </div>
          <div className='flex items-center gap-3'>
            {search && <Input type="text" className="border border-gray-800 outline-none" onKeyUp={handleSearch} />}
            <Button onClick={handleSearchBtn}  className={`bg-white text-gray-700 hover:text-white border border-gray-700 ${search && "bg-gray-700 text-white "}`} >
              <FiSearch />
            </Button>
            <DrawerComponents/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavComponents