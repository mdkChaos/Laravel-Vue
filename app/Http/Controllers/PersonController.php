<?php

namespace App\Http\Controllers;

use App\Http\Requests\Person\StoreRequest;
use App\Http\Requests\Person\UpdateRequest;
use App\Models\Person;

class PersonController extends Controller
{
    public function index(): mixed
    {
        $people = Person::all();

        return $people;
    }

    public function store(StoreRequest $request): Person
    {
        $data = $request->validated();
        $person = Person::create($data);

        return $person;
    }

    public function update(UpdateRequest $request, Person $person)
    {
        $data = $request->validated();
        $person->update($data);

        return $person;
    }

    public function delete(Person $person)
    {
        $person->delete();

        return response([]);
    }
}
