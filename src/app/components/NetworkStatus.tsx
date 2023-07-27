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