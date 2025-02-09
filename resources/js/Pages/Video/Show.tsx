import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";
import { Box, Typography, Stack, Button } from "@mui/material";

const Video = ({ video }) => {
    const handleBack = () => {
        window.history.back();
    };

    const handleDelete = () => {
        if (confirm("削除しますか？")) {
            Inertia.delete(`/videos/delete/${video.id}`);
        }
    };

    return (
        <Box sx={{ margin: "20px" }}>
            <Typography variant="h4">動画詳細</Typography>

            <Stack
                direction="row"
                spacing={2}
                sx={{
                    width: "780px",
                    padding: "10px",
                    marginTop: "30px",
                    borderBottom: "1px solid #ccc",
                }}
            >
                <Typography sx={{ width: "180px", fontWeight: "bold" }}>
                    タイトル
                </Typography>
                <Typography sx={{ width: "600px" }}>{video.title}</Typography>
            </Stack>

            <Stack
                direction="row"
                spacing={2}
                sx={{
                    width: "780px",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                }}
            >
                <Typography sx={{ width: "180px", fontWeight: "bold" }}>
                    撮影内容
                </Typography>
                <Typography sx={{ width: "600px" }}>{video.text}</Typography>
            </Stack>

            <Stack
                direction="row"
                spacing={2}
                sx={{
                    width: "780px",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                }}
            >
                <Typography sx={{ width: "180px", fontWeight: "bold" }}>
                    ステータス
                </Typography>
                <Typography sx={{ width: "600px" }}>
                    {video.statusName}
                </Typography>
            </Stack>

            <Stack
                direction="row"
                spacing={2}
                sx={{
                    width: "780px",
                    padding: "21px",
                    borderBottom: "1px solid #ccc",
                }}
            >
                <Typography sx={{ width: "180px", fontWeight: "bold" }}>
                    URL
                </Typography>
                <Typography sx={{ width: "600px" }}>
                    {video.youtube_url}
                </Typography>
            </Stack>

            <Stack direction="row" spacing={2} sx={{ margin: "20px" }}>
                <Button
                    component={Link}
                    href={`/videos/edit/${video.id}`}
                    variant="contained"
                    color="warning"
                >
                    変更
                </Button>
                <Button
                    onClick={handleDelete}
                    variant="contained"
                    color="error"
                >
                    削除
                </Button>
                <Button
                    onClick={handleBack}
                    variant="contained"
                    color="secondary"
                >
                    戻る
                </Button>
            </Stack>
        </Box>
    );
};

export default Video;
