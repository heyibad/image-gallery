"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'




export const SearchForm = ({searchVal}:{searchVal:string}) => {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.replace(`/?search=${encodeURI(tag)}`)
        router.refresh()
    }
    const [tag, setTag] = useState(searchVal ?? "");

    useEffect(() => {
        setTag(searchVal);
    }, [searchVal]);
  return (
    <div className="my-3 md:ml-12 ml-2 ">
    <form
        className=" flex gap-2 mr-6"
        onSubmit={handleSubmit}
    >
      

       <Input placeholder='Search By Tag' className="w-full md:w-[60vw]" type="text" value={tag} onChange={(e)=> setTag(e.target.value)}/>
        <Button  className=" w-10 px-2 h-10" type="submit">
           <Search className='w-full'/>
        </Button>
    </form>
</div>
  )
}
