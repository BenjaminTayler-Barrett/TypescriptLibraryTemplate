export default class DummyService {
    private readonly messageToLog: string;
    constructor(messageToLog: string) {
        this.messageToLog = messageToLog;
    }

    public logMessage(): string {
        return this.messageToLog;
    }
}
