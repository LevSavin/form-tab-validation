class Auth {
    constructor() {
        document.querySelector("#auth").onclick = this.onClick.bind(this);
        this.$registration = document.querySelector("#registration");
        this.$authorization = document.querySelector("#authorization");
        this.effectDecay = "slit-out-vertical";
        this.effectEntrance = "slit-in-vertical";
    }

    onClick(event) {
        let toggleAuth = event.target.closest("#toggleAuth");
        let toggleReg = event.target.closest("#toggleReg");
        if (toggleAuth || toggleReg) {
            this.setVisualEffect();            
        }
    };

    setVisualEffect() {
        this.$registration.classList.toggle(this.effectDecay);
        this.$authorization.classList.toggle(this.effectDecay);
        this.$registration.classList.remove(this.effectEntrance);
        this.$authorization.classList.remove(this.effectEntrance);

        setTimeout(() => {
            this.$registration.classList.remove(this.effectDecay);
            this.$authorization.classList.remove(this.effectDecay);

            this.$authorization.classList.toggle("visually-hidden");
            this.$registration.classList.toggle("visually-hidden");
            this.$authorization.classList.toggle(this.effectEntrance);
            this.$registration.classList.toggle(this.effectEntrance);
            setTimeout(() => {
                this.$registration.classList.remove(this.effectEntrance);
            this.$authorization.classList.remove(this.effectEntrance);
            }, 500);
        }, 500);
    }
}
const auth = new Auth();

(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()