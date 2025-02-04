import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";

const Video = ({ video }) => {
    const handleDelete = () => {
        if (confirm("削除しますか？")) {
            Inertia.delete(`/videos/delete/${video.id}`);
        }
    };

    return (
        <div>
            <p>{video.title}</p>
            <p>{video.text}</p>
            <p>{video.status}</p>
            <p>{video.youtube_url}</p>
            <div>
                <button>
                    <Link href={`/videos/edit/${video.id}`}>編集</Link>
                </button>
            </div>
            <div>
                <button onClick={handleDelete}>削除</button>
            </div>
        </div>
    );
};

export default Video;
