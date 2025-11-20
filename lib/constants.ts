export type EventItem = {
    id: number;
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventItem[] = [
    {
        id: 1,
        image: "/images/event1.png",
        title: 'DevFest London 2025',
        slug: "dev-fest-london-2025",
        location: "London, United Kingdom",
        date: "2025-11-22",
        time: "09:00 AM",
    },
    {
        id: 2,
        image: "/images/event2.png",
        title: 'The Neuroscience & Creativity Mini-Summit',
        slug: "neuroscience-and-creativity",
        location: "London, United Kingdom",
        date: "2025-11-22",
        time: "09:30 AM",
    },
    {
        id: 3,
        image: "/images/event3.png",
        title: 'DevFest Paris 2025',
        slug: "devfest-paris-2025",
        location: "Paris, France",
        date: "2025-11-21",
        time: "09:30 AM",
    },
    {
        id: 4,
        image: "/images/event4.png",
        title: 'React Paris 2026',
        slug: "devfest-paris-2025",
        location: "Paris, France",
        date: "2026-03-26",
        time: "09:30 AM",
    },
    {
        id: 5,
        image: "/images/event5.png",
        title: 'Google Devfest 2025',
        slug: "google-devfest-2025",
        location: "Ourense, Spain",
        date: "2025-11-21",
        time: "09:30 AM",
    },
    {
        id: 6,
        image: "/images/event6.png",
        title: 'Devfest Barcelona 2025',
        slug: "devfest-barcelona-2025",
        location: "Barcelona, Spain",
        date: "2025-11-22",
        time: "09:30 AM",
    },
]