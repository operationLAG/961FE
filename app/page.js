'use client'
import { useEffect, useState } from 'react'
import { client } from '../sanity'

export default function Home() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "place" && approved == true]{
        title,
        description,
        location,
        type,
        "imageUrl": image.asset->url
      }`)
      setPlaces(data)
    }
    fetchData()
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">961Explore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {places.map((place, idx) => (
          <div key={idx} className="border rounded-xl p-4 shadow">
            {place.imageUrl && (
              <img src={place.imageUrl} alt={place.title} className="mb-2 rounded-lg" />
            )}
            <h2 className="text-xl font-semibold">{place.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{place.type}</p>
            <p className="mb-1">{place.description}</p>
            <p className="text-blue-500">{place.location}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
