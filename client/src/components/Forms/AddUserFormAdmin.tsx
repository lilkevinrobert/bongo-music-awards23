import { ChangeEvent, useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Data {
  data: [];
}

interface FetchResult {
  data: Data | null;
  loading: boolean;
  error: Error | null;
  fetchData: () => void;
}

interface DistrictData {
  id: number;
  districts: string[];
}
interface WardData {
  id: number;
  wards: string[];
}
interface StreetData {
  id: number;
  streets: string[];
}

interface File {
  name: string;
  size: number;
}

// Image validation constants
const MINIMUM_AGE = 18;

type Inputs = {
  profile_picture_url: File;
  first_name: string;
  middle_name?: string | undefined;
  last_name: string;
  gender: string;
  postal_address_type: string;
  residence_type: string;
  username: string;
  email: string;
  date_of_birth: string;
  password: string;
  building_house_number: number;
  postal_address: string;
  phone_number: string;
};

// Validation Schema
const schema = yup.object().shape({
  profile_picture_url: yup.mixed<File>().required("Profile picture is required."),
  first_name: yup.string().required("First name is required."),
  middle_name: yup.string(),
  last_name: yup.string().required("Last name is required."),
  gender: yup.string().required("Please select a Gender."),
  postal_address_type: yup.string().required("Please select Address type."),
  residence_type: yup.string().required("Please select Residence type."),
  username: yup.string().required("Username is required."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Email format not acceptable."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Atleast 8 characters are required."),
  date_of_birth: yup
    .string()
    .required("Date of birth is required.")
    .test(
      "age",
      `Age must be at least ${MINIMUM_AGE} years old.`,
      function (value) {
        if (!value) return false;
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (
          monthDifference < 0 ||
          (monthDifference === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }

        return age >= MINIMUM_AGE;
      },
    ),
  building_house_number: yup
    .number()
    .required("House Number is required.")
    .moreThan(0, "Must be a number greater than 0 (zero)"),
  postal_address: yup
    .string()
    .required("Postal Address is required.")
    .min(1, "House number can't be zero (0)"),
  phone_number: yup
    .string()
    .required("Phone number is required.")
    .length(10, "Only 10 numbers required.")
    .trim(),
});

const AddUserFormAdmin = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const origin = urlParams.get("origin");

  const navigate = useNavigate()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  // Data
  const [districtsData, setDistrictsData] = useState<DistrictData | null>(null);
  const [wardsData, setWardsData] = useState<WardData | null>(null);
  const [streetsData, setStreetsData] = useState<StreetData | null>(null);

  // handle select options
  const [selectedRegionOption, setSelectedRegionOption] = useState("");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegionOption(e.target.value);
  };
  const [selectedDistrictOption, setSelectedDistrictOption] = useState("");
  const handleDistrictChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrictOption(e.target.value);
  };
  const [selectedWardOption, setSelectedWardOption] = useState("");
  const handleWardChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedWardOption(e.target.value);
  };
  const [selectedStreetOption, setSelectedStreetOption] = useState("");
  const handleStreetChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedStreetOption(e.target.value);
  };

  // Fetch Regions from API
  const {
    data: regionsData,
    error: regionsError,
    loading: loadingRegions,
  }: FetchResult = useFetch(`${BASE_URL}/addresses/regions`);

  useEffect(() => {
    if (selectedRegionOption) {
      // Get Districts
      axios
        .get(`${BASE_URL}/addresses/regions/${selectedRegionOption}/districts`)
        .then((response) => {
          setDistrictsData(null);
          setDistrictsData(response.data.data);
          setWardsData(null);
          setStreetsData(null);
        });
    }
  }, [selectedRegionOption]);

  useEffect(() => {
    if (selectedDistrictOption) {
      // Get Wards
      axios
        .get(`${BASE_URL}/addresses/districts/${selectedDistrictOption}/wards`)
        .then((response) => {
          setWardsData(response.data.data);
          setStreetsData(null)
        });
    }
  }, [selectedDistrictOption]);

  useEffect(() => {
    if (selectedWardOption) {
      // Get Streets
      axios
        .get(`${BASE_URL}/addresses/wards/${selectedWardOption}/streets`)
        .then((response) => {
          setStreetsData(response.data.data);
        });
    }
  }, [selectedWardOption]);

  const onSubmit = async (data: any) => {
    let modified_data = {
      first_name: data.first_name,
      middle_name: data.middle_name,
      last_name: data.last_name,
      username: data.username,
      email: data.email,
      password: data.password,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
      phone: data.phone_number,
      region_id: selectedRegionOption,
      district_id: selectedDistrictOption,
      ward_shehia_id: selectedWardOption,
      street_id: selectedStreetOption,
      building_house_number: data.building_house_number,
      postal_address: data.postal_address,
      address_type: data.postal_address_type,
      residence_type: data.residence_type,
      profile_picture_url: data.profile_picture_url[0],
      user_role: origin?.toUpperCase(),
    };
    console.log(data.profile_picture_url[0])
    const processingToastId = toast.loading("Processing...");

    axios
      .post(`${BASE_URL}/user_informations`, modified_data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        toast.dismiss(processingToastId);
        if (res.status == 201) {
          const responseToastId = toast.success("User created successfully.");

          setTimeout(() => {
            toast.dismiss(responseToastId);
            const user = res.data.data.id
            navigate(`/admin/artist-profile-completion?user=${user}`)
          }, 3000);
        } else if (res.status == 500) {

          toast.error("Action Failed")
        }
      })
      .catch((e) => {
        const errorCode = e.response.status
        const error = e.response.data.error
        const messages: any = Object.values(e.response.data.message);
        if (error && errorCode) {
          toast.error(`${errorCode}: ${error}`)
        }

        for (let item of messages) {
          item.map((text: string) => {
            toast.error(`${text}`);
          });
        }
        toast.dismiss(processingToastId);
      });
  };

  return (
    <form className="pl-4" onSubmit={handleSubmit(onSubmit)}>
      <Typography className="font-LatoBold text-lg capitalize text-gray-900">
        add {origin && origin}
      </Typography>
      {/* Personal information section */}
      <section className="py-2 pr-4">
        <Typography className="w-fit rounded-t-md bg-amber-200 px-2 font-LatoBold text-base capitalize text-gray-800">
          personal information
        </Typography>
        <div className="flex w-full flex-col gap-4 rounded-md bg-slate-50 p-4 lg:flex-row">
          <div className="flex w-full flex-col lg:w-4/12">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              Profile Picture
            </label>
            <Controller
              name="profile_picture_url"
              control={control}
              render={({ field: { onChange, onBlur } }) => (
                <input
                  name="image"
                  type="file"
                  className={`w-full border ${errors.profile_picture_url ? 'border-red-500' : 'border-gray-300'
                    } font-LatoRegular text-sm rounded`} accept=".jpg, .jpeg"
                  onChange={(e) => onChange(e.target.files)}
                  onBlur={onBlur}
                  multiple={false}
                />
              )}
            />
            {errors.profile_picture_url && (
              <ErrorFormField message={`${errors.profile_picture_url?.message}`} />
            )}
            <div className="hidden h-full w-full rounded bg-gray-400"></div>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-between gap-2 md:grid-cols-2">
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                first name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter firstname"
                {...register("first_name", { required: true })}
                className={`w-full border ${errors.first_name ? 'border-red-500' : 'border-gray-300'
                  } font-LatoRegular text-sm rounded`} />
              {errors.first_name && (
                <ErrorFormField message={`${errors.first_name?.message}`} />
              )}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                middle name
              </label>
              <input
                type="text"
                placeholder="Enter middle name (Optional)"
                {...register("middle_name", { required: false })}
                className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your lastname"
                className={`w-full border ${errors.last_name ? 'border-red-500' : 'border-gray-300'
                  } font-LatoRegular text-sm rounded`}
                {...register("last_name", { required: true })}
              />
              {errors.last_name && (
                <ErrorFormField message={`${errors.last_name?.message}`} />
              )}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                gender <span className="text-red-500">*</span>
              </label>
              <Controller
                name="gender"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <>
                      <select {...field} className={`w-full h-[2.3rem] ${fieldState.invalid ? 'border-red-500' : 'border-gray-300'} font-LatoRegular text-sm rounded`}>
                        <option value="">Select a Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                      </select>
                      {(fieldState.error || fieldState.error != undefined) && <ErrorFormField message={`${fieldState.error.message}`} />}
                    </>
                  )
                }}
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                date of Birth <span className="text-red-500">*</span>
              </label>
              <div>
                <Controller
                  name="date_of_birth"
                  control={control}
                  render={({ field, fieldState }) => (
                    <input
                      type="date"
                      id="date_of_birth"
                      {...field}
                      value={
                        field.value
                          ? new Date(field.value).toISOString().split("T")[0]
                          : ""
                      }
                      className={`mt-1 w-full rounded-md ${fieldState.invalid ? 'border-red-500' : 'border-gray-300'} p-2 font-LatoRegular`}
                    />
                  )}
                />
                {errors.date_of_birth && (
                  <ErrorFormField message={`${errors.date_of_birth.message}`} />
                )}
              </div>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                {...register("username", { required: true })}
                className={`w-full border ${errors.username ? 'border-red-500' : 'border-gray-300'
                  } font-LatoRegular text-sm rounded`} />
              {errors.username && (
                <ErrorFormField message={`${errors.username?.message}`} />
              )}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                {...register("password", { required: true })}
                className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'
                  } font-LatoRegular text-sm rounded`} />
              {errors.password && (
                <ErrorFormField message={`${errors.password?.message}`} />
              )}
            </div>
          </div>
        </div>
      </section>
      {/* contact information section */}
      <section className="py-2 pr-4">
        <Typography className="w-fit rounded-t-md bg-amber-200 px-2 font-LatoBold text-base capitalize text-gray-800">
          contact information
        </Typography>
        <div className="flex w-full flex-col gap-4 rounded-md bg-slate-50 p-4 lg:flex-row">
          <div className="grid w-full grid-cols-1 items-center justify-between gap-2 md:grid-cols-2">
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Like: 0714456680"
                {...register("phone_number", { required: true })}
                className={`w-full h-10 border ${errors.phone_number ? 'border-red-500' : 'border-gray-300'
                  } font-LatoRegular text-sm rounded`}
              />
              {errors.phone_number && (
                <ErrorFormField message={`${errors.phone_number?.message}`} />
              )}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
                className={`w-full h-10 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                  } font-LatoRegular text-sm rounded`} />
              {errors.email && (
                <ErrorFormField message={`${errors.email?.message}`} />
              )}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                region <span className="text-red-500">*</span>
              </label>
              <>
                {loadingRegions && (
                  <Typography
                    variant="paragraph"
                    className="text-center font-LatoRegular text-base capitalize"
                  >
                    populating fields...
                  </Typography>
                )}
                {regionsError && (
                  <Typography
                    variant="paragraph"
                    className="font-LatoRegular text-base capitalize"
                  >
                    failed to get regions. Try again later.
                  </Typography>
                )}
                {regionsData && (
                  <select
                    name="region"
                    required
                    value={selectedRegionOption}
                    onChange={handleChange}
                    className="mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular capitalize"
                  >
                    <option value="" disabled className="normal-case">
                      Select a Region
                    </option>
                    {regionsData.data.map((item: any, i) => (
                      <option
                        key={i}
                        value={item.id}
                        className="font-LatoRegular capitalize"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              </>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                district <span className="text-red-500">*</span>
              </label>
              {districtsData && (
                <select
                  name="district"
                  required
                  value={selectedDistrictOption}
                  onChange={handleDistrictChange}
                  className="mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular capitalize"
                >
                  <option value="" disabled className="normal-case">
                    Select a District
                  </option>
                  {districtsData.districts.map((item: any, i: number) => (
                    <option
                      key={i}
                      value={item.id}
                      className="font-LatoRegular capitalize"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              )}
              {districtsData == null && (
                <div className="flex flex-row items-center gap-2">
                  <AiOutlineLoading3Quarters className="text-base text-gray-500 animate-spin" />
                  <select
                    disabled
                    className="mt-1 h-10 animate-pulse w-full rounded-md border border-dotted border-amber-600 p-2 pl-4 font-LatoRegular capitalize"
                  >
                    <option selected>Populating Field...</option>
                  </select>
                </div>
              )}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                ward <span className="text-red-500">*</span>
              </label>
              {wardsData && (
                <select
                  name="ward"
                  required
                  value={selectedWardOption}
                  onChange={handleWardChange}
                  className="mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular capitalize"
                >
                  <option value="" disabled className="normal-case">
                    Select a Ward
                  </option>
                  {wardsData.wards.map((item: any, i: number) => (
                    <option
                      key={i}
                      value={item.id}
                      className="font-LatoRegular capitalize"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              )}
              {wardsData == null && (
                <div className="flex flex-row items-center gap-2">
                  <AiOutlineLoading3Quarters className="text-base text-gray-500 animate-spin" />
                  <select
                    disabled
                    className="mt-1 h-10 animate-pulse w-full rounded-md border border-dotted border-amber-600 p-2 pl-4 font-LatoRegular capitalize"
                  >
                    <option selected>Populating Field...</option>
                  </select>
                </div>
              )}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                street <span className="text-red-500">*</span>
              </label>
              {streetsData && (
                <select
                  name="street"
                  required
                  value={selectedStreetOption}
                  onChange={handleStreetChange}
                  className="mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular capitalize"
                >
                  <option value="" disabled className="normal-case">
                    Select a Street
                  </option>
                  {streetsData.streets.map((item: any, i: number) => (
                    <option
                      key={i}
                      value={item.id}
                      className="font-LatoRegular capitalize"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              )}
              {streetsData == null && (
                <div className="flex flex-row items-center gap-2">
                  <AiOutlineLoading3Quarters className="text-base text-gray-500 animate-spin" />
                  <select
                    disabled
                    className="mt-1 h-10 animate-pulse w-full rounded-md border border-dotted border-amber-600 p-2 pl-4 font-LatoRegular capitalize"
                  >
                    <option selected>Populating Field...</option>
                  </select>
                </div>
              )}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                house number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter house number"
                {...register("building_house_number", { required: true })}
                className={`w-full h-10 border ${errors.building_house_number ? 'border-red-500' : 'border-gray-300'
                  } font-LatoRegular text-sm rounded`} />
              {errors.building_house_number && (
                <ErrorFormField
                  message={`${errors.building_house_number?.message}`}
                />
              )}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                postal address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Eg. P.O.Box 123, Dodoma"
                {...register("postal_address", { required: true })}
                className={`w-full h-10 border ${errors.postal_address ? 'border-red-500' : 'border-gray-300'
                  } font-LatoRegular text-sm rounded`} />
              {errors.postal_address && (
                <ErrorFormField message={`${errors.postal_address?.message}`} />
              )}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                address type <span className="text-red-500">*</span>
              </label>
              <Controller
                name="postal_address_type"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <>
                      <select {...field} className={`w-full h-[2.3rem] ${fieldState.invalid ? 'border-red-500' : 'border-gray-300'} font-LatoRegular text-sm rounded`}>
                        <option value="">Select an option</option>
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                        <option value="Other">Other</option>
                      </select>
                      {(fieldState.error || fieldState.error != undefined) && <ErrorFormField message={`${fieldState.error.message}`} />}
                    </>
                  )
                }}
              />

            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                residence type <span className="text-red-500">*</span>
              </label>
              <Controller
                name="residence_type"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <>
                      <select {...field} className={`w-full h-[2.3rem] ${fieldState.invalid ? 'border-red-500' : 'border-gray-300'} font-LatoRegular text-sm rounded`}>
                        <option value="">Select an option</option>
                        <option value="Permanent">Permanent</option>
                        <option value="Temporary">Temporary</option>
                      </select>
                      {(fieldState.error || fieldState.error != undefined) && <ErrorFormField message={`${fieldState.error.message}`} />}
                    </>
                  )
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mr-4 mb-10 flex flex-row items-center justify-end rounded-md bg-slate-200 px-4 py-4">
        <Button
          size="sm"
          type="submit"
          className="float-right font-LatoBold text-xs capitalize transition ease-in-out hover:bg-amber-400 hover:text-gray-900"
        >
          add user
        </Button>
      </div>

      {/* Toaster */}
      <Toaster position="top-center" containerClassName="font-LatoRegular" toastOptions={{
        duration: 5000,
        style: {
          background: '#333',
          color: '#fff',
        },
      }} />
    </form>
  );
};

export default AddUserFormAdmin;