import { Typography } from '@material-tailwind/react'
import ArtistLayout from '../../components/Layout/ArtistLayout'
import ArtistNominationsAside from '../../components/Nomination/ArtistNominationsAside'

const ArtistDashboardPage = () => {
  return (
    <ArtistLayout>
      <div className="w-full h-[94vh] flex gap-4 transparent text-black">
        <section className='w-8/12 bg-white'>
          options
        </section>
        <section className='w-4/12 bg-transparent'>
          <Typography variant='h4' className='capitalize font-LatoBold text-lg'>nominations</Typography>
          <ArtistNominationsAside />
        </section>
      </div>
    </ArtistLayout>
  )
}

export default ArtistDashboardPage