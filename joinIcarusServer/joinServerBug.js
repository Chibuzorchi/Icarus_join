app.post('/join', (req, res) => {
    const { characterName, serverAddress, password } = req.body;
    if (!characterName || !serverAddress) {
        return res.status(200).json({ error: 'Character name and server address are required' }); // Bug: Should be 400 status
    }

    if (password && password !== 'correctpassword') {
        return res.status(401).json({ error: 'Invalid server password' });
    }

    // Simulate joining the server
    return res.status(200).json({ message: 'Joined server successfully' });
});
