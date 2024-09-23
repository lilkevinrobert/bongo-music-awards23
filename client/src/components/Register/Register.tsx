import {
    Card
} from "@material-tailwind/react";
import RegistrationForm from "../Forms/RegistrationForm";
import { Toaster } from "react-hot-toast";


const Register = () => {
    return (
        <Card className="w-96 shadow-none">
            <RegistrationForm />
            <Toaster position="top-center" containerClassName="font-LatoRegular" toastOptions={{
                duration: 5000,
                style: {
                    background: '#333',
                    color: '#fff',
                },
            }} />
        </Card>
    );
};

export default Register;