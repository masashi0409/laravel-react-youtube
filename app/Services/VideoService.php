<?php

namespace App\Services;

use App\Repositories\VideoRepository;

class VideoService
{

  private $videoRepository;

  public function __construct(VideoRepository $videoRepository)
  {
    $this->videoRepository = $videoRepository;
  }


  public function getVideos()
  {
    return $this->videoRepository->getVideos();
  }

  /**
   * Create a new video entry
   */
  public function createVideo(array $data)
  {
    return $this->videoRepository->createVideo($data);
  }
}
