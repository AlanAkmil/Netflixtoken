export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const body = req.body || {};
        const netscape = body.netscape;

        if (!netscape) {
            return res.status(400).json({ success: false, error: 'Netscape cookie diperlukan' });
        }

        const response = await fetch('https://nftoken.zone.id/api/parse-netscape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://nftoken.zone.id/'
            },
            body: JSON.stringify({ netscape: netscape })
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message || 'Internal server error' 
        });
    }
}