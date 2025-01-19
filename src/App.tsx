import { Route, Routes } from "react-router";
import Auth from "./pages/Auth";
import { HeroUIProvider } from "@heroui/react";
import Dashboard from "./pages/dashboard/layout";
import DashboardMain from "./pages/dashboard";
import ProtectedRoute from "./components/base/ProtectedRoute";
import Users from "./pages/dashboard/pages/Users";
import Settings from "./pages/dashboard/pages/Settings";
import ProfitsTable from "./pages/dashboard/pages/Revenues";
import Calendar from "./pages/dashboard/pages/Calendar/Calendar";
import BartersList from "./pages/dashboard/pages/Barters";
function App() {
	return (
		<HeroUIProvider>
			<Routes>
				<Route
					path='/'
					element={<Auth />}
				/>
				<Route
					path='/dashboard'
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				>
					<Route
						index
						element={<DashboardMain />}
					/>
					<Route
						path='clients'
						element={<Users />}
					/>

					<Route
						path='barters'
						element={<BartersList />}
					/>
					<Route
						path='calendar'
						element={<Calendar />}
					/>

					<Route
						path='revenues'
						element={<ProfitsTable />}
					/>

					<Route
						path='settings'
						element={<Settings />}
					/>
				</Route>
			</Routes>
		</HeroUIProvider>
	);
}

export default App;
