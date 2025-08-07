import { scrapeEvents } from "../scraper.js";

export async function getEvents(req, res) {
    try {
        const events = await scrapeEvents();
        res.json(events);
    } catch (err) {
        console.error('Error scraping events: ', err);
        res.status(500).json({ error: 'Failed to fetch events.'});
    }
}