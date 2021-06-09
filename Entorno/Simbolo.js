class Simbolo {
    constructor(id, value, type, ambito, linea, columna) {
        this.identificador = id;
        this.value = value;
        this.type = type;
        this.ambito = ambito;
        this.linea = linea;
        this.columna = columna;
    }
    getType() {
        return this.type;
    }
    getAmbito() {
        return this.ambito;
    }
    getImplicityValue() {
        return this.value;
    }
    getEntorno() {
        return this.entorno;
    }
    setEntorno(entorno) {
        this.entorno = entorno;
    }
}