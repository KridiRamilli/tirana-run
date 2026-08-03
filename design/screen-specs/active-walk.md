# Active walk and stop details

References:

- `design/mockups/approved/07-active-walk.png`
- `design/mockups/approved/08-stop-details.png`

- Show a real map, accepted user position, fixed route, next stop, distance, active time, estimated steps, pause, and finish.
- GPS starts only after explicit user action. Handle denied, unavailable, timed-out, and inaccurate readings as normal states.
- Stop details support Albanian and English text/audio while preserving the approved visual hierarchy.
- Persist the local session in IndexedDB; do not upload raw location history by default.
