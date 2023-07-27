# NEXTNS.tsx

--------

`{
  "name": "nextnet-status",
  "version": "0.1.0",
  "author": "Shafin",
 }
 `

```bash
git clone https://github.com/blackipie/Nextnet-Status.git 
```

## ***`Want to test it? Turn off the Wifi/Internet connection and then connect back to the network.`***

--------

## Real-time Network Status Detection in Next.js

In modern web applications, it's essential to keep track of the network status to provide a seamless user experience.
In this tutorial, we'll learn how to implement real-time network status detection in a Next.js project using TypeScript. The network status component will notify users when their device goes online or offline using toast notifications.

## Prerequisites

Before getting started, ensure you have the following set up in your development environment:

1. Node.js and npm (Node Package Manager)
2. A basic understanding of Next.js and React
3. TypeScript installed in your Next.js project

## Implementing the NetworkStatus Component

First, let's create a new file named `NetworkStatus.tsx` in the `components` directory of your Next.js project. Paste the following code into the file:

```jsx
'use client'

// components/NetworkStatus.tsx
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const NetworkStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      if (!isOnline) {
        toast.success('Connected to Network');
      }
      setIsOnline(true);
    };

    const handleOffline = () => {
      if (isOnline) {
        toast.error('Network disconnected');
      }
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isOnline]);

    return <Toaster
       position='top-right'
        containerClassName=""
        toastOptions={{
               style: {
                background: '#363636',
                color: '#fff',
       
    },
        }}
    />;
};

export default NetworkStatus;
```

## Step 3: Using the NetworkStatus Component

Now that we have our `NetworkStatus` component ready, we can use it in our app to monitor the network status.

Open the file where you want to display the network status notifications (e.g., `page.tsx` or any other relevant component) and import the `NetworkStatus` component.

```jsx
// App.tsx (or your desired component)
import React from 'react';
import NetworkStatus from './components/NetworkStatus';

const App: React.FC = () => {
  return (
    <div>
      {/* Your main app content */}
      <NetworkStatus />
    </div>
  );
};

export default App;
```

## Step 4: Test the Network Status Monitoring

With everything set up, your Next.js/React app is now equipped to monitor the network status. When the app loses or regains its internet connection, a toast notification will appear at the top-right corner of the screen, informing the user about the network status change.

## Conclusion

In this tutorial, we learned how to create a simple network status monitoring component in Next.js using React and TypeScript. By incorporating this component into your Next.js application, you can provide users with real-time feedback on their network connectivity.

Feel free to experiment and build upon this concept to create more sophisticated network monitoring solutions for your Next.js/React applications!

I hope you found this tutorial helpful. Happy coding!
