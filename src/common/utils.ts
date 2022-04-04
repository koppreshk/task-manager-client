export const getNameInitials = (fullName: string) => fullName.split(' ').map(name => name[0].toUpperCase()).join('');

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const getDateDiffInDays = (source: Date, target: Date) => {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(source.getFullYear(), source.getMonth(), source.getDate());
    const utc2 = Date.UTC(target.getFullYear(), target.getMonth(), target.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

interface IInitialsColorCodes {
    backgroundColor: string;
    textColor: string;
}

const COLORCODES = [{
    backgroundColor: '#DDECF7',
    textColor: '#0077D9'
}, {
    backgroundColor: '#ECE5F6',
    textColor: '#6E40CF'
}, {
    backgroundColor: '#F5E2EE',
    textColor: '#B32181'
}, {
    backgroundColor: '#DFEEE5',
    textColor: '#008334'
}, {
    backgroundColor: '#F4E6E6',
    textColor: '#B6383E'
}, {
    backgroundColor: '#F5EDDE',
    textColor: '#B96E02'
}, {
    backgroundColor: '#EFE1ED',
    textColor: '#8C007E'
}, {
    backgroundColor: '#EAEBEC',
    textColor: '#5F6672'
}, {
    backgroundColor: '#EFE8E0',
    textColor: '#934F00'
}, {
    backgroundColor: '#E4EAEE',
    textColor: '#19628F'
}, {
    backgroundColor: '#DEEDEE',
    textColor: '#00828C'
}, {
    backgroundColor: '#E3EAF5',
    textColor: '#165DCB'
}] as IInitialsColorCodes[];

export const chooseRandomColors = (name: string): IInitialsColorCodes => {
    const idx = Math.floor(Math.random() * COLORCODES.length);
    return COLORCODES[idx];
};