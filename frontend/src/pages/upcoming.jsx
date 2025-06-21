import React from 'react';

export default function Upcoming() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Empty state: no upcoming projects */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-400">No upcoming projects at the moment.</h1>
        <p className="mt-2 text-gray-500">Stay tuned—new creations are coming soon!</p>
      </div>
    </div>
  );
}