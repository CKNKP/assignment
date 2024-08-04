import {
  Search,
  Mail,
  Settings,
  Bell,
  LogOut,
  CircleCheck,
  CircleX,
  SquareKanban,
  ClipboardCheck,
  ShoppingBag,
  CircleDollarSign,
  ShoppingBasket,
  ArrowBigDown,
  CirclePlus,
  Crosshair,
  CircleChevronRight,
  ConciergeBell,
  X,
  Wallet,
} from "lucide-react";

import { useState, useEffect } from "react";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import StarIcon from "@mui/icons-material/Star";
import HomeIcon from "@mui/icons-material/Home";
import Tooltip from "@mui/material/Tooltip";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Card, Avatar, Chip } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Tooltip as RechartsTooltip } from "recharts";
const data = [
  { name: "Completed", value: 70 },
  { name: "Pending", value: 30 },
];

const customerFeedback = [
  {
    id: 1,
    name: "Jenny Wilson",
    avatar:
      "https://thumbs.wbm.im/pw/small/39573f81d4d58261e5e1ed8f1ff890f6.jpg",
    rating: 4,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    id: 2,
    name: "Dianne Russell",
    avatar:
      "https://img.freepik.com/free-photo/portrait-modern-woman_23-2148131698.jpg",
    rating: 5,
    comment:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    id: 3,
    name: "Devon Lane",
    avatar:
      "https://img.freepik.com/free-photo/tender-woman-having-brow-color-added-her-eyebrows_231208-3536.jpg",
    rating: 5,
    comment:
      "Normally wings are wings, but theirs are lean meaty and tender, and their blue cheese dip is the best I've had.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          sx={{
            color: i < rating ? "gold" : "white",
          }}
        />
      ))}
    </div>
  );
};

const activityData = [
  { day: "5", value: 8 },
  { day: "6", value: 5 },
  { day: "7", value: 9 },
  { day: "8", value: 3 },
  { day: "9", value: 5 },
  { day: "10", value: 4 },
  { day: "11", value: 3 },
  { day: "12", value: 4 },
  { day: "13", value: 4 },
  { day: "14", value: 3 },
  { day: "15", value: 7 },
  { day: "16", value: 5 },
  { day: "17", value: 6 },
  { day: "18", value: 8 },
  { day: "19", value: 10 },
  { day: "20", value: 12 },
  { day: "21", value: 14 },
  { day: "22", value: 11 },
  { day: "23", value: 5 },
  { day: "24", value: 4 },
  { day: "25", value: 10 },
  { day: "26", value: 7 },
  { day: "27", value: 6 },
];

