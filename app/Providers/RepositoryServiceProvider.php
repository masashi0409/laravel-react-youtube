<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\VideoRepositoryInterface;
use App\Repositories\VideoRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(VideoRepositoryInterface::class, VideoRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
