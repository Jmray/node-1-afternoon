let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let {text, time} = req.body;
        let message = {
            id,
            time,
            text,
        };
        id ++;
        messages.push(message);
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);

    },
    update: (req, res) => {
        const id = req.params.id;
        const {update} = req.body;

        const oldMessageIndex = messages.findIndex(m => m.id === id);

        if(oldMessageIndex === -1){
            return res.status(404).send('Message of id:' + id + ' could not be found.')};

        messages[oldMessageIndex] = {
            ...messages[oldMessageIndex],
            ...update,
        };
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const id = req.params.id;
        const messageToDelete = messages.findIndex(m => message.id === id);

        if(oldMessageIndex === -1){
            return res.status(404).send('Message of id:' + id + ' could not be found.')};
        messages.splice(messageToDelete, 1);

        res.status(200).send(messages);
    },
};