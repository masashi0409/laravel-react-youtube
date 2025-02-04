import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

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
        <div>
            <p>Edit</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="title"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder="text"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        placeholder="status"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="youtube_url"
                        name="youtube_url"
                        value={formData.youtube_url}
                        onChange={handleChange}
                        placeholder="youtube_url"
                    />
                </div>
                <div>
                    <button type="submit">変更</button>
                </div>
            </form>
        </div>
    );
};

export default EditVideo;
