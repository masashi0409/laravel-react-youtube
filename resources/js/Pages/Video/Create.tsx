import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import {
    Button,
    Container,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    MenuItem,
    Typography,
    Box,
} from "@mui/material";
import { VIDEO_STATUS } from "../../Constants/Const";

type FormElement = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

const CreateVideo = () => {
    const [formData, setFormData] = useState({
        title: "",
        text: "",
        status: 1,
        youtube_url: "",
    });

    const handleChange = (e: FormElement) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 登録ボタンを押すと、Inertia.postでデータを送信
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.post("/videos/store", formData);
    };

    // 戻るボタン
    const handleBack = () => {
        Inertia.get("/videos");
    };

    return (
        <Container maxWidth="sm" sx={{ textAlign: "left" }}>
            <Typography variant="h4" gutterBottom>
                新規作成
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
                <Typography variant="subtitle1" mt={2}>
                    ステータス
                </Typography>
                <RadioGroup
                    row
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    {VIDEO_STATUS.map((status, i) => (
                        <FormControlLabel
                            key={i}
                            value={status.value}
                            control={<Radio />}
                            label={status.label}
                        />
                    ))}
                </RadioGroup>
                <TextField
                    fullWidth
                    margin="normal"
                    label="URL"
                    name="youtube_url"
                    value={formData.youtube_url}
                    onChange={handleChange}
                />
                <Box mt={2}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mr: 2 }}
                    >
                        保存する
                    </Button>
                    <Button onClick={handleBack} variant="outlined">
                        戻る
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default CreateVideo;
