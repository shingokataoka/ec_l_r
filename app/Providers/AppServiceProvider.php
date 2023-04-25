<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Facades\App; // 追加
use Illuminate\Support\Facades\URL; // 追加

use Inertia\Inertia;    // lang/jaデータをInertia(React)側に送るため、追加

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

        // reactで__('Dashboard')など言語メソッドを使えるようにする
        $this->reactFuncTransCreate();

        // 利用するクッキーをプレフィックスで分ける
        $currentPrefix = explode('/', request()->path() )[0];
        foreach(['admin', 'owner'] as $prefix) {
            if ( $currentPrefix === $prefix ) {
                config(['session.cookie' => config("session.cookie_{$prefix}")]);
            }
        }
    }

    // reactで__('Dashboard')など言語メソッドを使えるようにする
    // 翻訳データを Inertia へ渡して、
    // jsx側では{ __('Dashboard') } などで言語ファイルの、設定文字列を表示する
    private function reactFuncTransCreate() {
        $locale_data = [];
        // $locales = ['ja']; // 👈 できれば Enum での管理がベターです
        $json_paths = glob(lang_path(). '/*.json');

        foreach ($json_paths as $json_path) {
            $locale = pathinfo($json_path)['filename'];
            $json_content = file_get_contents($json_path);
            $locale_data[$locale] = json_decode($json_content, true);
        }
        $default_locale = config('app.locale');
        $current_locale = request('locale', $default_locale);

        Inertia::share('locale', [
            'currentLocale' => $current_locale,
            'localeData' => $locale_data,
        ]);
    }
}
