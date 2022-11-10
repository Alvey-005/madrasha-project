import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment)
import events from "./events";

const Calender = ()=>{
    return (
        // <FullCalendar
        //     defaultView="dayGridMonth"
        //     header={{
        //         left: "prev,next",
        //         center: "title",
        //         right: "dayGridMonth,timeGridWeek,timeGridDay"
        //     }}
        //     themeSystem="Simplex"
        //     plugins={[dayGridPlugin]}
        //     events={events}
        // />
        // <FullCalendar
        //     plugins={[ dayGridPlugin ]}
        //     initialView="dayGridMonth"
        // />
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
            )
}
export default Calender;