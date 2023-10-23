import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='w-screen h-screen flex flex-col lg:flex-row items-center justify-center bg-slate-50'>
        {/* <ContactDetails /> */}
        <ContactForm />
    </div>
  )
}

export default Contact