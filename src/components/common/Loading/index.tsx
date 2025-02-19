import React from 'react';

export const Loading = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      <span className="sr-only">Yükleniyor...</span>
    </div>
  );
}; 