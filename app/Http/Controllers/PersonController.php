<?php

namespace App\Http\Controllers;

use App\Http\Requests\Person\StoreRequest;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::all();

        return $people;
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $person = Person::create($data);

        return $person;
    }
}
