import { Button, Card, Typography, Input } from '@material-tailwind/react'

const Register = () => {
  return (
<Card className='shadow-none border-none'>
      <Typography color="gray" className="sfont-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
        <Input color="black" crossOrigin={undefined} className="my-1 rounded-md" placeholder="Enter Your firstname" />
        <Input color="black" crossOrigin={undefined} className="my-1 rounded-md" placeholder="Enter Your lastname" />
        <Input color="black" crossOrigin={undefined} className="my-1 rounded-md" placeholder="Enter Your Email Address" type='email' />
        <Input color="black" crossOrigin={undefined} className="my-1 rounded-md" placeholder="Enter Your Password" type="password" />
        </div>
        <Button className="mt-6" fullWidth>
          Register
        </Button>
      </form>
    </Card>
  )
}

export default Register