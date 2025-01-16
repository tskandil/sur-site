export function onlyUnique(list) {
    return list.filter((value, index, array) => array.indexOf(value) === index);
};

export function capitaliseFirstLetter(value) {
    return (value[0].toUpperCase() + value.substring(1));
};