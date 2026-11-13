export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const auctionData = {
        nftId: "WUKONG-NFT-01",
        title: "Eksklusif Wukong NFT #01",
        highestBid: 10.5,
        highestBidder: "PiUser123",
        status: "active",
        endTime: "2026-12-31T23:59:59Z"
    };

    if (req.method === 'GET') {
        return res.status(200).json({ success: true, data: auctionData });
    }

    return res.status(405).json({ success: false, message: "Metode tidak diizinkan" });
}
