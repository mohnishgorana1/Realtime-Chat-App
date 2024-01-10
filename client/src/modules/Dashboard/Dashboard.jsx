import Avatar from "../../assets/avatar.svg";
import { SlCallOut } from "react-icons/sl";
import { IoSend } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import Input from "../../components/Input";
function Dashboard() {
  const contacts = [
    {
      name: "john",
      status: "Available",
      img: Avatar,
    },
    {
      name: "mary",
      status: "Available",
      img: Avatar,
    },
    {
      name: "lucy",
      status: "Available",
      img: Avatar,
    },
    {
      name: "adam",
      status: "Available",
      img: Avatar,
    },
    {
      name: "hardy",
      status: "Available",
      img: Avatar,
    },
    {
      name: "poo",
      status: "Available",
      img: Avatar,
    },
  ];
  return (
    <div className="w-screen flex h-screen ">
      <div className="w-[25%] h-[100%]  bg-secondary">
        <div className="flex justify-center items-center my-8 cursor-pointer">
          <div className="border border-primary rounded-full p-[2px]">
            <img src={Avatar} width={75} height={75} />
          </div>
          <div className="ml-4">
            <h3 className="text-2xl">Tutorials Dev</h3>
            <p className="text-lg font-light">my Account</p>
          </div>
        </div>
        <hr />
        <div className="ml-10 mt-5">
          <div className="text-primary text-lg font-semibold">
            Messages List
          </div>
          <div className="">
            {contacts.map(({ name, status, img }, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 border border-l-0 border-r-0 border-b-gray-300 py-4"
                >
                  <div className="flex items-center cursor-pointer">
                    <div>
                      <img src={img} width={60} height={60} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <p className="text-sm font-light text-gray-500">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-[50%] h-[100%] bg-white flex flex-col items-center justify-center">
        {/* sender info */}
        <div className="w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14">
          <div className="cursor-pointer">
            <img src={Avatar} width={60} height={60} />
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-lg">Alexander</h3>
            <p className="text-sm font-light text-gray-600"> Online </p>
          </div>
          <div className="cursor-pointer">
            <SlCallOut className="text-primary mr-auto" height={24} />
          </div>
        </div>
        {/* conversations  */}
        <div className="h-[75%] w-full border overflow-auto">
          <div className="h-auto px-10 py-14">
            <div className="max-w-[45%] mb-2 rounded-b-lg rounded-tr-xl bg-secondary p-4">
              Lorem
            </div>
            <div className="max-w-[45%] mb-2 rounded-b-lg rounded-tl-xl ml-auto  bg-primary text-white p-4">
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
        </div>
        {/* msg inputs  */}
        <div className="w-[85%] mb-2 flex items-center justify-center gap-5">
          <MdAddCircleOutline className="cursor-pointer text-primary font-extrabold text-2xl" />
          <Input
            placeholder="type a message"
            className="w-full"
            inputClassName="p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none "
            type="text"
          />
          <IoSend className="cursor-pointer text-primary font-extrabold text-xl" />
        </div>
      </div>

      <div className="w-[25%] h-[100%]  "></div>
    </div>
  );
}

export default Dashboard;
