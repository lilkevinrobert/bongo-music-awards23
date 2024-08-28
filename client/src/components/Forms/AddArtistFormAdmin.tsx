import { ChangeEvent, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

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
interface RoadData {
  id: number;
  roads: string[];
}

const AddArtistFormAdmin = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // Data
  const [districtsData, setDistrictsData] = useState<DistrictData | null>();
  const [wardsData, setWardsData] = useState<WardData | null>();
  const [streetsData, setStreetsData] = useState<StreetData | null>();
  const [roadsData, setRoadsData] = useState<RoadData | null>();

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
  const [selectedRoadOption, setSelectedRoadOption] = useState("");
  const handleRoadChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoadOption(e.target.value);
  };

  // Fetch Regions from API
  const {
    data: regionsData,
    error: regionsError,
    loading: loadingRegions,
  }: FetchResult = useFetch(`${BASE_URL}/addresses/regions`);

  if (selectedRegionOption) {
    // Get Districts
    axios
      .get(`${BASE_URL}/addresses/regions/${selectedRegionOption}/districts`)
      .then((response) => {
        setDistrictsData(response.data.data);
      });
  }

  if (selectedDistrictOption) {
    // Get Wards
    axios
      .get(
        `${BASE_URL}/addresses/districts/${selectedDistrictOption}/wards`,
      )
      .then((response) => {
        setWardsData(response.data.data);
      });
  }

  if(selectedWardOption){
    // Get Streets
    axios
      .get(
        `${BASE_URL}/addresses/wards/${selectedWardOption}/streets`,
      )
      .then((response) => {
        setStreetsData(response.data.data);
      });
  }
  if(selectedStreetOption){
    // Get Roads
    axios
    .get(
      `${BASE_URL}/addresses/streets/${selectedStreetOption}/roads`,
    )
    .then((response) => {
      setRoadsData(response.data.data);
    });
  }

  return (
    <form className="pl-4">
      <Typography className="font-LatoBold text-lg capitalize text-gray-900">
        add artist
      </Typography>
      <div className="py-2 pr-4">
        <Typography className="w-fit rounded-t-md bg-amber-200 px-2 font-LatoBold text-base capitalize text-gray-800">
          personal information
        </Typography>
        <div className="flex w-full gap-4 rounded-md bg-slate-50 p-4">
          <div className="flex w-4/12 flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              Profile Picture
            </label>
            <input
              type="file"
              name="profile_picture"
              className="mt-1 w-full rounded-md p-2 font-LatoRegular"
            />
            <div className="hidden h-full w-full rounded bg-gray-400"></div>
          </div>
          <div className="grid w-full grid-cols-2 items-center justify-between gap-2">
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                first name
              </label>
              <input
                type="text"
                name="first_name"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                middle name
              </label>
              <input
                type="text"
                name="middle_name"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                last name
              </label>
              <input
                type="text"
                name="last_name"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                gender
              </label>
              <select
                name="gender"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                date of Birth
              </label>
              <input
                type="date"
                name="date_of_birth"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                username
              </label>
              <input
                type="text"
                name="username"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 pr-4">
        <Typography className="w-fit rounded-t-md bg-amber-200 px-2 font-LatoBold text-base capitalize text-gray-800">
          contact information
        </Typography>
        <div className="flex w-full gap-4 rounded-md bg-slate-50 p-4">
          <div className="grid w-full grid-cols-2 items-center justify-between gap-2">
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone_number"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
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
                    some problem occurred.
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
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                road <span className="text-red-500">*</span>
              </label>
              {/* {streetsData && (
                <select
                  name="road"
                  required
                  value={selectedRoadOption}
                  onChange={handleRoadChange}
                  className="mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular capitalize"
                >
                  <option value="" disabled className="normal-case">
                    Select a Road
                  </option>
                  {roadsData?.roads.map((item: any, i: number) => (
                    <option
                      key={i}
                      value={item.id}
                      className="font-LatoRegular capitalize"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              )} */}
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                house number
              </label>
              <input type="text" placeholder="Enter your house number" className="mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular capitalize"
 />
              </div>
          </div>
        </div>
      </div>
      <div className="py-2 pr-4">
        <Typography className="w-fit rounded-t-md bg-amber-200 px-2 font-LatoBold text-base capitalize text-gray-800">
          artist profile
        </Typography>
        <div className="flex w-full gap-4 rounded-md bg-slate-50 p-4">
          <div className="grid w-full grid-cols-2 items-center justify-between gap-2">
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                writer
              </label>
              <input
                type="tel"
                name="phone_number"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                record label
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                official website link
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                debut year
              </label>
              <input
                type="text"
                name="last_name"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                stage name
              </label>
              <select
                name="district"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                albums
              </label>
              <select
                name="ward"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                singles
              </label>
              <select
                name="ward"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                bio
              </label>
              <select
                name="house_number"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                genre
              </label>
              <select
                name="house_number"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                spotify website link
              </label>
              <input
                type="text"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                apple website link
              </label>
              <input
                type="text"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                youtube website link
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                boomplay website link
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 mb-10 flex flex-row items-center justify-end rounded-md bg-slate-200 px-4 py-4">
        <Button
          size="sm"
          className="float-right font-LatoBold text-xs capitalize transition ease-in-out hover:bg-amber-400 hover:text-gray-900"
        >
          save changes
        </Button>
      </div>
    </form>
  );
};

export default AddArtistFormAdmin;
