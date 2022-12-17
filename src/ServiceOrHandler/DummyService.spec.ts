import DummyService from "./DummyService";

describe("DummyService", () => {
    const MOCK_MESSAGE = "someMessage";

    let sut: DummyService;

    beforeEach(() => {
        sut = new DummyService(MOCK_MESSAGE);
    });

    describe("logMessage", () => {
        it("should return the message to log", () => {
            const result = sut.logMessage();

            expect(result).toEqual(MOCK_MESSAGE);
        });
    });
});
