
const app = new Vue({
    el: '#root',
    data: {
        mails: []
    },
    methods: {

    },
    created(){
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // handle success
                this.mails.push(response.data.response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
        console.log(this.mails)
    }
})