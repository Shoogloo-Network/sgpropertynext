"use client"
import React, { useState , useEffect } from 'react'
import CharCounter from '../_components/Components/pq/CharCounter'
import UrlShort from './UrlShort'
import ProgressBar from './progressbar/ProgressBar'
import axios from 'axios'


const page = () => {
  const [loading , setLoading] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get('https://dummyjson.com/test', {
            onDownloadProgress: (progressEvent) => {
                const total = progressEvent.total;
                const current = progressEvent.loaded;
                const percentCompleted = Math.round((current / total) * 100);
                setLoading(percentCompleted);
            },
        });
    };
    fetchData();
}, [loading]);
  return (
    <div>
    {/* <CharCounter/> */}
    {/* <UrlShort/> */}
    <ProgressBar loading={loading}/>
    </div>
  )
}

export default page
