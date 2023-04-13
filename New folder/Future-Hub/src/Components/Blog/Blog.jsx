import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto'>
            <div className='mb-12'>
                <h2 className=' p-24 bg-violet-100  text-4xl font-bold'>Frequenty Ask Questions</h2>
            </div>
            <div className='m-6 p-6 w-3/4 text-left border border-violet-500 rounded-md'>
                <h3 className='text-xl font-bold text-violet-700'>What is Contex API?</h3>
                <p className='mt-2'><b className='text-violet-500'>Context API</b> is a new feature added in version 16.3 of React. It is a React structure that enables exchanging unique details and assists in solving prop-drilling from all levels of your application.It allows one to share state across the entire app lightly and with ease.</p>
                <p className='mt-2'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                <h4 className='mt-4 font-bold text-violet-500'>Benefits of Context API</h4>
                <ul className='ml-4 list-disc'>
                    <li>
                        <p>The Context API helps share data between components which you can’t easily share with props, for example, complex data objects</p>
                    </li>
                    <li>
                        <p>React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</p>
                    </li>
                    <li>
                        <p>We can also share specific states with multiple components instead through props manually. In some use cases, ideal for theming, localization, authentication etc.</p>
                    </li>

                </ul>
            </div>
            <div className='m-6 p-6 w-3/4 text-left border border-violet-500 rounded-md'>
                <h3 className='text-xl font-bold text-violet-700'>what is custom hook in react?</h3>
                <p className='mt-2'>In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic between components. Custom hooks let you extract reusable logic from components and share it across your application.</p>
                <p className='mt-2'>Custom hooks are similar to React's built-in hooks like useState and useEffect, but they allow you to encapsulate and reuse your own stateful logic in a way that's easy to share across components. Custom hooks can encapsulate things like data fetching, handling user input, or managing third-party libraries.</p>
                <h4 className='mt-4 font-bold text-violet-500'>Characteristics Of a Custom react hook</h4>
                <ul className='ml-4 mt-2s list-disc'>
                    <li>
                        <p>A custom hook does not require a specific signature.</p>
                    </li>
                    <li>
                        <p>A software developer can choose what argument the custom hook has and what should the argument return.</p>
                    </li>
                    <li>
                        <p>A custom hook always starts with the name ‘use’.</p>
                    </li>

                </ul>
            </div>
            <div className='m-6 p-6 w-3/4 text-left border border-violet-500 rounded-md'>
                <h4 className='mt-4 text-xl font-bold text-violet-700'>What is useRef()?</h4>
                <p className='mt-2'>In React, useRef is a hook that allows you to create a mutable ref object that can be used to persist a value across renders. useRef is similar to the createRef method in class components, but it can be used in functional components.</p>
                <p className='mt-2'>The <b>useRef</b> hook returns a ref object that has a current property. You can set the current property to any value, and it will persist across renders without triggering a re-render. You can also access the current value of the ref object inside your component.</p>
                <p className='mt-2'>Using <b>useRef</b> to persist a value across renders can be useful in situations where you need to store a mutable value that doesn't trigger a re-render when it changes. It can also be used to store values that are expensive to compute, such as the result of a complex calculation or an API request, so that they can be reused across renders without recomputing them.</p>

            </div>
            <div className='m-6 p-6 w-3/4 text-left border border-violet-500 rounded-md'>
                <h4 className='mt-4 text-xl font-bold text-violet-700'>What is useMemo()?</h4>
                <p className='mt-2'><b>memo()</b> is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them change. useMemo() is a React Hook that we can use to wrap functions within a component.</p>
                <p className='mt-2'>In React, useMemo is a hook that allows you to memoize the result of a function and avoid unnecessary re-renders. Memoization is a technique that involves caching the result of a function based on its inputs, so that the function doesn't need to be re-executed with the same inputs multiple times.</p>
                <p className='mt-2'>The useMemo hook takes two arguments: a function that returns a value, and an array of dependencies. The hook will only recompute the memoized value when one of the dependencies has changed. If none of the dependencies have changed, the hook will return the cached value from the previous render.</p>
            </div>
        </div>
    );
};

export default Blog;