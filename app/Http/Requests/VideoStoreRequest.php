<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VideoStoreRequest extends FormRequest
{
  /**
   * 動画情報の登録リクエストバリデーション
   *
   * @return array<string, array<int, string>> バリデーションルールの配列
   * 
   * 各バリデーションルールの詳細:
   * - `title` (string, 必須, 最大255文字)
   *   - 動画のタイトル
   * - `text` (string, 必須)
   *   - 動画の説明文
   * - `status` (string, 必須)
   *   - ステータス
   * - `youtube_url` (string, 必須, URL形式)
   *   - YouTubeの動画URL
   */
  public function rules(): array
  {
    return [
      'title' => ['required', 'string', 'max:255'],
      'text' => ['required', 'string'],
      'status' => ['required'],
      'youtube_url' => ['required'],
    ];
  }
}
