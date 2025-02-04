import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

type FormElement = React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

const CreateVideo = () => {
    const [formData, setFormData] = useState({
        title: "",
        text: "",
        status: "",
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
        <div>
            <p>Create</p>
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
                    <button type="submit">登録</button>
                </div>
            </form>
            <div>
                <button onClick={handleBack}>もどる</button>
            </div>
        </div>
    );
};

export default CreateVideo;
