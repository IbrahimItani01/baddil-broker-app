import {
	ScheduleComponent,
	Day,
	Week,
	WorkWeek,
	Month,
	Agenda,
	Inject,
} from "@syncfusion/ej2-react-schedule";
import "./style.css";
const Calendar = () => {
	const data = [
		{
			Id: 1,
			Subject: "Meeting",
			StartTime: new Date(2023, 1, 15, 10, 0),
			EndTime: new Date(2023, 1, 15, 12, 30),
		},
	];
	return (
		<>
			<h1 className='text-2xl font-bold mb-4'>Calendar</h1>
			<ScheduleComponent
				selectedDate={new Date(2023, 1, 15)}
				eventSettings={{
					dataSource: data,
				}}
			>
				<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
			</ScheduleComponent>
		</>
	);
};

export default Calendar;
