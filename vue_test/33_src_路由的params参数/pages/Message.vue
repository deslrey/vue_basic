<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带 params 参数,to 的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->
                <!-- 跳转路由并携带 params 参数,to 的对象写法 -->
                <router-link :to="{
                    name: 'detail',
                    params: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}

                </router-link>

            </li>
        </ul>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
import { name } from 'pubsub-js';

export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: '001', title: '消息01' },
                { id: '002', title: '消息02' },
                { id: '003', title: '消息03' }
            ]
        }
    },
}
</script>