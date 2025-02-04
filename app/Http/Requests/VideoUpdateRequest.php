<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VideoUpdateRequest extends FormRequest
{
  /**
   * 動画情報の更新リクエストバリデーションルールを定義する
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
