import { onBeforeUnmount, onMounted, reactive } from "vue";


export default function () {

    // 实现鼠标"打点"相关的数据
    let ponit = reactive({
        x: 0,
        y: 0
    })

    // 实现鼠标"打点"相关的方法
    function savePoint(event) {
        ponit.x = event.pageX
        ponit.y = event.pageY
        console.log(event.pageX, event.pageY);
    }

    // 实现鼠标"打点"相关的生命周期钩子
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })
    return ponit
}