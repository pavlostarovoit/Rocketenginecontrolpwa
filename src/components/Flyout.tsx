import { motion, AnimatePresence } from 'motion/react';
import { ReactNode } from 'react';

interface FlyoutProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  zIndex?: number;
}

export function Flyout({ isOpen, onClose, children, zIndex = 40 }: FlyoutProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - 90% opacity #F7F7F7 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#F7F7F7] z-[40]"
            style={{ zIndex }}
          />
          
          {/* Slide-up Panel */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[41] flex flex-col items-center justify-end pointer-events-none"
            style={{ zIndex: zIndex + 1 }}
          >
            {/* Inner container to handle constraints and clicks */}
            <div className="w-full bg-white rounded-t-[4px] shadow-[0px_-1px_8px_0px_rgba(42,42,42,0.08)] pointer-events-auto max-h-[90vh] flex flex-col overflow-hidden">
               {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
