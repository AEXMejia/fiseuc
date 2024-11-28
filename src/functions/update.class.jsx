

class Update {
    constructor(matricula) {
        this.matricula = matricula;
        this.url = 'http://localhost:3000';
    }

    async setName(newName){
        const response = await fetch(`${this.url}/alumno/${this.matricula}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: newName})
        })
        return response.json()
    }

    async setCURP(){
        const response = await fetch(`${this.url}/alumno/${this.matricula}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({curp: newCURP})
        })
    }

    async setEdad(newEdad){
        const response = await fetch(`${this.url}/alumno/${this.matricula}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({edad: newEdad})
        })
        return response.json()
    }


    async setPassword(newPassword, Lastpassword){
        const response = await fetch(`${this.url}/alumno/${this.matricula}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password: newPassword})
        })
        return response.json()
    }



    async setEmail(newEmail){
        const response = await fetch(`${this.url}/alumno/${this.matricula}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: newEmail})
        })
        return response.json()
    }
}