const recentOrders = [
  {
    id: 1,
    customer: "Wade Warren",
    avatar:
      "https://thumbs.wbm.im/pw/small/39573f81d4d58261e5e1ed8f1ff890f6.jpg",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    id: 2,
    customer: "Jane Cooper",
    avatar:
      "https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
  },
  {
    id: 3,
    customer: "Guy Hawkins",
    avatar:
      "https://miro.medium.com/v2/resize:fit:1400/1*vdQaSnhXCjraOIy5G4NjMg.jpeg",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    id: 4,
    customer: "Kristin Watson",
    avatar:
      "https://sun9-29.userapi.com/impg/Jsf5ygYTv0G-0eA46p36sgPGst2EjzFtJSo0kg/AvkHiapLcL0.jpg?size=854x1280&quality=95&sign=732709e08ca53992fd37a4404b25b79b&type=album",
    orderNo: "20965732",
    amount: "$85.00",
    status: "Pending",
  },
  {
    id: 5,
    customer: "Cody Fisher",
    avatar:
      "https://img.freepik.com/free-photo/woman-s-portrait_144627-39542.jpg",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    id: 6,
    customer: "Savannah Nguyen",
    avatar:
      "https://img.freepik.com/free-photo/close-up-beautiful-joyful-woman_23-2148369593.jpg",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

const COLORS = ["#7194FF", "#2C3364"];

const App = ({ children }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 325);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#2C3364] p-3 rounded-lg shadow-lg border border-[#7194FF]">
          <p className="text-[#7194FF] font-bold">{`Day ${label}`}</p>
          <p className="text-white">{`Value: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex min-h-screen bg-[#141316] text-white w-full">
      <aside className="w-16 bg-[#1F2029] flex flex-col items-center py-6 space-y-8">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-3 h-3 bg-[#7194FF] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#7194FF] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#7194FF] rounded-sm"></div>
          <div className="w-3 h-3 bg-[#7194FF] rounded-sm"></div>
        </div>
        <nav className="flex flex-col space-y-8 flex-grow">
          <Tooltip title="Home" placement="right" arrow>
            <span>
              <HomeIcon className="text-gray-400 hover:text-[#7194FF] cursor-pointer" />
            </span>
          </Tooltip>
          <Tooltip title="Statistics" placement="right" arrow>
            <span>
              <SquareKanban className="text-gray-400 hover:text-[#7194FF] cursor-pointer rotate-180" />
            </span>
          </Tooltip>
          <Tooltip title="Records" placement="right" arrow>
            <span>
              <ClipboardCheck className="text-gray-400 hover:text-[#7194FF] cursor-pointer" />
            </span>
          </Tooltip>
          <Tooltip title="Wallet" placement="right" arrow>
            <span>
              <Wallet className="text-gray-400 hover:text-[#7194FF] cursor-pointer" />
            </span>
          </Tooltip>
          <Tooltip title="Orders" placement="right" arrow>
            <span>
              <ShoppingBag className="text-gray-400 hover:text-[#7194FF] cursor-pointer" />
            </span>
          </Tooltip>
        </nav>
        <Tooltip title="Log Out" placement="right" arrow>
          <span>
            <LogOut className="text-gray-400 hover:text-[#7194FF] cursor-pointer" />
          </span>
        </Tooltip>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-[#1F2029] flex items-center justify-between px-4 relative">
          <div
            className={`flex-1 max-w-xl ${
              isMobileView && isSearchFocused
                ? "w-full absolute inset-x-0 px-4"
                : ""
            }`}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className={`w-full bg-[#292B2F] text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-600`}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <Search
                className="absolute left-3 top-2.5 text-white z-20"
                size={20}
              />
              {isMobileView && isSearchFocused && (
                <button
                  className="absolute right-3 top-2.5 text-white z-20"
                  onClick={() => setIsSearchFocused(false)}
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
          {(!isMobileView || !isSearchFocused) && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-8 h-8 bg-[#424448] rounded-full p-1">
                <Tooltip title="mails" placement="bottom" arrow>
                  <Mail className="text-white cursor-pointer" size={20} />
                </Tooltip>
              </div>
              <div className="flex items-center justify-center w-8 h-8 bg-[#424448] rounded-full p-1">
                <Tooltip title="settings" placement="bottom" arrow>
                  <Settings className="text-white cursor-pointer" size={20} />
                </Tooltip>
              </div>
              <div className="flex items-center relative justify-center w-8 h-8 bg-[#424448] rounded-full p-1">
                <Tooltip title="notifications" placement="bottom" arrow>
                  <Bell className="text-white cursor-pointer" size={20} />
                </Tooltip>
                <div className="absolute top-0 right-3 transform translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#7194FF] rounded-full"></div>
              </div>
              <img
                src="https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=identicon"
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          )}
        </header>

        <div className="font-bold p-5 text-2xl">
          <h1>Dashboard</h1>
        </div>

        <div>
          <div className="grid gap-2.5 md:grid-cols-2 lg:grid-cols-6  p-5 grid-cols-1">
            <Card
              sx={{
                backgroundColor: "#1F2029",
                color: "#fff",
                padding: "10px",
              }}
            >
              <div className="flex flex-col relative items-center justify-start w-12 h-12 bg-[#2C3365] rounded-md p-3">
                <ShoppingBasket className="text-[#4066F0]" size={24} />
                <div className="absolute bottom-3 right-3 transform translate-x-1/2 translate-y-1/2">
                  <CirclePlus className="text-white fill-[#7194FF]" size={14} />
                </div>
              </div>
              <div className="flex justify-start flex-col">
                <h2 className="text-lg font-semibold">Total Orders</h2>
              </div>
              <div className="flex justify-between">
                <p className="text-3xl font-bold mt-2">75</p>
                <p className="mr-2 text-green-600 font-bold mt-4">▲ 3%</p>
              </div>
            </Card>

            <Card
              sx={{
                backgroundColor: "#1F2029",
                color: "#fff",
                padding: "10px",
              }}
            >
              <div className="flex flex-col relative items-center justify-start w-12 h-12 bg-[#145347] rounded-md p-3">
                <ShoppingBagIcon className="text-[#00CB8C]" size={24} />
                <div className="absolute bottom-3 right-3 transform translate-x-1/2 translate-y-1/2">
                  <CircleCheck
                    className="text-white fill-[#00CB8C]"
                    size={14}
                  />
                </div>
              </div>
              <div className="flex justify-start flex-col">
                <h2 className="text-lg font-semibold">Total Delivered</h2>
              </div>
              <div className="flex justify-between">
                <p className="text-3xl font-bold mt-2">70</p>
                <p className="mr-2 text-red-600 font-bold mt-4">▼ 3%</p>
              </div>
            </Card>

            <Card
              sx={{
                backgroundColor: "#1F2029",
                color: "#fff",
                padding: "10px",
              }}
            >
              <div className="flex flex-col relative items-center justify-start w-12 h-12 bg-[#5F3339] rounded-md p-3">
                <ShoppingBagIcon className="text-[#F55C5B]" size={24} />
                <div className="absolute bottom-3 right-3 transform translate-x-1/2 translate-y-1/2">
                  <CircleX className="text-white fill-[#F55C5B]" size={14} />
                </div>
              </div>
              <div className="flex justify-start flex-col">
                <h2 className="text-lg font-semibold">Total Cancelled</h2>
              </div>
              <div className="flex justify-between">
                <p className="text-3xl font-bold mt-2">05</p>
                <p className="mr-2 text-green-600  font-bold mt-4"> ▲ 3%</p>
              </div>
            </Card>

            <Card
              sx={{
                backgroundColor: "#1F2029",
                color: "#fff",
                padding: "10px",
              }}
            >
              <div className="flex flex-col relative items-center justify-start w-12 h-12 bg-[#5B2A4B] rounded-md p-3">
                <CircleDollarSign
                  className="text-white fill-[#E845A3]"
                  size={34}
                />
                <ArrowBigDown className=" fill-[#E845A3]" size={20} />
              </div>
              <div className="flex justify-start flex-col">
                <h2 className="text-lg font-semibold">Total Revenue</h2>
              </div>
              <div className="flex justify-between">
                <p className="text-3xl font-bold mt-2">$12k</p>
                <p className="mr-2 text-red-600 font-bold mt-4">▼ 3%</p>
              </div>
            </Card>

            <Card
              sx={{
                backgroundColor: "#1F2029",
                color: "#fff",
                padding: "10px",
                gridColumn: {
                  lg: "span 2",
                  md: "span 2",
                },
                overflow: "auto",
              }}
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Net Profit</h2>
                  <p className="text-3xl font-bold mt-4">$6759.25</p>

                  <p className="mr-2 text-green-600 font-bold mt-3">▲ 3%</p>
                </div>

                <div className="relative">
                  <PieChart width={100} height={100}>
                    <Pie
                      data={data}
                      cx={50}
                      cy={50}
                      innerRadius={30}
                      outerRadius={40}
                      dataKey="value"
                      stroke="none"
                      cornerRadius={5}
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <text
                      x={55}
                      y={45}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="#fff"
                      fontSize={15}
                      fontWeight={"bold"}
                    >
                      70%
                    </text>
                    <text
                      x={55}
                      y={60}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="#fff"
                      fontSize={8}
                    >
                      Goal
                    </text>
                    <text
                      x={55}
                      y={68}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={8}
                      fill="#fff"
                    >
                      Completed
                    </text>
                  </PieChart>
                  <p className="text-xs text-white text-center">
                    *The values here has been rounded off
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 p-5">
          <Card
            sx={{
              backgroundColor: "#1F2029",
              color: "#fff",
              padding: "10px",
              gridColumn: {
                lg: "span 2",
                md: "span 2",
              },
            }}
          >
            <div className="flex justify-between items-center mb-4 p-3">
              <h2 className="text-2xl font-semibold ">Activity</h2>
              <select className="bg-[#4B4C53] text-white rounded-full px-2 py-1">
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <CartesianGrid
                    vertical={false}
                    stroke="#374151"
                    strokeWidth={1}
                  />
                  <XAxis
                    dataKey="day"
                    stroke="#fff"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis stroke="#fff" axisLine={false} tickLine={false} />
                  <RechartsTooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="value"
                    fill="#7194FF"
                    radius={[15, 15, 15, 15]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card
            sx={{
              backgroundColor: "#1F2029",
              color: "#fff",
              padding: "25px",
            }}
          >
            <div className="flex flex-col justify-start gap-3">
              <div className="flex justify-between">
                <div className="flex justify-between">
                  <div className="items-center w-20 h-20 bg-[#5E323A] rounded-full p-3">
                    <Crosshair stroke="orange" className="my-4 mx-4" />
                  </div>
                  <p className="text-md text-white my-7 mx-4">Goals</p>
                </div>
                <div>
                  <CircleChevronRight
                    className="my-7 "
                    fill="#47484E"
                  ></CircleChevronRight>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex justify-between">
                  <div className="items-center w-20 h-20 bg-[#293268] rounded-full p-3">
                    <LunchDiningIcon
                      className="my-4 mx-4"
                      sx={{ fill: "#7194FF" }}
                    />
                  </div>
                  <p className="text-md text-white my-7 mx-4">Popular Dishes</p>
                </div>
                <div>
                  <CircleChevronRight
                    className="my-7 "
                    fill="#47484E"
                  ></CircleChevronRight>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex justify-between">
                  <div className="items-center w-20 h-20 bg-[#214B61] rounded-full p-3">
                    <ConciergeBell stroke="teal" className="my-4 mx-4" />
                  </div>
                  <p className="text-md text-white my-7 mx-4">Menus</p>
                </div>
                <div>
                  <CircleChevronRight
                    className="my-7 "
                    fill="#47484E"
                  ></CircleChevronRight>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 p-5">
          <Card
            sx={{
              backgroundColor: "#1F2029",
              color: "#fff",
              padding: "10px",
              gridColumn: {
                lg: "span 2",
                md: "span 2",
              },
            }}
          >
            <h2 className="text-2xl font-semibold mb-4 p-3">Recent Orders</h2>
            <div className="overflow-x-auto p-3">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-white">
                    <th className="pb-2 px-3">Customer</th>
                    <th className="pb-2 px-3">Order No.</th>
                    <th className="pb-2 px-3">Amount</th>
                    <th className="pb-2 px-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-t border-gray-700 space-x-4"
                    >
                      <td className="py-2 flex items-center px-2">
                        <Avatar className="mr-2">
                          <img src={order.avatar} alt={order.customer} />
                        </Avatar>
                        {order.customer}
                      </td>
                      <td className="py-2 px-3">{order.orderNo}</td>
                      <td className="py-2 px-3">{order.amount}</td>
                      <td className="py-2 px-3">
                        <Chip
                          sx={{
                            backgroundColor:
                              order.status === "Delivered"
                                ? "#194E45"
                                : order.status === "Cancelled" ||
                                  order.status === "Pending"
                                ? "#5F3339"
                                : "#1F2029",

                            color:
                              order.status === "Delivered"
                                ? "#00CB8C"
                                : order.status === "Cancelled" ||
                                  order.status === "Pending"
                                ? "#F55C5B"
                                : "#fff",
                            height: "20px",
                          }}
                          key={order.status}
                          label={order.status}
                        ></Chip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card
            sx={{ backgroundColor: "#1F2029", color: "#fff", padding: "10px" }}
          >
            <h2 className="text-2xl font-semibold mb-4 p-3">
              Customer&apos;s Feedback
            </h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto p-3 ">
              {customerFeedback.map((feedback) => (
                <div key={feedback.id} className="flex items-start space-x-4">
                  <Avatar className="w-12 h-auto">
                    <img src={feedback.avatar} alt={feedback.name} />
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{feedback.name}</h3>
                    <StarRating rating={feedback.rating} />
                    <p className="text-sm text-gray-300 mt-1">
                      {feedback.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default App;
