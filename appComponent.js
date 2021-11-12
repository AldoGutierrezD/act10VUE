Vue.component('mis-tareas', {
    props: ['tareas'],
    template: `<ul>
                <li v-for="tarea in tareas" v-text="tarea.title"></li>
            </ul>`,
});

Vue.component('tareas-gral', {
    template: `<ul>
                <li v-for="tarea in tareas" v-text="tarea.title"></li>
            </ul>`,
    data() {
        return {
            tareas: [
                { title: 'Ir al cine' },
                { title: 'Limpiar la casa' },
                { title: 'Tareas de la escuela' },
            ],
        }
    },
})

new Vue({
    el: '#section-main',
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                this.tareasAjax = respuesta.data;
            });
    },
    data: {
        tareasAjax: [],
        tareasLocales: [
            { title: 'Hacer las compras' },
            { title: 'Ir a la escuela' },
            { title: 'Aprender VUE' },
        ],
    }
});