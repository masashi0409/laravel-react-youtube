import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import {
    Button,
    Container,
    TextField,
    Typography,
    Box,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";
import { VIDEO_STATUS } from "../../Constants/Const";

type FormElement = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

const EditVideo = ({ video }) => {
    // フォームデータの状態管理
    const [formData, setFormData] = useState({
        title: "",
        text: "",
        status: "",
        youtube_url: "",
    });

    // ページ読み込み時に、videoデータをフォームデータにセット
    useEffect(() => {
        setFormData({
            title: video.title,
            text: video.text,
            status: video.status,
            youtube_url: video.youtube_url,
        });
    }, [video]);

    // 入力画面で変更された値をフォームデータにセット
    const handleChange = (e: FormElement) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 変更ボタンを押すと、Inertia.putでデータを送信
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.put(`/videos/update/${video.id}`, formData);
    };

    return (
        <Container maxWidth="sm" sx={{ textAlign: "left" }}>
            <Typography variant="h4" gutterBottom>
                編集
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="タイトル"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="撮影内容"
                    name="text"
                    multiline
                    rows={4}
                    value={formData.text}
                    onChange={handleChange}
                />
                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">ステータス</FormLabel>
                    <RadioGroup
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        row
                    >
                        {VIDEO_STATUS.map((status) => (
                            <FormControlLabel
                                key={status.value}
                                value={status.value.toString()}
                                control={<Radio />}
                                label={status.label}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
                <TextField
                    fullWidth
                    margin="normal"
                    label="URL"
                    name="youtube_url"
                    value={formData.youtube_url}
                    onChange={handleChange}
                />
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                        変更
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default EditVideo;
