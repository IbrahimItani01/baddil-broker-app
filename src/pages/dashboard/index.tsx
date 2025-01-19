import BartersOverview from "../../components/base/dashboard/overview/BartersOverview";
import UsersOverview from "../../components/base/dashboard/overview/UsersOverview";

const DashboardMain = () => {
	return (
		<div className="flex flex-wrap gap-5 mx-5">
			<UsersOverview />
			<BartersOverview />
=		</div>
	);
};

export default DashboardMain;
