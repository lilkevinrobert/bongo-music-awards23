import React from 'react';
import { Card } from 'flowbite-react';

export type summaryCardType = {
    count: number;
    event: string;
}

const SummaryCard = ({ count, event }:summaryCardType) => {
  return (
    <Card className='w-4/12 bg-slate-50 text-slate-900 flex flex-col items-center'>
        <h3 className='font-LatoBold text-2xl'>{ count }</h3>
        <div className='font-LatoBold uppercase'>
            <h4 className='text-sm font-LatoRegular'>Events</h4>
            <h4 className='text-xl'>{ event }</h4>
        </div>
    </Card>
  )
}

export default SummaryCard