import { DateTime } from "luxon";

export const formatError = text => `
<span style="color: red;">
    ${text}
</span>
`;

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        [ firstDate, secondDate ] = [ secondDate, firstDate ];
    }

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}
