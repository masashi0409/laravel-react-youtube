<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Video;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia;

class VideoIndexPageTest extends TestCase
{
  use RefreshDatabase;

  /**
   * ビデオ一覧ページが正しく表示されるかテストする。
   *
   * @return void
   */
  public function test_video_index_page_displays_correctly()
  {
    // テスト用のユーザーを作成
    $user = User::factory()->create();

    // テスト用のビデオデータを作成
    $videos = Video::factory()->count(3)->create(['user_id' => $user->id]);

    // ユーザーで認証
    // ビューにデータが正しく渡されているかを確認
    $response = $this->actingAs($user)->get(route('video.index'));

    // レスポンスのステータスコードが200であることを確認
    $response->assertStatus(200);

    // Inertiaレスポンスが'Video/Index'コンポーネントを使用していることを確認
    // コンポーネントの中のvideosとテストで作成したvideosの数や内容を比べている
    $response->assertInertia(function (AssertableInertia $page) use ($videos) {
      $page->component('Video/Index')
        ->has('videos', count($videos))
        ->where('videos', $videos->toArray());
    });
  }
}
