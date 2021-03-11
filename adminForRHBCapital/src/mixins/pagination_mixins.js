const paginationMixins = {
    methods: {
        handleSizeChange(e){
            this.params.pageSize = e
            this.search()
        },
        currentChangeHandler(e){
            this.params.pageNumber = e
            this.search()
        }
    },
}
export default paginationMixins