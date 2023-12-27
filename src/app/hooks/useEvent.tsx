"use client";

interface IUseEvents {
  sendEvent: (eventName: string, id: number) => void;
}

export const useEvents = (): IUseEvents => {
  const sendEvent = (eventName: string, value: number) => {
    const storagedEventList = JSON.parse(
      localStorage.getItem("eventList") || "[]"
    );

    localStorage.setItem(
      "eventList",
      JSON.stringify([
        ...storagedEventList,
        {
          name: eventName,
          id: value,
        },
      ])
    );
  };

  return {
    sendEvent,
  };
};
