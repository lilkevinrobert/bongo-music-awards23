import React from 'react';
import { Card } from 'flowbite-react';

const SummaryCard = () => {
  return (
    <Card className='w-4/12 bg-slate-50 text-slate-900 flex flex-col items-center'>
        <h3 className='font-LatoBold'>03</h3>
        <div className='font-LatoRegular'>
            <h4>Events</h4>
            <h4>Ongoing</h4>
        </div>
    </Card>
  )
}

export default SummaryCard