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
}
