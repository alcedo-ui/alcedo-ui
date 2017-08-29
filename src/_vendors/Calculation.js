function pageSize(pageSize, pageSizes, defaultValue) {

    if (pageSize) {
        return pageSize;
    }

    if (pageSizes && pageSizes.length > 0) {

        for (let item of pageSizes) {
            if (item > 0) {
                return item;
            }
        }
    }

    return defaultValue;

}

export default {
    pageSize
};