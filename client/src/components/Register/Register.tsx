import {Button, Card, Typography, Input} from '@material-tailwind/react'
import  {useState} from "react";
import axios from "../../api/axios.ts";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {PropagateLoader} from "react-spinners";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    const handleRegister = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        await axios.get('https://api.bongomusicawards.co.tz/sanctum/csrf-cookie')
            .then(()=>{
                 axios.post('https://api.bongomusicawards.co.tz/api/artists/register', {firstname, lastname, email, password})
                    .then((response) => {
                        console.log(response);
                        window.setTimeout(() => toast.success(<p className="capitalize">{`Registering...`}</p>), 2000)
                        setFirstname("");
                        setLastname("");
                        setEmail("");
                        setPassword("");

                        window.setTimeout(() => toast.success(<p
                            className="capitalize">{`Artist Created successful...`}</p>), 2000)
                        setLoading(false);


                        navigate('/admin/dashboard')
                    })
                    .catch((error) => {
                        console.log(error);
                        window.setTimeout(() => toast.error(<p className="capitalize">{`Failed to Create Account...`}</p>), 1000)
                        setLoading(false);
                    })

            })
        // try{
        //
        //
        // }catch (error){
        //     console.log(error);
        // }
    }


    return (
        <Card className='shadow-none border-none'>
            <Typography color="gray" className="sfont-normal">
                Enter your details to register.
            </Typography>
            <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input color="black" crossOrigin={undefined} value={firstname} onChange={(e)=> setFirstname(e.target.value)} className="my-1 rounded-md"
                           placeholder="Enter Your firstname"/>
                    <Input color="black" crossOrigin={undefined} value={lastname} onChange={(e) => setLastname(e.target.value) } className="my-1 rounded-md"
                           placeholder="Enter Your lastname"/>
                    <Input color="black" crossOrigin={undefined} value={email} onChange={(e) => setEmail(e.target.value)} className="my-1 rounded-md"
                           placeholder="Enter Your Email Address" type='email'/>
                    <Input color="black" crossOrigin={undefined} value={password} onChange={(e) => setPassword(e.target.value)} className="my-1 rounded-md"
                           placeholder="Enter Your Password" type="password"/>
                </div>
                <Button className="mt-6" fullWidth onClick={handleRegister} >
                    Register
                </Button>

                <Toaster position="top-center"/>
                {loading && (
                    <div className="flex items-center justify-center mt-4">
                        <PropagateLoader color="#36d7b7"/>
                    </div>
                )}
            </form>
        </Card>
    )
}

export default Register