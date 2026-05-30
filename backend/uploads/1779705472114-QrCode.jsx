import {
    Box,
    Card,
    CardContent,
    Typography,
    Divider,
    Chip,
    LinearProgress,
    Stack,
    Button,
    CircularProgress,
} from "@mui/material";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RefreshIcon from "@mui/icons-material/Refresh";
import { QRCodeCanvas } from "qrcode.react";
import { useCallback, useEffect, useState } from "react";
import useQRKyc from "../hooks/useQRKyc";
import { AmountEntryModal } from "./AmountEntryModal";
import { useNavigate } from "react-router-dom";

export default function QrCode() {

    const { handleQRCode, qrCode, loaderState } = useQRKyc()
    const [amount, setAmount] = useState("");

    const apiResponse = qrCode
    const expirySec = apiResponse?.data?.data?.data?.displayExpirySec;
    const qrString = apiResponse?.data?.data?.data?.qrString;

    const [timeLeft, setTimeLeft] = useState(expirySec);
    const [key, setKey] = useState(0);
    const isExpired = timeLeft === 0 ?? 0;
    const progress = expirySec ? (timeLeft / expirySec) * 100 : 100;
    const isExpiringSoon = timeLeft <= 30 && !isExpired;



    useEffect(() => {
        if (!timeLeft) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        if (qrString && expirySec) {
            setTimeLeft(expirySec);
        }
    }, [qrString, expirySec]);


    const handleRefresh = useCallback((amount) => {
        handleQRCode(amount);
        setKey((k) => k + 1);
    }, []);

    const [modalOpen, setModalOpen] = useState(false);

    const navigate = useNavigate()
    useEffect(() => {
        setModalOpen(true);

    }, [])

    const handleClose = () => {
        setModalOpen(false)
    }
    const onAmountSubmit = (amount) => {
        handleQRCode(amount);
    };

    const formatTime = (sec) => {
        if (isNaN(sec) || sec < 0) return "00:00";
        const m = String(Math.floor(sec / 60)).padStart(2, "0");
        const s = String(sec % 60).padStart(2, "0");
        return `${m}:${s}`;
    };



    return (
        <>



            <AmountEntryModal
                open={modalOpen}
                onClose={() => handleClose()}
                amount={amount}
                setAmount={setAmount}
                onSubmit={onAmountSubmit}
            />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%)",
                    p: 2,
                }}
            >
                <Card
                    elevation={0}
                    sx={{
                        width: 340,
                        borderRadius: 4,
                        border: "1px solid",
                        borderColor: "divider",
                        background: "#fff",
                        overflow: "hidden",
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={(theme) => ({
                            background: isExpired
                                ? "linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)"
                                : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
                            transition: "background 0.6s ease",
                            px: 3,
                            py: 2.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                        })}
                    >
                        <QrCodeScannerIcon sx={{ color: "#fff", fontSize: 28 }} />
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{ color: "#fff", fontWeight: 700, lineHeight: 1.2 }}
                            >
                                Scan & Pay
                            </Typography>
                            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.75)" }}>
                                Use any UPI app to scan
                            </Typography>
                        </Box>
                        {!isExpired ? (
                            <Chip
                                label="LIVE"
                                size="small"
                                sx={{
                                    ml: "auto",
                                    bgcolor: "rgba(255,255,255,0.2)",
                                    color: "#fff",
                                    fontWeight: 700,
                                    fontSize: "0.65rem",
                                    height: 22,
                                    "& .MuiChip-label": { px: 1 },
                                    animation: "pulse 1.5s ease-in-out infinite",
                                    "@keyframes pulse": {
                                        "0%, 100%": { opacity: 1 },
                                        "50%": { opacity: 0.5 },
                                    },
                                }}
                            />
                        ) : (
                            <Chip
                                label="EXPIRED"
                                size="small"
                                sx={{
                                    ml: "auto",
                                    bgcolor: "rgba(0,0,0,0.2)",
                                    color: "#fff",
                                    fontWeight: 700,
                                    fontSize: "0.65rem",
                                    height: 22,
                                    "& .MuiChip-label": { px: 1 },
                                }}
                            />
                        )}
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                        <Box sx={{ position: "relative", mb: 3 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    p: 2,
                                    borderRadius: 3,
                                    border: "2px dashed",
                                    borderColor: isExpired ? "#e5e7eb" : "divider",
                                    bgcolor: "#fafafa",
                                    transition: "border-color 0.4s ease",
                                }}
                            >
                                {!qrString || loaderState?.loading ? (
                                    <Stack alignItems="center" spacing={1}>
                                        <CircularProgress size={40} thickness={4} />
                                        <Typography variant="caption" color="text.secondary">Generating QR...</Typography>
                                    </Stack>
                                ) : (
                                    <QRCodeCanvas
                                        value={qrString}
                                        size={200}
                                        level="H"
                                        style={{
                                            filter: isExpired ? "blur(6px) grayscale(1)" : "none",
                                            transition: "filter 0.6s ease",
                                        }}
                                    />
                                )}
                            </Box>

                            {isExpired && (
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 1.5,
                                        borderRadius: 3,
                                        bgcolor: "rgba(255,255,255,0.6)",
                                        backdropFilter: "blur(2px)",
                                        animation: "fadeIn 0.5s ease",
                                        "@keyframes fadeIn": {
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 700, color: "#374151" }}
                                    >
                                        QR Code Expired
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        startIcon={<RefreshIcon sx={{ color: "white" }} />}
                                        onClick={() => handleRefresh(amount)}
                                        sx={(theme) => ({
                                            bgcolor: "bgcolor: theme.palette.primary.main",
                                            borderRadius: 2,
                                            textTransform: "none",
                                            fontWeight: 600,
                                            px: 2.5,
                                        })}
                                    >
                                        Refresh QR
                                    </Button>
                                </Box>
                            )}
                        </Box>

                        <Divider sx={{ mb: 2.5 }} />

                        <Stack spacing={2}>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    px: 2,
                                    py: 1.5,
                                    borderRadius: 2,
                                    bgcolor: isExpired ? "#f9fafb" : "#f0fdf4",
                                    border: "1px solid",
                                    borderColor: isExpired ? "#e5e7eb" : "#bbf7d0",
                                    transition: "all 0.4s ease",
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <CurrencyRupeeIcon
                                        sx={{ color: isExpired ? "#9ca3af" : "#16a34a", fontSize: 20 }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 500,
                                            color: isExpired ? "#6b7280" : "#15803d",
                                        }}
                                    >
                                        Amount
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 800,
                                        color: isExpired ? "#6b7280" : "#15803d",
                                    }}
                                >
                                    ₹{amount || "0"}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    px: 2,
                                    py: 1.5,
                                    borderRadius: 2,
                                    bgcolor: isExpired ? "#fef2f2" : isExpiringSoon ? "#fff7ed" : "#f0f9ff",
                                    border: "1px solid",
                                    borderColor: isExpired ? "#fecaca" : isExpiringSoon ? "#fed7aa" : "#bae6fd",
                                    transition: "all 0.4s ease",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mb: 1,
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <AccessTimeIcon
                                            sx={{
                                                fontSize: 20,
                                                color: isExpired ? "#dc2626" : isExpiringSoon ? "#ea580c" : "#0284c7",
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 500,
                                                color: isExpired ? "#b91c1c" : isExpiringSoon ? "#c2410c" : "#0369a1",
                                            }}
                                        >
                                            {isExpired ? "Expired" : "Expires in"}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 800,
                                            color: isExpired ? "#b91c1c" : isExpiringSoon ? "#c2410c" : "#0369a1",
                                        }}
                                    >
                                        {isExpired ? "00:00" : formatTime(timeLeft)}
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={progress}
                                    sx={{
                                        height: 6,
                                        borderRadius: 3,
                                        bgcolor: isExpired ? "#fecaca" : isExpiringSoon ? "#fed7aa" : "#bae6fd",
                                        "& .MuiLinearProgress-bar": {
                                            bgcolor: isExpired ? "#dc2626" : isExpiringSoon ? "#ea580c" : "#0284c7",
                                            borderRadius: 3,
                                            transition: "width 1s linear, background-color 0.4s ease",
                                        },
                                    }}
                                />
                            </Box>
                        </Stack>

                        <Typography
                            variant="caption"
                            sx={{
                                display: "block",
                                textAlign: "center",
                                mt: 2.5,
                                color: "text.disabled",
                            }}
                        >
                            {isExpired
                                ? "Please refresh to generate a new QR code"
                                : "QR code refreshes automatically on expiry"}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

        </>
    );
}