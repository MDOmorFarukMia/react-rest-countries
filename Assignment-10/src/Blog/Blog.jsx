import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto'>
            <div className='mb-12'>
                <h2 className=' p-24 bg-violet-100  text-4xl font-bold'>Frequenty Ask Questions</h2>
            </div>
            <div className='m-6 p-6 w-3/4 text-left border border-violet-500 rounded-md'>
                <h3 className='text-xl font-bold text-violet-700'>Tell us the differences between uncontrolled and controlled components.</h3>
                <p className='mt-2'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='m-6 p-6 w-3/4 text-left border border-violet-500 rounded-md'>
                <h3 className='text-xl font-bold text-violet-700'>How to validate React props using PropTypes?</h3>
                <p className='mt-2'>Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                    We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.

                    Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes. In this article, we’ll learn how to validate props with React PropTypes.</p>
            </div>
            <div className='m-6 p-6 w-3/4 text-left border border-violet-500 rounded-md'>
                <h4 className='mt-4 text-xl font-bold text-violet-700'>Tell us the difference between nodejs and express js.</h4>
                <p className='mt-2'>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            </div>
            <div className='m-6 p-6 w-3/4 text-left border border-violet-500 rounded-md'>
                <h4 className='mt-4 text-xl font-bold text-violet-700'>What is a custom hook, and why will you create a custom hook?</h4>
                <p className='mt-2'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>
    );
};

export default Blog;