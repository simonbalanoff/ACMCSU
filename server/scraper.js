import axios from 'axios'
import {load} from 'cheerio'

export async function scrapeEvents() {
    const {data: html} = await axios.get('https://www.cs.colostate.edu/~acm/');
    const $ = load(html);
    const events = [];

    $('.card').each((i, card) => {
        const $card = $(card);
        const $body = $(card).find('.card-body');

        const title = $body.find('.card-title').text().trim();
        const text = $body
            .find('.card-text')
            .map((j, child) => $(child).text().trim())
            .get()
            .join("\n");

            const items = $card
            .find('ul.list-group-flush li')
            .map((j, li) =>
              $(li)
                .text()
                .replace(/^[\*\u2022\s]+/, '')
                .trim()
            )
            .get();
      
          const date = items[0] || '';
          const time = items[1] || '';
      
        events.push({ title, text, date, time });
    })
    return events;
}