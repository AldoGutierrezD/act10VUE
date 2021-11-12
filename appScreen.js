Vue.component('autor',{
    props: ['nombre','edad'],
    template: `<div>
                    <h1>{{nombre}}: {{edad}} años</h1>
                    <button @click="cambiarProp">Mayúsculas</button>
                    <button @click="cambiarPropMinus" class="minus">Minúsculas</button>
                </div>`,
    methods: {
        cambiarProp(){
            this.nombre=this.nombre.toUpperCase();
        },
        cambiarPropMinus(){
            this.nombre=this.nombre.toLowerCase();
        }
    },
});

new Vue({
    el: '#section-main',
    data: {
        autor: 'Márquez Márquez'
    },
})