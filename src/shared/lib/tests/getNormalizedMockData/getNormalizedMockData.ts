interface NormalizedMockData<T> {
    ids: number[];
    entities: { [id: number]: T };
}

export const getNormalizedMockData = <T>(
    data: T[],
    count: number = 1,
): NormalizedMockData<T> => {
    const mockData = [...data];

    if (data.length < count) {
        Array(count - data.length)
            .fill(0)
            .forEach(() => {
                mockData.push(data.slice(-1)[0]);
            });
    }

    return mockData.reduce(
        (acc: NormalizedMockData<T>, item: T, index) => {
            acc.ids.push(index);
            acc.entities[index] = item;

            return acc;
        },
        { ids: [], entities: {} },
    );
};
