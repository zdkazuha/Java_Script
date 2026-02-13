const pagination = {
    total: null,
    page: 1,

    next() {
        this.page++;
    },
    prev() {
        if (this.page <= 1) return;

        this.page--;
    },
    reset() {
        this.page = 1;
    }
}
