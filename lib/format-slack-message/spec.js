const { expect } = require('chai');
const formatSlackMessage = require('./');

describe('format-slack-message', () => {
    it('Accepts message and options', async () => {
        const message = await formatSlackMessage('this is my message', {});
        expect(message).to.be.an('object');
        expect(message).to.have.all.keys('attachments', 'channel', 'username', 'icon_emoji');
    });
    it('Creates an attachment with defaults: fallback, colour, and pretext', async () => {
        const { attachments } = await formatSlackMessage('', {});
        [
            'fallback',
            'color',
            'pretext',
        ].forEach(item =>
            expect(attachments[0][item]).to.have.lengthOf.at.least(2)
        );
    });
});
