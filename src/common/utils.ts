export const getNameInitials = (fullName: string) => fullName.split(' ').map(name => name[0].toUpperCase()).join('');

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const getDateDiffInDays = (source: Date, target: Date) => {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(source.getFullYear(), source.getMonth(), source.getDate());
    const utc2 = Date.UTC(target.getFullYear(), target.getMonth(), target.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}