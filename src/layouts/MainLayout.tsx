import * as React from 'react';
import { StatusBar } from '../components/StatusBar';
import { Outlet } from 'react-router-dom';
import { Toast } from '../components/Toast';
import { InitialLoadingScreen } from '../components/InitialLoadingScreen';
import { motion, AnimatePresence } from 'motion/react';

interface MainLayoutProps {
  rssi: number;
  rate: number;
  isConnected: boolean;
  isInitialLoading?: boolean;
  lastUpdateTime: number | null;
  childrenContext: {
    state: string;
    thrust: number;
    rate: number;
    thrustHistory: any[];
    fullHistory?: any[];
    sessionStartTime: number | null;
    isConnected: boolean;
    samples: number;
    serverTime: string;
  };
}

export function MainLayout({ rssi, rate, isConnected, isInitialLoading, lastUpdateTime, childrenContext }: MainLayoutProps) {
  const [toastFileName, setToastFileName] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (toastFileName) {
      const timer = setTimeout(() => {
        setToastFileName(null);
      }, 10000); // 10 seconds auto-dismiss
      return () => clearTimeout(timer);
    }
  }, [toastFileName]);

  const contextValue = {
    ...childrenContext,
    showToast: (fileName: string) => setToastFileName(fileName)
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full min-h-screen">
      <div className="sticky top-0 z-50 w-full">
        <div className="relative z-20">
          <StatusBar 
            rssi={rssi} 
            rate={rate} 
            isConnected={isConnected} 
            lastUpdateTime={lastUpdateTime} 
            isInitialLoading={isInitialLoading}
          />
        </div>
        <div className="absolute top-full left-0 w-full px-[8px] pt-[8px] z-10 pointer-events-none">
          <AnimatePresence>
            {toastFileName && (
              <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="pointer-events-auto"
              >
                <Toast fileName={toastFileName} onClose={() => setToastFileName(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="w-full flex-grow flex flex-col z-0">
        {isInitialLoading ? (
          <InitialLoadingScreen />
        ) : (
          <Outlet context={contextValue} />
        )}
      </div>
    </div>
  );
}
