<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class SampleController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Sample/Index', [
            'test' => 'test'
        ]);
    }
}
