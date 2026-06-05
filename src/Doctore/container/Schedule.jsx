import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

function Schedule() {
    const [eventTitle, setEventTitle] = useState("");
    const [externalEvents, setExternalEvents] = useState([
        { id: 1, title: "My Event 1" },
        { id: 2, title: "My Event 2" },
        { id: 3, title: "My Event 3" },
        { id: 4, title: "My Event 4" },
        { id: 5, title: "My Event 5" },
    ]);

    const draggableRef = useRef(null);

    useEffect(() => {
        if (draggableRef.current) {
            new Draggable(draggableRef.current, {
                itemSelector: ".external-event",
                eventData: function (eventEl) {
                    return {
                        title: eventEl.getAttribute("data-title"),
                    };
                },
            });
        }
    }, [externalEvents]);

    const calendarEvents = [
        {
            title: "On Round",
            start: "2026-06-01",
        },
        {
            title: "OPD",
            start: "2026-06-02",
        },
        {
            title: "Meeting",
            start: "2026-06-05",
        },
        {
            title: "Seminar",
            start: "2026-06-06",
        },
    ];

    const handleAddEvent = (e) => {
        if (e.key === "Enter" && eventTitle.trim()) {
            setExternalEvents([
                ...externalEvents,
                {
                    id: Date.now(),
                    title: eventTitle,
                },
            ]);

            setEventTitle("");
        }
    };

    return (
        <div>
            <h3 className="py-4 px-8 text-xl text-[#717171] shadow-sm rounded-4xl border border-gray-200">
                Doctor Schedule
            </h3>

            <div className="grid grid-cols-12 gap-6 mt-10">

                {/* Sidebar */}
                <div className="col-span-2 bg-white p-4 rounded-lg border border-gray-200">

                    <input
                        type="text"
                        placeholder="Add new event..."
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        onKeyDown={handleAddEvent}
                        className="w-full border border-gray-300 p-3 rounded-md outline-none"
                    />

                    <h3 className="mt-6 mb-3 text-lg">
                        Draggable Events
                    </h3>

                    <div
                        ref={draggableRef}
                        className="space-y-2"
                    >
                        {externalEvents.map((event) => (
                            <div
                                key={event.id}
                                data-title={event.title}
                                className="external-event bg-purple-700 text-white px-3 py-[5px] rounded cursor-move !text-[12px]"
                            >
                                {event.title}
                            </div>
                        ))}
                    </div>

                </div>

                {/* Calendar */}
                <div className="col-span-10 bg-white rounded-lg border border-gray-200 p-4">

                    <FullCalendar
                        plugins={[
                            dayGridPlugin,
                            interactionPlugin,
                        ]}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        droppable={true}
                        events={calendarEvents}
                        drop={(info) => {
                            const droppedTitle =
                                info.draggedEl.getAttribute("data-title");

                            setExternalEvents((prev) =>
                                prev.filter(
                                    (event) =>
                                        event.title !== droppedTitle
                                )
                            );
                        }}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right:
                                "dayGridMonth,dayGridWeek,dayGridDay",
                        }}
                    />

                </div>
            </div>
        </div>
    );
}

export default Schedule;