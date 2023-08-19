import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogBody, setBlogBody] = useState('');
  const [publishedBlogs, setPublishedBlogs] = useState([]);

  const handlePostBlog = async () => {
      // Perform validation checks here

      // Add the new blog to the list
      const newBlog = { title: blogTitle, body: blogBody };
      setPublishedBlogs([...publishedBlogs, newBlog]);

      // Clear the input fields
      setBlogTitle('');
      setBlogBody('');
  };
  return (
    <>
    <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4 w-200 m-8">
  <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
    <img
      src="https://picsum.photos/200/300"
      class="w-full h-full object-cover rounded-full"
      alt=""
    />
  </div>
  <div>
    <p class="mb-1 text-sm text-primary-500">John Doe • <time>10 Aug 2023</time></p>
    <h3 class="text-xl font-medium text-gray-900">Embracing Nature's Beauty</h3>
    <p class="mt-1 text-gray-500">Ventured into the heart of nature, capturing breathtaking landscapes and connecting with wildlife.</p>
    <div class="mt-4 flex gap-2">
    </div>
  </div>
</div>

<div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4 w-200 m-8">
  <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
    <img
      src="https://picsum.photos/200/300"
      class="w-full h-full object-cover rounded-full"
      alt=""
    />
  </div>
  <div>
    <p class="mb-1 text-sm text-primary-500">John Doe • <time>10 Aug 2023</time></p>
    <h3 class="text-xl font-medium text-gray-900">Embracing Nature's Beauty</h3>
    <p class="mt-1 text-gray-500">Ventured into the heart of nature, capturing breathtaking landscapes and connecting with wildlife.</p>
    <div class="mt-4 flex gap-2">
    </div>
  </div>
</div>

<div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4 w-200 m-8">
  <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
    <img
      src="https://picsum.photos/200/300"
      class="w-full h-full object-cover rounded-full"
      alt=""
    />
  </div>
  <div>
    <p class="mb-1 text-sm text-primary-500">John Doe • <time>10 Aug 2023</time></p>
    <h3 class="text-xl font-medium text-gray-900">Embracing Nature's Beauty</h3>
    <p class="mt-1 text-gray-500">Ventured into the heart of nature, capturing breathtaking landscapes and connecting with wildlife.</p>
    <div class="mt-4 flex gap-2">
    </div>
  </div>
</div>

<div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow flex items-center p-4 gap-4 w-200 m-8">
  <div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
    <img
      src="https://picsum.photos/200/300"
      class="w-full h-full object-cover rounded-full"
      alt=""
    />
  </div>
  <div>
    <p class="mb-1 text-sm text-primary-500">John Doe • <time>10 Aug 2023</time></p>
    <h3 class="text-xl font-medium text-gray-900">Embracing Nature's Beauty</h3>
    <p class="mt-1 text-gray-500">Ventured into the heart of nature, capturing breathtaking landscapes and connecting with wildlife.</p>
    <div class="mt-4 flex gap-2">
    </div>
  </div>
</div>


    </>
  )
}
