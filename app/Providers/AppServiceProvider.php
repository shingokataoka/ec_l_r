<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Facades\App; // 追加
use Illuminate\Support\Facades\URL; // 追加

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //環境変数APP_ENVが'production'か'staging'ならhttps
        if (App::environment('production','staging')) {
            URL::forceScheme('https');
        }
                // 環境変数APP_ENVが'local'ならhttp
        if (App::environment('local')) {
            URL::forceScheme('http');
        }

    }
}
