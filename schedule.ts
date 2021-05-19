import schedule from 'node-schedule';
import sayHello from "./hello"


/*40 18 19 5 3*/

const startTime = new Date(Date.now() + 5000);
const endTime = new Date(startTime.getTime() + 5000);

const job = schedule.scheduleJob({
    start: startTime,
    end: endTime,
    rule: '*/10 * * * * * '
}, sayHello);