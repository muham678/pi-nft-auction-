// Endpoint Serverless untuk Menyetujui Pembayaran Pi
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'POST') {
        const { paymentId } = req.body || {};

        if (!paymentId) {
            return res.status(400).json({ 
                success: false, 
                message: "Payment ID tidak ditemukan." 
            });
        }

        // Simulasi persetujuan pembayaran berhasil
        return res.status(200).json({
            success: true,
            message: "Pembayaran Pi berhasil disetujui.",
            data: {
                paymentId: paymentId,
                status: "approved",
                timestamp: new Date().toISOString()
            }
        });
    }

    return res.status(405).json({ success: false, message: "Metode tidak diizinkan" });
}
