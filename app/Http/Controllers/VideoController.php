<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;
use Inertia\Inertia;
use App\Http\Requests\VideoUpdateRequest;

class VideoController extends Controller
{
    /**
     * ビデオの一覧を表示する。
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $videos = Video::all();

        return Inertia::render('Video/Index', [
            'videos' => $videos
        ]);
    }

    /**
     * 新しいビデオを作成するフォームを表示する。
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Video/Create', []);
    }

    /**
     * 新しいビデオを保存する。
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = auth()->id();
        Video::create($data);

        return redirect()->route('video.index');
    }

    /**
     * 指定されたビデオを表示する。
     *
     * @param  string  $id
     * @return \Inertia\Response
     */
    public function show(string $id)
    {
        $video = Video::find($id);
        return Inertia::render('Video/Show', [
            'video' => $video
        ]);
    }

    /**
     * 指定されたビデオの編集フォームを表示する。
     *
     * @param  string  $id
     * @return void
     */
    public function edit(string $id)
    {
        $video = Video::find($id);
        return Inertia::render('Video/Edit', [
            'video' => $video
        ]);
    }

    /**
     * 指定されたビデオを更新する。
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(VideoUpdateRequest $request, string $id)
    {

        $video = Video::findOrFail($id); // 存在しない場合は404エラーを返す
        $video->update($request->validated());

        return redirect()->route('video.index');
    }

    /**
     * 指定されたビデオを削除する。
     *
     * @param  string  $id
     * @return void
     */
    public function destroy(string $id)
    {
        $video = Video::findOrFail($id); // 存在しない場合は404エラーを返す
        $video->delete();

        return redirect()->route('video.index');
    }
}
