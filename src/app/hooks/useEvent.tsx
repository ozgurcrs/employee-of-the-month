"use client";
import { useEffect, useState } from "react";

interface IUseEvents {
  sendEvent: (eventName: string, id: number) => void;
}

export const useEvents = (): IUseEvents => {
  const [eventList, setEventList] = useState<any>();

  useEffect(() => {
    const storagedEventList: any = localStorage.getItem("eventList");

    setEventList(JSON.parse(storagedEventList));
  }, []);

  const sendEvent = (eventName: string, value: number) => {
    localStorage.setItem(
      "eventList",
      JSON.stringify([
        ...eventList,
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
