import { Link } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
} from "@mui/material";
import {
    Summarize as SummarizeIcon,
    CheckCircle,
    Cancel,
} from "@mui/icons-material"; // アイコンをインポート
import { VIDEO_STATUS } from "../../Constants/Const"; // VIDEO_STATUSをインポート

const Videos = ({ videos }) => {
    return (
        <>
            <Typography
                variant="h4"
                sx={{ marginBottom: "16px", margin: "16px" }}
            >
                動画一覧
            </Typography>
            <Button
                component={Link}
                href={`/videos/create`}
                variant="contained"
                color="primary"
                sx={{
                    display: "block",
                    margin: "16px",
                    width: "100px",
                }}
            >
                新規作成
            </Button>
            <TableContainer
                component={Paper}
                sx={{
                    marginLeft: "16px",
                    marginRight: "16px",
                    marginBottom: "16px",
                    width: "calc(100% - 32px)", // 100%から左右のマージンを引いた幅
                }}
            >
                <Table sx={{ border: "1px solid #ccc" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ border: "1px solid #ccc" }}>
                                タイトル
                            </TableCell>
                            <TableCell sx={{ border: "1px solid #ccc" }}>
                                説明
                            </TableCell>
                            <TableCell sx={{ border: "1px solid #ccc" }}>
                                URL
                            </TableCell>
                            <TableCell sx={{ border: "1px solid #ccc" }}>
                                ステータス
                            </TableCell>
                            <TableCell sx={{ border: "1px solid #ccc" }}>
                                詳細
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {videos.map((video, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    sx={{
                                        border: "1px solid #ccc",
                                        width: "20%",
                                    }}
                                >
                                    {video.title}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        border: "1px solid #ccc",
                                        width: "30%",
                                    }}
                                >
                                    {video.text.length > 50
                                        ? video.text.slice(0, 50) + "..."
                                        : video.text}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        border: "1px solid #ccc",
                                        width: "40%",
                                    }}
                                >
                                    {video.youtube_url.length > 50
                                        ? video.youtube_url.slice(0, 50) + "..."
                                        : video.youtube_url}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        border: "1px solid #ccc",
                                        width: "20%",
                                    }}
                                >
                                    {/* ステータスに応じたアイコン */}
                                    {video.status === 1 ? (
                                        <>
                                            <CheckCircle
                                                sx={{
                                                    color: "green",
                                                    marginRight: 1,
                                                }}
                                            />
                                            {VIDEO_STATUS.find(
                                                (status) =>
                                                    status.value ===
                                                    video.status
                                            )?.label || "不明"}
                                        </>
                                    ) : (
                                        <>
                                            <Cancel
                                                sx={{
                                                    color: "red",
                                                    marginRight: 1,
                                                }}
                                            />
                                            {VIDEO_STATUS.find(
                                                (status) =>
                                                    status.value ===
                                                    video.status
                                            )?.label || "不明"}
                                        </>
                                    )}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        border: "1px solid #ccc",
                                        width: "10%",
                                    }}
                                >
                                    <Button
                                        component={Link}
                                        href={`/videos/detail/${video.id}`}
                                        variant="contained"
                                        startIcon={<SummarizeIcon />}
                                        sx={{ minWidth: "100px" }}
                                    >
                                        詳細
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Videos;
