import { Button, Card } from 'flowbite-react';

const InfoActionCard = () => {
  return (
<Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Artists
        </p>
      </h5>
      <p className="font-LatoBold text-3xl text-gray-700 dark:text-gray-400">
        <p>
            560
        </p>
      </p>
      <Button type='button' className='bg-yellow-300 transition-all ease-in-out hover:bg-yellow-400'>
          View More
      </Button>
    </Card>
  )
}

export default InfoActionCard