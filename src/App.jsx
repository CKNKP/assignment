import {
  Search,
  Mail,
  Settings,
  Bell,
  LogOut,
  CircleCheck,
  CircleX,
  Home,
  BarChart2,
  FileText,
  CreditCard,
  ShoppingBag,
  CircleDollarSign,
  ShoppingBasket,
  ArrowBigDown,
  CirclePlus,
  Crosshair,
  CircleChevronRight,
  ConciergeBell,
  StarIcon,
} from "lucide-react";
import "./App.css";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Tooltip from "@mui/material/Tooltip";
import { Card, Avatar, Badge } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Completed", value: 70 },
  { name: "Pending", value: 30 },
];

const customerFeedback = [
  {
    id: 1,
    name: "Jenny Wilson",
    avatar: "/avatar7.jpg",
    rating: 4,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    id: 2,
    name: "Dianne Russell",
    avatar: "/avatar8.jpg",
    rating: 5,
    comment:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    id: 3,
    name: "Devon Lane",
    avatar: "/avatar9.jpg",
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
          className={i < rating ? "fill-yellow-400" : "fill-gray-300"}
          size={18}
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
    avatar: "/avatar1.jpg",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    id: 2,
    customer: "Jane Cooper",
    avatar: "/avatar2.jpg",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
  },
  {
    id: 3,
    customer: "Guy Hawkins",
    avatar: "/avatar3.jpg",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    id: 4,
    customer: "Kristin Watson",
    avatar: "/avatar4.jpg",
    orderNo: "20965732",
    amount: "$85.00",
    status: "Pending",
  },
  {
    id: 5,
    customer: "Cody Fisher",
    avatar: "/avatar5.jpg",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    id: 6,
    customer: "Savannah Nguyen",
    avatar: "/avatar6.jpg",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

const COLORS = ["#7194FF", "#2C3364"];

const App = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#141316] text-white w-full">
      <aside className="w-16 bg-[#1F2029] flex flex-col items-center py-4 space-y-8">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
        </div>
        <nav className="flex flex-col space-y-8">
          <Tooltip title="Home" placement="right" arrow>
            <span>
              <Home className="text-gray-400 hover:text-white cursor-pointer" />
            </span>
          </Tooltip>
          <Tooltip title="Statistics" placement="right" arrow>
            <span>
              <BarChart2 className="text-gray-400 hover:text-white cursor-pointer" />
            </span>
          </Tooltip>
          <Tooltip title="Records" placement="right" arrow>
            <span>
              <FileText className="text-gray-400 hover:text-white cursor-pointer" />
            </span>
          </Tooltip>
          <Tooltip title="Wallet" placement="right" arrow>
            <span>
              <CreditCard className="text-gray-400 hover:text-white cursor-pointer" />
            </span>
          </Tooltip>
          <Tooltip title="Orders" placement="right" arrow>
            <span>
              <ShoppingBag className="text-gray-400 hover:text-white cursor-pointer" />
            </span>
          </Tooltip>
          <Tooltip title="Log Out" placement="right" arrow>
            <span>
              <LogOut className="text-gray-400 hover:text-white cursor-pointer" />
            </span>
          </Tooltip>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-[#1F2029] flex items-center justify-between px-4">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full  bg-[#292B2F] text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                className="absolute left-3 top-2.5 text-white"
                size={20}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center  justify-center w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full p-1">
              <Tooltip title="mails" placement="bottom" arrow>
                <Mail className="text-white cursor-pointer" size={20} />
              </Tooltip>
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full p-1">
              <Tooltip title="settings" placement="bottom" arrow>
                <Settings className="text-white cursor-pointer" size={20} />
              </Tooltip>
            </div>
            <div className="flex items-center relative justify-center w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full p-1">
              <Tooltip title="notifications" placement="bottom" arrow>
                <Bell className="text-white cursor-pointer" size={20} />
              </Tooltip>
              <div className="absolute top-0 right-3 transform translate-x-1/2 translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <img
              src="https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=identicon"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
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
              <div className="flex flex-col relative items-center justify-start w-12 h-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-md p-3">
                <ShoppingBasket className="text-white" size={24} />
                <div className="absolute bottom-3 right-3 transform translate-x-1/2 translate-y-1/2">
                  <CirclePlus className="text-white" size={14} />
                </div>
              </div>
              <div className="flex justify-start flex-col">
                <h2 className="text-lg font-semibold">Total Orders</h2>
              </div>
              <div className="flex justify-between">
                <p className="text-3xl font-bold mt-2">75</p>
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
              <div className="flex flex-col relative items-center justify-start w-12 h-12 bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-md p-3">
                <ShoppingBag className="text-white" size={24} />
                <div className="absolute bottom-3 right-3 transform translate-x-1/2 translate-y-1/2">
                  <CircleCheck className="text-white" size={14} />
                </div>
              </div>
              <div className="flex justify-start flex-col">
                <h2 className="text-lg font-semibold">Total Delivered</h2>
              </div>
              <div className="flex justify-between">
                <p className="text-3xl font-bold mt-2">70</p>
                <p className="mr-2 text-green-600 font-bold mt-4">▲ 5%</p>
              </div>
            </Card>

            <Card
              sx={{
                backgroundColor: "#1F2029",
                color: "#fff",
                padding: "10px",
              }}
            >
              <div className="flex flex-col relative items-center justify-start w-12 h-12 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-md p-3">
                <ShoppingBag className="text-white" size={24} />
                <div className="absolute bottom-3 right-3 transform translate-x-1/2 translate-y-1/2">
                  <CircleX className="text-white" size={14} />
                </div>
              </div>
              <div className="flex justify-start flex-col">
                <h2 className="text-lg font-semibold">Total Cancelled</h2>
              </div>
              <div className="flex justify-between">
                <p className="text-3xl font-bold mt-2">05</p>
                <p className="mr-2 text-red-600 font-bold mt-4">▼ 2%</p>
              </div>
            </Card>

            <Card
              sx={{
                backgroundColor: "#1F2029",
                color: "#fff",
                padding: "10px",
              }}
            >
              <div className="flex flex-col relative items-center justify-start w-12 h-12 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 rounded-md p-3">
                <CircleDollarSign className="text-white" size={34} />
                <ArrowBigDown className="text-white" size={20} />
              </div>
              <div className="flex justify-start flex-col">
                <h2 className="text-lg font-semibold">Total Revenue</h2>
              </div>
              <div className="flex justify-between">
                <p className="text-3xl font-bold mt-2">$12k</p>
                <p className="mr-2 text-green-600 font-bold mt-4">▲ 8%</p>
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
              }}
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Net Profit</h2>
                  <p className="text-3xl font-bold mt-4">$6759.25</p>

                  <p className="mr-2 text-green-600 font-bold mt-3">▲ 8%</p>
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
              <h2 className="text-2xl font-semibold">Activity</h2>
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
                  <RechartsTooltip />
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
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-white">
                    <th className="pb-2">Customer</th>
                    <th className="pb-2">Order No.</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-t border-gray-700">
                      <td className="py-2 flex items-center">
                        <Avatar className="mr-2">
                          <img src={order.avatar} alt={order.customer} />
                        </Avatar>
                        {order.customer}
                      </td>
                      <td className="py-2">{order.orderNo}</td>
                      <td className="py-2">{order.amount}</td>
                      <td className="py-2">
                        <Badge
                          variant={
                            order.status === "Delivered"
                              ? "success"
                              : order.status === "Cancelled"
                              ? "destructive"
                              : "default"
                          }
                        >
                          {order.status}
                        </Badge>
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
            <h2 className="text-2xl font-semibold mb-4">
              Customer&apos;s Feedback
            </h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {customerFeedback.map((feedback) => (
                <div key={feedback.id} className="flex items-start space-x-4">
                  <Avatar>
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
