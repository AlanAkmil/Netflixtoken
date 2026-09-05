export default async function handler(req, res) {
    try {
        const response = await fetch('https://nftoken.zone.id/api/auto-generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://nftoken.zone.id/'
            }
        });

        if (response.ok) {
            res.status(200).json({ status: 'online' });
        } else {
            res.status(200).json({ status: 'offline', code: response.status });
        }
    } catch (error) {
        res.status(200).json({ status: 'offline', error: error.message });
    }
}