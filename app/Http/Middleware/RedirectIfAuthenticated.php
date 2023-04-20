<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        // $guards = empty($guards) ? [null] : $guards;

        $guards = [
            ['admin', 'admin', RouteServiceProvider::ADMIN_HOME],
            ['owner', 'owner', RouteServiceProvider::OWNER_HOME],
        ];

        foreach ($guards as $row) {
            [$guard, $prefix, $home] = $row;
            if (Auth::guard($guard)->check() && $request->routeIs("{$prefix}.*")) {
                return redirect($home);
            } elseif( Auth::guard('web')->check() ) {
                return redirect(RouteServiceProvider::HOME);
            }
        }

        return $next($request);
    }
}
