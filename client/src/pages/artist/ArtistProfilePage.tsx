import ArtistLayout from '../../components/Layout/ArtistLayout'
import EditArtistProfile from '../../components/Forms/EditArtistProfile'

const ArtistProfilePage = () => {
  return (
    <ArtistLayout>
        <div className='bg-transparent flex flex-col items-center justify-center py-20'>
            <EditArtistProfile />
            <hr className='w-1/2 my-4' />
        </div>
    </ArtistLayout>
  )
}

export default ArtistProfilePage