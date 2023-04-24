<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class OwnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++ ) {
            DB::table('owners')->insert([
                'name' => "owner{$i}",
                'email' => "owner{$i}@test.com",
                'created_at' => fake()->dateTime,
                'password' => Hash::make("owner{$i}{$i}{$i}{$i}"),
            ]);
        }
    }
}
