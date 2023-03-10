"use strict";
exports.__esModule = true;
exports.createEventId = exports.INITIAL_EVENTS = void 0;
var eventGuid = 0;
var TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
exports.INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: TODAY_STR,
        end: TODAY_STR
    },
    {
        id: createEventId(),
        title: 'Timed event',
        start: TODAY_STR + 'T12:00:00',
        end: TODAY_STR + 'T13:00:00'
    }
];
function createEventId() {
    return String(eventGuid++);
}
exports.createEventId = createEventId;
