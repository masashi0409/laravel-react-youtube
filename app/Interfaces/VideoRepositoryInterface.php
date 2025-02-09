<?php

namespace App\Interfaces;

interface VideoRepositoryInterface
{
  public function getVideos();
  public function createVideo(array $data);
}
