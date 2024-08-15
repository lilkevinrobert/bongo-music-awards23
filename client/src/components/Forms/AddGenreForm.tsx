import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface FormProps {
  closeModal: () => void;
}

type Inputs = {
  name: string;
}

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required(),
})

const AddGenreForm = ({ closeModal }: FormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => console.log(data)
  return (
    <Card className="mx-auto w-full max-w-[24rem] max-h-[95vh] rounded-md overflow-y-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between uppercase">
            <Typography
              variant="h4"
              className="text-xl capitalize font-LatoBold text-gray-900"
            >
              New Genre
            </Typography>
          </div>
          <div className="w-full my-4">
            <label
              htmlFor="firstname"
              className="block text-sm font-LatoBold capitalize text-gray-900"
            >
              Genre
            </label>
            <input
              type="text"
              className="h-10 mt-1 p-2 pl-4 border border-gray-300 font-LatoRegular rounded-md w-full"
              placeholder="Enter Genre name"
              {...register('name', { required: true })}
            />
            {errors.name && <ErrorFormField message={`Genre ${errors.name?.message}`} /> }
          </div>
          <div className="flex flex-row items-center justify-end gap-1">
            <Button
              size="sm"
              onClick={closeModal}
              className="h-10 capitalize text-gray-900 bg-transparent hover:bg-gray-200 transition ease-in-out font-LatoBold shadow-none rounded-full"
            >
              cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              className="h-10 capitalize hover:text-gray-900 bg-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoBold rounded-full"
            >
              create
            </Button>
          </div>
        </CardBody>
      </form>
    </Card>
  );
};

export default AddGenreForm;
