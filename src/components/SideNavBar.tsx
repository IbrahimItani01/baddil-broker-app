import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Logo from "../assets/with-title/logo-no-background.png";
import {
	Calendar,
	Handshake,
	Landmark,
	LayoutDashboard,
	Settings,
	Users,
} from "lucide-react";
import { Divider } from "@heroui/react";
import { Link } from "react-router";

const SideNavBar = () => {
	return (
		<Sidebar className='dark:bg-black bg-white h-full'>
			<div className='flex mt-5 flex-col items-center justify-center gap-3'>
				<img
					className='mx-auto'
					width={150}
					src={Logo}
					alt='Admin Dashboard Logo'
				/>
				<h1 className='font-bold text-lg'>Broker Dashboard</h1>
			</div>
			<Divider className='my-5' />
			<Menu>
				<MenuItem
					component={<Link to={"/dashboard"} />}
					icon={<LayoutDashboard />}
				>
					Overview
				</MenuItem>

				<MenuItem
					icon={<Users />}
					component={<Link to={"/dashboard/clients"} />}
				>
					Clients
				</MenuItem>

				<MenuItem
					icon={<Calendar />}
					component={<Link to={"/dashboard/calendar"} />}
				>
					Calendar
				</MenuItem>

				<MenuItem
					icon={<Handshake />}
					component={<Link to={"/dashboard/barters"} />}
				>
					Barters
				</MenuItem>
				<MenuItem
					icon={<Landmark />}
					component={<Link to={"/dashboard/revenues"} />}
				>
					Revenues
				</MenuItem>

				<MenuItem
					component={<Link to={"/dashboard/settings"} />}
					icon={<Settings />}
				>
					Settings
				</MenuItem>
			</Menu>
		</Sidebar>
	);
};

export default SideNavBar;
