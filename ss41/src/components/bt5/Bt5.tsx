import React from 'react';

export default function Bt5() {
  return (
    <div>
        Bt5:
        <br />
        <div className="relative size-[300px] bg-blue-500">
            Static parent
            <div className="absolute w-auto bottom-0 left-0 size-[20px] bg-red-500">
                Absolute child
            </div>
        </div>
    </div>
  );
}
