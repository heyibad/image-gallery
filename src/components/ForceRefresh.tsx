"use client"

import { useRouter } from 'next/navigation';
import React, {useEffect} from 'react'

const ForceRefresh = () => {
    const router = useRouter();
    useEffect(() => {
        router.refresh();
    }, []);
  return (
    <></>
  )
}

export default ForceRefresh