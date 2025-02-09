<?php

namespace App\Repositories;

use App\Interfaces\VideoRepositoryInterface;
use App\Models\Video;

class VideoRepository implements VideoRepositoryInterface
{
  /**
   * Get all videos
   */
  public function getVideos()
  {
    return Video::all();
  }

  /**
   * Create a new video entry
   */
  public function createVideo(array $data)
  {
    return Video::create($data);
  }
}
