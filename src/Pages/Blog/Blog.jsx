import React from 'react';

const Blog = () => {
    return (
        <div className='px-20 py-10 pb-20 bg-indigo-50'>

            <div className='border-2 py-2 my-4 bg-violet-300	rounded-md'>
                <h1 className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>When should we use context api</h1>
                <p className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>The Context API in React is beneficial when sharing data between multiple components that are not directly related, avoiding cumbersome and error-prone prop passing. It's useful for global state, themes, or other settings accessed and updated by different parts of the application. The API simplifies code and helps manage application state.</p>
            </div>
            <div className='border-2 py-2 my-4 bg-blue-300	rounded-md'>
                <h1 className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>What is custom hook in route?</h1>
                <p className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>Custom hooks in React Router enable developers to reuse common logic across multiple components by encapsulating functionality, such as state handling or data fetching, in a standalone function. They enhance code modularity, readability, and maintainability by creating a more efficient way of sharing functionality like authentication or navigation between different components. Overall, custom hooks in React Router offer a powerful solution to manage common logic and streamline development.</p>
            </div>
            <div className='border-2 py-2 my-4 bg-violet-300	rounded-md'>
                <h1 className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>What is useRef and it's use?</h1>
                <p className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>React's useRef hook generates a mutable object whose.A value is stored in the current property and is retained between renderings. It can be used to directly access and modify DOM nodes, cache expensive calculations to increase efficiency, and store data that must persist between renders.</p>
            </div>
            <div className='border-2 py-2 my-4 bg-blue-300	rounded-md'>
                <h1 className='bg-gray-100	font-bold text-xl  m-3 mr-4 rounded-md h-auto p-2 shadow-sm'>What is useMemo and it's use?</h1>
                <p className='bg-gray-50	font-bold text-text-sm text-justify	 m-2 border-2 rounded-md h-auto p-2 shadow-lg'>UseMemo is a React hook that speeds up slow computations by caching the output of a function call and returning it on successive renderings unless the inputs change.</p>
            </div>




        </div>
    );
};

export default Blog;