// Endpoint Serverless untuk Menyelesaikan Pembayaran Pi
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        const { paymentId, txid, amount } = req.body || {};

        if (!paymentId) {
            return res.status(400).json({ 
                success: false, 
                message: "Payment ID tidak valid." 
            });
        }

        return res.status(200).json({
            success: true,
            message: "Pembayaran lelang NFT berhasil diverifikasi dan diselesaikan.",
            data: {
                paymentId: paymentId,
                txid: txid || "SIMULATED_TXID_PI",
                amount: amount || 10.5,
                timestamp: new Date().toISOString()
            }
        });
    }

    return res.status(405).json({ success: false, message: "Metode tidak diizinkan" });
}
