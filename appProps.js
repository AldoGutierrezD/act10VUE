Vue.component('candidato',{
    //props: ['nombre','correo','imagen'],
    props: {
        nombre: {
            type: [String, Array],
            required: true,
        },
        correo: String,
        imagen: String,
        location: Object,
    },
    template: '#candidato-template',
})

new Vue({
    el: '#section-main',
    mounted() {
        this.obtenerCandidatos();
    },
    data:{
        candidatos: []
    },
    methods: {
        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=50')
                .then((respuesta)=>{
                    this.candidatos = respuesta.data.results;
                })
        }
    },
})