<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord" />
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Search',
    data() {
        return {
            keyWord: ''
        }
    },
    methods: {
        searchUsers() {
            this.$bus.$emit('updateListData', { isFirst: false, isLoading: true, errMsg: '', users: [] })
            this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('请求成功');
                    this.$bus.$emit('updateListData', { isLoading: false, errMsg: '', users: response.data.items })
                },
                error => {
                    this.$bus.$emit('updateListData', { isLoading: false, errMsg: error.message, users: [] })
                }
            )
        }
    }
}
</script>