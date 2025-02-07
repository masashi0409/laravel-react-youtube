<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Video extends Model
{
    use HasFactory;

    /**
     * createの時に必要
     */
    protected $fillable = [
        'title',
        'text',
        'status',
        'youtube_url',
        'user_id'
    ];

    // ステータス定数の定義
    public const STATUS_PRIVATE = 0;
    public const STATUS_PUBLIC = 1;

    // ステータスのラベル（表示用）
    // ラベル表示用はreactで実装するためコメントアウト
    // public const STATUS_LABELS = [
    //     self::STATUS_PRIVATE => '非公開',
    //     self::STATUS_PUBLIC => '公開',
    // ];
    // ステータスのアクセサ
    // public function getStatusLabelAttribute()
    // {
    //     return self::STATUS_LABELS[$this->status] ?? '不明';
    // }
}
