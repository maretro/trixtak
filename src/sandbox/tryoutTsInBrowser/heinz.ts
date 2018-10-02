class Heinz {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public say() {
        return 'Ich bin ' + this.name;
    }
}

export { Heinz };